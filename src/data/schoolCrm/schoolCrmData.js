export const coreModules = [
  { icon: 'fa fa-solid fa-user-graduate', title: 'Admissions & Enrollment', desc: 'Move student admissions online — applications, document uploads, and seat allotment in one flow.' },
  { icon: 'fa fa-solid fa-fingerprint', title: 'Attendance Management', desc: 'Mark and track daily attendance for students and staff, with biometric and app-based check-in support.' },
  { icon: 'fa fa-solid fa-money-bill-wave', title: 'Fee Management', desc: 'Generate fee structures, send reminders, and collect payments online with full receipt history.' },
  { icon: 'fa fa-solid fa-file-pen', title: 'Exams & Report Cards', desc: 'Plan exams, enter marks, and auto-generate report cards in your school’s own format.' },
  { icon: 'fa fa-solid fa-calendar-days', title: 'Timetable & Scheduling', desc: 'Build class and staff timetables that update automatically when a period or teacher changes.' },
  { icon: 'fa fa-solid fa-chalkboard-user', title: 'Online Classes', desc: 'Host live classes and share recordings, assignments, and study material with students.' },
  { icon: 'fa fa-solid fa-book-open', title: 'Library Management', desc: 'Track book inventory, issue and return records, and due-date reminders.' },
  { icon: 'fa fa-solid fa-bus', title: 'Transport Tracking', desc: 'Track school buses in real time and keep parents informed of pickup and drop timings.' },
  { icon: 'fa fa-solid fa-comments', title: 'Notices & Communication', desc: 'Send announcements, circulars, and homework updates to parents by app, SMS, or email.' },
]

export const techStack = [
  { type: 'icon', icon: 'fa fa-brands fa-html5', color: 'rgb(227, 79, 38)', title: 'Html' },
  { type: 'image', image: '/wp-content/uploads/2026/04/express.webp', color: 'rgb(239, 216, 29)', title: 'Express Js' },
  { type: 'icon', icon: 'fa fa-brands fa-css', color: 'rgb(21, 114, 182)', title: 'Css' },
  { type: 'image', image: '/wp-content/uploads/2026/04/mongodb.webp', color: 'rgb(71, 162, 72)', title: 'Mongodb' },
  { type: 'icon', icon: 'fa fa-brands fa-react', color: 'rgb(97, 218, 251)', title: 'React Js' },
  { type: 'image', image: '/wp-content/uploads/2026/05/nextjs.webp', color: 'rgb(121, 82, 179)', title: 'Next Js' },
  { type: 'icon', icon: 'fa fa-brands fa-node', color: 'rgb(104, 160, 99)', title: 'Node Js' },
  { type: 'image', image: '/wp-content/uploads/2022/01/mysql-1.webp', color: 'rgb(0, 95, 133)', title: 'MySQL' },
  { type: 'icon', icon: 'fa fa-solid fa-database', color: 'rgb(51, 103, 145)', title: 'PostgreSQL' },
]

export const launchSteps = [
  { icon: 'icon-et-download', title: 'Platform Installation', desc: 'Receive complete installation assistance for a quick and hassle-free launch.' },
  { icon: 'icon-ion-ios-color-wand', title: 'Brand Personalization', desc: 'Customize your school’s logo, colors, and content to reflect your identity.' },
  { icon: 'icon-ion-ios-rocket', title: 'Launch Support', desc: 'Get expert assistance to help you launch and manage your school platform successfully.' },
]

export const pricingPlans = [
  {
    name: 'Corporate', price: '$1999', featured: true,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', true], ['iOS App', true], ['Mobile App Submission', true], ['Access All Features', true]],
  },
  {
    name: 'Startup', price: '$999', featured: false,
    features: [['Single Domain license', true], ['One-Time Payment', true], ['100% Source Code', true], ['3 Months Support', true], ['Unlimited Updates', true], ['Free Installation', true], ['Android App', false], ['iOS App', false], ['Mobile App Submission', false], ['Access All Features', true]],
  },
]

