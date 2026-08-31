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

header('Content-Type: application/json');

// This API is called from a different origin (the Vite dev server), so the
// browser needs an explicit CORS allow before it'll accept the response.
$allowedOrigin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header("Access-Control-Allow-Origin: $allowedOrigin");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
    exit;
}

$toAddress = 'hello@example.com';
$subject = trim((string)($data['subject'] ?? 'New website enquiry'));

$lines = [];
foreach ($data as $key => $value) {
    if (is_array($value)) {
        $value = json_encode($value);
    }
    $lines[] = ucfirst($key) . ': ' . $value;
}
$body = implode("\n", $lines);

$replyTo = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $data['email'] : $toAddress;
$headers = "From: {$toAddress}\r\nReply-To: {$replyTo}\r\nContent-Type: text/plain; charset=UTF-8";

// Persist first -- mail() silently failing (the common local/dev outcome
// with no SMTP relay configured) must never lose a submitted lead.
file_put_contents(
    __DIR__ . '/submissions.log',
    sprintf("[%s] %s\n%s\n\n", date('c'), $subject, $body),
    FILE_APPEND | LOCK_EX
);

$sent = @mail($toAddress, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'mailed' => $sent,
    'message' => $sent
        ? 'Sent.'
        : 'Received and logged; mail() could not reach an SMTP relay from this environment.',
]);
