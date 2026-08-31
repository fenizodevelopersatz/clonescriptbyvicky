export const featurePanels = {
  customer: {
    label: 'Customer',
    icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2025/04/advanced-search.webp',
    imageAlt: 'advanced search',
    features: [
      { title: 'Advanced Restaurant Search', desc: 'Customers can search for restaurants and food items using names, keywords, cuisines, locations, and categories.' },
      { title: 'New Food Arrivals', desc: 'Recently introduced dishes, menus, and restaurants can be highlighted.' },
      { title: 'Live Delivery Tracking', desc: 'Customers can follow the assigned delivery partner’s progress through an integrated map.' },
      { title: 'Shopping Cart', desc: 'Users can add items, update quantities, remove products, and review selected food before checkout.' },
      { title: 'Seamless Checkout', desc: 'Customers can confirm addresses, delivery instructions, payment methods, discounts, and order totals through a simplified flow.' },
      { title: 'Popular Restaurant Listings', desc: 'Frequently ordered or highly rated restaurants can be displayed in prominent positions.' },
    ],
  },
  restaurant: {
    label: 'Restaurant',
    icon: 'fas fa-store',
    image: '/wp-content/uploads/2025/04/manage-orders.webp',
    imageAlt: 'manage orders',
    features: [
      { title: 'Order Management', desc: 'Restaurant teams can review new, accepted, preparing, completed, cancelled, and refunded orders.' },
      { title: 'Restaurant Stories', desc: 'Businesses can publish temporary updates about special dishes, seasonal menus, and limited-time promotions.' },
      { title: 'Menu Management', desc: 'Restaurants can create menu categories and add, edit, organize, or remove food items.' },
      { title: 'Restaurant Verification', desc: 'Owners can upload eligible identity, business, licence, and certification documents for administrative review.' },
      { title: 'Restaurant Profile Setup', desc: 'Businesses can add names, descriptions, addresses, opening hours, cuisine types, images, and delivery information.' },
      { title: 'Dine-In Reservation Management', desc: 'When enabled, restaurants can receive and manage customer table reservations.' },
    ],
  },
  driver: {
    label: 'Delivery Partner',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2025/04/live-tracking.webp',
    imageAlt: 'live tracking',
    features: [
      { title: 'Document Verification', desc: 'Drivers can submit licences, identity documents, vehicle information, and other required records.' },
      { title: 'Real-Time Navigation', desc: 'Integrated mapping services can guide drivers from their current location to the restaurant and customer.' },
      { title: 'Delivery History', desc: 'Drivers can review previous deliveries with dates, times, restaurant information, distances, and earnings.' },
      { title: 'Delivery Requests', desc: 'Drivers can receive real-time notifications when suitable food-delivery requests become available.' },
      { title: 'Delivery Status Updates', desc: 'Drivers can mark an order as accepted, collected, on the way, or delivered.' },
      { title: 'Earnings Dashboard', desc: 'Delivery partners can monitor completed delivery payments, incentives, tips, deductions, and available balances.' },
    ],
  },
  admin: {
    label: 'Administrator',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2025/04/capabilities.webp',
    imageAlt: 'capabilities',
    features: [
      { title: 'Website Customization', desc: 'Global colours, banners, pages, navigation, content sections, and marketplace settings can be configured.' },
      { title: 'Profile and Role Management', desc: 'Administrators can control account permissions for customers, restaurants, drivers, and internal staff.' },
      { title: 'Order Management', desc: 'The complete food-order workflow can be monitored from placement through delivery.' },
      { title: 'Central Administration Dashboard', desc: 'Monitor customers, restaurants, delivery partners, orders, transactions, commissions, reports, and platform activity.' },
      { title: 'Food Category Management', desc: 'Cuisine types, food categories, menu groups, and related classifications can be created and organized.' },
      { title: 'Payment Management', desc: 'Administrators can monitor customer payments, restaurant earnings, driver income, refunds, and transaction records.' },
    ],
  },
}

