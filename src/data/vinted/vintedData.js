export const aiFeatures = [
  { image: '/wp-content/uploads/2026/01/ai-content-generator.webp', title: 'AI Image-Based Search', desc: 'Imagine a platform where users can simply upload an image and instantly find visually similar products available in the marketplace.' },
  { image: '/wp-content/uploads/2026/06/ai-property-recommendation.webp', title: 'AI Product Recommendations', desc: 'We’ll recommend products tailored to you based on your browsing habits, wishlists, past purchases, favorite brands, sizes, categories, price ranges, and styles.' },
  { image: '/wp-content/uploads/2026/06/ai-description-generator.webp', title: 'AI Listing Description Generator', desc: 'Our tool can whip up structured drafts for product descriptions by pulling in details like category, brand, color, material, condition, size, and product images. Sellers have the chance to review and tweak the content before it goes live.' },
  { image: '/wp-content/uploads/2026/06/ai-chatbot-1.webp', title: 'AI Marketplace Assistant', desc: 'Got questions? Our assistant is here to help with common inquiries about product listings, seller policies, orders, payments, refunds, delivery, and how to navigate the platform.' },
  { image: '/wp-content/uploads/2026/06/ai-query-summary.webp', title: 'AI Category Suggestions', desc: 'We’ll suggest the best product categories and subcategories based on your listing title, description, and any images you upload.' },
  { image: '/wp-content/uploads/2026/06/ai-usage-tracking.webp', title: 'AI Content Moderation Assistance', desc: 'Our system can spot potentially prohibited, duplicated, misleading, or inappropriate listings, flagging them for administrator review.' },
  { image: '/wp-content/uploads/2026/01/ai-price-optimizer.webp', title: 'AI Price Suggestions', desc: 'We provide estimated price ranges based on product category, brand, condition, age, and marketplace activity, but don’t worry—the seller always has the final say on pricing.' },
  { image: '/wp-content/uploads/2026/06/ai-search-history.webp', title: 'Personalized Style Discovery', desc: 'We’ll showcase fashion items that align with your saved products, preferred categories, brands, sizes, and browsing interests.' },
]

export const comparisonOurs = [
  'Tailored specifically to meet your resale marketplace needs.',
  'Well-defined scope, milestones, review phases, testing, and prep for launch.',
  'A white-label marketplace that reflects your unique visual identity.',
  'Access to the source code is granted based on the agreed license.',
  'Pricing is based on the features you choose and any customization you need.',
  'Easily expand your marketplace with new features, locations, categories, and integrations.',
  'We can include deployment assistance as part of the project scope.',
  'We offer a range of structured support options after your launch.',
]

export const comparisonOthers = [
  'Might need extra tools or some compromises in operations.',
  'The implementation process might not be clearly laid out.',
  'Branding options could be quite limited.',
  'Source code might be restricted or even unavailable.',
  'Additional extensions could lead to unexpected costs.',
  'Growth may be constrained by the original platform\'s structure.',
  'Installation might be offered as a separate service.',
  'The quality and duration of support may be somewhat limited.',
]

/* Restores the ORIGINAL tabbed layout (RoleFeatureTabs) and its already-migrated
   per-tab screenshots -- only title/desc text is updated to the new copy. Each role's
   new copy list has more items than existing image slots; the items kept are the
   closest thematic match to each existing image. See [[zillow_role_tabs_layout_restore]]
   for why this component should never have been swapped for a plain grid in the first
   place. Social Login has no matching item anywhere in the new copy's admin list, so
   that one tab keeps its original (pre-rewrite) title/desc rather than forcing a
   mismatched new title onto an unrelated image. */
