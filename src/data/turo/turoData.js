export const upcomingAiFeature = {
  image: '/wp-content/uploads/2026/01/ai-chatbox.webp',
  title: 'AI-Assisted Vehicle Listing Creation',
  desc: 'Help vehicle owners complete listings faster by suggesting titles, descriptions, specifications, and relevant vehicle information.',
}

export const roleShowcase = {
  user: {
    label: 'Renter',
    navIcon: 'fas fa-user',
    image: '/wp-content/uploads/2026/05/user-dashboard.webp',
    imageAlt: 'user-dashboard',
    items: [
      { icon: 'fa fa-solid fa-user-plus', title: 'Customer Account Registration' },
      { icon: 'fa fa-solid fa-lock', title: 'Protected Account Login' },
      { icon: 'fa fa-solid fa-user-gear', title: 'Personal Profile Settings' },
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Detailed Vehicle Search' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Current Vehicle Availability' },
      { icon: 'fa fa-solid fa-envelope-open-text', title: 'Booking Request Submission' },
      { icon: 'fa fa-solid fa-circle-check', title: 'Immediate Booking Confirmation' },
      { icon: 'fa fa-solid fa-ban', title: 'Reservation Cancellation' },
      { icon: 'fa fa-solid fa-credit-card', title: 'Online Payment Gateway' },
      { icon: 'fa fa-solid fa-bell', title: 'Booking Notifications' },
    ],
  },
  host: {
    label: 'Vehicle Owner',
    navIcon: 'fas fa-user-tie',
    image: '/wp-content/uploads/2026/05/host-dashboard.webp',
    imageAlt: 'host-dashboard',
    items: [
      { icon: 'fa fa-solid fa-car-side', title: 'Vehicle Listing Creation' },
      { icon: 'fa fa-solid fa-images', title: 'Vehicle Photo Gallery' },
      { icon: 'fa fa-solid fa-sliders', title: 'Attribute Configuration' },
      { icon: 'fa fa-solid fa-list-check', title: 'Custom Vehicle Specifications' },
      { icon: 'fa fa-solid fa-clipboard-check', title: 'Listing Verification Requirements' },
      { icon: 'fa fa-solid fa-key', title: 'Pre-Rental Vehicle Handover' },
      { icon: 'fa fa-solid fa-rotate-left', title: 'Post-Rental Vehicle Return' },
      { icon: 'fa fa-solid fa-road', title: 'Mileage Calculation' },
      { icon: 'fa fa-solid fa-money-check-dollar', title: 'Owner Settlement Management' },
      { icon: 'fa fa-solid fa-wallet', title: 'Earnings Withdrawal Requests' },
    ],
  },
  admin: {
    label: 'Administrator',
    navIcon: 'fas fa-user-shield',
    image: '/wp-content/uploads/2026/05/admin-dashboard.webp',
    imageAlt: 'admin-dashboard',
    items: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Central Administration Dashboard' },
      { icon: 'fa fa-solid fa-user-check', title: 'Identity and Document Verification' },
      { icon: 'fa fa-solid fa-users-gear', title: 'User Activity Review' },
      { icon: 'fa fa-solid fa-gear', title: 'Marketplace Configuration' },
      { icon: 'fa fa-solid fa-database', title: 'Data Backup Management' },
      { icon: 'fa fa-solid fa-language', title: 'Language Configuration' },
      { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Escrow and Platform Charges' },
      { icon: 'fa fa-solid fa-rotate-left', title: 'Cancellation and Refund Rules' },
      { icon: 'fa fa-solid fa-id-card', title: 'Renter Eligibility Settings' },
      { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Mobile Number Verification' },
    ],
  },
}

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-location-dot', title: 'Optional Rental Protection', desc: 'Provide additional trip-protection packages according to business requirements and applicable policies.' },
  { icon: 'fa fa-solid fa-bell', title: 'Delayed Return Notifications', desc: 'Inform renters, owners, and administrators when a vehicle has not been returned at the agreed time.' },
  { icon: 'fa fa-solid fa-star-half-stroke', title: 'Discount Coupons', desc: 'Create promotional codes that customers can apply during eligible vehicle reservations.' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Digital Wallet', desc: 'Maintain customer balances, refunds, promotional credits, owner income, and transaction records.' },
  { icon: 'fa fa-solid fa-clock-rotate-left', title: 'Automated Email Updates', desc: 'Send booking confirmations, payment receipts, pickup reminders, cancellation notices, and return information.' },
  { icon: 'fa fa-solid fa-comments', title: 'In-App Communication', desc: 'Allow renters and vehicle owners to exchange booking-related information through real-time messaging.' },
  { icon: 'fa fa-solid fa-heart', title: 'Favourite Vehicle List', desc: 'Enable renters to save preferred cars and review them again when planning future trips.' },
  { icon: 'fa fa-solid fa-plug', title: 'Multi-Currency Payments', desc: 'Display rental prices and accept supported payments in different currencies.' },
  { icon: 'fa fa-solid fa-magnifying-glass-chart', title: 'Reservation Conflict Detection', desc: 'Identify overlapping dates and prevent the same vehicle from being booked twice.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-right-left', 'Dual-Role Accounts'],
  ['fa fa-solid fa-triangle-exclamation', 'Geographic Boundary Alerts'],
  ['fa fa-solid fa-shield-halved', 'Ratings and Reviews'],
  ['fa fa-solid fa-language', 'Complete Booking Records'],
  ['fa fa-solid fa-money-bill-transfer', 'Third-Party API Connections'],
  ['fa fa-solid fa-id-card', 'Driver Licence Validation'],
  ['fa fa-solid fa-screwdriver-wrench', 'Digital Vehicle Inspection'],
  ['fa fa-solid fa-wallet', 'Wallet and Transaction Control'],
  ['fa fa-solid fa-ticket', 'SEO Management'],
  ['fa fa-solid fa-money-check-dollar', 'Invoice Generation'],
  ['fa fa-solid fa-ban', 'Vehicle Handover Rejection'],
  ['fa fa-solid fa-tags', 'Tax Management'],
  ['fa fa-solid fa-mobile-screen-button', 'Email Notification System'],
  ['fa fa-solid fa-calendar-check', 'Availability Calendar'],
  ['fa fa-solid fa-chart-line', 'Fleet Location Monitoring'],
].map(([icon, title]) => ({ icon, title }))

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-hand-holding-dollar', title: 'Vehicle Owner Income', desc: 'Determine the owner\'s payable earnings based on rental price, booking duration, commissions, and additional charges.' },
  { icon: 'fa fa-solid fa-road-circle-exclamation', title: 'Additional Mileage Fees', desc: 'Calculate extra charges when the renter travels beyond the distance included in the booking.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'Booking Commission', desc: 'Collect a fixed amount or percentage from every successfully completed reservation.' },
  { icon: 'fa fa-solid fa-wallet', title: 'Coupons and Wallet Credits', desc: 'Use promotional discounts and wallet benefits to attract customers and encourage repeat reservations.' },
]

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'HTML5' },
  { type: 'image', image: '/wp-content/uploads/2026/05/tailwind-css.webp', color: 'rgb(21, 114, 182)', title: 'Tailwind CSS' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React.js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(104, 160, 99)', title: 'Next.js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node.js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nestjs.webp', color: 'rgb(239, 216, 29)', title: 'NestJS' },
  { type: 'image', image: '/wp-content/uploads/2026/05/fastify.webp', color: 'rgb(239, 216, 29)', title: 'Fastify' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'MongoDB' },
]

