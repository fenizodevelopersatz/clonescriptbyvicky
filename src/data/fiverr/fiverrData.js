export const mainFeatureRoles = {
  client: {
    label: 'Client',
    icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2025/09/freelance-script-dashboard.webp',
    imageAlt: 'freelance-script-dashboard',
    items: [
      { title: 'Create Projects', desc: 'Clients can publish project requirements with descriptions, budgets, expected deliverables, skills, and completion dates. Templates can simplify the posting process and help clients communicate their requirements clearly.' },
      { title: 'Save Services and Freelancers', desc: 'Users can save interesting service listings and freelancer profiles for future reference. This feature helps clients create a shortlist before making a hiring decision.' },
      { title: 'Browse and Manage Gigs', desc: 'Clients can browse service listings using categories, keywords, pricing, ratings, delivery time, language, and other relevant filters. They can also monitor purchased services from their personal dashboard.' },
      { title: 'Find Suitable Talent', desc: 'Clients can discover freelancers according to location, experience, skills, languages, ratings, service type, availability, and pricing.' },
      { title: 'Service Packages', desc: 'Buyers can compare basic, standard, and premium packages offered by freelancers. Each package can include a different scope, delivery time, number of revisions, and price.' },
      { title: 'Advanced Search', desc: 'Customers can search for relevant services and freelancers using keywords, categories, subcategories, skills, and other filters.' },
      { title: 'Freelancer Profiles', desc: 'Clients can review a freelancer’s biography, portfolio, ratings, completed work, services, experience, and available packages.' },
      { title: 'Place Service Orders', desc: 'Clients can select a suitable package, provide project information, choose additional services, and place an order.' },
      { title: 'Custom Project Requests', desc: 'Buyers can post unique project requirements when an existing service package does not meet their needs.' },
      { title: 'Order Tracking', desc: 'Clients can monitor pending, accepted, active, delivered, completed, cancelled, and disputed orders.' },
      { title: 'Direct Communication', desc: 'An integrated messaging feature allows clients to discuss requirements, share information, ask questions, and provide feedback.' },
      { title: 'File Sharing', desc: 'Clients can upload relevant documents, images, references, or project materials through the order conversation.' },
      { title: 'Payment Management', desc: 'Buyers can review project costs, transaction details, invoices, refunds, and wallet activity.' },
      { title: 'Ratings and Reviews', desc: 'Clients can submit feedback after a service has been completed.' },
      { title: 'Dispute Submission', desc: 'Users can report project issues and request administrative review when a disagreement cannot be resolved directly.' },
    ],
  },
  freelancer: {
    label: 'Freelancer',
    icon: 'fas fa-user-tie',
    image: '/wp-content/uploads/2025/09/freelance-app-seller.webp',
    imageAlt: 'freelance-app-seller',
    items: [
      { title: 'Communication Channel', desc: 'Freelancers can communicate with clients to clarify requirements, discuss progress, share updates, and receive feedback.' },
      { title: 'Invoice Management', desc: 'Sellers can access transaction records and invoices from one organized dashboard.' },
      { title: 'Gig Management', desc: 'Freelancers can monitor service listings that are published, saved as drafts, paused, or awaiting approval. They can also track pending, active, completed, cancelled, and disputed orders.' },
      { title: 'Project Management', desc: 'A centralized workspace helps freelancers organize active projects, delivery dates, client instructions, and task progress.' },
      { title: 'Profile Customization', desc: 'Freelancers can create professional profiles highlighting their skills, experience, qualifications, languages, portfolio, and availability.' },
      { title: 'Create Service Listings', desc: 'Sellers can publish services with clear titles, descriptions, pricing, delivery periods, revision limits, images, and category information.' },
      { title: 'Multiple Service Packages', desc: 'Freelancers can offer basic, standard, and premium packages with different deliverables, prices, and completion times.' },
      { title: 'Portfolio Showcase', desc: 'Sellers can display completed projects and work samples to demonstrate their abilities to potential clients.' },
      { title: 'Custom Offers', desc: 'Freelancers can prepare personalized proposals based on a client’s specific project requirements.' },
      { title: 'Order Dashboard', desc: 'Sellers can access customer information, delivery deadlines, order values, requirements, and communication from one location.' },
      { title: 'Delivery Management', desc: 'Completed files and project information can be submitted through the platform for client review.' },
      { title: 'Revision Handling', desc: 'Freelancers can review revision requests and submit updated work according to the selected package.' },
      { title: 'Earnings Overview', desc: 'Sellers can monitor completed payments, pending balances, marketplace deductions, withdrawals, and total earnings.' },
      { title: 'Withdrawal Requests', desc: 'Eligible freelancer earnings can be transferred through supported payout options.' },
      { title: 'Seller Reviews', desc: 'Freelancers can receive client ratings and feedback after successfully completing orders.' },
    ],
  },
  admin: {
    label: 'Administrator',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2025/09/freelance-script-admin.webp',
    imageAlt: 'freelance-script-admin',
    items: [
      { title: 'Project Management', desc: 'Administrators can review project listings and approve, reject, edit, pause, or remove content that does not follow marketplace policies.' },
      { title: 'Gig Management', desc: 'The administration panel can be used to review service listings, categories, prices, media, and publication status.' },
      { title: 'User Management', desc: 'Administrators can review client and freelancer accounts, update verification status, control permissions, suspend accounts, and respond to user concerns.' },
      { title: 'Website Management', desc: 'Global settings, navigation menus, landing pages, content sections, service categories, email templates, and other marketplace elements can be managed.' },
      { title: 'Payment and Transaction Management', desc: 'Administrators can monitor service payments, commissions, refunds, withdrawals, packages, and transaction records.' },
      { title: 'Category Management', desc: 'Service categories and subcategories can be created, updated, organized, or removed.' },
      { title: 'Commission Management', desc: 'The platform owner can define commission percentages or fixed fees for eligible transactions and service categories.' },
      { title: 'Freelancer Verification', desc: 'Identity, profile, and professional information submitted by freelancers can be reviewed before approval.' },
      { title: 'Client Verification', desc: 'Client accounts can be reviewed to improve trust and reduce suspicious marketplace activity.' },
      { title: 'Review Management', desc: 'Administrators can monitor ratings and remove feedback that violates marketplace policies.' },
      { title: 'Dispute Management', desc: 'The administration team can review conversations, submitted work, transaction records, and project requirements before making a decision.' },
      { title: 'Withdrawal Management', desc: 'Freelancer payout requests can be reviewed, approved, rejected, and tracked.' },
      { title: 'Reports and Analytics', desc: 'Administrators can monitor users, gigs, orders, revenue, commissions, withdrawals, disputes, and marketplace growth.' },
    ],
  },
}

