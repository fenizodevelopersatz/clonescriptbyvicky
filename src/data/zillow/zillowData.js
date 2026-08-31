export const aiFeatures = [
  { image: '/wp-content/uploads/2026/06/ai-property-recommendation.webp', title: 'AI Property Recommendations', desc: 'Suggest properties that align with user preferences, saved searches, browsing habits, budget, desired location, property type, and amenity needs.' },
  { image: '/wp-content/uploads/2026/06/ai-chatbot-1.webp', title: 'AI Real Estate Assistant', desc: 'Offer immediate answers to common queries about properties, amenities, appointments, navigating the platform, and search filters.' },
  { image: '/wp-content/uploads/2026/06/ai-description-generator.webp', title: 'AI Property Description Generator', desc: 'Craft structured drafts for property descriptions using details like location, price, property type, number of rooms, amenities, and key highlights.' },
  { image: '/wp-content/uploads/2026/06/ai-neighbourhood.webp', title: 'AI Neighborhood Insights', desc: 'Deliver valuable insights about local schools, hospitals, transportation options, shopping centers, workplaces, recreational areas, and other highlights.' },
  { image: '/wp-content/uploads/2026/06/ai-query-summary.webp', title: 'Natural-Language Property Search', desc: 'Enable users to search using everyday language, such as “Show me furnished two-bedroom apartments close to my workplace that fit my budget.”' },
]

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React.js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next.js' },
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'HTML5' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'CSS3' },
  { type: 'icon', icon: 'fa fa-brands fa-bootstrap', color: 'rgb(121, 82, 179)', title: 'Bootstrap' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'MongoDB' },
  { type: 'icon', icon: 'fa fa-solid fa-map-location-dot', color: 'rgb(66, 133, 244)', title: 'Google Maps' },
  { type: 'icon', icon: 'fa fa-brands fa-stripe', color: 'rgb(99, 91, 255)', title: 'Stripe' },
  { type: 'icon', icon: 'fa fa-brands fa-paypal', color: 'rgb(0, 112, 186)', title: 'PayPal' },
  { type: 'icon', icon: 'fa fa-solid fa-money-check-dollar', color: 'rgb(2, 44, 34)', title: 'Razorpay' },
]

/* Preserves the ORIGINAL tabbed layout (RoleFeatureTabs) and its already-migrated
   per-tab screenshots exactly -- only title/desc text is updated to the new copy.
   Each role's new copy list has more items than there are existing image slots (6 per
   role); the 6 chosen per role are the closest thematic match to each existing image,
   and the remaining new-copy items (Lead and Enquiry Management, SEO-Friendly Agent
   Profiles, Saved Searches and Alerts, Property Comparison, Mortgage and EMI Calculator,
   Property Sharing, Guided Property Submission, Property Performance, Listing Approval
   and Moderation, Advertising Management, Content Management System, Platform
   Configuration) don't have a home here since there's no matching screenshot -- see
   [[zillow_role_tabs_layout_restore]]. */
