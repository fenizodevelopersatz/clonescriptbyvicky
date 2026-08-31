// `link: null, enabled: false` marks items with no built page. As of this pass all
// 22 products have a React page built and routed in App.jsx, so every item below
// is enabled -- keep this pattern for any future product added without its page yet.
//
// `featured: true` marks the subset the mega-menu (MegaMenu.jsx) actually renders --
// user asked to show only these 8 (boxed in a screenshot: row 1+2 of the original
// 4-column layout) and hide the rest from navigation, without deleting their data or
// routes. An unfeatured product's page is still fully live at its existing URL, just
// not linked from the Products menu; flip this flag back to re-list it.
export const megaMenuColumns = [
  [
    { id: 'ld_icon_box_6a665a4092c40', icon: 'fa fa-solid fa-wallet', title: 'Crypto Wallet', subtitle: 'Wallet Development Services', link: '/crypto-wallet', enabled: true, isNew: true, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(222,229,255) 0.66%, rgb(214,196,255) 99.01%)' },
    { id: 'ld_icon_box_6a665a40920b9', icon: 'fa fa-solid fa-graduation-cap', title: 'School CRM', subtitle: 'School Management System', link: '/school-crm', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(236,236,255) 0.66%, rgb(207,223,255) 99.01%)' },
    { id: 'ld_icon_box_6a665a409028a', icon: 'fa fa-solid fa-store', title: 'Fashion Resale Script', subtitle: 'Vinted Clone', link: '/vinted-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(254,221,156) 99.34%)' },
    { id: 'ld_icon_box_6a665a4090a06', icon: 'fa fa-solid fa-car-side', title: 'Car Rental Script', subtitle: 'Peer-to-Peer Car Sharing', link: '/turo-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(242,255,253) 0.66%, rgb(149,254,238) 98.68%)' },
    { id: 'ld_icon_box_6a665a409116f', icon: 'fa fa-solid fa-house-chimney-medical', title: 'Vacation Rental Script', subtitle: 'Airbnb Clone', link: '/airbnb-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0%, rgb(255,174,174) 97.36%)' },
    { id: 'ld_icon_box_6a665a409158d', icon: 'fa fa-regular fa-calendar-check', title: 'Rental Booking Script', subtitle: 'Hotel, Tour, Car, Boat', link: '/rental-booking-script', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(174,210,255) 97.36%)' },
  ],
  [
    { id: 'ld_icon_box_6a665a4091b0e', icon: 'fa fa-solid fa-gears', title: 'ERP Software', subtitle: 'HRM, CRM, POS & More', link: '/erp-software', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(236,236,255) 0.66%, rgb(207,223,255) 99.01%)' },
    { id: 'ld_icon_box_6a665a4091c7f', icon: 'fa fa-solid fa-house-flag', title: 'Real Estate Script', subtitle: 'Zillow Clone', link: '/zillow-clone', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(245,174,255) 97.36%)' },
    { id: 'ld_icon_box_6a665a4091ded', icon: 'fa fa-solid fa-atom', title: 'All-in-One Super App', subtitle: 'Gojek Clone', link: '/gojek-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(174,255,227) 97.69%)' },
    { id: 'ld_icon_box_6a665a4091f5e', icon: 'fa fa-solid fa-burger', title: 'Food Delivery App', subtitle: 'Swiggy, Zomato, UberEats', link: '/swiggy-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0%, rgb(255,174,174) 97.36%)' },
    { id: 'ld_icon_box_6a665a40920a8', icon: 'fa fa-solid fa-taxi', title: 'Taxi Booking App', subtitle: 'Uber Clone', link: '/uber-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(255,255,174) 96.37%)' },
  ],
  [
    { id: 'ld_icon_box_6a665a409248d', icon: 'fa fa-solid fa-shop', title: 'B2B Marketplace', subtitle: 'Website like Alibaba', link: '/alibaba-clone', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(255,244,244) 1.65%, rgb(255,207,207) 99.01%)' },
    { id: 'ld_icon_box_6a665a40925f7', icon: 'fa fa-solid fa-cart-plus', title: 'Ecommerce Marketplace', subtitle: 'Amazon, Ebay, Etsy clone', link: '/amazon-clone', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(255,239,212) 0.66%, rgb(255,220,174) 99.67%)' },
    { id: 'ld_icon_box_6a665a409273d', icon: 'fa fa-solid fa-laptop-code', title: 'Freelance Marketplace', subtitle: 'Fiverr, Upwork Clone', link: '/fiverr-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle, rgb(255,239,212) 0.66%, rgb(174,255,202) 100%)' },
    { id: 'ld_icon_box_6a665a409287c', icon: 'fa fa-solid fa-book-open-reader', title: 'LMS eLearning App', subtitle: 'Udemy Clone', link: '/udemy-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0%, rgb(255,174,174) 97.36%)' },
    { id: 'ld_icon_box_6a665a4092998', icon: 'fa fa-solid fa-face-grin-hearts', title: 'Dating Script', subtitle: 'Tinder Clone', link: '/tinder-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(174,210,255) 97.36%)' },
    { id: 'ld_icon_box_6a665a4091714', icon: 'fa fa-solid fa-helmet-safety', title: 'Uber Clone for X', subtitle: 'Uber Handyman App', link: '/handyman-app-like-uber', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,239,212) 0.66%, rgb(174,255,202) 100%)' },
  ],
  [
    { id: 'ld_icon_box_6a665a4092d67', icon: 'fa fa-solid fa-truck-plane', title: 'Logistics Service App', subtitle: 'Logistics Delivery App', link: '/logistics-clone', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle, rgb(255,239,212) 0.66%, rgb(174,255,202) 100%)' },
    { id: 'ld_icon_box_6a665a4092f2b', icon: 'fa fa-brands fa-youtube', title: 'Video Sharing Platform', subtitle: 'YouTube clone', link: '/youtube-clone', enabled: true, isNew: false, featured: true, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(174,255,227) 97.69%)' },
    { id: 'ld_icon_box_6a665a4093090', icon: 'fa fa-brands fa-square-whatsapp', title: 'Instant Messaging App', subtitle: 'Whatsapp Clone', link: '/whatsapp-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0%, rgb(255,174,174) 97.36%)' },
    { id: 'ld_icon_box_6a665a40931fe', icon: 'fa fa-brands fa-tiktok', title: 'Short Video Sharing App', subtitle: 'TikTok Clone', link: '/tiktok-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0%, rgb(255,174,174) 97.36%)' },
    { id: 'ld_icon_box_6a665a40933c2', icon: 'fa fa-solid fa-computer', title: 'P2P Classified Script', subtitle: 'Olx Clone', link: '/olx-clone', enabled: true, isNew: false, featured: false, gradient: 'radial-gradient(circle at 50%, rgb(255,234,212) 0.66%, rgb(210,174,255) 95.05%)' },
  ],
]
