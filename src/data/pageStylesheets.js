// Per-page CSS bundles: [litespeed combined CSS, page-8/10, page-11, page-12?].
// Each original page had its own LiteSpeed-optimized combined CSS (different hash per
// page template) plus its own WPBakery-compiled -8-/-10-/-11-/-12- bundles carrying that
// page's vc_custom_* rules. Verified NOT identical across pages (e.g. schedule-free-demo
// has no header/footer, so LiteSpeed combined a different file set → different hash).
//
// TYPOGRAPHY_OVERRIDE (shared-eacbef1f.css + shared-713aa8f4.css) is appended last on every
// page. Both files are byte-identical across pages, but on the original site they always load
// AFTER the litespeed-combined bundle — shared-713aa8f4.css carries the site's real Poppins
// typography override, which must cascade over the theme's Roboto defaults living in the
// litespeed-combined bundle. They must NOT be loaded in index.html's static head (that would
// load them before the per-page bundles here, flipping the cascade winner back to Roboto).
const TYPOGRAPHY_OVERRIDE = [
  '/assets/css/shared-eacbef1f.css',
  '/assets/css/shared-713aa8f4.css',
]

export const pageStylesheets = {
  home: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/index-8-77ea29a9.css',
    '/assets/css/index-11-ab72f381.css',
    '/assets/css/index-12-78eaa41b.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  contactUs: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/contact-us-8-e0a6f787.css',
    '/assets/css/contact-us-11-698fa789.css',
    '/assets/css/contact-us-12-3dff24fb.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  scheduleFreeDemo: [
    '/wp-content/litespeed/css/a3336664720e7dd0d83845a9f567fc35.css',
    '/assets/css/schedule-free-demo-8-c9a9306f.css',
    '/assets/css/schedule-free-demo-11-05ac93b0.css',
    '/assets/css/schedule-free-demo-12-fc6f974e.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  erpSoftware: [
    '/wp-content/litespeed/css/cd6ad0ae57b642f60572883310e77d54.css',
    '/assets/css/erp-software-8-e19f2166.css',
    '/assets/css/erp-software-11-cfd83edf.css',
    '/assets/css/erp-software-12-5ae9bfaf.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  alibabaClone: [
    '/wp-content/litespeed/css/393deff8c599c0b65050e74f7ea497db.css',
    '/assets/css/alibaba-clone-8-204ffef9.css',
    '/assets/css/alibaba-clone-11-ed738c88.css',
    '/assets/css/alibaba-clone-12-0f2080a1.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  vintedClone: [
    '/wp-content/litespeed/css/393deff8c599c0b65050e74f7ea497db.css',
    '/assets/css/vinted-clone-8-5cde265d.css',
    '/assets/css/vinted-clone-11-fd20c27d.css',
    '/assets/css/vinted-clone-12-7fde629c.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  zillowClone: [
    '/wp-content/litespeed/css/393deff8c599c0b65050e74f7ea497db.css',
    '/assets/css/zillow-clone-8-41830023.css',
    '/assets/css/zillow-clone-11-6b97d7e7.css',
    '/assets/css/zillow-clone-12-06421f36.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  amazonClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/amazon-clone-8-2196da66.css',
    '/assets/css/amazon-clone-11-2865840d.css',
    '/assets/css/amazon-clone-12-c66b4e6d.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  youtubeClone: [
    '/wp-content/litespeed/css/cd6ad0ae57b642f60572883310e77d54.css',
    '/assets/css/youtube-clone-8-15dfa1b1.css',
    '/assets/css/youtube-clone-11-81f66ec6.css',
    '/assets/css/youtube-clone-12-72d7cbff.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  turoClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/turo-clone-8-8809aae0.css',
    '/assets/css/turo-clone-11-af9e55a0.css',
    '/assets/css/turo-clone-12-91a005d2.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  airbnbClone: [
    '/wp-content/litespeed/css/cd6ad0ae57b642f60572883310e77d54.css',
    '/assets/css/airbnb-clone-10-92e07023.css',
    '/assets/css/airbnb-clone-11-20245471.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  rentalBookingScript: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/rental-booking-script-10-a062ca2a.css',
    '/assets/css/rental-booking-script-11-811c6ee6.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  uberClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/uber-clone-8-4458011b.css',
    '/assets/css/uber-clone-11-3b6a8cc5.css',
    '/assets/css/uber-clone-12-d80957d5.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // handymanClone (Handyman App Like Uber, /handyman-app-like-uber) forks
  // UberClonePage.jsx's exact markup/classNames (vc_custom_*, wpb_row, vc_column,
  // etc.) with all-new content, so it needs the SAME page-specific CSS bundle that
  // styles those exact classNames -- not the schoolCrm-style "brand-new page, base
  // bundle only" treatment, since this page's DOM shape is identical to uberClone's.
  handymanClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/uber-clone-8-4458011b.css',
    '/assets/css/uber-clone-11-3b6a8cc5.css',
    '/assets/css/uber-clone-12-d80957d5.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  gojekClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/gojek-clone-8-a6ce7c3b.css',
    '/assets/css/gojek-clone-11-3fff7325.css',
    '/assets/css/gojek-clone-12-69d02d33.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  swiggyClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/swiggy-clone-10-e92ae0bc.css',
    '/assets/css/swiggy-clone-11-ca3b2b02.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  fiverrClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/fiverr-clone-10-efd92189.css',
    '/assets/css/fiverr-clone-11-7fb39bbb.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  udemyClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/udemy-clone-8-08e372ee.css',
    '/assets/css/udemy-clone-11-44c04bf7.css',
    '/assets/css/udemy-clone-12-e50019f3.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  tinderClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/tinder-clone-8-e51c09bf.css',
    '/assets/css/tinder-clone-11-237ac9ae.css',
    '/assets/css/tinder-clone-12-f80a842c.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  whatsappClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/whatsapp-clone-10-baadd8de.css',
    '/assets/css/whatsapp-clone-11-85e95d1a.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  tiktokClone: [
    '/wp-content/litespeed/css/cd6ad0ae57b642f60572883310e77d54.css',
    '/assets/css/tiktok-clone-8-d629032f.css',
    '/assets/css/tiktok-clone-11-a26b2d7b.css',
    '/assets/css/tiktok-clone-12-fd8f2a63.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  olxClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    '/assets/css/olx-clone-8-14497318.css',
    '/assets/css/olx-clone-11-0ae5e2d1.css',
    '/assets/css/olx-clone-12-d885ab16.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // schoolCrm is a brand-new page with no original WPBakery export, so it has no
  // page-specific -8-/-10-/-11-/-12- bundle to load -- it's built entirely from
  // components/shared/*, which are already fully styled by the base litespeed bundle.
  schoolCrm: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // cryptoWallet is the same situation as schoolCrm above: a brand-new page with no
  // original WPBakery export, built entirely from components/shared/* plus a small set
  // of one-off components/cryptoWallet/* -- no page-specific bundle to load.
  cryptoWallet: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // logisticsClone is the same situation as schoolCrm above: no original WPBakery
  // export exists for this product, so it's built entirely from components/shared/*.
  logisticsClone: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // termsOfService is a brand-new page with no original WPBakery export -- same
  // situation as schoolCrm/logisticsClone above.
  termsOfService: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // refundPolicy is the same situation as termsOfService above.
  refundPolicy: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // privacyPolicy is the same situation as termsOfService above.
  privacyPolicy: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
  // resourceUsage is an internal report page with no original WPBakery export --
  // same situation as termsOfService above.
  resourceUsage: [
    '/wp-content/litespeed/css/7bc6d89b3d2905faa79fed5d3dba86ce.css',
    ...TYPOGRAPHY_OVERRIDE,
  ],
}