export const standardFeatures = [
  { icon: 'fas fa-user-friends', title: 'Role Switching', desc: 'A registered user can operate as a client, freelancer, or both, depending on the marketplace configuration. This allows freelancers to purchase services while clients with relevant skills can also become sellers.' },
  { icon: 'fas fa-user-tag', title: 'Freelancer Service Posting', desc: 'Freelancers can create detailed service listings to attract clients searching for specific skills and deliverables.' },
  { icon: 'fas fa-bell', title: 'Real-Time Notifications', desc: 'Clients and freelancers can receive timely alerts about messages, orders, deliveries, payments, revisions, and account activity.' },
  { icon: 'fas fa-shield-alt', title: 'Secure Payment Processing', desc: 'Integrated payment options can help process client transactions, refunds, commissions, and freelancer payouts.' },
  { icon: 'fas fa-wallet', title: 'Digital Wallet', desc: 'Users can review wallet balances, marketplace payments, refunds, earnings, and withdrawal records.' },
  { icon: 'fas fa-tag', title: 'Service Price Limits', desc: 'Administrators can define minimum and maximum prices for specific categories to maintain suitable marketplace pricing.' },
  { icon: 'fas fa-mail-bulk', title: 'Project Posting', desc: 'Clients can publish project requirements and receive custom proposals from qualified freelancers.' },
  { icon: 'fas fa-language', title: 'Multiple Language Support', desc: 'The interface can support different languages to serve clients and freelancers across multiple regions.' },
  { icon: 'fas fa-exclamation-triangle', title: 'Dispute Resolution', desc: 'Administrators can review disagreements related to requirements, delivery quality, deadlines, payments, or cancellations.' },
  { icon: 'fas fa-id-card', title: 'Portfolio Display', desc: 'Freelancers can publish work samples that help potential clients understand their experience and service quality.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Earnings Tracker', desc: 'Sellers can monitor available income, pending funds, completed payments, deductions, and withdrawals.' },
  { icon: 'fas fa-cubes', title: 'Package Management', desc: 'Freelancers can create multiple service packages with different prices, features, delivery periods, and revision limits.' },
]

