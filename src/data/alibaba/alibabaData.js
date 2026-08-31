export const aiFeatures = [
  { image: '/wp-content/uploads/2026/06/ai-search-history.webp', title: 'Previous AI Search Access', desc: 'Let buyers revisit earlier AI-assisted searches and continue their product research without repeating the same queries.' },
  { image: '/wp-content/uploads/2026/06/ai-chatbot.webp', title: 'AI Customer Assistance', desc: 'Answer common marketplace questions instantly and guide users toward suitable products, suppliers, or platform tools.' },
  { image: '/wp-content/uploads/2026/06/ai-query-summary.webp', title: 'Intelligent Enquiry Summaries', desc: 'Convert long sourcing requests and search results into short summaries that are easier to understand.' },
  { image: '/wp-content/uploads/2026/06/ai-rfq-assistant.webp', title: 'Assisted RFQ Creation', desc: 'Guide buyers in preparing structured quotation requests containing product specifications, quantity, budget, and delivery expectations.' },
  { image: '/wp-content/uploads/2026/06/ai-market-insights.webp', title: 'Market Intelligence', desc: 'Provide useful insights into product demand, sourcing behaviour, supplier activity, and pricing patterns.' },
  { image: '/wp-content/uploads/2026/06/ai-usage-tracking.webp', title: 'AI Activity Monitoring', desc: 'Help users and administrators track AI usage, available allowances, and feature activity.' },
]

