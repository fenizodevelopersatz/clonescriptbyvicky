<?php
// Local dev contact-form receiver for CloneScript. Started via:
//   php -S localhost:8800 -t MAIL
// (matches VITE_CONTACT_API_URL in .env). Accepts a JSON POST body -- see
// src/lib/contactApi.js for the exact shape every form on the site sends --
// and emails it to the address below.
//
// mail() on a local/XAMPP setup only actually delivers if the machine has a
// real SMTP relay configured in php.ini, which it usually doesn't out of
// the box. Every submission is still appended to submissions.log
// regardless, so a lead is never lost even when mail() can't reach a real
// mailbox -- swap $toAddress for a real inbox before relying on this
// beyond local dev.

// header('Content-Type: application/json');

// // This API is called from a different origin (the Vite dev server), so the
// // browser needs an explicit CORS allow before it'll accept the response.
// $allowedOrigin = $_SERVER['HTTP_ORIGIN'] ?? '*';
// header("Access-Control-Allow-Origin: $allowedOrigin");
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(204);
//     exit;
// }

// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//     http_response_code(405);
//     echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
//     exit;
// }

// $data = json_decode(file_get_contents('php://input'), true);

// if (!is_array($data)) {
//     http_response_code(400);
//     echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
//     exit;
// }

// $toAddress = 'hello@example.com';
// $subject = trim((string)($data['subject'] ?? 'New website enquiry'));

// $lines = [];
// foreach ($data as $key => $value) {
//     if (is_array($value)) {
//         $value = json_encode($value);
//     }
//     $lines[] = ucfirst($key) . ': ' . $value;
// }
// $body = implode("\n", $lines);

// $replyTo = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $data['email'] : $toAddress;
// $headers = "From: {$toAddress}\r\nReply-To: {$replyTo}\r\nContent-Type: text/plain; charset=UTF-8";

// // Persist first -- mail() silently failing (the common local/dev outcome
// // with no SMTP relay configured) must never lose a submitted lead.
// file_put_contents(
//     __DIR__ . '/submissions.log',
//     sprintf("[%s] %s\n%s\n\n", date('c'), $subject, $body),
//     FILE_APPEND | LOCK_EX
// );

// $sent = @mail($toAddress, $subject, $body, $headers);

// echo json_encode([
//     'success' => true,
//     'mailed' => $sent,
//     'message' => $sent
//         ? 'Sent.'
//         : 'Received and logged; mail() could not reach an SMTP relay from this environment.',
// ]);



//////////////////////////////////////////////////////////////////////////////


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Minimal .env loader (no composer dependency) -- mirrors the
// react-app-v2/.env convention. KEY=VALUE lines only, '#' comments ignored.
function loadEnvFile(string $path): void
{
    if (!is_file($path)) {
        return;
    }
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        if (getenv($key) === false) {
            putenv($key . '=' . trim($value));
        }
    }
}

loadEnvFile(__DIR__ . '/.env');

$smtpHost     = getenv('SMTP_HOST') ?: '';
$smtpUsername = getenv('SMTP_USERNAME') ?: '';
$smtpPassword = getenv('SMTP_PASSWORD') ?: '';
$smtpPort     = (int) (getenv('SMTP_PORT') ?: 465);

$recipientEmail = getenv('RECIPIENT_EMAIL') ?: '';
$recipientName  = getenv('RECIPIENT_NAME') ?: 'CloneScript Team';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// Chrome's Private Network Access check requires this on the preflight response
// whenever the page origin (e.g. a devtunnels.ms/ngrok URL) is treated as "public"
// but the request targets localhost/a private IP -- without it the browser blocks
// the request as a CORS failure even though the Allow-Origin header is correct.
header('Access-Control-Allow-Private-Network: true');
header('Content-Type: application/json; charset=utf-8');