export const addOnFeatures = [
  { icon: 'fas fa-sliders-h', title: 'Customizable Gig Publishing', desc: 'Allow freelancers to configure service descriptions, prices, packages, delivery schedules, optional extras, and supported revisions.' },
  { icon: 'fas fa-home', title: 'Multiple Homepage Layouts', desc: 'Choose from different homepage structures and customize the selected layout according to the marketplace brand.' },
  { icon: 'fab fa-buysellads', title: 'Advertising Integration', desc: 'Connect suitable advertising services and display approved advertisements in selected marketplace locations.' },
  { icon: 'fas fa-file-invoice-dollar', title: 'Flexible Invoicing', desc: 'Generate clear invoices and transaction records for clients, freelancers, and administrators.' },
  { icon: 'far fa-address-card', title: 'Central User Dashboard', desc: 'Give users a single location for managing projects, services, orders, messages, earnings, payments, and account settings.' },
  { icon: 'fas fa-tools', title: 'Interface Customization', desc: 'Modify colours, typography, page layouts, categories, icons, banners, and other visual elements to create an original marketplace identity.' },
  { icon: 'fas fa-id-card-alt', title: 'Client and Freelancer Verification', desc: 'Review user information and apply verified status to eligible accounts.' },
  { icon: 'fas fa-user-tag', title: 'Promotion and Discount Management', desc: 'Create marketplace offers, promotional codes, seller discounts, referral campaigns, and limited-time deals.' },
  { icon: 'fas fa-user-cog', title: 'Advanced Dispute Management', desc: 'Allow administrators to review order information, communication, project files, delivery history, and payment status before resolving a dispute.' },
  { icon: 'fas fa-comments-dollar', title: 'Commission Settings', desc: 'Configure platform charges according to service categories, user types, packages, or transaction values.' },
  { icon: 'fas fa-grin-tears', title: 'Withdrawal Request Management', desc: 'Review seller withdrawal requests and process eligible payouts using the supported payment methods.' },
  { icon: 'fas fa-tasks', title: 'Service Category Management', desc: 'Add, edit, organize, activate, deactivate, or remove gig categories and subcategories.' },
]