export const standardFeatures = [
  { icon: 'fas fa-wallet', title: 'Digital Wallet', desc: 'Customers, restaurants, and delivery partners can review eligible balances, payments, earnings, refunds, and withdrawals.' },
  { icon: 'fas fa-align-left', title: 'Multiple Language Support', desc: 'The interface can support different languages for customers, restaurants, and drivers across multiple regions.' },
  { icon: 'fas fa-sign-in-alt', title: 'Login and Registration', desc: 'Users can create accounts through supported options such as phone numbers, email addresses, or eligible third-party authentication.' },
  { icon: 'fas fa-bell', title: 'Push Notifications', desc: 'Customers, restaurant teams, and drivers can receive alerts regarding orders, payments, preparation, pickups, deliveries, and promotions.' },
  { icon: 'fas fa-id-badge', title: 'Profile Management', desc: 'Every user role can manage relevant personal, business, vehicle, and account information.' },
  { icon: 'fas fa-history', title: 'Order History', desc: 'Users can review active, completed, cancelled, and refunded orders through their dashboards.' },
  { icon: 'fas fa-rss-square', title: 'Online and Offline Status', desc: 'Restaurants and delivery partners can update their availability when they are ready to receive new orders.' },
  { icon: 'fas fa-tags', title: 'Special Discounts', desc: 'Restaurants and administrators can create coupons, offers, meal deals, and promotional campaigns.' },
  { icon: 'fas fa-money-check-alt', title: 'Multiple Payment Preferences', desc: 'Customers can choose from supported payment methods during checkout.' },
  { icon: 'fas fa-map-marked-alt', title: 'Geolocation', desc: 'Location services help customers discover nearby restaurants and monitor delivery progress.' },
  { icon: 'fab fa-weixin', title: 'Built-In Chat', desc: 'Customers, restaurants, and drivers can communicate when clarification or delivery assistance is required.' },
  { icon: 'fas fa-user-cog', title: 'Profile and Application Settings', desc: 'Users can manage notifications, language, saved addresses, privacy preferences, and account details.' },
  { icon: 'fas fa-adjust', title: 'Light and Dark Modes', desc: 'Allow users to select an interface theme based on their preferences.' },
  { icon: 'fas fa-tasks', title: 'Product Management', desc: 'Restaurant owners can add, edit, organize, publish, pause, or remove food items.' },
  { icon: 'fas fa-splotch', title: 'Ratings and Reviews', desc: 'Customers can evaluate restaurants, food items, and delivery experiences after eligible orders.' },
]

export const addOnFeatures = [
  { icon: 'fas fa-file-invoice-dollar', title: 'Subscription Plans', desc: 'Offer paid packages with benefits such as free delivery allowances, exclusive discounts, loyalty rewards, or premium restaurant tools.' },
  { icon: 'fas fa-qrcode', title: 'QR Code Support', desc: 'QR codes can provide quick access to restaurant menus, payments, order information, table reservations, or tracking pages.' },
  { icon: 'fas fa-compass', title: 'Guided Onboarding', desc: 'Introduce first-time users to important ordering, restaurant, and delivery features through a simple walkthrough.' },
  { icon: 'fas fa-list', title: 'Single and Multi-Restaurant Ordering', desc: 'Configure whether customers can order from one restaurant or combine eligible items from multiple participating businesses.' },
  { icon: 'fas fa-align-right', title: 'RTL Language Support', desc: 'Provide suitable right-to-left layouts for Arabic and other supported languages.' },
  { icon: 'fas fa-receipt', title: 'Invoice Reports', desc: 'Generate transaction and order reports for customers, restaurants, drivers, and administrators.' },
  { icon: 'fas fa-tag', title: 'Discount Banners', desc: 'Display restaurant deals, platform promotions, meal packages, and seasonal offers through visual banners.' },
  { icon: 'fas fa-gift', title: 'Digital Gift Cards', desc: 'Allow users to purchase eligible gift credits that can be shared with friends or family.' },
  { icon: 'fas fa-video', title: 'Restaurant Stories', desc: 'Restaurants can publish temporary updates about featured dishes, events, offers, and new menu items.' },
  { icon: 'fas fa-check-double', title: 'Dine-In Control', desc: 'Administrators can activate or deactivate table-reservation functionality according to the platform model.' },
  { icon: 'fas fa-piggy-bank', title: 'Savings Tracker', desc: 'Customers can review the amount saved through coupons, subscriptions, rewards, and restaurant discounts.' },
  { icon: 'fas fa-route', title: 'Map View', desc: 'Allow customers to explore restaurant locations and follow delivery progress through an interactive map.' },
  { icon: 'far fa-money-bill-alt', title: 'Driver Tips', desc: 'Customers can add optional tips for delivery partners through supported payment methods.' },
  { icon: 'fas fa-calendar-check', title: 'Scheduled Orders', desc: 'Users can select a future date and time for eligible food orders.' },
  { icon: 'fas fa-award', title: 'Loyalty Rewards', desc: 'Customers can earn eligible points, credits, or promotional benefits based on configured activity.' },
  { icon: 'fas fa-user-friends', title: 'Referral Program', desc: 'Reward existing users when eligible new customers register and complete qualifying orders.' },
  { icon: 'fas fa-hand-paper', title: 'Contactless Delivery', desc: 'Customers can provide clear instructions for orders that do not require a direct handover.' },
]