export const roleTabs = {
  user: {
    label: 'Buyer/Renter',
    icon: 'fas fa-user',
    tabs: [
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Advanced Property Search', image: '/wp-content/uploads/2026/04/property-search.webp', desc: 'Easily search by location, property type, whether it’s for sale or rent, price range, number of rooms and bathrooms, area size, amenities, furnishing status, and other customizable criteria.' },
      { icon: 'fa fa-solid fa-bell', title: 'Notification System', image: '/wp-content/uploads/2026/04/notifications.webp', desc: 'Stay in the loop with email, SMS, push notifications, or in-platform alerts about inquiries, appointments, saved searches, and updates on listings.' },
      { icon: 'fa fa-solid fa-heart', title: 'Saved Properties and Wishlists', image: '/wp-content/uploads/2026/04/wishlist.webp', desc: 'Bookmark properties you like, revisit them later, and compare different options before making your final choice.' },
      { icon: 'fa fa-solid fa-user-tie', title: 'Direct Property Enquiries', image: '/wp-content/uploads/2026/04/contact-agent-seller.webp', desc: 'Reach out to property agents or owners easily through enquiry forms, messaging, and approved communication channels.' },
      { icon: 'fa fa-regular fa-calendar', title: 'Property Visit Scheduling', image: '/wp-content/uploads/2026/04/property-schedule-user.webp', desc: 'Set up a convenient date and time for either an in-person or virtual property visit.' },
      { icon: 'fa fa-solid fa-map-location-dot', title: 'Map-Based Property Discovery', image: '/wp-content/uploads/2026/04/property-view.webp', desc: 'Discover properties using an interactive map that shows how close they are to your favorite spots.' },
    ],
  },
  agent: {
    label: 'Agent',
    icon: 'fas fa-user-tie',
    tabs: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Agent Dashboard', image: '/wp-content/uploads/2026/04/agent_dashboard.webp', desc: 'Manage all your active listings, inquiries, appointments, leads, package usage, and overall performance from a single, convenient workspace.' },
      { icon: 'fa fa-solid fa-table-list', title: 'Advanced Property Listing', image: '/wp-content/uploads/2026/04/agent-property-listing.webp', desc: 'Craft detailed property listings that include pricing, images, videos, floor plans, location details, documents, room specifications, amenities, and availability.' },
      { icon: 'fa fa-solid fa-cloud-arrow-up', title: 'Document Management', image: '/wp-content/uploads/2026/04/upload-document.webp', desc: 'Easily upload and manage essential documents like ownership, identity, project, or compliance papers with secure access controls.' },
      { icon: 'fa fa-solid fa-money-bill', title: 'Billing and Invoice History', image: '/wp-content/uploads/2026/04/invoice.webp', desc: 'Easily check your subscription purchases, listing credits, invoices, payments, and transaction history all in one place.' },
      { icon: 'fa fa-solid fa-route', title: 'Tour Request Tracking', image: '/wp-content/uploads/2026/04/tour-request.webp', desc: 'Accept, decline, reschedule, and keep an eye on property-visit requests effortlessly.' },
      { icon: 'fa fa-solid fa-building', title: 'Property Status Management', image: '/wp-content/uploads/2026/04/property-status.webp', desc: 'Stay on top of property availability by updating statuses like active, reserved, rented, sold, or unavailable.' },
    ],
  },
  seller: {
    label: 'Seller',
    icon: 'fas fa-user-check',
    tabs: [
      { icon: 'fa fa-solid fa-gauge-high', title: 'Seller Dashboard', image: '/wp-content/uploads/2026/04/seller_dashboard.webp', desc: 'Take control of your property listings, inquiries, scheduled visits, transactions, and account activities all from a single dashboard.' },
      { icon: 'fa fa-solid fa-calendar-check', title: 'Property Visit Availability', image: '/wp-content/uploads/2026/04/property-schedule.webp', desc: 'Set your available appointment times and manage visit requests without any scheduling conflicts.' },
      { icon: 'fa fa-solid fa-envelope-open', title: 'Direct Enquiry Management', image: '/wp-content/uploads/2026/04/enquiry.webp', desc: 'Engage with potential buyers or renters and keep a well-organized record of all enquiries.' },
      { icon: 'fa fa-solid fa-list-ol', title: 'Listing and Package Limits', image: '/wp-content/uploads/2026/04/lisitng-limit.webp', desc: 'Keep an eye on how many active listings you have, track your credits, check package validity, and explore available upgrade options.' },
      { icon: 'fa fa-solid fa-receipt', title: 'Payment and Transaction History', image: '/wp-content/uploads/2026/04/invoice-seller.webp', desc: 'Take a look at your listing fees, package purchases, invoices, refunds, and all related transaction details.' },
      { icon: 'fa fa-solid fa-box-open', title: 'Package Activity Monitoring', image: '/wp-content/uploads/2026/04/package-monitor.webp', desc: 'Stay updated on package validity, listing limits, subscription usage, and when it\'s time to renew.' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    tabs: [
      { icon: 'fa fa-solid fa-gauge', title: 'Advanced Analytics Dashboard', image: '/wp-content/uploads/2026/04/platform_analytics.webp', desc: 'Keep tabs on users, property listings, enquiries, appointments, subscriptions, platform revenue, and user activity through comprehensive reports.' }
      // { icon: 'fa fa-solid fa-circle-user', title: 'User and Role Management', image: '/wp-content/uploads/2026/04/user-management.webp', desc: 'Oversee buyers, renters, sellers, agents, moderators, and administrators with role-based permissions for better management.' },
      // { icon: 'fa fa-regular fa-folder-open', title: 'Category and Field Management', image: '/wp-content/uploads/2026/04/category-management.webp', desc: 'Create and manage property categories, subcategories, listing types, locations, custom property fields, and search filters.' },
      // { icon: 'fa fa-solid fa-list-check', title: 'Amenities Management', image: '/wp-content/uploads/2026/04/amenities-management.webp', desc: 'Easily create reusable amenity groups tailored for residential, commercial, rental, land, and project listings.' },
      // { icon: 'fa fa-solid fa-box', title: 'Package and Membership Management', image: '/wp-content/uploads/2026/04/package-management.webp', desc: 'Craft pricing plans that come with customizable listing limits, validity periods, credits, visibility options, and promotional perks.' },
      // { icon: 'fa fa-regular fa-calendar-check', title: 'Appointment Management', image: '/wp-content/uploads/2026/04/appointment-management.webp', desc: 'Keep track of all property visit requests and tackle any scheduling hiccups across the marketplace.' },
    ],
  },
}

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-file-shield', title: 'Authentication and Security', desc: 'Safeguard user accounts with robust authentication methods, session controls, input validation, access restrictions, upload validation, encryption, and protection against login attempts.' },
  { icon: 'fa fa-solid fa-file-invoice-dollar', title: 'Automated Billing and Invoicing', desc: 'Easily generate invoices, keep track of payments, manage package purchases, and oversee both one-time and recurring billing processes.' },
  { icon: 'fa fa-solid fa-map-location-dot', title: 'Map and Location Intelligence', desc: 'Enhance your search results with map markers, geocoding, radius searches, nearby location details, and distance-based discovery.' },
  { icon: 'fa fa-solid fa-users', title: 'Role and Access Engine', desc: 'Set up permissions based on user roles, ensuring that everyone has access only to the features and information they need for their tasks.' },
  { icon: 'fa fa-solid fa-coins', title: 'Multi-Currency Support', desc: 'Accommodate various currencies, regional pricing formats, live exchange rate updates, and customizable tax regulations.' },
  { icon: 'fa fa-solid fa-language', title: 'Multilingual Platform', desc: 'Provide your marketplace in several languages and manage translated content effortlessly through the administration panel.' },
  { icon: 'fa fa-solid fa-magnifying-glass', title: 'Core Search Engine', desc: 'Deliver quick and precise property searches using structured filters, keywords, sorting options, map boundaries, and saved searches.' },
  { icon: 'fa fa-solid fa-bell', title: 'Multi-Channel Notifications', desc: 'Keep users informed with notifications via email, SMS, push notifications, and in-platform alerts for inquiries, appointments, payments, property updates, and saved search results.' },
  { icon: 'fa fa-solid fa-gears', title: 'Performance and Scalability', desc: 'Implement optimized database queries, caching, media management, monitoring, and scalable deployment strategies to handle growing traffic and an expanding list of properties.' },
]

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-house-circle-check', title: 'Paid Property Listings', desc: 'Charge property owners, builders, and agents a fee to list their properties or buy listing credits.' },
  { icon: 'fa fa-solid fa-crown', title: 'Membership Plans', desc: 'Create flexible plans — monthly, quarterly, or annual — that come with various listing limits and perks.' },
  { icon: 'fa fa-solid fa-star', title: 'Featured Listings', desc: 'Offer users the chance to pay for premium spots in search results, category pages, city pages, and even on the homepage.' },
  { icon: 'fa fa-solid fa-rectangle-ad', title: 'Advertising', desc: 'Bring in revenue through banner ads, sponsored placements, and promotional campaigns.' },
]

