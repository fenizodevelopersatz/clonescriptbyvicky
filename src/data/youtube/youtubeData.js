export const standardFeatures = [
  { icon: 'far fa-play-circle', title: 'Unlimited Music and Short Videos' },
  { icon: 'fas fa-grip-vertical', title: 'Category-Based Browsing' },
  { icon: 'fas fa-user-cog', title: 'Video Rental Management' },
  { icon: 'fas fa-upload', title: 'Simple Video Publishing' },
  { icon: 'fas fa-language', title: 'Multiple Language Support' },
  { icon: 'fas fa-history', title: 'Watch-History Access' },
  { icon: 'fas fa-sign-in-alt', title: 'Secure User Authentication' },
  { icon: 'fas fa-caret-square-right', title: 'High-Quality Video Playback' },
  { icon: 'fas fa-eye', title: 'Responsive Web Platform' },
  { icon: 'fas fa-music', title: 'Music Discovery' },
  { icon: 'fas fa-money-check-alt', title: 'Payment Gateway Integration' },
  { icon: 'fas fa-align-right', title: 'Right-to-Left Language Layouts' },
]

export const addOnFeatures = [
  { icon: 'fas fa-ad', title: 'Custom Advertising', desc: 'Create advertisements for products, services, campaigns, or events and display them in approved platform locations.' },
  { icon: 'fab fa-buysellads', title: 'Mobile Advertising Integration', desc: 'Connect supported mobile advertising services to generate revenue from application activity.' },
  { icon: 'fas fa-wallet', title: 'Digital Wallet and Coins', desc: 'Allow users to add funds, purchase digital coins, access premium functionality, and complete supported in-app transactions.' },
  { icon: 'fab fa-youtube', title: 'Creator Channel Management', desc: 'Give creators the tools needed to configure channels, publish content, manage subscribers, and review performance.' },
  { icon: 'far fa-file-video', title: 'Premium Video Rentals', desc: 'Enable creators or platform administrators to make selected content available for temporary paid access.' },
  { icon: 'fas fa-coins', title: 'Financial Administration', desc: 'Monitor advertising income, subscription revenue, video-rental payments, creator earnings, and platform settlements.' },
  { icon: 'fas fa-clipboard-list', title: 'Flexible Subscription Packages', desc: 'Create multiple plans with different prices, benefits, content access, and renewal periods.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Multiple Monetization Models', desc: 'Generate revenue through advertisements, paid videos, donations, subscriptions, creator partnerships, and other eligible methods.' },
  { icon: 'fas fa-file-audio', title: 'Playlist Administration', desc: 'Allow users to organize videos into collections for courses, tutorials, series, music, entertainment, or saved content.' },
]

export const multimediaFeatures = [
  { icon: 'fas fa-music', title: 'Music and Podcasts' },
  { icon: 'fas fa-video', title: 'On-Demand Video Streaming' },
  { icon: 'fas fa-podcast', title: 'Digital Radio' },
  { icon: 'fas fa-play-circle', title: 'Live Broadcasting' },
  { icon: 'far fa-file-video', title: 'Online Radio Streaming' },
  { icon: 'fas fa-photo-video', title: 'Shorts and Reels' },
]

export const revenueBenefits = [
  { icon: 'fas fa-audio-description', title: 'Video Advertising Revenue', desc: 'Display advertisements before, during, or after eligible videos and generate income from views, impressions, or clicks.' },
  { icon: 'fas fa-hand-holding-usd', title: 'Pay-Per-View Content', desc: 'Allow users to pay once for access to premium videos, workshops, events, courses, or special broadcasts.' },
  { icon: 'fas fa-dollar-sign', title: 'Creator Partnerships', desc: 'Work with selected creators through revenue-sharing arrangements, exclusive uploads, or branded programmes.' },
  { icon: 'fas fa-check-square', title: 'Premium Subscription Plans', desc: 'Offer paid memberships that provide ad-free viewing, exclusive content, premium features, or other benefits.' },
  { icon: 'fas fa-users', title: 'Channel Memberships', desc: 'Allow viewers to support eligible creators through recurring membership plans.' },
  { icon: 'far fa-file-video', title: 'Video Rental Charges', desc: 'Generate revenue by making selected content available for a fixed rental period.' },
  { icon: 'fas fa-gift', title: 'Digital Gifts and Donations', desc: 'Let viewers support creators through eligible virtual gifts, coins, or direct contributions.' },
  { icon: 'fas fa-handshake', title: 'Sponsored Content', desc: 'Enable approved promotional collaborations between brands, creators, and the platform.' },
]