export const roleTabs = {
  user: {
    label: 'User',
    icon: 'fas fa-user',
    tabs: [
      { icon: 'fa fa-solid fa-magnifying-glass', title: 'Smart Product Search', image: '/wp-content/uploads/2026/04/smart_search.webp', desc: 'Discover products by searching with keywords, categories, brands, sizes, colors, conditions, locations, price ranges, and other customizable filters.' },
      { icon: 'fa fa-solid fa-heart', title: 'Wishlist Manager', image: '/wp-content/uploads/2026/04/wishlist-1.webp', desc: 'Keep track of products that catch your eye by saving them to a personal wishlist, so you can come back to them later.' },
      { icon: 'fa fa-solid fa-message', title: 'Private Chat', image: '/wp-content/uploads/2026/04/private_chat.webp', desc: 'Engage directly with sellers through a secure messaging system, where you can ask questions, request more info, and negotiate prices.' },
      { icon: 'fa fa-solid fa-clock-rotate-left', title: 'Order History', image: '/wp-content/uploads/2026/04/order_history.webp', desc: 'Easily access your past purchases, check payment statuses, seller details, delivery progress, and transaction information.' },
      { icon: 'fa fa-solid fa-bell', title: 'Live Notifications', image: '/wp-content/uploads/2026/04/live_notify.webp', desc: 'Stay in the loop with notifications about new messages, accepted offers, payments, shipping updates, order statuses, and other key activities in the marketplace.' },
      { icon: 'fa fa-solid fa-lock', title: 'Secure Checkout', image: '/wp-content/uploads/2026/04/secure_checkout.webp', desc: 'Finalize your purchases through a streamlined checkout process that includes approved payment options and delivery details.' },
    ],
  },
  seller: {
    label: 'Seller',
    icon: 'fas fa-user-check',
    tabs: [
      { icon: 'fa fa-solid fa-box-open', title: 'Product Listing', image: '/wp-content/uploads/2026/04/product_listing.webp', desc: 'Create comprehensive product listings that include title, description, category, brand, size, colour, material, condition, price, images, and delivery options.' },
      { icon: 'fa fa-solid fa-clipboard-check', title: 'Order Management', image: '/wp-content/uploads/2026/04/order_tracking.webp', desc: 'Check out new orders, confirm what’s in stock, get products ready, update order statuses, and handle completed sales with ease.' },
      { icon: 'fa fa-solid fa-comments', title: 'Customer Chat', image: '/wp-content/uploads/2026/04/customer_chat.webp', desc: 'Engage directly with potential buyers, answer their product inquiries, discuss offers, and keep them posted on order updates.' },
      { icon: 'fa fa-solid fa-tags', title: 'Bundle Discounts', image: '/wp-content/uploads/2026/04/bundle_discount.webp', desc: 'Set up discounts for customers who buy multiple products from the same seller.' },
    ],
  },
  admin: {
    label: 'Admin',
    icon: 'fas fa-user-shield',
    tabs: [
      { icon: 'fa fa-solid fa-chart-pie', title: 'Platform Analytics', image: '/wp-content/uploads/2026/04/platform_analytics-vinted.webp', desc: 'Keep an eye on how the marketplace is performing, including user registrations, active listings, completed orders, transaction values, commissions, and overall revenue.' },
      { icon: 'fa fa-solid fa-right-to-bracket', title: 'Social Login', image: '/wp-content/uploads/2026/04/social_login.webp', desc: 'Provide seamless and secure user access with integrated Google and Facebook login options, improving user experience and increasing registration rates.' },
      { icon: 'fa fa-solid fa-file-lines', title: 'Content Management', image: '/wp-content/uploads/2026/04/content_management.webp', desc: 'Oversee homepage content, promotional banners, policies, FAQs, category pages, help articles, and marketplace announcements.' },
      { icon: 'fa fa-solid fa-palette', title: 'Brand Settings', image: '/wp-content/uploads/2026/04/brand_settings.webp', desc: 'Personalize your marketplace with a custom logo, colors, typography, favicon, email templates, and overall visual identity.' },
      { icon: 'fa fa-solid fa-envelope', title: 'Email Configuration', image: '/wp-content/uploads/2026/04/email_settings.webp', desc: 'Set up transactional emails for account verification, orders, payments, shipping, refunds, and notifications.' },
      { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Currency Localization', image: '/wp-content/uploads/2026/04/currencies-localization.webp', desc: 'Accommodate various currencies, regional price formats, languages, taxes, and local marketplace settings.' },
    ],
  },
}

export const additionalCapabilities = [
  { icon: 'fa fa-solid fa-warehouse', title: 'Smart Inventory Management', desc: 'Keep tabs on products, listing statuses, stock levels, order movements, and seller activities all from a centralized inventory system.' },
  { icon: 'fa fa-solid fa-vr-cardboard', title: 'Virtual Try-On Integration', desc: 'Optional augmented-reality or virtual-preview features can give users a sneak peek of how eligible products might look before they hit that buy button.' },
  { icon: 'fa fa-solid fa-book-open', title: 'Digital Lookbooks', desc: 'Craft curated collections that showcase categories, brands, seasons, styles, trends, or specific marketplace campaigns.' },
  { icon: 'fa fa-solid fa-chart-line', title: 'Fashion Analytics', desc: 'Dive into category demand, popular brands, pricing trends, product performance, customer preferences, and seasonal patterns.' },
  { icon: 'fa fa-solid fa-arrow-trend-up', title: 'Trend Discovery', desc: 'Leverage marketplace data to spot emerging product categories, frequently searched styles, favored brands, and shifting customer interests.' },
  { icon: 'fa fa-solid fa-mobile-screen-button', title: 'Mobile Applications', desc: 'Create responsive web, Android, and iOS experiences that empower customers to buy and sell products seamlessly across various devices.' },
  { icon: 'fa fa-solid fa-store', title: 'Store Pickup', desc: 'Enable local sellers or partner stores to provide approved collection options in addition to delivery services.' },
  { icon: 'fa fa-solid fa-route', title: 'Logistics Integration', desc: 'Link the marketplace with compatible logistics providers to keep track of delivery status and tracking details.' },
]

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React.js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next.js' },
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'HTML5' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'CSS3' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express.js' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'MongoDB' },
  { type: 'icon', icon: 'fa fa-brands fa-stripe', color: 'rgb(99, 91, 255)', title: 'Stripe' },
  { type: 'icon', icon: 'fa fa-brands fa-paypal', color: 'rgb(0, 112, 186)', title: 'PayPal' },
  { type: 'icon', icon: 'fa fa-solid fa-money-check-dollar', color: 'rgb(2, 44, 34)', title: 'Razorpay' },
  { type: 'icon', icon: 'fa fa-solid fa-credit-card', color: 'rgb(237, 28, 36)', title: 'CCAvenue' },
]

