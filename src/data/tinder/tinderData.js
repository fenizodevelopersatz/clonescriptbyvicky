export const featureGroups = [
  {
    id: 'customer', label: 'User', icon: 'fas fa-user-alt',
    image: '/wp-content/uploads/2025/09/stories.webp', imageAlt: 'stories',
    features: [
      { title: 'Profile Creation', desc: 'Adult users can create detailed profiles with permitted images, interests, hobbies, general location, languages, and relationship preferences.' },
      { title: 'Search Profiles by Interests', desc: 'Users can search and filter suitable profiles based on interests, age range within adult limits, location, language, activity, and relationship goals.' },
      { title: 'Like and Match', desc: 'Users can express interest in suitable profiles. A mutual match is created when both users independently like each other.' },
      { title: 'Save Profiles', desc: 'Interesting profiles can be saved privately so users can review them later.' },
      { title: 'Create Posts and Stories', desc: 'Users can publish approved text, image, or video updates. Story visibility and replies can be controlled through privacy settings.' },
      { title: 'Personalized Feed', desc: 'The feed can display approved posts, stories, updates, and suggestions from followed or relevant adult profiles.' },
      { title: 'Real-Time Chat', desc: 'Matched adults can communicate through secure in-app text messaging. Users can mute, unmatch, block, or report conversations whenever necessary.' },
      { title: 'Profile Sharing', desc: 'Users can share their own public profile through supported channels. The privacy settings of other profiles must always be respected.' },
      { title: 'Push Notifications', desc: 'Notifications can be sent for matches, messages, likes, verification updates, subscriptions, and important account activity.' },
      { title: 'Block and Report Users', desc: 'Users can immediately block unwanted accounts and report suspicious profiles, messages, posts, or behaviour to the moderation team.' },
    ],
  },
  {
    id: 'admin', label: 'Admin', icon: 'fas fa-user-cog',
    image: '/wp-content/uploads/2025/09/admin-dashboard-1.webp', imageAlt: 'admin dashboard',
    features: [
      { title: 'User Management', desc: 'Administrators can review profiles, account status, subscriptions, verification information, and reported activity.' },
      { title: 'Verification Requests', desc: 'Admins can approve, reject, or request additional information for adult age, identity, email, mobile, or photo verification.' },
      { title: 'Report Management', desc: 'Reported accounts, messages, posts, and stories can be reviewed from the admin dashboard. Administrators can issue warnings, restrict accounts, or remove serious violations.' },
      { title: 'Post and Story Management', desc: 'Admins can monitor and remove content that violates community standards.' },
      { title: 'Subscription Management', desc: 'Membership plans, prices, billing periods, premium features, and renewal settings can be managed centrally.' },
      { title: 'Coin and Gift Management', desc: 'Administrators can configure virtual coin packages, digital gifts, transaction limits, and platform fees.' },
      { title: 'Push Notification Management', desc: 'Security alerts, policy updates, subscription reminders, and platform announcements can be sent to selected users.' },
      { title: 'Dashboard and Reports', desc: 'The dashboard can display user totals, active subscriptions, matches, reports, posts, transactions, and platform performance.' },
    ],
  },
]

export const standardFeatures = [
  { icon: 'fas fa-user-plus', title: 'Follow and Unfollow', desc: 'Users can follow suitable public profiles and remove connections whenever they choose.' },
  { icon: 'fas fa-bookmark', title: 'Save Profiles for Later', desc: 'Profiles can be bookmarked privately for future viewing.' },
  { icon: 'fas fa-thumbs-up', title: 'Like and Unlike Profiles', desc: 'Simple controls allow users to express or withdraw interest.' },
  { icon: 'fas fa-heart', title: 'Mutual Matching', desc: 'Communication can be limited to eligible adults who have shown mutual interest.' },
  { icon: 'fas fa-lock', title: 'Secure Login', desc: 'Registration can support email, mobile number, OTP, Google, or Apple authentication.' },
  { icon: 'fas fa-comments', title: 'Real-Time Messaging', desc: 'Matched users can exchange text and permitted media through the in-app chat system.' },
  { icon: 'fas fa-check-circle', title: 'Profile Verification', desc: 'Photo, email, mobile, identity, and adult age-verification options help reduce fake accounts.' },
  { icon: 'fas fa-gifts', title: 'Virtual Gifts', desc: 'Users can send approved digital gifts using optional virtual coins.' },
  { icon: 'fas fa-language', title: 'Multilingual Support', desc: 'The application can support multiple languages for regional and international audiences.' },
  { icon: 'fas fa-user-shield', title: 'Privacy Controls', desc: 'Users can manage profile visibility, online status, story audience, message permissions, and location details.' },
]

export const addOnFeatures = [
  { icon: 'fas fa-file-video', title: 'Livestreaming', desc: 'Verified adult users can host moderated live sessions with reporting, comment controls, and admin monitoring.' },
  { icon: 'fas fa-coins', title: 'Coin Packages', desc: 'Admins can create virtual coin packages for approved premium features and digital gifts.' },
  { icon: 'fas fa-wallet', title: 'Redeem Requests', desc: 'Eligible users can submit withdrawal or redemption requests according to platform and regional payment rules.' },
  { icon: 'fas fa-tasks', title: 'Interest Lists', desc: 'Users can add interest tags to their profiles to improve discovery and matching suggestions.' },
  { icon: 'fas fa-check-circle', title: 'Verified Profile Badge', desc: 'Approved adult profiles can receive a verification badge after completing the required checks.' },
  { icon: 'fas fa-bolt', title: 'Profile Boosts', desc: 'Users can purchase clearly labelled temporary visibility boosts without receiving guaranteed matches.' },
  { icon: 'fas fa-sliders-h', title: 'Advanced Discovery Filters', desc: 'Premium members can access additional filters for interests, languages, location range, and relationship preferences.' },
  { icon: 'fas fa-video', title: 'Voice and Video Calls', desc: 'Mutually connected verified adults can request voice or video communication with clear consent controls.' },
]