export const revenueBenefits = [
  { icon: 'fas fa-check-square', title: 'Restaurant Commission Fees', desc: 'Charge participating restaurants a percentage or fixed platform fee for completed food orders.' },
  { icon: 'fas fa-file-invoice-dollar', title: 'Customer Service Fees', desc: 'Apply a clearly disclosed platform charge to eligible customer transactions.' },
  { icon: 'fas fa-motorcycle', title: 'Delivery Charges', desc: 'Generate revenue through location, distance, demand, or order-based delivery fees.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Sponsored Restaurant Listings', desc: 'Restaurants can pay for improved visibility in homepage sections, search results, and cuisine categories.' },
  { icon: 'fas fa-dollar-sign', title: 'Restaurant Subscription Plans', desc: 'Offer premium packages with additional visibility, lower commissions, analytics, or promotional tools.' },
  { icon: 'fas fa-id-card', title: 'Customer Membership Plans', desc: 'Provide recurring plans with benefits such as eligible free deliveries, discounts, rewards, or exclusive offers.' },
  { icon: 'fas fa-bullhorn', title: 'Advertising Revenue', desc: 'Approved food businesses and related brands can purchase advertising space in suitable marketplace locations.' },
  { icon: 'fas fa-ban', title: 'Cancellation Fees', desc: 'Apply configurable charges when accepted orders are cancelled outside the allowed period.' },
  { icon: 'fas fa-shopping-basket', title: 'Small-Order Fees', desc: 'A transparent charge can be added when an order falls below a configured minimum value.' },
  { icon: 'fas fa-shipping-fast', title: 'Priority Delivery Fees', desc: 'Customers can pay an additional amount for eligible priority-delivery options.' },
  { icon: 'fas fa-hand-holding-heart', title: 'Referral Partnerships', desc: 'The platform can earn through suitable promotional and business partnerships.' },
  { icon: 'fas fa-cash-register', title: 'POS Subscription Fees', desc: 'Restaurants can pay recurring charges for access to eligible point-of-sale functionality.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$3899', featured: true,
    features: [['Single-Domain Licence', true], ['One-Time Payment Option', true], ['100% Source-Code Access', true], ['Responsive Website', true], ['Customer Application', true], ['Restaurant Application', true], ['Driver Application', true], ['Administration Panel', true], ['Android Application', true], ['iOS Application', true], ['Installation Assistance', true], ['Mobile-App Submission Support', true], ['Product Updates', true], ['Technical Support', true]],
  },
]

export const faqs = [
  { q: 'What Is an UberEats Clone?', a: 'An UberEats Clone is a ready-made software solution for building an online food-ordering and delivery marketplace with customer, restaurant, driver, and administration interfaces.' },
  { q: 'How Does the Food Delivery Platform Work?', a: 'Customers place food orders, restaurants accept and prepare them, delivery partners collect the prepared orders, and drivers deliver them to the customers’ selected locations.' },
  { q: 'Can Multiple Restaurants Join the Platform?', a: 'Yes. Independent restaurants, cafés, cloud kitchens, bakeries, and other suitable food providers can register and manage their own profiles and menus.' },
  { q: 'Can Restaurants Manage Their Own Menus?', a: 'Yes. Restaurants can create categories, add food items, set prices, configure variants, update availability, and create promotions.' },
  { q: 'Does the Application Support Real-Time Tracking?', a: 'Mapping and location services can help customers monitor delivery progress after an order has been collected.' },
  { q: 'Can the Platform Be Customized?', a: 'Yes. The branding, pages, user interfaces, restaurant categories, ordering process, payment methods, commissions, service areas, and other functionality can be customized.' },
  { q: 'How Much Does UberEats Clone Development Cost?', a: 'The final cost depends on the required applications, features, design changes, restaurant tools, third-party integrations, payment gateways, and customization scope.' },
  { q: 'Will I Receive Source-Code Access?', a: 'Source-code access depends on the selected package and licence. The agreement should clearly explain the included access, usage, modification, and ownership rights.' },
  { q: 'How Can the Platform Generate Revenue?', a: 'The platform can earn through restaurant commissions, delivery charges, customer service fees, subscriptions, sponsored listings, advertisements, and other configured charges.' },
  { q: 'Can the Platform Support Multiple Languages?', a: 'Yes. Supported languages, currencies, regional formats, and right-to-left layouts can be added for different markets.' },
  { q: 'Are Android and iOS Applications Available?', a: 'Android and iOS applications can be included according to the selected package and project requirements.' },
  { q: 'Is Technical Support Available After Launch?', a: 'Technical assistance can be provided for installation, configuration, eligible updates, troubleshooting, and platform maintenance.' },
]