export const standOutFeatures = [
  { icon: 'fa fa-regular fa-credit-card', title: 'Secure Payments', desc: 'Process approved marketplace transactions seamlessly using the right payment gateways and secure checkout workflows.' },
  { icon: 'fa fa-solid fa-gear', title: 'Powerful Marketplace Engine', desc: 'Effortlessly manage everything from buyers and sellers to listings, conversations, orders, payments, shipping, disputes, and revenue—all within a single system.' },
  { icon: 'fa fa-solid fa-magnifying-glass', title: 'Global Search', desc: 'Make it easy for users to find the products they need quickly with keywords, categories, filters, suggestions, and sorting options.' },
  { icon: 'fa fa-solid fa-chart-line', title: 'Sales Analytics', desc: 'Keep an eye on order volume, transaction values, commissions, seller activity, and how well products are performing.' },
  { icon: 'fa fa-solid fa-user-shield', title: 'Role-Based Access', desc: 'Manage who can access what by setting permissions for buyers, sellers, moderators, support staff, and administrators.' },
  { icon: 'fa fa-solid fa-rotate-left', title: 'Refund Management', desc: 'Establish clear workflows for cancellations, returns, disputes, and refunds that align with your marketplace policies.' },
  { icon: 'fa fa-solid fa-truck', title: 'Shipping Tracker', desc: 'Enable both buyers and sellers to track delivery progress through various tracking integrations.' },
  { icon: 'fa fa-solid fa-lock', title: 'Secure Login', desc: 'Safeguard user accounts with robust authentication, session controls, verification, and protection against unauthorized login attempts.' },
  { icon: 'fa fa-solid fa-wallet', title: 'Virtual Wallet', desc: 'Give eligible users the ability to check their marketplace balances, credits, earnings, refunds, and transaction history.' },
  { icon: 'fa fa-solid fa-money-bill-transfer', title: 'Multi-Currency Support', desc: 'Make sure to display and handle the appropriate regional currencies based on the payment provider and the rules of the marketplace.' },
  { icon: 'fa fa-solid fa-bell', title: 'Notification Engine', desc: 'Keep users informed by sending out alerts via email, SMS, push notifications, or in-platform messages for orders, offers, payments, shipping, refunds, and account activities.' },
]

