import { useSeo } from '../hooks/useSeo.js'
import { usePageStylesheets } from '../hooks/usePageStylesheets.js'
import { pageStylesheets } from '../data/pageStylesheets.js'
import { siteContact } from '../data/siteContact.js'
import {
  coreModules, techStack, launchSteps,
  pricingPlans, comparisonOurs, comparisonOthers, faqs, customerReviews,
  whyChooseUsPoints, admissionManagementFeatures, studentManagementFeatures,
  parentCommunicationFeatures, teacherStaffFeatures, feePaymentFeatures,
  schoolCrmBenefits, scalableTechnologyCapabilities,
  schoolCrmPackageFeatures, applicationScreens,
} from '../data/schoolCrm/schoolCrmData.js'
import { comparisonLabels } from '../data/comparisonLabels.js'

import SchoolCrmHero from '../components/schoolCrm/SchoolCrmHero.jsx'
import WhatIsSchoolCrm from '../components/schoolCrm/WhatIsSchoolCrm.jsx'
import TrustedByBadges from '../components/shared/TrustedByBadges.jsx'
import BlockquoteTestimonials from '../components/shared/BlockquoteTestimonials.jsx'
import ComparisonTable from '../components/shared/ComparisonTable.jsx'
import PdfDownloadCta from '../components/shared/PdfDownloadCta.jsx'
import GuideCoverArt from '../components/shared/GuideCoverArt.jsx'
import DashboardMockup from '../components/shared/DashboardMockup.jsx'
import ReviewCards from '../components/shared/ReviewCards.jsx'
import StandOutFeaturesGrid from '../components/shared/StandOutFeaturesGrid.jsx'
import SimpleListSection from '../components/shared/SimpleListSection.jsx'
import TechStackRow from '../components/shared/TechStackRow.jsx'
import ProcessSteps from '../components/shared/ProcessSteps.jsx'
import LaunchCta from '../components/shared/LaunchCta.jsx'
import LiveDemoTabs from '../components/shared/LiveDemoTabs.jsx'
import PricingPlans from '../components/shared/PricingPlans.jsx'
import MoneyBackGuarantee from '../components/shared/MoneyBackGuarantee.jsx'
import FaqAccordion from '../components/shared/FaqAccordion.jsx'
import TestimonialRotatorSection from '../components/footer/TestimonialRotatorSection.jsx'
import BlogTeaser from '../components/shared/BlogTeaser.jsx'
import './SchoolCrmPage.css'

const dashboards = [
  {
    label: 'Admin Dashboard',
    email: 'admin@gmail.com',
    password: '12345678',
    url: siteContact.cloneDemoUrl,
    image: '/wp-content/school/school-dashboard-preview.png',
    imageAlt: 'School CRM admin dashboard with student, mentor, and attendance overview',
  },
  {
    label: 'Teacher Dashboard',
    email: 'teacher@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    image: '/wp-content/school/school-analytics-preview.png',
    imageAlt: 'School CRM mentor analytics with teaching-level and gender distribution charts',
  },
  {
    label: 'Parent Dashboard',
    email: 'parent@gmail.com',
    password: 'password123',
    url: siteContact.cloneDemoUrl,
    visual: <DashboardMockup role="Parent" accent="#e72ad4" avatarIcon="fa-user" stats={[{ value: '2', label: 'Children' }, { value: 'A+', label: 'Latest Grade' }]} />,
  },
]