export const roleTabs = {
  buyer: {
    label: 'Buyer',
    icon: 'fas fa-user',
    tabs: [
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Filtered Product Discovery', image: '/wp-content/uploads/2026/05/advanced-search.webp', desc: 'Search for products according to category, supplier, price, minimum order quantity, location, specifications, and other relevant criteria.' },
      { icon: 'fa fa-solid fa-boxes-stacked', title: 'Structured Product Catalogue', image: '/wp-content/uploads/2026/05/product-catalog.webp', desc: 'Explore products through organized categories containing images, descriptions, attributes, wholesale pricing, and supplier information.' },
      { icon: 'fa fa-solid fa-comments', title: 'Direct Supplier Messaging', image: '/wp-content/uploads/2026/05/live-chat.webp', desc: 'Communicate with suppliers about product availability, pricing, quantity, customization, samples, and delivery conditions.' },
      { icon: 'fa fa-solid fa-truck-fast', title: 'Purchase Status Visibility', image: '/wp-content/uploads/2026/05/order-tracking.webp', desc: 'Monitor orders as they progress through confirmation, preparation, dispatch, shipment, and delivery.' },
      { icon: 'fa fa-solid fa-heart', title: 'Saved Product Collection', image: '/wp-content/uploads/2026/05/Wishlist-1.webp', desc: 'Bookmark suitable products and return to them later for comparison or future procurement.' },
      { icon: 'fa fa-solid fa-file-invoice', title: 'Invoice Access', image: '/wp-content/uploads/2026/06/order-invoice.webp', desc: 'View and download invoices for pending, active, and completed business purchases.' },
      { icon: 'fa fa-solid fa-envelope-open-text', title: 'Central Enquiry Management', image: '/wp-content/uploads/2026/05/inquiry-center.webp', desc: 'Submit product questions and manage supplier conversations from one sourcing dashboard.' },
    ],
  },
  supplier: {
    label: 'Supplier',
    icon: 'fas fa-user-tie',
    tabs: [
      { icon: 'fa fa-solid fa-chart-line', title: 'Supplier Business Dashboard', image: '/wp-content/uploads/2026/06/supplier-dashboard.webp', desc: 'Review product activity, enquiries, quotations, orders, earnings, and account performance from one workspace.' },
      { icon: 'fa fa-solid fa-building-user', title: 'Company Profile Builder', image: '/wp-content/uploads/2026/06/profile-management.webp', desc: 'Present business information, contact details, certifications, capabilities, and credentials to establish buyer confidence.' },
      { icon: 'fa fa-solid fa-box-open', title: 'Wholesale Product Management', image: '/wp-content/uploads/2026/06/product-listing.webp', desc: 'Publish and update products with photographs, specifications, pricing, available quantity, and minimum order requirements.' },
      { icon: 'fa fa-solid fa-file-signature', title: 'Buyer RFQ Opportunities', image: '/wp-content/uploads/2026/06/RFQ-Marketplace.webp', desc: 'Access relevant requests for quotations and submit commercial offers to potential business customers.' },
      { icon: 'fa fa-solid fa-truck-fast', title: 'Order Progress Management', image: '/wp-content/uploads/2026/06/order-tracking.webp', desc: 'Update each purchase stage and keep buyers informed from order confirmation through delivery.' },
      { icon: 'fa fa-regular fa-comments', title: 'Buyer-Supplier Communication', image: '/wp-content/uploads/2026/06/real-time-chat.webp', desc: 'Clarify requirements, discuss prices, negotiate quantities, and communicate delivery expectations through real-time messaging.' },
      { icon: 'fa fa-solid fa-wallet', title: 'Supplier Revenue Wallet', image: '/wp-content/uploads/2026/06/earning-wallet.webp', desc: 'Monitor transaction income, available balances, platform deductions, and payout requests.' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    tabs: [
      { icon: 'fa fa-solid fa-gauge', title: 'Marketplace Control Dashboard', image: '/wp-content/uploads/2026/05/admin-dashboard-1.webp', desc: 'View buyer registrations, supplier activity, product listings, orders, transactions, RFQs, and revenue from one dashboard.' },
      { icon: 'fa fa-solid fa-user-gear', title: 'Buyer and Supplier Administration', image: '/wp-content/uploads/2026/05/user-management.webp', desc: 'Review accounts, update user status, monitor behaviour, and handle account-related issues.' },
      { icon: 'fa fa-solid fa-circle-check', title: 'Product Listing Moderation', image: '/wp-content/uploads/2026/05/product-approval.webp', desc: 'Check supplier product submissions before publication to maintain marketplace accuracy and quality.' },
      { icon: 'fa fa-regular fa-folder-open', title: 'Category and Subcategory Control', image: '/wp-content/uploads/2026/05/category-management.webp', desc: 'Create a clear catalogue structure that helps buyers find relevant wholesale products.' },
      { icon: 'fa fa-solid fa-crown', title: 'Supplier Membership Management', image: '/wp-content/uploads/2026/05/subscription-management.webp', desc: 'Configure paid plans with different pricing, product limits, visibility benefits, and renewal periods.' },
      { icon: 'fa fa-solid fa-credit-card', title: 'Payment Method Configuration', image: '/wp-content/uploads/2026/05/payment-gateways.webp', desc: 'Integrate and manage secure payment options for buyers, suppliers, and marketplace transactions.' },
      { icon: 'fa fa-solid fa-envelope-circle-check', title: 'Email Communication Settings', image: '/wp-content/uploads/2026/05/email-settings.webp', desc: 'Customize emails for registration, quotations, orders, payments, account updates, and other marketplace activities.' },
    ],
  },
}

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'HTML5' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'CSS' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React.js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next.js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'MongoDB' },
  { type: 'image', image: '/wp-content/uploads/2026/06/socket-io.webp', color: 'rgb(97, 218, 251)', title: 'Socket.IO' },
]

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-user-shield', title: 'Role-Based User Permissions', desc: 'Assign suitable access levels to buyers, suppliers, employees, managers, and marketplace administrators.' },
  { icon: 'fa fa-solid fa-language', title: 'Multiple Language Support', desc: 'Make the platform accessible to users from different regions through supported interface languages.' },
  { icon: 'fa fa-solid fa-percent', title: 'Configurable Commission Rules', desc: 'Set commissions according to transactions, product types, supplier plans, or marketplace policies.' },
  { icon: 'fa fa-solid fa-star', title: 'Verified Ratings and Reviews', desc: 'Allow buyers to share feedback after eligible transactions and help other businesses evaluate suppliers.' },
  { icon: 'fa fa-solid fa-right-to-bracket', title: 'Social Account Login', desc: 'Provide a faster registration or login experience using supported social platforms.' },
  { icon: 'fa fa-solid fa-truck', title: 'Shipping and Delivery Configuration', desc: 'Manage shipping methods, service locations, charges, dispatch information, and fulfilment options.' },
  { icon: 'fa fa-solid fa-palette', title: 'Complete Brand Personalization', desc: 'Customize colours, layouts, content, categories, pages, and interface elements to match your brand.' },
  { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Multi-Currency Commerce', desc: 'Allow users to view prices and complete supported transactions in different currencies.' },
  { icon: 'fa fa-solid fa-circle-check', title: 'Supplier Verification', desc: 'Review company details, documents, certifications, and contact information before approving supplier profiles.' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Configure the marketplace within a suitable server environment and complete the technical setup.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Brand Implementation', desc: 'Apply your company logo, colours, content, navigation, and marketplace identity.' },
  { icon: 'icon-ion-ios-rocket', title: 'Deployment Guidance', desc: 'Receive support for final configuration, quality testing, launch preparation, and early-stage platform operation.' },
]

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-crown', title: 'Supplier Membership Plans', desc: 'Offer paid packages with different product limits, promotional options, and marketplace privileges.' },
  { icon: 'fa fa-solid fa-percent', title: 'Transaction-Based Commission', desc: 'Collect a fixed charge or percentage from successful marketplace orders.' },
  { icon: 'fa fa-solid fa-gem', title: 'Premium Product Visibility', desc: 'Charge suppliers for highlighted product placements and priority positions.' },
  { icon: 'fa fa-solid fa-sack-dollar', title: 'Supplier Earnings Dashboard', desc: 'Give vendors a clear view of sales, marketplace deductions, available balances, and payouts.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-shield-halved', 'Protected User Authentication'],
  ['fa fa-solid fa-ban', 'Spam and Abuse Prevention'],
  ['fa fa-solid fa-key', 'OTP Identity Confirmation'],
  ['fa fa-solid fa-bell', 'Real-Time Alerts'],
  ['fa fa-solid fa-money-bill-transfer', 'Currency Conversion'],
  ['fa fa-solid fa-envelope-circle-check', 'SMTP Email Connectivity'],
  ['fa fa-solid fa-file-arrow-down', 'Downloadable Transaction Invoices'],
  ['fa fa-solid fa-clock-rotate-left', 'Order Progress Timeline'],
  ['fa fa-solid fa-address-book', 'Multiple Saved Addresses'],
  ['fa fa-solid fa-wallet', 'Supplier Payout Control'],
  ['fa fa-solid fa-receipt', 'Marketplace Tax Settings'],
  ['fa fa-solid fa-truck-fast', 'Automated Purchase Updates'],
  ['fa fa-solid fa-list-check', 'Detailed Wholesale Listings'],
  ['fa fa-solid fa-file-signature', 'RFQ Administration'],
  ['fa fa-solid fa-paper-plane', 'Commercial Quote Submission'],
].map(([icon, title]) => ({ icon, title }))

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android Webview App', true], ['iOS Webview App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1499', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android Webview App', false], ['IOS Webview App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made B2B marketplace solution designed for buyers and suppliers.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic marketplace solutions with limited B2B functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What Is an Alibaba Clone Script?', a: 'It is a ready-made software foundation used to create an online B2B marketplace connecting suppliers with professional buyers.' },
  { q: 'How Can I Receive Technical Support?', a: 'Customers can use the approved support channels provided under their service agreement for configuration and technical assistance.' },
  { q: 'Will I Own the Marketplace After Purchase?', a: 'Platform ownership and usage rights depend on the licence and package selected. The terms should be reviewed before deployment.' },
  { q: 'What Is Complete Source-Code Access?', a: 'It means authorized developers can review and customize the platform code within the permissions of the licence agreement.' },
  { q: 'Can I Resell or Redistribute the Script?', a: 'Resale and redistribution are normally restricted unless the licensing agreement specifically provides written permission.' },
  { q: 'How Do Single-Domain and Multi-Domain Licences Differ?', a: 'A single-domain licence allows the platform to operate on one approved domain. A multi-domain licence may permit deployment across several domains according to its conditions.' },
  { q: 'Can Marketplace Features Be Customized?', a: 'Yes. User interfaces, product categories, payment options, commissions, subscriptions, languages, and marketplace workflows can be customized.' },
  { q: 'Can the Platform Support International Trade?', a: 'Multi-language interfaces, currency options, international supplier profiles, shipping tools, and regional payment integrations can be added.' },
]