export const pricingPlans = [
  {
    name: 'Corporate Plus', price: '$4999', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Source Code Access', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website Development', true], ['Android Application', true], ['iOS Application', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Corporate', price: '$999', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Source Code Access', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website Development', true], ['Android Application', false], ['iOS Application', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const serverRequirements = {
  vpsServer: ['OS: Ubuntu 22.04 LTS', 'CPU: 2–4 Cores', 'RAM: 4–8 GB', 'Storage: 40+ GB SSD', 'Node.js: v18 or higher'],
  database: ['MongoDB 5+'],
}

export const faqs = [
  { q: 'What Is a Car Rental Script?', a: 'A Car Rental Script is a ready-made software framework used to create and operate an online vehicle-rental platform.' },
  { q: 'Can the Platform Be Customized for My Brand?', a: 'Yes. The colours, layouts, content, features, languages, booking rules, pricing, and payment methods can be personalized.' },
  { q: 'Can the System Grow with My Rental Business?', a: 'Yes. The platform can be expanded with additional vehicles, users, owners, locations, integrations, and functionality.' },
  { q: 'How Soon Can the Platform Be Launched?', a: 'The timeline depends on the required customization, integrations, testing, content preparation, and mobile-app submission.' },
  { q: 'Is Post-Launch Technical Support Available?', a: 'Technical assistance can be provided for installation, updates, configuration, troubleshooting, and platform maintenance.' },
  { q: 'Does the Platform Support Multiple User Roles?', a: 'Yes. Separate panels and permissions can be created for renters, vehicle owners, staff members, and administrators.' },
]

export const screenshots = [
  '/wp-content/uploads/2026/05/cars-detail.webp',
  '/wp-content/uploads/2026/05/my-booking.webp',
  '/wp-content/uploads/2026/05/wishlist.webp',
  '/wp-content/uploads/2026/05/vehicles.webp',
  '/wp-content/uploads/2026/05/search.webp',
  '/wp-content/uploads/2026/05/fleets.webp',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Grant Sullivan',
    role: 'Car Host',
    rating: 5,
    quote: 'AI-Assisted Vehicle Listing Creation turned a 20-minute listing chore into two minutes. I added my whole fleet in an afternoon.',
    avatar: '/wp-content/reviews/turo/review-grant-sullivan.webp',
    bg: '#e0fbe0',
    accent: '#0eaa10',
    dot: '#5ae25c',
  },
  {
    name: 'Valentina Rossi',
    role: 'Fleet Owner',
    rating: 5,
    quote: 'Current vehicle availability stopped our double-bookings completely, guests only see what is actually free.',
    avatar: '/wp-content/reviews/turo/review-valentina-rossi.webp',
    bg: '#e0fbeb',
    accent: '#0eaa51',
    dot: '#5ae294',
  },
  {
    name: 'Mateus Almeida',
    role: 'Platform Founder',
    rating: 4.5,
    quote: 'Protected account login gave both hosts and renters real confidence before handing over keys.',
    avatar: '/wp-content/reviews/turo/review-mateus-almeida.webp',
    bg: '#e0fbf4',
    accent: '#0eaa85',
    dot: '#5ae2c2',
  },
  {
    name: 'Brianna Hayes',
    role: 'Frequent Renter',
    rating: 4.5,
    quote: 'Detailed vehicle search found exactly the car I wanted by location and price without endless scrolling.',
    avatar: '/wp-content/reviews/turo/review-brianna-hayes.webp',
    bg: '#e0f7fb',
    accent: '#0e96aa',
    dot: '#5ad0e2',
  },
  {
    name: 'Connor Whitfield',
    role: 'Car Sharing Operator',
    rating: 4.5,
    quote: 'Personal profile settings let hosts set their own rules, which cut support tickets way down.',
    avatar: '/wp-content/reviews/turo/review-connor-whitfield.webp',
    bg: '#e0ebfb',
    accent: '#0e52aa',
    dot: '#5a96e2',
  },
]