export const featureGroups = [
  {
    id: 'users',
    label: 'Users',
    icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2025/08/youtube-app-6-scaled.webp',
    imageAlt: 'youtube app users',
    features: [
      { title: 'Short-Form Video Publishing', desc: 'Enable creators to produce and share short videos using supported music, captions, effects, and editing options.' },
      { title: 'Personal User Profiles', desc: 'Allow viewers and creators to maintain profile details, display images, preferences, activity, and account settings.' },
      { title: 'Video Channel Creation', desc: 'Give users the ability to create branded channels, upload content, attract subscribers, and manage their audience.' },
      { title: 'Video Upload Management', desc: 'Let creators upload media, add thumbnails, write descriptions, select categories, include tags, and configure visibility.' },
      { title: 'Advanced Video Search', desc: 'Help viewers find relevant content using keywords, categories, channels, tags, and other filters.' },
      { title: 'Personalized Video Feed', desc: 'Display content recommendations based on viewing history, interests, subscriptions, and engagement behaviour.' },
      { title: 'Likes, Comments, and Reactions', desc: 'Allow viewers to respond to videos and participate in discussions around published content.' },
      { title: 'Channel Subscriptions', desc: 'Let users follow preferred creators and receive eligible updates when new content is published.' },
      { title: 'Watch-Later List', desc: 'Enable viewers to save videos and return to them at a more convenient time.' },
      { title: 'Playlist Creation', desc: 'Allow users and creators to group related videos into organized playlists.' },
      { title: 'Viewing History', desc: 'Give users access to previously watched content so they can revisit videos easily.' },
      { title: 'Live Video Streaming', desc: 'Enable eligible creators to broadcast events, discussions, lessons, performances, or other live content.' },
      { title: 'Content Sharing', desc: 'Let viewers share video links through supported communication and social platforms.' },
      { title: 'Creator Analytics', desc: 'Provide channel owners with information about views, watch time, audience engagement, and content performance.' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin',
    icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2025/09/admin-panel.webp',
    imageAlt: 'youtube admin panel',
    features: [
      { title: 'Central Platform Dashboard', desc: 'Monitor users, channels, videos, subscriptions, payments, reports, and overall platform activity.' },
      { title: 'User Account Management', desc: 'Review profiles, update account status, assign permissions, and respond to account-related issues.' },
      { title: 'Creator and Channel Management', desc: 'Approve eligible creators, monitor channels, review activity, and manage verification status.' },
      { title: 'Video Content Administration', desc: 'Review uploaded videos, categories, visibility, reports, and publication status.' },
      { title: 'Content Moderation Tools', desc: 'Manage reported media, comments, user behaviour, and community-policy violations.' },
      { title: 'Category Management', desc: 'Create and organize categories for entertainment, education, music, gaming, news, lifestyle, and other content.' },
      { title: 'Subscription Management', desc: 'Configure free and premium plans, pricing, renewal periods, user benefits, and content access.' },
      { title: 'Advertising Control', desc: 'Manage ad placements, campaigns, pricing, availability, and performance information.' },
      { title: 'Payment and Payout Management', desc: 'Monitor subscriptions, rentals, creator earnings, platform revenue, refunds, and withdrawals.' },
      { title: 'Analytics and Reporting', desc: 'Understand user growth, creator activity, popular content, watch time, subscriptions, and revenue.' },
    ],
  },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$3899', featured: true,
    features: [
      ['1 Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true],
      ['Unlimited Updates', true], ['Free Installation', true], ['Android App', true], ['iOS App', true],
      ['Mobile App Submission', true], ['Access All Features', true],
    ],
  },
]

export const faqs = [
  { q: 'What Is a YouTube Clone?', a: 'A YouTube Clone is a ready-made software solution for building a video-sharing and streaming platform with user accounts, channels, uploads, subscriptions, and monetization.' },
  { q: 'Can the YouTube Clone Generate Revenue?', a: 'Yes. The platform can support advertisements, premium subscriptions, pay-per-view content, rentals, creator partnerships, donations, and other revenue options.' },
  { q: 'Can the Platform Be Customized for My Brand?', a: 'Yes. The design, colours, pages, media modules, features, payment methods, subscription plans, and user experience can be customized.' },
  { q: 'How Much Does It Cost to Build a YouTube Clone?', a: 'The final development cost depends on the required features, mobile applications, third-party integrations, streaming infrastructure, storage, and customization.' },
  { q: 'What Does Customizable Source-Code Access Mean?', a: 'It means authorized developers can inspect and modify the platform code within the conditions of the selected licence.' },
  { q: 'Does the Platform Support Live Streaming?', a: 'Live-streaming functionality can be integrated for eligible creators, events, classes, interviews, or other approved broadcasts.' },
  { q: 'Can Users Create Their Own Channels?', a: 'Yes. Approved users can create channels, upload content, manage subscribers, organize playlists, and review channel performance.' },
  { q: 'Are Android and iOS Applications Available?', a: 'Mobile applications can be included according to the selected package and project requirements.' },
  { q: 'Can the Platform Support Multiple Languages?', a: 'Supported translation and right-to-left interface options can be added for different regions.' },
  { q: 'Is Technical Support Available After Launch?', a: 'Technical assistance can be provided for installation, configuration, eligible updates, troubleshooting, and platform maintenance.' },
]

export const serverRequirements = {
  intro: 'A video-streaming platform requires a suitable VPS or cloud environment with enough processing capacity, memory, SSD storage, bandwidth, and security. The technical environment may include:',
  items: [
    'VPS or scalable cloud server',
    'Compatible web server',
    'Supported backend runtime',
    'Secure database',
    'Media-processing tools',
    'Video and image storage',
    'Content-delivery network',
    'HTTPS certificate',
    'Backup and recovery system',
    'Monitoring and analytics',
  ],
  outro: 'The final server configuration should be selected according to expected users, video volume, streaming quality, storage requirements, concurrent viewers, live broadcasts, and future growth.',
}

export const screenshots = [
  '/wp-content/uploads/2025/08/youtube-app-8-scaled.webp',
  '/wp-content/uploads/2025/08/youtube-app-7-scaled.webp',
  '/wp-content/uploads/2025/08/youtube-app-6-scaled.webp',
  '/wp-content/uploads/2025/09/youtube-clone-home.webp',
  '/wp-content/uploads/2025/08/youtube-app-2-scaled.webp',
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Isaac Bergstrom',
    role: 'Content Platform Founder',
    rating: 5,
    quote: 'Unlimited music and shorts kept creators on our platform instead of splitting content elsewhere.',
    avatar: '/wp-content/reviews/youtube/review-isaac-bergstrom.webp',
    bg: '#fbe0f4',
    accent: '#aa0e83',
    dot: '#e25ac0',
  },
  {
    name: 'Priyanka Bhatt',
    role: 'Video Creator',
    rating: 4.5,
    quote: 'Multilingual support let us reach viewers we could not before, our watch time doubled.',
    avatar: '/wp-content/reviews/youtube/review-priyanka-bhatt.webp',
    bg: '#fbe0e9',
    accent: '#aa0e42',
    dot: '#e25a87',
  },
  {
    name: 'Marcus Delacroix',
    role: 'Streaming Operator',
    rating: 4.5,
    quote: 'History view and category browsing keep viewers coming back for more without getting lost.',
    avatar: '/wp-content/reviews/youtube/review-marcus-delacroix.webp',
    bg: '#fbe0e0',
    accent: '#aa0e0e',
    dot: '#e25a5a',
  },
  {
    name: 'Fiona Sutherland',
    role: 'Platform Manager',
    rating: 4.5,
    quote: 'Upload videos is fast and reliable even at scale, our creators stopped complaining about failed uploads.',
    avatar: '/wp-content/reviews/youtube/review-fiona-sutherland.webp',
    bg: '#fbeae0',
    accent: '#aa470e',
    dot: '#e28c5a',
  },
  {
    name: 'Arjun Verma',
    role: 'Media Founder',
    rating: 5,
    quote: 'Rent management opened up a premium content revenue stream we did not have before.',
    avatar: '/wp-content/reviews/youtube/review-arjun-verma.webp',
    bg: '#fbf5e0',
    accent: '#aa8b0e',
    dot: '#e2c75a',
  },
]