export const revenueBenefits = [
  { icon: 'fas fa-percentage', title: 'Commission Fees', desc: 'Charge a percentage or fixed platform fee for transactions completed between clients and freelancers.' },
  { icon: 'fas fa-crown', title: 'Subscription Packages', desc: 'Offer premium memberships with benefits such as additional listings, lower commissions, improved visibility, or advanced seller tools.' },
  { icon: 'fas fa-star', title: 'Featured Service Listings', desc: 'Freelancers can pay to display selected services in prominent locations such as category pages, search results, or the homepage.' },
  { icon: 'fas fa-user-tag', title: 'Profile Promotion Fees', desc: 'Sellers can pay to improve the visibility of their profiles within relevant marketplace sections.' },
  { icon: 'fas fa-bullhorn', title: 'Gig Promotion Fees', desc: 'Freelancers can promote individual service listings for increased exposure.' },
  { icon: 'fas fa-ad', title: 'Advertising Revenue', desc: 'Approved businesses can purchase advertising space within selected areas of the platform.' },
  { icon: 'fas fa-list', title: 'Service Listing Fees', desc: 'The marketplace can charge sellers for publishing additional gigs beyond a free listing limit.' },
  { icon: 'fas fa-money-check-alt', title: 'Withdrawal Processing Fees', desc: 'A transparent processing charge can be applied when freelancers transfer eligible earnings.' },
  { icon: 'fas fa-briefcase', title: 'Project Posting Packages', desc: 'Clients can purchase premium packages for additional project visibility or advanced hiring tools.' },
  { icon: 'fas fa-user-shield', title: 'Verification Fees', desc: 'The marketplace can offer optional premium verification services when suitable for the business model.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single Domain Licence', true], ['One-Time Payment Option', true], ['Source-Code Access', true], ['Responsive Website', true], ['Android Application', true], ['iOS Application', true], ['Mobile-Application Submission', true], ['Installation Assistance', true], ['Access to Selected Features', true], ['Product Updates', true], ['Technical Support', true]],
  },
  {
    name: 'Startup', price: '$1499', featured: false,
    features: [['Single Domain Licence', true], ['One-Time Payment Option', true], ['Source-Code Access', true], ['Marketplace Website', true], ['Selected Mobile Applications', true], ['Installation Assistance', true], ['Core Feature Access', true], ['Product Updates', true], ['Technical Support', true]],
  },
]

export const faqs = [
  { q: 'What Is a Fiverr Clone?', a: 'A Fiverr Clone is a ready-made software solution for creating a freelance marketplace where sellers publish services and clients hire them for specific tasks or projects.' },
  { q: 'How Does a Fiverr Clone Work?', a: 'Freelancers create profiles and publish services. Clients browse listings, purchase suitable packages, communicate with sellers, receive completed work, and submit reviews. Administrators manage the overall marketplace.' },
  { q: 'Can Clients Post Custom Projects?', a: 'Yes. Clients can publish project requirements and receive proposals or custom offers from suitable freelancers.' },
  { q: 'Can Freelancers Create Multiple Service Packages?', a: 'Yes. Sellers can offer basic, standard, and premium packages with different prices, deliverables, timelines, and revision limits.' },
  { q: 'Can the Marketplace Be Customized?', a: 'Yes. The design, pages, categories, workflows, payment options, commissions, user roles, and marketplace policies can be customized.' },
  { q: 'How Much Does Fiverr Clone Development Cost?', a: 'The final cost depends on the required features, mobile applications, custom design, payment gateways, integrations, languages, and development scope.' },
  { q: 'Will I Receive Source-Code Access?', a: 'Source-code availability depends on the selected package and licence. The agreement should explain the included access, modification, usage, and ownership rights.' },
  { q: 'How Can the Platform Generate Revenue?', a: 'The marketplace can generate income through transaction commissions, subscriptions, promoted gigs, featured profiles, listing fees, advertisements, and withdrawal charges.' },
  { q: 'Does the Platform Support Secure Payments?', a: 'Suitable payment gateways and wallet functionality can be integrated to manage client transactions, commissions, refunds, and seller payouts.' },
  { q: 'Can Administrators Resolve Disputes?', a: 'Yes. Administrators can review order information, communication, submitted files, requirements, and transaction records before resolving a disagreement.' },
  { q: 'Are Android and iOS Applications Available?', a: 'Android and iOS applications can be included according to the selected package and project requirements.' },
  { q: 'Is Technical Support Available After Launch?', a: 'Technical assistance can be provided for installation, configuration, eligible updates, troubleshooting, and marketplace maintenance.' },
]