export const comparisonOurs = [
  'Ready-made school management solution built for admins, teachers, and parents.',
  'Well-structured development with clear communication and documentation.',
  'Transparent pricing with no hidden costs.',
  'Fast deployment with a committed delivery schedule.',
  'One-time payment with complete ownership.',
  'Dedicated support team to assist throughout the project.',
  'Free installation and deployment assistance.',
  'Full source code access and customization flexibility.',
]

export const comparisonOthers = [
  'Generic CRM solutions with limited education-specific functionality.',
  'Unclear development process with limited project visibility.',
  'Additional charges may arise during development.',
  'Delayed launches due to undefined timelines.',
  'Recurring subscription or annual renewal fees.',
  'Limited support and slower response times.',
  'Installation may require additional fees.',
  'Restricted access with limited customization options.',
]

export const faqs = [
  { q: 'What is a School CRM?', a: 'A School CRM is software that helps educational institutions manage admission enquiries, students, parents, teachers, fees, communication, and administrative activities.' },
  { q: 'How is a School CRM different from an LMS?', a: 'A School CRM focuses on admissions, relationships, communication, and administration. An LMS mainly handles lessons, learning materials, assignments, and online assessments. Both systems can be integrated.' },
  { q: 'Can the School CRM be customized?', a: 'Yes. The modules, branding, workflows, user roles, reports, communication methods, and integrations can be customized.' },
  { q: 'Can parents access the platform?', a: 'Yes. Authorized parents can access permitted information such as attendance, fees, announcements, academic progress, and meeting updates.' },
  { q: 'Does the system support multiple branches?', a: 'Multi-branch management can be included to control separate locations through one administrative platform.' },
  { q: 'How much does School CRM software cost?', a: 'The cost depends on the required modules, number of users, branches, mobile applications, integrations, and customization.' },
]

/* Five customer reviews, split out of the single wp-content/reviews/school-review.png
   collage into real markup. `avatar` files are circular crops taken from that same
   collage; `bg`/`accent` reproduce each original card's pastel/accent pair. */
export const customerReviews = [
  {
    name: 'Dr. Suresh Menon',
    role: 'School Principal',
    rating: 4.5,
    quote: 'CloneScript School CRM has revolutionized our entire school’s fee management. It saves us days of work each month and parents find it very convenient. Outstanding features.',
    avatar: '/wp-content/reviews/school/review-suresh-menon.webp',
    bg: '#e3ddf9',
    accent: '#6836b0',
    dot: '#9872dc',
  },
  {
    name: 'Neha Kulkarni',
    role: 'Academic Coordinator',
    rating: 5,
    quote: 'The parent communication module is incredible. We can send instant updates, homework assignments, and announcements directly to parents, improving engagement across the board.',
    avatar: '/wp-content/reviews/school/review-neha-kulkarni.webp',
    bg: '#fcf1d3',
    accent: '#b98a2c',
    dot: '#dbb052',
  },
  {
    name: 'Fahad Khan',
    role: 'Parent',
    rating: 4,
    quote: 'I love how easy it is to track my son’s academic progress, view his report cards, and check his attendance all through the app. Highly recommended!',
    avatar: '/wp-content/reviews/school/review-fahad-khan.webp',
    bg: '#dde8fa',
    accent: '#3f6f9f',
    dot: '#5785bb',
  },
  {
    name: 'Renuka Das',
    role: 'Senior Teacher',
    rating: 5,
    quote: 'Scheduling has been seamless this year. The platform’s automated scheduling features are a lifesaver, avoiding timetable clashes and streamlining faculty assignments perfectly.',
    avatar: '/wp-content/reviews/school/review-renuka-das.webp',
    bg: '#ddf5e4',
    accent: '#3f8a66',
    dot: '#5aa785',
  },
  {
    name: 'Rahul Sharma',
    role: 'School Administrator',
    rating: 4.5,
    quote: 'The student records system is very well structured and secure. Integrations with other essential tools like online fee portals are perfect, making our job so much easier.',
    avatar: '/wp-content/reviews/school/review-rahul-sharma.webp',
    bg: '#fedde2',
    accent: '#b34a66',
    dot: '#c9617c',
  },
]