export const additionalRevenueModels = [
  'Featured Agents and Builders — let verified agents, builders, and property companies showcase their profiles or projects for a fee',
  'Lead Packages — offer packages that provide access to qualified inquiries or lead credits',
  'Booking or Service Fees — charge platform fees for eligible appointments, reservations, or property-related services',
  'Premium Property Services — photography, listing verification, legal assistance, mortgage referrals, property insurance, moving services, and property management partnerships',
]

export const launchSteps = [
  { icon: 'icon-et-gears', title: 'Platform Setup', desc: 'Our team will set up the approved application package in your server environment and carry out all the necessary deployment checks.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Marketplace Personalization', desc: 'Make the marketplace your own by customizing it with your logo, brand colors, business details, location structure, property categories, and any approved interface changes.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Assistance', desc: 'Get the support you need for final configuration, testing, troubleshooting, and operational handover, all based on the project scope we agreed upon.' },
  // { icon: 'fa fa-solid fa-book', title: 'Documentation and Training', desc: 'Receive the relevant product documentation and guided training for your administrators and operational teams, included in your selected package.' },
]

export const dashboards = [
  { label: 'Buyer/Renter Dashboard', email: 'user@yopmail.com', password: '12345678' },
  { label: 'Agent Dashboard', email: 'agent@yopmail.com', password: '12345678' },
  { label: 'Seller Dashboard', email: 'seller@yopmail.com', password: '12345678' },
  { label: 'Administrator Dashboard', email: 'admin@gmail.com', password: 'Admin@123' },
]