export const revenueBenefits = [
  { icon: 'fas fa-hand-holding-usd', title: 'Subscription Plans', desc: 'Users can subscribe to optional plans that offer advanced filters, profile boosts, additional visibility, or premium account tools.' },
  { icon: 'fas fa-ad', title: 'In-App Advertising', desc: 'Age-appropriate advertisements can be displayed in selected sections of the platform.' },
  { icon: 'fas fa-coins', title: 'Virtual Coins and Gifts', desc: 'The platform can receive a service fee from optional coin purchases and approved digital gift transactions.' },
  { icon: 'fas fa-bolt', title: 'Premium Profile Boosts', desc: 'Users can pay to increase their profile visibility temporarily in suitable discovery sections.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$2499', featured: true,
    features: [['Single-Domain Licence', true], ['One-Time Payment Option', true], ['Source-Code Access Based on Licence Terms', true], ['Android Application', true], ['iOS Application', true], ['Responsive Web Platform', true], ['Admin Dashboard', true], ['Installation Assistance', true], ['App-Store Submission Support', true], ['Initial Technical Assistance', true], ['Access to Agreed Platform Features', true]],
  },
]

export const faqs = [
  { q: 'What is a Dating Script?', a: 'A Dating Script is customizable software used to create an adults-only matchmaking website or mobile application with profiles, discovery, matching, communication, subscriptions, and moderation tools.' },
  { q: 'Is the platform only for adults?', a: 'Yes. Access must be restricted to users aged 18 or older through suitable age-assurance and verification measures.' },
  { q: 'Why should I use a Dating Script?', a: 'A pre-built script can reduce initial development time while allowing you to customize the design, features, matching preferences, memberships, and safety settings.' },
  { q: 'Can the platform be customized?', a: 'Yes. The branding, interface, features, languages, payment methods, membership plans, privacy controls, and integrations can be customized.' },
  { q: 'What are the essential features?', a: 'Important features include adult age verification, profile creation, profile discovery, mutual matching, real-time chat, blocking, reporting, subscriptions, and admin moderation.' },
  { q: 'How much does a Dating Script cost?', a: 'The cost depends on the applications, features, design, integrations, verification process, moderation tools, and customization requirements.' },
]

export const serverRequirements = {
  intro: 'Typical requirements may include:',
  items: [
    'Domain name',
    'VPS or cloud hosting',
    'SSL certificate',
    'Scalable database',
    'Firebase or another real-time service',
    'Push-notification service',
    'Secure media storage',
    'Payment gateway',
    'Age and identity-verification service',
    'Content-moderation solution',
    'Google Play Console account',
    'Apple Developer Program account',
  ],
  outro: 'Final server requirements depend on the selected technology and expected platform activity.',
}

export const screenshots = [
  { image: '/wp-content/uploads/2025/09/filter.webp', alt: 'Search and Filters' },
  { image: '/wp-content/uploads/2025/09/stories.webp', alt: 'Feed and Stories' },
  { image: '/wp-content/uploads/2025/09/home.webp', alt: 'Profile Discovery' },
  { image: '/wp-content/uploads/2025/09/search-1.webp', alt: 'Likes and Matches' },
  { image: '/wp-content/uploads/2025/09/create-post.webp', alt: 'Interest Selection' },
  { image: '/wp-content/uploads/2025/09/profile-2.webp', alt: 'Profile Creation' },
]

/* Five customer reviews with real per-card markup, replacing any shared placeholder
   testimonial content on this page. Avatars are circular-cropped AI-generated (StyleGAN2,
   no real person) portraits, unique to this page across the whole site. */
export const customerReviews = [
  {
    name: 'Lucas Bennett',
    role: 'App User',
    rating: 4.5,
    quote: 'Search profiles by interests actually matched me with people who share what I care about, not just proximity.',
    avatar: '/wp-content/reviews/tinder/review-lucas-bennett.webp',
    bg: '#fbe0f8',
    accent: '#aa0e98',
    dot: '#e25ad3',
  },
  {
    name: 'Freya Johansson',
    role: 'Platform Founder',
    rating: 5,
    quote: 'Feed section and stories together kept engagement up way past what our first version managed.',
    avatar: '/wp-content/reviews/tinder/review-freya-johansson.webp',
    bg: '#fbe0ec',
    accent: '#aa0e57',
    dot: '#e25a9a',
  },
  {
    name: 'Noah Castillo',
    role: 'Product Lead',
    rating: 4.5,
    quote: 'Saved profiles made it painless for users to revisit someone they were not ready to message yet.',
    avatar: '/wp-content/reviews/tinder/review-noah-castillo.webp',
    bg: '#fbe0e3',
    accent: '#aa0e23',
    dot: '#e25a6d',
  },
  {
    name: 'Aisha Rahman',
    role: 'Community Manager',
    rating: 5,
    quote: 'Video and image stories gave our users a more honest way to show who they are before matching.',
    avatar: '/wp-content/reviews/tinder/review-aisha-rahman.webp',
    bg: '#fbe6e0',
    accent: '#aa310e',
    dot: '#e2795a',
  },
  {
    name: 'Ethan Walsh',
    role: 'Startup Founder',
    rating: 4.5,
    quote: 'Share and reposts turned our early users into our best source of new signups.',
    avatar: '/wp-content/reviews/tinder/review-ethan-walsh.webp',
    bg: '#fbf1e0',
    accent: '#aa750e',
    dot: '#e2b45a',
  },
]