export const serverRequirements = {
  intro: 'The marketplace requires a suitable VPS or cloud environment with a supported Linux operating system, adequate processor capacity, sufficient memory, SSD storage, a compatible Node.js version, and MongoDB support.',
  configFactors: [
    'Expected buyer and supplier volume',
    'Number of product listings',
    'Daily marketplace traffic',
    'Image and document storage',
    'Real-time communication usage',
    'Payment and shipping integrations',
    'Expected order volume',
    'Future expansion requirements',
  ],
}

export const whyChooseSolutionPoints = [
  'Ready-to-configure B2B marketplace foundation',
  'Complete customization flexibility',
  'Source-code access based on licensing terms',
  'One-time ownership packages',
  'Installation and deployment support',
  'Scalable marketplace architecture',
  'Buyer, supplier, and administrator dashboards',
  'Ongoing technical assistance',
]

export const reliableApproachPoints = [
  "Marketplace Model — Use a platform structure developed specifically for manufacturers, wholesalers, suppliers, distributors, and professional buyers.",
  "Development Workflow — Follow a planned process covering requirements, customization, implementation, testing, deployment, and support.",
  "Clear Project Pricing — Understand the cost of the platform, custom development, integrations, and additional services before implementation begins.",
  "Defined Launch Schedule — Work with an agreed project timeline based on the selected features and customization requirements.",
  "Flexible Ownership Options — Select a payment and licensing model that suits your marketplace plans and operational needs.",
  "Technical Assistance — Receive help with platform configuration, troubleshooting, updates, and ongoing maintenance.",
  "Deployment Support — Get assistance with server preparation, software installation, configuration, and initial launch.",
  "Customization Access — Modify the platform's functionality and interface according to the permissions provided by the selected licence.",
]

