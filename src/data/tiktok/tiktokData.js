export const featureGroups = [
  {
    id: 'customer',
    label: 'User & Creator',
    icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2026/01/user-features.webp',
    imageAlt: 'user-features',
    features: [
      { title: 'Simple Account Registration', desc: 'Users can register using an email address, mobile number, or supported social account, with age checks, consent settings, and regional requirements included where necessary.' },
      { title: 'Personalized Video Feed', desc: 'The video feed displays content based on user interests, followed accounts, viewing behaviour, preferred categories, and engagement history, helping users discover relevant videos while giving creators more reach.' },
      { title: 'Video Recording and Uploading', desc: 'Creators can record videos directly through the application or upload existing files, with trimming, captions, thumbnails, music selection, hashtags, and visibility settings included in the publishing process.' },
      { title: 'Built-In Video Editor', desc: 'The integrated editing interface lets creators prepare content without relying on third-party apps, with tools such as trimming, playback-speed adjustments, text overlays, stickers, background audio, voice recording, transitions, and colour adjustments.' },
      { title: 'Filters and Visual Effects', desc: 'Users can improve their videos with customizable filters, transitions, stickers, backgrounds, and camera effects, with new effect collections introduced for seasonal campaigns or trending formats.' },
      { title: 'Music and Audio Library', desc: 'Creators can browse approved music, sound clips, or original audio before adding them to their videos, with audio categories and usage permissions managed through the admin panel.' },
      { title: 'Captions and Hashtags', desc: 'Creators can add captions and relevant hashtags to improve content organization and discovery, with suggested hashtags helping users connect videos to suitable topics.' },
      { title: 'Draft Management', desc: 'Unfinished videos can be stored as private drafts, letting creators return later to complete their edits, with draft visibility restricted to the account owner until publishing.' },
      { title: 'Likes, Comments, and Shares', desc: 'Users can like videos, leave comments, and share content through supported channels, encouraging meaningful participation and helping creators understand what audiences enjoy.' },
      { title: 'Follow and Unfollow Creators', desc: 'Viewers can follow accounts they find interesting and receive updates when those creators publish new content, and manage their following lists directly from their profiles.' },
      { title: 'Live Streaming', desc: 'Eligible creators can host live sessions and interact with viewers in real time, with comments, reactions, virtual gifts, moderation tools, and guest participation available during broadcasts.' },
      { title: 'Co-Host and Multi-Guest Live Sessions', desc: 'Creators can invite approved participants into a live broadcast, useful for interviews, group discussions, collaborative events, learning sessions, and community conversations.' },
      { title: 'Stories and Temporary Updates', desc: 'Users can share short-lived photos or videos that remain visible for a defined period, with story duration, viewing permissions, replies, and music options fully customizable.' },
      { title: 'Private Messaging', desc: 'Users can communicate through a secure in-app messaging system, with privacy controls limiting who can send messages based on age, account relationship, or approval status.' },
      { title: 'Digital Wallet', desc: 'An integrated wallet helps users monitor purchased coins, received rewards, transactions, and eligible withdrawals, with clear histories showing charges, commissions, refunds, and balances.' },
      { title: 'Virtual Coins and Gifts', desc: 'Users may purchase optional virtual coins and use them to send digital gifts during eligible live streams, with spending limits, parental controls, and transparent pricing encouraging responsible use.' },
      { title: 'Saved and Favourite Videos', desc: 'Viewers can save videos to private collections and revisit them later, with favourites organized by category for a cleaner viewing experience.' },
      { title: 'Profile QR Code', desc: 'Each account can receive a unique QR code that helps users share and discover profiles quickly, directing viewers to the relevant public profile when scanned.' },
      { title: 'Creator Analytics', desc: 'Creators can review performance information such as video views, watch time, audience activity, follower growth, engagement, and content reach to improve future content decisions.' },
      { title: 'Notifications and Alerts', desc: 'Users can receive updates for new followers, comments, likes, messages, live-stream invitations, account activity, and platform announcements, with preferences adjustable to prevent interruptions.' },
      { title: 'Privacy Controls', desc: 'Users can choose whether their profiles are public or private, manage comments, restrict messages, control downloads, hide activity, and decide who can interact with their content.' },
      { title: 'Report and Block Tools', desc: 'Community members can report inappropriate accounts, videos, comments, or messages, and block users to stop unwanted communication and interaction.' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2026/01/admin-feature.webp',
    imageAlt: 'admin-feature',
    features: [
      { title: 'Centralized Analytics Dashboard', desc: 'The admin dashboard provides an overview of users, videos, reports, transactions, creator activity, live streams, subscriptions, and platform performance, organized into visual summaries for faster decision-making.' },
      { title: 'User Account Management', desc: 'Administrators can review accounts, update account status, verify eligible creators, respond to complaints, suspend access, or remove users who repeatedly violate platform rules.' },
      { title: 'Creator Verification', desc: 'A structured verification process helps administrators confirm qualified creators, organizations, public figures, or business accounts, with criteria that stay transparent and consistently applied.' },
      { title: 'Video Management', desc: 'Administrators can review, approve, restrict, archive, or remove published videos, with content filterable by status, creator, report count, category, or publication date.' },
      { title: 'Smart Content Moderation', desc: 'Automated screening tools assist moderators by identifying potentially unsafe videos, captions, comments, or images for review, supported by human moderation and a fair appeal process.' },
      { title: 'Live-Stream Controls', desc: 'Administrators can monitor active broadcasts, review live reports, restrict comments, end sessions, and apply penalties when community guidelines are violated.' },
      { title: 'Hashtag Management', desc: 'Admins can create promoted hashtags, review trending topics, remove harmful tags, and manage hashtag-based campaigns.' },
      { title: 'Coin and Gift Management', desc: 'Virtual coin packages, digital gift values, creator earnings, transaction limits, and platform commissions can all be configured from the admin panel.' },
      { title: 'Wallet and Withdrawal Management', desc: 'Administrators can review eligible withdrawal requests, transaction histories, payment status, commissions, and creator balances, with additional verification introduced when legally required.' },
      { title: 'Comment Moderation', desc: 'Admins and creators can filter sensitive words, restrict specific users, disable comments, review reported replies, and remove abusive discussions.' },
      { title: 'Report and Appeal Management', desc: 'Reports can be organized by category, urgency, content type, and account history, with users given a clear process for appealing moderation decisions.' },
      { title: 'Category and Trend Management', desc: 'Administrators can manage content categories, featured creators, trending videos, campaigns, and recommended topics from a central interface.' },
      { title: 'Push Notification Management', desc: 'Announcements, policy updates, promotional messages, and engagement notifications can be sent to selected user groups.' },
      { title: 'Revenue and Transaction Reports', desc: 'Admins can monitor subscription revenue, advertising income, coin purchases, gift commissions, creator payouts, refunds, and other financial activity.' },
      { title: 'Roles and Permissions', desc: 'Different administrative roles can be created for moderators, finance teams, support agents, content managers, and senior administrators, each receiving only the permissions their responsibilities require.' },
      { title: 'Platform Settings', desc: 'Administrators can configure branding, content limits, languages, currencies, commission percentages, notification rules, privacy settings, and third-party integrations.' },
    ],
  },
]

export const standOutFeatures = [
  { icon: 'fa fa-solid fa-coins', title: 'Virtual Coin System', desc: 'The platform can support digital coins that users purchase and spend on approved virtual items, with package values, purchase limits, and availability managed by administrators.' },
  { icon: 'fa fa-solid fa-gift', title: 'Virtual Gifts', desc: 'Animated or static gifts can be offered during eligible creator interactions, with the platform owner managing gift designs, coin values, and creator revenue shares.' },
  { icon: 'fa fa-solid fa-id-badge', title: 'Membership Plans', desc: 'Optional membership plans can provide an advertisement-reduced experience, profile enhancements, extended upload limits, exclusive content, or advanced creator tools.' },
  { icon: 'fa fa-solid fa-share-nodes', title: 'Social Engagement Tools', desc: 'Likes, comments, shares, follows, mentions, and replies give users multiple ways to participate in the community.' },
  { icon: 'fa fa-solid fa-gear', title: 'Account Settings', desc: 'Members can manage personal information, passwords, linked accounts, notification preferences, privacy options, blocked profiles, and login sessions.' },
  { icon: 'fa fa-solid fa-hashtag', title: 'Hashtag Suggestions', desc: 'Relevant hashtag recommendations can appear during publishing, helping creators categorize their videos more accurately.' },
  { icon: 'fa fa-solid fa-magnifying-glass', title: 'Advanced Search', desc: 'Users can search for creators, videos, hashtags, sounds, categories, or live streams through an organized search experience.' },
  { icon: 'fa fa-solid fa-user-plus', title: 'Easy Signup and Login', desc: 'Registration can support email addresses, mobile numbers, and selected social accounts, with password recovery and secure authentication also included.' },
  { icon: 'fa fa-solid fa-language', title: 'Multilingual Support', desc: 'The interface can be adapted for multiple languages to serve users across different countries and regions.' },
  { icon: 'fa fa-solid fa-circle-half-stroke', title: 'Light and Dark Display Modes', desc: 'Users can select a visual theme that suits their preferences and viewing environment.' },
  { icon: 'fa fa-solid fa-circle-play', title: 'Video Preview', desc: 'Creators can preview their videos, captions, effects, thumbnails, and audio before publishing.' },
  { icon: 'fa fa-solid fa-stamp', title: 'Video Watermark', desc: 'A configurable watermark can display the platform identity or creator username on downloaded videos.' },
  { icon: 'fa fa-solid fa-cloud-arrow-down', title: 'Offline-Friendly Drafts', desc: 'Creators can prepare or save eligible drafts when connectivity is limited and complete publishing after reconnecting.' },
]

export const addOnFeatures = [
  ['fa fa-solid fa-music', 'Story Music'],
  ['fa fa-solid fa-video', 'Collaborative Live Streaming'],
  ['fa fa-solid fa-bolt', 'Creator Live Challenges'],
  ['fa fa-solid fa-stopwatch', 'Custom Story Duration'],
  ['fa fa-solid fa-reply', 'Story Replies'],
  ['fa fa-solid fa-clock-rotate-left', 'Withdrawal History'],
  ['fa fa-solid fa-comment-slash', 'Advanced Comment Restrictions'],
  ['fa fa-solid fa-location-dot', 'Consent-Based Geotagging'],
  ['fa fa-solid fa-certificate', 'Verified Creator Profiles'],
  ['fa fa-solid fa-crown', 'Creator Subscriptions'],
  ['fa fa-solid fa-cart-shopping', 'Social Commerce Integration'],
].map(([icon, title]) => ({ icon, title }))

export const revenueBenefits = [
  { icon: 'fa fa-solid fa-rectangle-ad', title: 'In-App Advertising', desc: 'Display approved advertisements between videos, within selected content sections, or across other suitable areas of the app, shown according to the user’s age and applicable privacy requirements.' },
  { icon: 'fa fa-solid fa-id-badge', title: 'Premium Memberships', desc: 'Offer optional plans with additional features such as profile customization, extended uploads, advanced analytics, or an advertisement-reduced experience.' },
  { icon: 'fa fa-solid fa-cart-shopping', title: 'Virtual Coin Purchases', desc: 'Users can purchase optional coin packages through supported payment methods, with prices, spending limits, refunds, and usage conditions displayed clearly.' },
  { icon: 'fa fa-solid fa-gift', title: 'Virtual Gift Commissions', desc: 'The platform can retain a predefined service commission when eligible creators receive digital gifts.' },
  { icon: 'fa fa-solid fa-crown', title: 'Creator Subscriptions', desc: 'Receive a platform fee from recurring subscriptions purchased by followers of participating creators.' },
  { icon: 'fa fa-solid fa-hashtag', title: 'Promoted Hashtags and Campaigns', desc: 'Brands can pay to promote approved hashtag campaigns, creative events, or sponsored content collections.' },
  { icon: 'fa fa-solid fa-bullhorn', title: 'Sponsored Content', desc: 'Eligible creators and businesses can collaborate on clearly labelled promotional videos while following advertising disclosure requirements.' },
  { icon: 'fa fa-solid fa-shop', title: 'Social Commerce Commission', desc: 'When commerce functionality is enabled, the platform may receive a commission from eligible purchases completed through connected product listings.' },
]

export const screenshots = [
  '/wp-content/uploads/2026/01/share.webp',
  '/wp-content/uploads/2026/01/reels.webp',
  '/wp-content/uploads/2026/01/profile.webp',
  '/wp-content/uploads/2026/01/home.webp',
  '/wp-content/uploads/2026/01/comments.webp',
]

export const pricingPlans = [
  {
    name: 'Corporate Plus', price: '$4999', featured: true,
    features: [['Responsive Website', true], ['Android Application', true], ['iOS Application', true], ['Advanced Creator Functionality', true], ['Live-Streaming Integration', true], ['Virtual Coins and Gifts', true], ['Membership Management', true], ['Enhanced Moderation Controls', true], ['Custom Branding', true], ['Deployment Support', true], ['Extended Technical Assistance', true]],
  },
  {
    name: 'Corporate', price: '$3899', featured: false,
    features: [['Responsive Website', true], ['User and Creator Accounts', true], ['Video Upload and Publishing', true], ['Social Engagement Features', true], ['Admin Dashboard', true], ['Basic Monetization Tools', true], ['Standard Customization', true], ['Installation Assistance', true], ['Initial Technical Support', true], ['Android Application', false], ['iOS Application', false]],
  },
]

export const serverRequirements = [
  {
    heading: 'Server & Hosting',
    items: [
      'VPS with cPanel – Required to host the backend system and database securely.',
      'Domain Name – Must be configured and pointed to the server for proper app functionality.',
      'SSL Certificate – Secures data in transit between the app and server with encrypted HTTPS connections.',
      'Scalable Database – Stores user profiles, videos, comments, and transaction data reliably as the platform grows.',
      'Cloud Media Storage – Hosts uploaded videos, thumbnails, and profile images with reliable delivery at scale.',
      'Content Delivery Network (CDN) – Speeds up video and media loading for users across different regions.',
    ],
  },
  {
    heading: 'Core Services & APIs',
    items: [
      'Firebase (Blaze Plan) – Used for user authentication, push notifications, livestreaming support, and real-time chat functionality.',
      'Sightengine – Integrated for AI-powered image and video content moderation.',
      'Google Places API – Enables geo-tagging of posts and location-based content discovery.',
      'Video-Processing Service – Handles video compression, transcoding, and format optimization after upload.',
      'Analytics and Error Monitoring – Tracks platform performance, usage patterns, and technical issues in real time.',
      'Email or SMS Provider – Delivers account verification codes, alerts, and transactional messages to users.',
    ],
  },
  {
    heading: 'Monetization & Payments',
    items: [
      'RevenueCat – Manages in-app subscriptions and in-app purchases efficiently across platforms.',
      'Payment Gateway – Processes secure transactions for coin purchases, subscriptions, and other in-app payments.',
    ],
  },
  {
    heading: 'Livestreaming & Real-Time Interaction',
    items: [
      'ZEGOCLOUD – Powers livestreaming, PK battles, guest streaming, and real-time audience interaction.',
    ],
  },
  {
    heading: 'Engagement Enhancements',
    items: [
      'GIPHY – Allows users to add GIFs in chat messages and comments for better engagement.',
    ],
  },
  {
    heading: 'App Publishing Requirements',
    items: [
      'Google Play Console – Required to publish and manage the Android app.',
      'Apple Developer Program – Required to publish and distribute the iOS app on the App Store.',
      'Music or Media Licences – May be required where applicable before providing copyrighted audio or media through the platform.',
    ],
  },
]

export const faqs = [
  { q: 'What Is a TikTok Clone?', a: 'A TikTok Clone is a customizable short-video sharing platform that allows users to create, edit, upload, watch, and interact with video content. It can also include live streaming, creator profiles, messaging, virtual gifts, moderation, and monetization tools.' },
  { q: 'What Is a TikTok Clone Script?', a: 'A TikTok Clone Script is a ready-made software foundation containing the main modules required for a short-video platform. Its branding, design, features, integrations, and business rules can be customized before launch.' },
  { q: 'Can the Platform Be Customized?', a: 'Yes. The user interface, brand colours, logo, content categories, monetization model, user permissions, moderation rules, languages, currencies, and third-party integrations can be adjusted according to the project scope.' },
  { q: 'Does the Solution Support Android and iOS Applications?', a: 'Android and iOS applications can be included based on the selected development package. A responsive web version can also be provided.' },
  { q: 'Can Creators Host Live Streams?', a: 'Yes. Eligible creators can host live sessions, invite guests, interact with viewers, and receive approved virtual gifts. Admins can manage live permissions and moderation rules.' },
  { q: 'How Can the Platform Generate Revenue?', a: 'Potential revenue channels include advertisements, premium memberships, coin purchases, virtual gift commissions, creator subscriptions, promoted campaigns, sponsored content, and commerce commissions. Revenue results depend on audience demand, platform quality, marketing, operational costs, competition, and regulatory compliance.' },
  { q: 'Are Safety and Moderation Features Available?', a: 'Yes. The solution can include reporting, blocking, comment filters, account restrictions, age-aware settings, human moderation workflows, automated screening, appeals, and live-stream controls.' },
  { q: 'How Long Does Development Take?', a: 'The timeline depends on the number of platforms, requested features, design complexity, third-party integrations, testing requirements, and app-store approval processes. A final schedule should be prepared after the requirements are confirmed.' },
  { q: 'Can I Launch the Platform in Multiple Countries?', a: 'Yes. Multilingual interfaces, regional currencies, localized payment methods, and location-specific settings can be introduced. Legal, privacy, advertising, and child-safety requirements should be reviewed for every target region.' },
  { q: 'Do I Need Licences for Music and Audio?', a: 'You may need appropriate permissions or licences before providing copyrighted music or sound recordings through the platform. The requirements depend on the content, territory, and intended use.' },
  { q: 'Are Third-Party Service Charges Included?', a: 'External services such as hosting, streaming, content delivery, payment processing, moderation APIs, maps, SMS, email, and developer accounts may charge separate fees. These costs should be confirmed during project planning.' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Jaden Michaels',
    role: 'Content Creator',
    rating: 5,
    quote: 'Filters and effects are genuinely fun to use, my upload-to-post time dropped by half.',
    avatar: '/wp-content/reviews/tiktok/review-jaden-michaels.webp',
    bg: '#fbe0f9',
    accent: '#aa0ea1',
    dot: '#e25adb',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Livestream Host',
    rating: 4.5,
    quote: 'User livestreaming just works, no lag, no dropped viewers mid-stream.',
    avatar: '/wp-content/reviews/tiktok/review-yuki-tanaka.webp',
    bg: '#fbe0ee',
    accent: '#aa0e60',
    dot: '#e25aa2',
  },
  {
    name: 'Amelia Foster',
    role: 'Platform Founder',
    rating: 5,
    quote: 'The analytics dashboard tells us exactly which videos to promote before they even go viral.',
    avatar: '/wp-content/reviews/tiktok/review-amelia-foster.webp',
    bg: '#fbe0e5',
    accent: '#aa0e2c',
    dot: '#e25a75',
  },
  {
    name: 'Diego Ramirez',
    role: 'Social App Operator',
    rating: 4.5,
    quote: 'Wallet and gifting kept creators engaged in a way our old platform never managed.',
    avatar: '/wp-content/reviews/tiktok/review-diego-ramirez.webp',
    bg: '#fbe4e0',
    accent: '#aa290e',
    dot: '#e2725a',
  },
  {
    name: 'Grace Kim',
    role: 'Video Editor',
    rating: 4.5,
    quote: 'The chat page keeps creator-fan conversations organized without cluttering the main feed.',
    avatar: '/wp-content/reviews/tiktok/review-grace-kim.webp',
    bg: '#fbf0e0',
    accent: '#aa6c0e',
    dot: '#e2ac5a',
  },
]