export const launchSteps = [
  { icon: 'fa fa-solid fa-download', title: 'Platform Installation', desc: 'Set up and deploy the approved marketplace package in the designated hosting environment.' },
  { icon: 'fa fa-solid fa-palette', title: 'Marketplace Branding', desc: 'Incorporate your business logo, colors, content, categories, banners, and any other branding elements that have been approved.' },
  { icon: 'fa fa-solid fa-sliders', title: 'Initial Configuration', desc: 'Establish key categories, currencies, languages, payment settings, shipping options, commissions, and marketplace policies.' },
  { icon: 'fa fa-solid fa-rocket', title: 'Launch Assistance', desc: 'Provide support for final testing, configuration reviews, troubleshooting, and preparing for launch in line with the agreed project scope.' },
  // { icon: 'fa fa-solid fa-book', title: 'Documentation and Training', desc: 'Offer the necessary platform documentation and guidance for administrators as part of the selected package.' },
]

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-percent', title: 'Sales Commission', desc: 'Implement a fixed fee or a percentage charge whenever a transaction goes through successfully.' },
  { icon: 'fa fa-solid fa-crown', title: 'Seller Subscription Plans', desc: 'Provide various packages that come with different product limits, promotional perks, account features, or timeframes.' },
  { icon: 'fa fa-solid fa-star', title: 'Featured Listings', desc: 'Give sellers the option to pay for better visibility in search results, category pages, and different sections of the marketplace.' },
  { icon: 'fa fa-solid fa-shield-halved', title: 'Buyer Protection Fee', desc: 'Collect a transparent service fee for providing transaction protection, support, or handling disputes.' },
]

export const additionalRevenueModels = [
  'Product Boosts — pay to elevate eligible listings higher in search results for a set duration',
  'Promotional Advertisements — revenue from sellers who want to promote products, collections, or storefronts',
  'Banner Advertising — sell banner space to relevant brands, logistics companies, or marketplace partners',
  'Listing Fees — charge sellers once they surpass a certain number of free listings',
  'Payment Processing Fee — apply a transaction-related fee that is approved and clearly communicated',
  'Premium Seller Services — photography, listing optimization, verification, authentication, shipping assistance, and promotional campaigns',
]

export const packageInclusions = [
  'Software license',
  'Source-code terms',
  'Website development',
  'Android application',
  'iOS application',
  'User and seller dashboards',
  'Administrator panel',
  'Payment-gateway integration',
  'Shipping integration',
  'Custom design',
  'Deployment assistance',
  'Support and maintenance',
]