export const additionalRevenueOpportunities = [
  'Sponsored supplier profiles',
  'Display advertising',
  'RFQ access packages',
  'Product promotion charges',
  'Verification services',
  'Lead-generation plans',
]

export const marketplacePackageInclusions = [
  'Responsive marketplace website',
  'Buyer and supplier dashboards',
  'Administration panel',
  'Android application',
  'iOS application',
  'Installation support',
  'Custom branding',
  'Feature configuration',
  'Technical assistance',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Wei Zhang',
    role: 'Export Manager',
    rating: 5,
    quote: 'The AI RFQ Assistant cuts our quote turnaround from days to hours. Buyers get replies while they are still comparing suppliers.',
    avatar: '/wp-content/reviews/alibaba/review-wei-zhang.webp',
    bg: '#fbe0e9',
    accent: '#aa0e42',
    dot: '#e25a88',
  },
  {
    name: 'Fatima Al-Sayed',
    role: 'Procurement Lead',
    rating: 4.5,
    quote: 'AI Market Insights flagged a pricing shift before our competitors noticed. That alone justified the whole platform.',
    avatar: '/wp-content/reviews/alibaba/review-fatima-al-sayed.webp',
    bg: '#fbe2e0',
    accent: '#aa1b0e',
    dot: '#e2655a',
  },
  {
    name: 'Carlos Medina',
    role: 'B2B Supplier',
    rating: 4.5,
    quote: 'Our storefront finally feels built for wholesale, not retail. Bulk order tools work exactly how our buyers expect.',
    avatar: '/wp-content/reviews/alibaba/review-carlos-medina.webp',
    bg: '#fbebe0',
    accent: '#aa4f0e',
    dot: '#e2935a',
  },
  {
    name: 'Ingrid Bauer',
    role: 'Sourcing Director',
    rating: 5,
    quote: 'The AI Chatbot answers spec questions instantly, so my team can focus on negotiating instead of repeating themselves.',
    avatar: '/wp-content/reviews/alibaba/review-ingrid-bauer.webp',
    bg: '#fbf5e0',
    accent: '#aa880e',
    dot: '#e2c45a',
  },
  {
    name: 'Rajiv Malhotra',
    role: 'Trading Company Owner',
    rating: 4.5,
    quote: 'Search history and AI query summaries mean I never lose track of a supplier conversation mid-negotiation.',
    avatar: '/wp-content/reviews/alibaba/review-rajiv-malhotra.webp',
    bg: '#f5fbe0',
    accent: '#88aa0e',
    dot: '#c5e25a',
  },
]