// Config check happens after the CORS headers above so the error response
// itself is still readable by the browser instead of being blocked as a
// CORS failure.
if ($smtpHost === '' || $smtpUsername === '' || $smtpPassword === '' || $recipientEmail === '') {
    http_response_code(500);
    error_log('sendMail.php: missing SMTP config -- copy MAIL/.env.example to MAIL/.env and fill it in.');
    echo json_encode(['success' => false, 'message' => 'Mail is not configured on the server.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
if (!is_array($payload)) {
    $payload = $_POST;
}

$name    = trim($payload['fullname'] ?? $payload['name'] ?? '');
$email   = trim($payload['email'] ?? '');
$phone   = trim($payload['phone'] ?? '');
$product = trim($payload['product'] ?? '');
$subject = trim($payload['subject'] ?? '') ?: 'New Demo Request';
$currency = trim($payload['currency'] ?? 'USD');
$cart = is_array($payload['cart'] ?? null) ? $payload['cart'] : [];
$cartTotalUsd = $payload['cartTotalUsd'] ?? null;

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'A valid name and email are required.']);
    exit;
}

function e($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function formatUsd($value)
{
    if (!is_numeric($value)) {
        return e($value);
    }
    return '$' . number_format((float) $value, 2);
}

$cartRowsHtml = '';
foreach ($cart as $item) {
    $itemName  = e(($item['productName'] ?? 'Product') . ' — ' . ($item['planName'] ?? ''));
    $itemPrice = formatUsd($item['price'] ?? '');
    $cartRowsHtml .= <<<HTML
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eef0f6;color:#1f2430;font-size:14px;">{$itemName}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eef0f6;color:#1f2430;font-size:14px;text-align:right;white-space:nowrap;">{$itemPrice}</td>
        </tr>
HTML;
}

$cartSectionHtml = '';
if ($cartRowsHtml !== '') {
    $totalHtml = formatUsd($cartTotalUsd);
    $cartSectionHtml = <<<HTML
        <tr>
          <td colspan="2" style="padding:24px 0 8px;">
            <p style="margin:0 0 10px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#767676;">Their Investment</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef0f6;border-radius:10px;overflow:hidden;">
              {$cartRowsHtml}
              <tr>
                <td style="padding:12px 14px;font-weight:700;color:#1f2430;font-size:14px;">Total</td>
                <td style="padding:12px 14px;font-weight:700;color:#1f2430;font-size:14px;text-align:right;">{$totalHtml}</td>
              </tr>
            </table>
          </td>
        </tr>
HTML;
}

$safeName    = e($name);
$safeEmail   = e($email);
$safePhone   = e($phone !== '' ? $phone : 'Not provided');
$safeProduct = e($product !== '' ? $product : 'Not specified');
$safeCurrency = e($currency);
$submittedAt = e(date('d M Y, h:i A'));

$htmlBody = <<<HTML
<div style="background:#f4f5fb;padding:32px 16px;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 45px rgba(16,27,72,0.08);">
    <tr>
      <td style="background:linear-gradient(135deg,#4b2ec9,#0030b8);padding:28px 32px;">
        <p style="margin:0;color:#ffffff;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.85;">CloneScript</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;">New Demo Request</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;width:120px;">Name</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;font-weight:600;">{$safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Email</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;"><a href="mailto:{$safeEmail}" style="color:#0030b8;text-decoration:none;">{$safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Phone</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safePhone}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Product</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safeProduct}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Currency preference</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safeCurrency}</td>
          </tr>
          {$cartSectionHtml}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px 28px;">
        <p style="margin:0;color:#a3a7b7;font-size:12px;">Submitted {$submittedAt} via the Schedule Free Demo page.</p>
      </td>
    </tr>
  </table>
</div>
HTML;

$altBody = "New Demo Request\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Phone: {$phone}\n"
    . "Product: {$product}\n"
    . "Currency preference: {$currency}\n";
if ($cartRowsHtml !== '') {
    $altBody .= "\nInvestment:\n";
    foreach ($cart as $item) {
        $altBody .= '- ' . ($item['productName'] ?? 'Product') . ' — ' . ($item['planName'] ?? '') . ': ' . formatUsd($item['price'] ?? '') . "\n";
    }
    $altBody .= 'Total: ' . formatUsd($cartTotalUsd) . "\n";
}

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPort;

    $mail->setFrom($smtpUsername, 'CloneScript');
    $mail->addAddress($recipientEmail, $recipientName);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;
    $mail->AltBody = $altBody;

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message has been sent successfully.']);
} catch (Exception $e) {
    http_response_code(502);
    error_log('sendMail.php PHPMailer error: ' . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'message' => 'Message could not be sent.']);
}
