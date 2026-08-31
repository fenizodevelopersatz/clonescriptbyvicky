export const coreModules = [
  { icon: 'fa fa-solid fa-truck-fast', title: 'Fleet & Rider Management', desc: 'Onboard riders and vehicles, assign zones, and manage availability from one dashboard.' },
  { icon: 'fa fa-solid fa-location-crosshairs', title: 'Real-Time GPS Tracking', desc: 'Track every shipment and rider live on the map from pickup to final delivery.' },
  { icon: 'fa fa-solid fa-route', title: 'Route Optimization', desc: 'Automatically plan the fastest multi-stop routes to cut delivery time and fuel cost.' },
  { icon: 'fa fa-solid fa-clipboard-list', title: 'Order & Dispatch Management', desc: 'Receive, assign, and monitor orders with automated or manual dispatch rules.' },
  { icon: 'fa fa-solid fa-warehouse', title: 'Warehouse & Hub Management', desc: 'Manage inbound and outbound stock across multiple warehouses and sorting hubs.' },
  { icon: 'fa fa-solid fa-file-signature', title: 'Proof of Delivery', desc: 'Capture digital signatures and delivery photos to confirm every drop-off.' },
  { icon: 'fa fa-solid fa-truck-ramp-box', title: 'Multi-Vehicle Support', desc: 'Support bikes, vans, and trucks with vehicle-specific routing and capacity rules.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'COD & Digital Payments', desc: 'Collect cash on delivery or accept digital payments, reconciled automatically.' },
  { icon: 'fa fa-solid fa-bell', title: 'Customer Notifications', desc: 'Keep customers informed with live status updates by SMS, email, and app push.' },
]

export const standardFeatures = [
  { icon: 'fa fa-solid fa-bell', title: 'Real-Time Notifications' },
  { icon: 'fa fa-solid fa-building-columns', title: 'Driver Bank Information' },
  { icon: 'fa fa-solid fa-sliders', title: 'Fare and Tariff Control' },
  { icon: 'fa fa-solid fa-draw-polygon', title: 'Geofenced Service Areas' },
  { icon: 'fa fa-solid fa-location-crosshairs', title: 'Live Vehicle Monitoring' },
  { icon: 'fa fa-solid fa-route', title: 'Multi-Stop Delivery Routes' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-envelope-open-text', 'Email and SMS Updates'],
  ['fa fa-solid fa-money-bill-transfer', 'Multi-Currency Transactions'],
  ['fa fa-solid fa-hourglass-half', 'Pending Payment Control'],
  ['fa fa-solid fa-bolt', 'Immediate Booking Requests'],
  ['fa fa-solid fa-calculator', 'Delivery Cost Preview'],
  ['fa fa-solid fa-clock-rotate-left', 'Trip and Delivery History'],
  ['fa fa-solid fa-address-book', 'Business Contact Information'],
  ['fa fa-solid fa-robot', 'Smart Dispatch Engine'],
  ['fa fa-solid fa-boxes-stacked', 'Shipment Intake Management'],
  ['fa fa-solid fa-location-crosshairs', 'Live GPS Tracking'],
  ['fa fa-solid fa-wallet', 'Driver Digital Wallet'],
  ['fa fa-solid fa-tags', 'Promotional Codes'],
  ['fa fa-solid fa-city', 'Multi-City Operations'],
  ['fa fa-solid fa-file-signature', 'Digital Proof of Delivery'],
  ['fa fa-solid fa-truck-ramp-box', 'Cargo Load Management'],
].map(([icon, title]) => ({ icon, title }))

export const whyChoosePoints = [
  ['Faster ', 'Business Deployment', ' with a ready-made foundation.'],
  ['Separate ', 'Customer, Driver, and Admin Applications', ' for every participant.'],
  ['Real-Time ', 'Vehicle Visibility', ' across your entire fleet.'],
  ['Automated ', 'Booking and Dispatch', ' without manual coordination.'],
  ['Flexible ', 'Fare Configuration', ' for every vehicle and zone.'],
  ['Secure ', 'Digital Payments', ' built into every transaction.'],
  ['Manage ', 'Multiple Service Areas', ' from one dashboard.'],
  ['Built on a ', 'Scalable Technical Architecture', ' that grows with you.'],
  ['Ongoing ', 'Customization and Integration Support', ' when you need it.'],
]

export const customerAppFeatures = [
  { icon: 'fa fa-solid fa-user-plus', title: 'Quick Customer Onboarding', desc: 'Enable users to register and create accounts through a straightforward verification process.' },
  { icon: 'fa fa-solid fa-list-check', title: 'Active Booking Management', desc: 'Allow customers to review upcoming deliveries, update eligible details, cancel requests, and monitor current trips.' },
  { icon: 'fa fa-solid fa-truck-moving', title: 'Vehicle Category Exploration', desc: 'Display available bikes, vans, mini trucks, pickup vehicles, and commercial trucks with capacity and service information.' },
  { icon: 'fa fa-solid fa-calculator', title: 'Transparent Fare Estimation', desc: 'Calculate the expected delivery price using distance, vehicle category, pickup point, destination, demand, and additional charges.' },
  { icon: 'fa fa-solid fa-truck-ramp-box', title: 'Suitable Vehicle Selection', desc: 'Help customers choose a vehicle based on package size, cargo weight, delivery distance, and transportation requirements.' },
  { icon: 'fa fa-solid fa-calendar-plus', title: 'Easy Delivery Booking', desc: 'Let users enter pickup and destination details, add shipment information, choose a vehicle, and confirm the request.' },
  { icon: 'fa fa-solid fa-location-crosshairs', title: 'Real-Time Delivery Tracking', desc: 'Show the assigned driver’s live location and trip progress on an interactive map.' },
  { icon: 'fa fa-solid fa-clock', title: 'Estimated Arrival Time', desc: 'Provide approximate pickup and delivery times based on route distance, traffic, and driver location.' },
  { icon: 'fa fa-solid fa-language', title: 'Multiple Language Support', desc: 'Make the application accessible to users from different regions through supported interface languages.' },
  { icon: 'fa fa-solid fa-calendar-check', title: 'Scheduled Transport Requests', desc: 'Allow customers to arrange deliveries or transportation services for a future date and time.' },
]

export const driverAppFeatures = [
  { icon: 'fa fa-solid fa-lock', title: 'Secure Driver Login', desc: 'Provide approved drivers with protected access to their delivery accounts.' },
  { icon: 'fa fa-solid fa-diamond-turn-right', title: 'Integrated Route Navigation', desc: 'Guide drivers between pickup points, intermediate stops, and final destinations using map-based directions.' },
  { icon: 'fa fa-solid fa-clipboard-check', title: 'Accept or Decline Jobs', desc: 'Let drivers review the distance, vehicle requirement, earnings estimate, and delivery details before responding.' },
  { icon: 'fa fa-solid fa-gauge', title: 'Driver Activity Dashboard', desc: 'Display active jobs, completed deliveries, customer details, availability status, and performance information.' },
  { icon: 'fa fa-solid fa-sack-dollar', title: 'Earnings Breakdown', desc: 'Show gross trip value, platform charges, incentives, deductions, and final driver earnings.' },
  { icon: 'fa fa-solid fa-headset', title: 'Driver Support Access', desc: 'Allow delivery partners to contact the operations team when they experience booking, payment, or customer-related problems.' },
  { icon: 'fa fa-solid fa-file-arrow-up', title: 'Document Submission', desc: 'Collect identity information, driving licences, vehicle papers, permits, and insurance documents for verification.' },
  { icon: 'fa fa-solid fa-comments', title: 'In-App Customer Messaging', desc: 'Help drivers communicate with customers regarding pickup directions, package information, and delivery instructions.' },
]

export const adminAppFeatures = [
  { icon: 'fa fa-solid fa-user-shield', title: 'Protected Administration Access', desc: 'Secure the business dashboard with authorized login and permission-based controls.' },
  { icon: 'fa fa-solid fa-diagram-project', title: 'End-to-End Logistics Management', desc: 'Supervise transport requests, drivers, vehicles, service locations, payments, and delivery progress from one system.' },
  { icon: 'fa fa-solid fa-users-gear', title: 'Customer Account Management', desc: 'Review user profiles, booking records, payment activity, cancellations, and account status.' },
  { icon: 'fa fa-solid fa-triangle-exclamation', title: 'Support and Complaint Handling', desc: 'Receive, categorize, assign, and resolve enquiries or complaints raised by customers and drivers.' },
  { icon: 'fa fa-solid fa-table-columns', title: 'Centralized Operations Panel', desc: 'Access important information about active bookings, vehicle movement, completed jobs, and business performance.' },
  { icon: 'fa fa-solid fa-id-card', title: 'Driver Administration', desc: 'Approve driver registrations, check documents, monitor activity, and manage account availability.' },
  { icon: 'fa fa-solid fa-truck', title: 'Fleet and Truck Management', desc: 'Maintain information about vehicle type, capacity, registration, owner, driver assignment, and current status.' },
  { icon: 'fa fa-solid fa-money-check-dollar', title: 'Revenue and Settlement Details', desc: 'Track customer payments, driver earnings, commissions, refunds, pending balances, and completed settlements.' },
]

export const appModels = [
  { icon: 'fa fa-solid fa-motorcycle', title: 'Porter-Style Local Transport App', desc: 'Connect customers with bikes, vans, mini trucks, and commercial vehicles for local goods movement.' },
  { icon: 'fa fa-solid fa-truck-fast', title: 'Uber Freight-Style Marketplace', desc: 'Help shippers connect with transport providers for commercial freight and long-distance logistics.' },
  { icon: 'fa fa-solid fa-box', title: 'Lalamove-Style Delivery App', desc: 'Offer instant and scheduled delivery services with multiple vehicle categories and live journey tracking.' },
  { icon: 'fa fa-solid fa-truck-front', title: 'Trucker Path-Style Fleet Platform', desc: 'Provide fleet, route, driver, truck, and logistics management features for commercial transport operations.' },
]

export const techArchitectureRequirements = [
  'Fast booking requests',
  'Frequent GPS location updates',
  'Real-time driver assignment',
  'Secure online transactions',
  'Instant communication',
  'Reliable data storage',
  'Multiple application interfaces',
  'Increasing customer and driver activity',
]

export const additionalRevenueOpportunities = [
  'Driver membership packages',
  'Vehicle registration fees',
  'Corporate delivery contracts',
  'Featured transport-provider profiles',
  'Scheduled-delivery plans',
  'Value-added logistics services',
]

export const packageInclusions = [
  'Customer application',
  'Driver application',
  'Administration dashboard',
  'Responsive website',
  'Android application',
  'iOS application',
  'Custom branding',
  'Installation assistance',
  'Third-party integrations',
  'Post-launch support',
]

export const applicationScreens = [
  'Customer booking',
  'Vehicle selection',
  'Live order tracking',
  'Secure payment',
  'Parcel delivery',
  'Home relocation',
  'Driver dashboard',
  'Fleet administration',
  'Delivery history',
  'Revenue reports',
]

export const serverRequirements = {
  intro: 'The platform should run on a suitable VPS or cloud environment with adequate processing capacity, memory, SSD storage, database support, and a compatible backend runtime.',
  configFactors: [
    'Expected customer and driver volume',
    'Number of daily bookings',
    'GPS tracking frequency',
    'Service locations',
    'Stored documents and delivery records',
    'Payment and communication integrations',
    'Reporting requirements',
    'Future expansion plans',
  ],
}

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/06/socket-io.webp', color: 'rgb(97, 218, 251)', title: 'Socket IO' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'icon', icon: 'fa fa-solid fa-location-crosshairs', color: 'rgb(234, 88, 12)', title: 'Live GPS Tracking' },
  { type: 'icon', icon: 'fa fa-brands fa-aws', color: 'rgb(255, 153, 0)', title: 'AWS' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Receive complete installation assistance for a quick and hassle-free launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Fleet & Zone Setup', desc: 'Configure your delivery zones, vehicle types, and pricing rules from day one.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'Get expert assistance to help you launch and manage your logistics platform successfully.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2299', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Rider Android App', true], ['Rider iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$1299', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Rider Android App', false], ['Rider iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made logistics and delivery solution built for riders, hubs, and customers.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic delivery solutions with limited logistics-specific functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What Is a Logistics Service App?', a: 'It is a digital solution that helps businesses manage courier, freight, vehicle-booking, and on-demand transport operations.' },
  { q: 'How Does the Logistics App Work?', a: 'A customer submits a pickup and delivery request. The system connects the request with an available driver, tracks the active journey, processes payment, and updates the delivery status.' },
  { q: 'How Long Does It Take to Launch the Platform?', a: 'A ready-made foundation can shorten the development schedule. The final timeline depends on customization, integrations, testing, and mobile-app review.' },
  { q: 'Which Operational Problems Can It Solve?', a: 'The system can reduce manual booking, improve driver assignment, provide real-time tracking, centralize payments, and organize customer communication.' },
  { q: 'Can Startups Use the Logistics Solution?', a: 'Yes. Startups can begin with selected vehicle categories and service locations, then expand as customer demand increases.' },
  { q: 'Can I Add Different Types of Vehicles?', a: 'Yes. The platform can support bikes, cars, vans, pickup vehicles, mini trucks, commercial trucks, and other configured categories.' },
  { q: 'Does the App Support Multiple Cities?', a: 'Different service zones, fare rules, drivers, vehicles, and booking options can be managed for each supported city.' },
  { q: 'Can the Platform Be Customized?', a: 'The branding, interface, delivery categories, vehicle types, payment methods, pricing logic, and operational workflow can be modified.' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Harriet Solano',
    role: 'Fleet Operations Manager',
    rating: 5,
    quote: 'Real-time GPS tracking means we stop fielding where-is-my-delivery calls. Customers can just see it for themselves.',
    avatar: '/wp-content/reviews/logistics/review-harriet-solano.webp',
    bg: '#e0fafb',
    accent: '#0ea9aa',
    dot: '#5ae1e2',
  },
  {
    name: 'Deepak Suri',
    role: 'Warehouse Director',
    rating: 4.5,
    quote: 'Warehouse and hub management finally talks to dispatch. We cut a full step out of every order.',
    avatar: '/wp-content/reviews/logistics/review-deepak-suri.webp',
    bg: '#e0effb',
    accent: '#0e68aa',
    dot: '#5aa9e2',
  },
  {
    name: 'Anke Vermeulen',
    role: 'Logistics Founder',
    rating: 5,
    quote: 'Route optimization alone paid for the platform in fuel savings within the first quarter.',
    avatar: '/wp-content/reviews/logistics/review-anke-vermeulen.webp',
    bg: '#e0e6fb',
    accent: '#0e34aa',
    dot: '#5a7be2',
  },
  {
    name: 'Julian Ferreira',
    role: 'Dispatch Lead',
    rating: 4.5,
    quote: 'Proof of delivery with photo capture ended nearly every damage dispute we used to have.',
    avatar: '/wp-content/reviews/logistics/review-julian-ferreira.webp',
    bg: '#e3e0fb',
    accent: '#210eaa',
    dot: '#6b5ae2',
  },
  {
    name: 'Priyanka Rao',
    role: 'Supply Chain Manager',
    rating: 4.5,
    quote: 'Fleet and rider management gives us visibility we never had with spreadsheets. Onboarding new riders takes minutes now.',
    avatar: '/wp-content/reviews/logistics/review-priyanka-rao.webp',
    bg: '#efe0fb',
    accent: '#650eaa',
    dot: '#a65ae2',
  },
]