export default function SchoolCrmPage() {
  usePageStylesheets(pageStylesheets.schoolCrm)

  useSeo(
    'School CRM Software | Admissions, Students & Parents',
    'Streamline admissions, student records, fees, attendance, parent communication, follow-ups, reports, and daily school operations with a customizable School CRM.'
  )

  return (
    <main className="content" id="content">
      <div className="wpb-content-wrapper schoolcrm-motion-page">
        <section className="vc_section">
          <SchoolCrmHero />
        </section>

        <section className="vc_section vc_section-has-fill">
          <TrustedByBadges heading="by Schools & Institutes" />
          <BlockquoteTestimonials count={3} offset={0} visibleCount={2} />
        </section>

        <section className="vc_section">
          <WhatIsSchoolCrm />
        </section>

        <SimpleListSection
          heading="Why Choose CloneScript for Your School CRM?"
          intro="Our School CRM can be customized according to your institution's academic structure, admission process, departments, communication methods, and reporting requirements. Key benefits include:"
          items={whyChooseUsPoints}
          columns={2}
          tinted
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-sm-offset-1 text-center">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Simplify Your School&rsquo;s Daily Operations</h2>
                        <div className="st-desc">
                          <p style={{ textAlign: 'center' }}>
                            Manage enquiries, admissions, enrolled students, parents, teachers, payments, and
                            communication without switching between multiple systems.
                          </p>
                          <p style={{ textAlign: 'center' }}>
                            The School CRM can support private schools, public schools, international schools,
                            tuition centres, coaching institutes, training academies, and multi-branch education
                            groups.
                          </p>
                        </div>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StandOutFeaturesGrid
          heading="Core Modules of School CRM"
          subheading="Everything a school needs to run day-to-day operations, in one connected platform."
          items={coreModules}
        />

        <ComparisonTable labels={comparisonLabels} ours={comparisonOurs} others={comparisonOthers} cloneName="School CRM" />
        <PdfDownloadCta
          heading="Grab Our Best School CRM Features Document Now!"
          desc="One Click to Get Our School CRM Product's Complete Knowledge."
          media={(
            <GuideCoverArt
              brand="CloneScript"
              titleLine1="School Management"
              titleLine2="Software Suite"
              tagline="Core Modules &middot; Live Demo &middot; Tech Stack"
              badge="Cloud-Based"
              gradientFrom="#3b5bff"
              gradientVia="#1e3fc4"
              gradientTo="#0a1f6e"
              accentColor="#ffc233"
              features={[
                { icon: '≡', label: 'Core Modules' },
                { icon: '▶', label: 'Live Demo' },
                { icon: '⚙', label: 'Tech Stack' },
              ]}
            />
          )}
        />



        <StandOutFeaturesGrid
          heading="Admission Management Features"
          subheading="Turn every enquiry into an enrolled student with a clear, trackable admission workflow."
          items={admissionManagementFeatures}
        />

        <StandOutFeaturesGrid
          heading="Student Management Features"
          subheading="Keep every student's profile, records, and progress organized in one place."
          items={studentManagementFeatures}
        />

        <StandOutFeaturesGrid
          heading="Parent and Student Communication"
          subheading="Keep parents and students informed and engaged with dedicated portals and alerts."
          items={parentCommunicationFeatures}
        />

        <StandOutFeaturesGrid
          heading="Teacher and Staff Features"
          subheading="Give teachers the tools to manage classes, attendance, assignments, and grading."
          items={teacherStaffFeatures}
        />

        <StandOutFeaturesGrid
          heading="Fee and Payment Management"
          subheading="Simplify fee collection with structured plans, online payments, and clear reporting."
          items={feePaymentFeatures}
        />

        <StandOutFeaturesGrid
          heading="Benefits of School CRM Software"
          subheading="What a connected School CRM means for your institution's day-to-day operations."
          items={schoolCrmBenefits}
        />

        <TechStackRow items={techStack} />

        <SimpleListSection
          heading="Technology for a Scalable School CRM"
          intro="The platform can be developed using modern technologies that support:"
          items={scalableTechnologyCapabilities}
          columns={3}
          tinted
        />

        <section className="vc_row wpb_row vc_row-fluid liquid-row-shadowbox">
          <div className="ld-container container">
            <div className="row ld-row">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_wrapper-inner">
                      <header className="fancy-title text-center">
                        <h2>Hassle-Free Launch Support</h2>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessSteps steps={launchSteps} />

        <LaunchCta
          variant="dark"
          badge="CTA"
          heading="Start Your School CRM with CloneScript"
          desc="Build a centralized education-management platform that brings admissions, student information, parent communication, teachers, fees, and reporting together. The system can begin with essential CRM modules and expand with transport, library, hostel, LMS, mobile applications, and other institutional features."
          image="/wp-content/uploads/2026/08/schoolcrm-launch-classroom.webp"
          imageAlt="Teacher assisting students with their coursework at a desk in a classroom"
        />

        <LiveDemoTabs dashboards={dashboards} />

        <SimpleListSection
          heading="Choose a Development Plan"
          intro="School CRM Package — the development package may include:"
          items={schoolCrmPackageFeatures}
          closing="Final pricing depends on the required modules, number of users, branches, integrations, applications, and customization."
          columns={2}
        />

        <PricingPlans plans={pricingPlans} />
        <MoneyBackGuarantee />

        <SimpleListSection
          heading="School CRM Application Screens"
          intro="The platform can include:"
          items={applicationScreens}
          columns={3}
        />

        <FaqAccordion
          heading="Frequently Asked Questions"
          subheading="Clear all your doubts about our School CRM with our extensive FAQ section."
          faqs={faqs}
        />

        <TestimonialRotatorSection content={<ReviewCards reviews={customerReviews} />} />

        <BlogTeaser />
      </div>
    </main>
  )
}