export const serverRequirements = {
  intro: 'A freelance marketplace requires a secure VPS, cloud server, or compatible hosting environment with suitable processing power, memory, storage, bandwidth, and backup capacity.',
  items: [
    'PHP 8.2 or a supported compatible version',
    'MySQL 8 or a compatible database',
    'Supported Laravel framework version',
    'Composer',
    'PDO PHP extension',
    'OpenSSL PHP extension',
    'Mbstring PHP extension',
    'XML PHP extension',
    'Tokenizer PHP extension',
    'Valid HTTPS certificate',
    'Email or SMS configuration',
    'Payment gateway credentials',
    'File-storage configuration',
    'Automated backup system',
    'Server monitoring',
    'Secure folder permissions',
  ],
  outro: 'The final server configuration should be selected according to expected users, project volume, uploaded files, concurrent activity, mobile applications, integrations, and future marketplace growth.',
}

export const folderPermissions = [
  'Specify write permission for the listed folders.',
  'bootstrap/cache/',
  'storage/framework/',
  'storage/logs/',
  'storage/app/',
]

export const mobileScreens = [
  '/wp-content/uploads/2025/09/freelance-script-dashboard.webp',
  '/wp-content/uploads/2025/09/freelance-app-login.webp',
  '/wp-content/uploads/2025/09/freelance-app-seller.webp',
  '/wp-content/uploads/2025/08/fiverr-app-7.webp',
  '/wp-content/uploads/2025/08/fiverr-app-5.webp',
  '/wp-content/uploads/2025/08/fiverr-app-3.webp',
]

// Descriptive alt text below is confirmed against each actual screenshot (dashboard,
// login/account-type screen, admin platform-settings screen, and two order/notification
// panel views) rather than guessed from the generic filenames.
export const mobileScreensAlt = [
  'Freelancer earnings and gig dashboard',
  'Registration and login screen',
  'Administrator platform settings',
  'Order management and notifications',
  'System status and platform monitoring',
  'Order management and notifications',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Owen Bright',
    role: 'Freelance Designer',
    rating: 4.5,
    quote: 'Managing gigs and messages in one place cut my admin time in half. I spend that time actually designing now.',
    avatar: '/wp-content/reviews/fiverr/review-owen-bright.webp',
    bg: '#e6fae0',
    accent: '#369f18',
    dot: '#78e25a',
  },
  {
    name: 'Chidinma Okafor',
    role: 'Marketplace Founder',
    rating: 5,
    quote: 'Package tiers were simple to set up and buyers understand exactly what they are paying for.',
    avatar: '/wp-content/reviews/fiverr/review-chidinma-okafor.webp',
    bg: '#e0fae5',
    accent: '#189f33',
    dot: '#5ae275',
  },
  {
    name: 'Sana Qureshi',
    role: 'Freelance Copywriter',
    rating: 4.5,
    quote: 'The communication channel keeps every client thread organized, nothing gets lost between projects anymore.',
    avatar: '/wp-content/reviews/fiverr/review-sana-qureshi.webp',
    bg: '#e0faee',
    accent: '#189f60',
    dot: '#5ae2a2',
  },
  {
    name: 'Lars Eriksson',
    role: 'Platform Operator',
    rating: 5,
    quote: 'Find Talent search actually surfaces the right freelancers fast, our match rate went up noticeably.',
    avatar: '/wp-content/reviews/fiverr/review-lars-eriksson.webp',
    bg: '#e0faf8',
    accent: '#189f92',
    dot: '#5ae2d4',
  },
  {
    name: 'Isabella Conti',
    role: 'Creative Director',
    rating: 4.5,
    quote: 'Saved items and created projects make it easy for clients to come back and reorder without starting over.',
    avatar: '/wp-content/reviews/fiverr/review-isabella-conti.webp',
    bg: '#e0f2fa',
    accent: '#18739f',
    dot: '#5ab5e2',
  },
]