export const packageInclusions = [
  'Software license',
  'Source code terms',
  'Chosen platform modules',
  'Required user roles',
  'Customization details',
  'Web and mobile deliverables',
  'Deployment services',
  'Third-party integrations',
  'Support and maintenance options',
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1499', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['Unlimited Updates', true], ['Free Installation', true], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Tailored specifically to fit your real estate business model and workflows.',
  'Comes with a well-defined project scope, clear development milestones, review stages, and a structured launch process.',
  'A white-label platform that allows you to showcase your logo, colors, content, and overall business identity.',
  'You get access to the source code based on the license you choose.',
  'You\'ll receive a straightforward quote based on the features and customization you select.',
  'Its architecture is designed to be extended with new features, markets, and integrations.',
  'We can definitely include deployment assistance in the project scope to make things easier for you.',
  'We offer structured technical support options to ensure you have the help you need.',
]

export const comparisonOthers = [
  'You might find yourself making compromises or needing extra third-party tools.',
  'Ownership of the development process and timelines can often be a bit murky.',
  'You might face limitations when it comes to branding flexibility.',
  'The source code could be restricted or even unavailable.',
  'You might encounter unexpected costs due to additional modules.',
  'Expansion could be constrained by the original product\'s structure.',
  'Just a heads up, installation might come with an additional charge.',
  'Keep in mind that the quality and duration of support may be somewhat limited.',
]

export const faqs = [
  { q: 'What Is a Zillow Clone Script?', a: 'A Zillow Clone Script is a flexible software solution designed to help you launch a real estate marketplace. It comes packed with features like property listings, advanced search options, maps, inquiries, appointment scheduling, payment processing, monetization strategies, and administrative tools.' },
  { q: 'How Does a Real Estate App Like Zillow Work?', a: 'Property owners, builders, or agents can publish their listings. Buyers and renters can then search for properties using various filters and maps, review detailed property information, save their favorite listings, submit inquiries, and schedule visits. Administrators oversee user management, listings, plans, transactions, advertisements, and overall platform settings.' },
  { q: 'Can I Customize the Platform for My Brand?', a: 'Absolutely! You can tailor the branding, property categories, listing fields, service locations, user roles, packages, currencies, languages, integrations, and workflows to fit your brand perfectly.' },
  { q: 'Will I Receive Source-Code Ownership?', a: 'The access to and ownership of the source code will depend on the license you choose and the signed agreement. The proposal should clearly outline your usage rights, domain limitations, transfer restrictions, and what components are included.' },
  { q: 'Can I Manage Categories, Listing Fields, and Page Layouts?', a: 'Yes, you can! The administration panel allows you to manage property categories, subcategories, listing types, fields, forms, search filters, amenities, content sections, and other settings for your marketplace.' },
  { q: 'Is the Software Available for a One-Time Payment?', a: 'Yes, you can get a one-time license for the core software. However, hosting, maintenance, third-party services, premium integrations, and any future custom development might come with additional costs.' },
  { q: 'What Is Included in the Zillow Clone Package?', a: 'The package typically includes source code, selected modules, a responsive interface, help with installation, product documentation, support for bug fixes, approved customization, and training for administrators. Check the final quotation for exact details.' },
  { q: 'What Monetization Options Are Available?', a: 'You can explore paid listings, membership plans, featured listings, listing credits, promoted agents, advertising, lead packages, booking fees, and premium services.' },
  { q: 'Which Payment Gateways Can Be Integrated?', a: 'The platform is flexible and can integrate with payment gateways like Stripe, PayPal, Razorpay, CCAvenue, or any other provider that suits your target market.' },
  { q: 'Will CloneScript Help with Platform Installation?', a: 'Absolutely! We can assist with deployment as long as your server meets the technical requirements and you provide the necessary hosting access, domain setup, and any third-party credentials.' },
  { q: 'Is There a Free Trial or Live Demo?', a: 'Yes, we might offer a guided demo or a temporary test environment, depending on what\'s available. Just reach out to CloneScript to check on the current demo options.' },
  { q: 'Can the Platform Handle Multiple Languages and Currencies?', a: 'Definitely! Our localization features support various languages, currencies, number formats, regional settings, and even translated content.' },
  { q: 'Are There AI Features in the Platform?', a: 'Yes, we have AI modules that can help with property recommendations, conversational searches, chatbot responses, drafting listing descriptions, and providing neighborhood insights.' },
  { q: 'How Is the Zillow Clone Secured?', a: 'Security measures may include secure authentication, role-based access, input validation, session protection, encrypted connections, upload validation, rate limiting, database protection, activity logging, automated backups, and regular security updates.' },
  { q: 'Can We Develop Mobile Applications?', a: 'Absolutely! We can create Android and iOS applications or responsive web app options, depending on the package you choose.' },
  { q: 'What Support Is Available After Launch?', a: 'Once your project is live, support can encompass everything from fixing defects and helping with configurations to rolling out updates, monitoring performance, maintaining the system, and planning future enhancements based on the support plan you choose.' },
]