export const whyChooseUsPoints = [
  'Centralized student information',
  'Admission enquiry management',
  'Automated follow-ups',
  'Parent and teacher communication',
  'Attendance tracking',
  'Fee collection and reminders',
  'Teacher and staff management',
  'Academic reporting',
  'Mobile-friendly access',
  'Role-based permissions',
  'Multiple branch management',
  'Custom dashboards and reports',
]

export const admissionManagementFeatures = [
  { icon: 'fa fa-solid fa-inbox', title: 'Enquiry Management', desc: 'Capture enquiries received through the school website, telephone, email, walk-ins, campaigns, and social channels.' },
  { icon: 'fa fa-solid fa-user-tag', title: 'Lead Assignment', desc: 'Assign admission enquiries to specific counsellors or staff members based on location, class, programme, or availability.' },
  { icon: 'fa fa-solid fa-bell', title: 'Follow-Up Reminders', desc: 'Schedule calls, meetings, counselling sessions, and application reminders so the admission team does not miss important follow-ups.' },
  { icon: 'fa fa-solid fa-diagram-project', title: 'Admission Pipeline', desc: 'Track each applicant through stages such as new enquiry, contacted, counselling scheduled, application submitted, document review, selected, and enrolled.' },
  { icon: 'fa fa-solid fa-file-circle-plus', title: 'Online Application Forms', desc: 'Parents can submit admission applications and upload required documents through a secure online form.' },
  { icon: 'fa fa-solid fa-file-shield', title: 'Document Verification', desc: 'Authorized staff can review birth certificates, previous academic records, address documents, and other required information.' },
  { icon: 'fa fa-solid fa-circle-check', title: 'Admission Status Updates', desc: 'Parents can receive updates when an application is submitted, reviewed, approved, rejected, or moved to another stage.' },
]

export const studentManagementFeatures = [
  { icon: 'fa fa-solid fa-address-card', title: 'Centralized Student Profiles', desc: 'Maintain student information, guardian details, academic records, attendance, fees, documents, and communication history in one profile.' },
  { icon: 'fa fa-solid fa-sitemap', title: 'Class and Section Management', desc: 'Organize students according to academic year, grade, class, section, course, or programme.' },
  { icon: 'fa fa-solid fa-fingerprint', title: 'Attendance Tracking', desc: 'Teachers can record daily attendance, while administrators and authorized parents can review attendance information.' },
  { icon: 'fa fa-solid fa-file-lines', title: 'Academic Records', desc: 'Store marks, grades, assessments, progress reports, achievements, and teacher feedback.' },
  { icon: 'fa fa-solid fa-folder-open', title: 'Student Document Management', desc: 'Upload and manage permitted academic, admission, identity, and consent documents securely.' },
  { icon: 'fa fa-solid fa-arrow-up-right-dots', title: 'Student Promotion', desc: 'Move eligible students to the next academic year, class, or section while maintaining their previous records.' },
  { icon: 'fa fa-solid fa-people-arrows', title: 'Transfer and Alumni Records', desc: 'Maintain organized records for transferred students, graduates, and alumni.' },
]

export const parentCommunicationFeatures = [
  { icon: 'fa fa-solid fa-house-user', title: 'Parent Portal', desc: 'Parents can access permitted information about attendance, fees, announcements, academic progress, and upcoming events.' },
  { icon: 'fa fa-solid fa-user-graduate', title: 'Student Portal', desc: 'Students can view timetables, assignments, announcements, results, and other educational information allowed by the school.' },
  { icon: 'fa fa-solid fa-bullhorn', title: 'Announcements', desc: 'Send school notices, holiday updates, examination schedules, event information, and urgent communication.' },
  { icon: 'fa fa-solid fa-envelope', title: 'SMS and Email Integration', desc: 'Important reminders and notifications can be delivered through integrated email or SMS services.' },
  { icon: 'fa fa-solid fa-bell', title: 'Push Notifications', desc: 'Mobile users can receive real-time alerts about attendance, payments, assignments, meetings, and school announcements.' },
  { icon: 'fa fa-solid fa-calendar-check', title: 'Meeting Scheduling', desc: 'Parents can request or schedule meetings with authorized teachers and school staff.' },
]