export const pricingPlans = [
  {
    name: 'Corporate Plus', price: '$4999', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Corporate', price: '$999', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Website', true], ['Android App', false], ['iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const serverRequirements = {
  intro: 'The ideal server setup will vary based on factors like anticipated traffic, product volume, images, messages, orders, integrations, backups, and how available you want your service to be.',
  configFactors: [
    'A Linux VPS or a compatible cloud environment',
    'An SSL certificate',
    'A properly configured domain and DNS',
    'A supported Node.js runtime',
    'A compatible database version',
    'SSD storage',
    'Automated backups',
    'Monitoring and activity logs',
    'Secure media storage',
    'A CDN for marketplace images',
    'Procedures for recovery and maintenance',
  ],
}

export const faqs = [
  { q: 'What Is a Vinted Clone?', a: 'A Vinted Clone is a flexible software solution designed to help you launch a marketplace where users can easily list, discover, buy, and sell pre-owned fashion items and other approved products.' },
  { q: 'How Does a Vinted Clone Work?', a: 'Sellers kick things off by creating accounts and posting their product listings. Buyers then dive in to search for items, save their favorites, chat with sellers, make offers, and finalize their purchases. The platform takes care of everything from payments and shipping updates to commissions, reviews, notifications, and administrative controls.' },
  { q: 'What Is a White-Label Marketplace?', a: 'A white-label marketplace is like a blank canvas that you can personalize with your business name, logo, colors, content, categories, and operational settings to make it truly yours.' },
  { q: 'Is the Vinted Clone Customizable?', a: 'Absolutely! CloneScript offers a range of customization options, allowing you to tweak the branding, features, categories, listing fields, commissions, payment methods, delivery options, languages, and overall marketplace workflows.' },
  { q: 'Will I Receive Source-Code Access?', a: 'Whether you get source-code access depends on the license you choose and the agreement you sign. The quotation will clarify domain limits, usage rights, included modules, and conditions for transfer.' },
  { q: 'How Much Does a Vinted Clone Cost?', a: 'The price tag varies based on the features you need, design tweaks, mobile app development, payment integrations, shipping services, deployment, and the support plan you select. For a tailored quote, reach out to CloneScript.' },
  { q: 'Can I Manage Product Categories and Listing Fields?', a: 'Yes, indeed! Administrators have the power to manage categories, subcategories, brands, sizes, colors, conditions, materials, and any other custom listing fields you might need.' },
  { q: 'What Payment Methods Can Be Integrated?', a: 'The marketplace can seamlessly integrate with popular payment providers like Stripe, PayPal, Razorpay, CCAvenue, or any other gateway that fits your target market.' },
  { q: 'Can Shipping Providers Be Integrated?', a: 'Absolutely! You can integrate various regional or international shipping providers based on their API availability and the technical requirements they have.' },
  { q: 'How Does CloneScript Generate Revenue?', a: 'Marketplace owners have several ways to earn money, including commissions, seller subscriptions, listing fees, featured product placements, listing boosts, advertisements, and premium services for sellers.' },
  { q: 'Is the Platform Multilingual and Multi-Currency Friendly?', a: 'Definitely! The platform can be set up to support different languages, currencies, regional formats, and local marketplace configurations.' },
  { q: 'Can Buyers and Sellers Chat Directly?', a: 'Yes, they can! The private messaging system enables users to talk about products, pricing, delivery, and any other questions related to their transactions.' },
  { q: 'Does the Vinted Clone Allow for Offers and Negotiations?', a: 'Absolutely! Buyers can make offers on eligible items, and sellers have the option to accept, reject, or counter those offers.' },
  { q: 'Are Android and iOS Apps Possible?', a: 'Yes, you can develop Android and iOS applications depending on the project package you choose.' },
  { q: 'Does the Marketplace Feature AI Capabilities?', a: 'Yes, AI features can enhance the platform with image search, personalized recommendations, draft descriptions for listings, category suggestions, price guidance, and moderation support.' },
  { q: 'Is There Installation Support?', a: 'Yes, deployment assistance is available as long as the server meets the technical requirements and the necessary access is granted.' },
  { q: 'What Kind of Support Can You Expect After Launch?', a: 'After launching, support can cover a range of services like fixing bugs, helping with configurations, ongoing maintenance, updates, monitoring, and planning for future improvements based on the chosen plan.' },
  { q: 'Is the Vinted Clone Secure?', a: 'Security measures include secure authentication, input validation, role-based access controls, session protection, encrypted connections, file-upload validation, restrictions on login attempts, database safeguards, activity logging, automated backups, and regular security updates.' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Elodie Marchand',
    role: 'Fashion Reseller',
    rating: 5,
    quote: 'AI Image-Based Search means buyers find my listings just by uploading a photo of what they want.',
    avatar: '/wp-content/reviews/vinted/review-elodie-marchand.webp',
    bg: '#e0fbe8',
    accent: '#0eaa3d',
    dot: '#5ae283',
  },
  {
    name: 'Greta Lindqvist',
    role: 'Marketplace Founder',
    rating: 4.5,
    quote: 'The AI marketplace assistant handles sizing questions instantly, our buyers stopped waiting hours for replies.',
    avatar: '/wp-content/reviews/vinted/review-greta-lindqvist.webp',
    bg: '#e0fbf3',
    accent: '#0eaa7e',
    dot: '#5ae2bc',
  },
  {
    name: 'Simone Okafor',
    role: 'Thrift Store Owner',
    rating: 4.5,
    quote: 'Wishlist manager brings shoppers back the moment an item they saved goes on sale.',
    avatar: '/wp-content/reviews/vinted/review-simone-okafor.webp',
    bg: '#e0f9fb',
    accent: '#0ea2aa',
    dot: '#5adbe2',
  },
  {
    name: 'Felix Adler',
    role: 'Platform Operator',
    rating: 4.5,
    quote: 'Private chat and order history together made our dispute rate drop noticeably.',
    avatar: '/wp-content/reviews/vinted/review-felix-adler.webp',
    bg: '#e0effb',
    accent: '#0e69aa',
    dot: '#5aa9e2',
  },
  {
    name: 'Priya Sundaram',
    role: 'Vintage Seller',
    rating: 5,
    quote: 'Smart search actually understands brand names and sizes, not just keywords. Sales are way up.',
    avatar: '/wp-content/reviews/vinted/review-priya-sundaram.webp',
    bg: '#e0e4fb',
    accent: '#0e25aa',
    dot: '#5a6fe2',
  },
]
