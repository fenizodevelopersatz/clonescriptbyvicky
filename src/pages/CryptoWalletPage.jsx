import { useSeo } from '../hooks/useSeo.js'
import { useJsonLd } from '../hooks/useJsonLd.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import {
  comprehensiveServices, walletBenefits, secureWalletFeatures, techStackItems, faqs, customerReviews,
} from '../data/cryptoWallet/cryptoWalletData.js'

// Structured data for this landing page (module-level = stable reference for
// useJsonLd). Service + FAQPage + BreadcrumbList give Google the context for
// rich results, which matters for the ad landing experience and quality score.
const SITE_URL = 'https://theclonescript.com'
const cryptoStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Crypto Wallet Development',
    name: 'Crypto Wallet Development Services',
    description:
      'Custodial and non-custodial crypto wallet development with multi-chain support, exchange integration, staking, in-wallet swaps, and independent security audits.',
    provider: { '@type': 'Organization', name: 'CloneScript', url: `${SITE_URL}/` },
    areaServed: 'Worldwide',
    url: `${SITE_URL}/crypto-wallet`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Crypto Wallet Development', item: `${SITE_URL}/crypto-wallet` },
    ],
  },
]

import CryptoWalletHero from '../components/cryptoWallet/CryptoWalletHero.jsx'
import CryptoWalletStats from '../components/cryptoWallet/CryptoWalletStats.jsx'
import CryptoWalletOverview from '../components/cryptoWallet/CryptoWalletOverview.jsx'
import CryptoWalletIndustries from '../components/cryptoWallet/CryptoWalletIndustries.jsx'
import CryptoWalletTechStack from '../components/cryptoWallet/CryptoWalletTechStack.jsx'
import CryptoWalletWhyChoose from '../components/cryptoWallet/CryptoWalletWhyChoose.jsx'
import WhatIsCryptoWallet from '../components/cryptoWallet/WhatIsCryptoWallet.jsx'
import WalletTypesShowcase from '../components/cryptoWallet/WalletTypesShowcase.jsx'
import CryptoWalletServicePanels from '../components/cryptoWallet/CryptoWalletServicePanels.jsx'
import StandOutFeaturesGrid from '../components/shared/StandOutFeaturesGrid.jsx'
import TechStackRow from '../components/shared/TechStackRow.jsx'
import MoneyBackGuarantee from '../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../components/shared/FaqAccordion.jsx'
import ReviewCards from '../components/shared/ReviewCards.jsx'
import TestimonialRotatorSection from '../components/footer/TestimonialRotatorSection.jsx'
import './CryptoWalletPage.css'

export default function CryptoWalletPage() {
  usePageStylesheets(pageStylesheets.cryptoWallet)

  useSeo(
    'Crypto Wallet Development Services | CloneScript',
    'Build a secure, scalable crypto wallet with CloneScript — custodial and non-custodial support, exchange integration, multi-chain support, and audits.'
  )
  useJsonLd(cryptoStructuredData)

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper">
        <section className="vc_section cw-hero-wrap">
          <CryptoWalletHero />
        </section>

        <CryptoWalletStats />

        <section className="vc_section">
          <WhatIsCryptoWallet />
        </section>

        <CryptoWalletOverview />

        <StandOutFeaturesGrid
          heading="Our Comprehensive Crypto Wallet Development Services"
          subheading="Our cryptocurrency wallet development process covers everything from custom wallet creation to advanced blockchain integration."
          items={comprehensiveServices}
          color="#38bdf8"
        />

        <StandOutFeaturesGrid
          heading="Benefits of Cryptocurrency Wallet Development"
          subheading="What a wallet built right actually gets your business."
          items={walletBenefits}
          color="#38bdf8"
        />

        <section className="vc_section">
          <WalletTypesShowcase />
        </section>

        <StandOutFeaturesGrid
          heading="Core Features of Secure Crypto Wallet Software"
          subheading="Secure crypto wallet software combines strong protection with a smooth, dependable experience."
          items={secureWalletFeatures}
          color="#38bdf8"
        />

        <CryptoWalletIndustries />

        <CryptoWalletTechStack />

        <MoneyBackGuarantee />

        <CryptoWalletServicePanels />

        <TechStackRow items={techStackItems} heading="Coins & Networks Your Wallet Can Speak" />

        <CryptoWalletWhyChoose />

        <FaqAccordion
          heading="Frequently Asked Questions"
          subheading="Answers to what founders and product teams ask most before starting a wallet build."
          faqs={faqs}
        />
        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />
      </div>
    </main>
  )
}