export const teacherStaffFeatures = [
  { icon: 'fa fa-solid fa-chalkboard-user', title: 'Teacher Profiles', desc: 'Maintain staff information, qualifications, assigned classes, subjects, schedules, and permitted documents.' },
  { icon: 'fa fa-solid fa-calendar-days', title: 'Timetable Management', desc: 'Create and manage class, subject, teacher, and room schedules from one interface.' },
  { icon: 'fa fa-solid fa-clipboard-check', title: 'Attendance Entry', desc: 'Teachers can record and update student attendance for their assigned classes.' },
  { icon: 'fa fa-solid fa-clipboard-list', title: 'Assignment Management', desc: 'Teachers can publish assignments, attach learning materials, set deadlines, and review submissions.' },
  { icon: 'fa fa-solid fa-graduation-cap', title: 'Marks and Grades', desc: 'Authorized teachers can enter marks, calculate grades, and prepare progress reports.' },
  { icon: 'fa fa-solid fa-comments', title: 'Internal Communication', desc: 'Teachers and staff can receive notices, task updates, meeting schedules, and institutional announcements.' },
]

export const feePaymentFeatures = [
  { icon: 'fa fa-solid fa-sliders', title: 'Fee Structure Management', desc: 'Create fee structures based on class, programme, academic year, transport, or additional services.' },
  { icon: 'fa fa-solid fa-credit-card', title: 'Online Fee Payment', desc: 'Parents can pay eligible fees through supported payment gateways.' },
  { icon: 'fa fa-solid fa-bell', title: 'Automated Fee Reminders', desc: 'Send reminders for upcoming, pending, and overdue payments.' },
  { icon: 'fa fa-solid fa-percent', title: 'Discounts and Scholarships', desc: 'Manage approved concessions, sibling discounts, scholarships, and special fee arrangements.' },
  { icon: 'fa fa-solid fa-receipt', title: 'Digital Receipts', desc: 'Generate downloadable receipts after successful payments.' },
  { icon: 'fa fa-solid fa-chart-pie', title: 'Payment Reports', desc: 'Review collected fees, pending balances, refunds, discounts, and payment-method summaries.' },
]

export const schoolCrmBenefits = [
  { icon: 'fa fa-solid fa-list-ol', title: 'Organized Admissions', desc: 'Manage enquiries and applications through a clear admission pipeline.' },
  { icon: 'fa fa-solid fa-comments', title: 'Better Parent Communication', desc: 'Keep parents informed through timely and consistent updates.' },
  { icon: 'fa fa-solid fa-gauge-high', title: 'Reduced Administrative Work', desc: 'Automate reminders, notifications, reports, and repetitive data-management tasks.' },
  { icon: 'fa fa-solid fa-check-double', title: 'Improved Data Accuracy', desc: 'Centralized records reduce duplicate entries and disconnected information.' },
  { icon: 'fa fa-solid fa-bolt', title: 'Faster Decision-Making', desc: 'Dashboards and reports provide administrators with clearer operational insights.' },
  { icon: 'fa fa-solid fa-arrow-trend-up', title: 'Scalable School Management', desc: 'Add new students, staff members, programmes, classes, and branches as the institution grows.' },
]

export const scalableTechnologyCapabilities = [
  'Responsive web applications',
  'Android and iOS applications',
  'Secure backend APIs',
  'Scalable databases',
  'Cloud hosting',
  'Push notifications',
  'SMS and email integrations',
  'Payment gateways',
  'Role-based access',
  'Data encryption',
  'Automated backups',
  'Analytics and reporting',
  'Third-party integrations',
]

export const applicationScreens = [
  'Login',
  'Admin dashboard',
  'Enquiry management',
  'Admission pipeline',
  'Application form',
  'Student profiles',
  'Parent profiles',
  'Teacher management',
  'Class and section management',
  'Attendance',
  'Timetable',
  'Assignments',
  'Marks and grades',
  'Fee management',
  'Online payments',
  'Announcements',
  'Notifications',
  'Reports',
  'User roles',
  'System settings',
]