export const serverRequirements = {
  intro: 'An online food-delivery platform requires a secure VPS, cloud server, or compatible hosting environment with suitable processing capacity, memory, storage, bandwidth, and backup resources.',
  items: [
    'PHP 8.0 or a supported compatible version',
    'Compatible web server',
    'Secure relational database',
    'Valid HTTPS certificate',
    'Google Maps or suitable mapping API credentials',
    'Firebase project with an appropriate usage plan',
    'Payment gateway credentials',
    'Push-notification services',
    'Email or SMS configuration',
    'Media and document storage',
    'Automated backup system',
    'Server monitoring',
    'Security configuration',
    'Scalable bandwidth and storage',
  ],
  outro: 'The final server architecture should be selected according to expected users, restaurants, orders, delivery areas, concurrent activity, live tracking, mobile applications, integrations, and future growth.',
}

export const mobileScreens = {
  customer: {
    label: 'Customer',
    icon: 'fas fa-user-alt',
    screens: [
      { image: '/wp-content/uploads/2025/03/dine-in-booking.webp', alt: 'Restaurant Details' },
      { image: '/wp-content/uploads/2025/03/story-view.webp', alt: 'Customer Homepage' },
      { image: '/wp-content/uploads/2025/03/Seamless-Checkout-Process.webp', alt: 'Checkout' },
      { image: '/wp-content/uploads/2025/03/Earn-Rewards.webp', alt: 'Coupons and Offers' },
      { image: '/wp-content/uploads/2025/03/Shopping-Cart.webp', alt: 'Shopping Cart' },
      { image: '/wp-content/uploads/2025/03/Map-View.webp', alt: 'Live Order Tracking' },
    ],
  },
  driver: {
    label: 'Driver',
    icon: 'fas fa-user-cog',
    screens: [
      { image: '/wp-content/uploads/2025/04/accept-and-reject-orders-driver-scaled-2.webp', alt: 'Delivery Requests' },
      { image: '/wp-content/uploads/2025/04/Go-online-Offline.webp', alt: 'Online and Offline Status' },
      { image: '/wp-content/uploads/2025/04/Realtime-Map-Directions.webp', alt: 'Real-Time Navigation' },
      { image: '/wp-content/uploads/2025/04/Delivery-History.webp', alt: 'Delivery History' },
      { image: '/wp-content/uploads/2025/04/Finalize-Products.webp', alt: 'Delivery Confirmation' },
    ],
  },
  restaurant: {
    label: 'Restaurant',
    icon: 'fas fa-store',
    screens: [
      { image: '/wp-content/uploads/2025/03/Story.webp', alt: 'Restaurant Stories' },
      { image: '/wp-content/uploads/2025/03/Offers-and-Coupon-Management.webp', alt: 'Offers and Coupons' },
      { image: '/wp-content/uploads/2025/03/Order-History.webp', alt: 'Order History' },
      { image: '/wp-content/uploads/2025/03/Invoice.webp', alt: 'Invoice Reports' },
      { image: '/wp-content/uploads/2025/03/Manage-products.webp', alt: 'Food-Item Management' },
      { image: '/wp-content/uploads/2025/04/accept-reject-restaurant.webp', alt: 'Accept or Reject Orders' },
    ],
  },
}

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Ananya Krishnan',
    role: 'Restaurant Owner',
    rating: 5,
    quote: 'Delivery tracking cut our where-is-my-order calls to almost zero. Customers just watch it arrive.',
    avatar: '/wp-content/reviews/swiggy/review-ananya-krishnan.webp',
    bg: '#fbe0e8',
    accent: '#aa0e3c',
    dot: '#e25a82',
  },
  {
    name: 'Marco Silva',
    role: 'Delivery Platform Operator',
    rating: 4.5,
    quote: 'Checkout flow is fast enough that people actually finish their orders instead of abandoning carts.',
    avatar: '/wp-content/reviews/swiggy/review-marco-silva.webp',
    bg: '#fbe3e0',
    accent: '#aa210e',
    dot: '#e26b5a',
  },
  {
    name: 'Devika Menon',
    role: 'Cloud Kitchen Founder',
    rating: 4.5,
    quote: 'Popular restaurant lists gave us visibility we could not get any other way when we launched.',
    avatar: '/wp-content/reviews/swiggy/review-devika-menon.webp',
    bg: '#fbece0',
    accent: '#aa550e',
    dot: '#e2985a',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Regional Manager',
    rating: 4.5,
    quote: 'Advanced search means customers actually find our menu items by name, not just by browsing.',
    avatar: '/wp-content/reviews/swiggy/review-tunde-adeyemi.webp',
    bg: '#fbf6e0',
    accent: '#aa8e0e',
    dot: '#e2ca5a',
  },
  {
    name: 'Claire Dubois',
    role: 'Multi-brand Restaurateur',
    rating: 5,
    quote: 'New arrivals view keeps our seasonal menu in front of repeat customers automatically.',
    avatar: '/wp-content/reviews/swiggy/review-claire-dubois.webp',
    bg: '#f4fbe0',
    accent: '#82aa0e',
    dot: '#c0e25a',
  },
]