export const serverRequirements = {
  intro: 'When selecting a hosting environment, it’s essential to consider factors like anticipated traffic, the volume of property listings, storage needs for images and videos, integration requirements, search functionalities, backup policies, and your availability targets.',
  configFactors: [
    'A Linux VPS or a compatible cloud environment',
    'An SSL certificate',
    'A properly configured domain and DNS',
    'Supported runtime versions',
    'A supported database version',
    'SSD storage',
    'Automated backups',
    'Application monitoring',
    'Activity logging',
    'Recovery procedures',
    'CDN or object storage for property media',
  ],
}

export const changeLog = [
  {
    version: 'Version 2.0',
    date: 'June, 2026',
    items: [
      'AI Chatbot for Property Assistance',
      'AI Property Description Generator',
      'AI Property Recommendations',
      'Neighborhood Insights',
      'Local Market Updates',
      'Property Comparison Tool',
      'Voice Search',
      'Location-Based Property Search',
      'Virtual Property Tours',
      'Saved Search Alerts',
      'EMI Calculator',
      'Enhanced Seller Dashboard',
      'Enhanced Agent Dashboard',
      'Improved Admin Dashboard & Management Features',
    ],
  },
  {
    version: 'Version 1.0',
    date: 'April, 2026',
    items: ['Initial Release'],
  },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Margaret Ellison',
    role: 'Real Estate Broker',
    rating: 5,
    quote: 'AI Property Recommendations actually match what buyers are looking for, not just what is newly listed.',
    avatar: '/wp-content/reviews/zillow/review-margaret-ellison.webp',
    bg: '#e0fbf6',
    accent: '#0eaa90',
    dot: '#5ae2cb',
  },
  {
    name: 'Tariq Hussain',
    role: 'Real Estate Agent',
    rating: 4.5,
    quote: 'The AI Chatbot answers listing questions after hours, leads do not go cold overnight anymore.',
    avatar: '/wp-content/reviews/zillow/review-tariq-hussain.webp',
    bg: '#e0f4fb',
    accent: '#0e83aa',
    dot: '#5ac0e2',
  },
  {
    name: 'Beatriz Costa',
    role: 'Property Platform Founder',
    rating: 5,
    quote: 'AI-Powered Descriptions save my team hours every week and the copy reads better than what we wrote ourselves.',
    avatar: '/wp-content/reviews/zillow/review-beatriz-costa.webp',
    bg: '#e0ebfb',
    accent: '#0e4faa',
    dot: '#5a93e2',
  },
  {
    name: 'Nathaniel Cross',
    role: 'Broker',
    rating: 4.5,
    quote: 'Property search filters are precise enough that clients find real matches, not just a wall of listings.',
    avatar: '/wp-content/reviews/zillow/review-nathaniel-cross.webp',
    bg: '#e0e1fb',
    accent: '#0e15aa',
    dot: '#5a61e2',
  },
  {
    name: 'Simone Laurent',
    role: 'Neighborhood Specialist',
    rating: 4.5,
    quote: 'AI Neighborhood Insights give buyers context we used to explain over dozens of phone calls.',
    avatar: '/wp-content/reviews/zillow/review-simone-laurent.webp',
    bg: '#eae0fb',
    accent: '#4a0eaa',
    dot: '#8e5ae2',
  },
]
