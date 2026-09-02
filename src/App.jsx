import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MinimalLayout from './components/MinimalLayout.jsx'
import RouteFallback from './components/RouteFallback.jsx'
import ResourceUsagePage from './pages/ResourceUsagePage.jsx'
const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage.jsx'))
const ScheduleFreeDemoPage = lazy(() => import('./pages/ScheduleFreeDemoPage.jsx'))
const ErpSoftwarePage = lazy(() => import('./pages/ErpSoftwarePage.jsx'))
const SchoolCrmPage = lazy(() => import('./pages/SchoolCrmPage.jsx'))
const CryptoWalletPage = lazy(() => import('./pages/CryptoWalletPage.jsx'))
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage.jsx'))
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage.jsx'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const AlibabaClonePage = lazy(() => import('./pages/ClonePages/AlibabaClonePage.jsx'))
const VintedClonePage = lazy(() => import('./pages/ClonePages/VintedClonePage.jsx'))
const ZillowClonePage = lazy(() => import('./pages/ClonePages/ZillowClonePage.jsx'))
const AmazonClonePage = lazy(() => import('./pages/ClonePages/AmazonClonePage.jsx'))
const YoutubeClonePage = lazy(() => import('./pages/ClonePages/YoutubeClonePage.jsx'))
const TuroClonePage = lazy(() => import('./pages/ClonePages/TuroClonePage.jsx'))
const AirbnbClonePage = lazy(() => import('./pages/ClonePages/AirbnbClonePage.jsx'))
const RentalBookingClonePage = lazy(() => import('./pages/ClonePages/RentalBookingClonePage.jsx'))
const UberClonePage = lazy(() => import('./pages/ClonePages/UberClonePage.jsx'))
const HandymanClonePage = lazy(() => import('./pages/ClonePages/HandymanClonePage.jsx'))
const GojekClonePage = lazy(() => import('./pages/ClonePages/GojekClonePage.jsx'))
const SwiggyClonePage = lazy(() => import('./pages/ClonePages/SwiggyClonePage.jsx'))
const FiverrClonePage = lazy(() => import('./pages/ClonePages/FiverrClonePage.jsx'))
const UdemyClonePage = lazy(() => import('./pages/ClonePages/UdemyClonePage.jsx'))
const TinderClonePage = lazy(() => import('./pages/ClonePages/TinderClonePage.jsx'))
const WhatsappClonePage = lazy(() => import('./pages/ClonePages/WhatsappClonePage.jsx'))
const TiktokClonePage = lazy(() => import('./pages/ClonePages/TiktokClonePage.jsx'))
const OlxClonePage = lazy(() => import('./pages/ClonePages/OlxClonePage.jsx'))
const LogisticsClonePage = lazy(() => import('./pages/ClonePages/LogisticsClonePage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/erp-software" element={<ErpSoftwarePage />} />
          <Route path="/school-crm" element={<SchoolCrmPage />} />
          <Route path="/crypto-wallet" element={<CryptoWalletPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/resource-usage" element={<ResourceUsagePage />} />
          <Route path="/alibaba-clone" element={<AlibabaClonePage />} />
          <Route path="/vinted-clone" element={<VintedClonePage />} />
          <Route path="/zillow-clone" element={<ZillowClonePage />} />
          <Route path="/amazon-clone" element={<AmazonClonePage />} />
          <Route path="/youtube-clone" element={<YoutubeClonePage />} />
          <Route path="/turo-clone" element={<TuroClonePage />} />
          <Route path="/airbnb-clone" element={<AirbnbClonePage />} />
          <Route path="/rental-booking-script" element={<RentalBookingClonePage />} />
          <Route path="/uber-clone" element={<UberClonePage />} />
          <Route path="/handyman-app-like-uber" element={<HandymanClonePage />} />
          <Route path="/gojek-clone" element={<GojekClonePage />} />
          <Route path="/swiggy-clone" element={<SwiggyClonePage />} />
          <Route path="/fiverr-clone" element={<FiverrClonePage />} />
          <Route path="/udemy-clone" element={<UdemyClonePage />} />
          <Route path="/tinder-clone" element={<TinderClonePage />} />
          <Route path="/whatsapp-clone" element={<WhatsappClonePage />} />
          <Route path="/tiktok-clone" element={<TiktokClonePage />} />
          <Route path="/olx-clone" element={<OlxClonePage />} />
          <Route path="/logistics-clone" element={<LogisticsClonePage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route element={<MinimalLayout />}>
            <Route path="/schedule-free-demo" element={<ScheduleFreeDemoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
