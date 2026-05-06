import ProClient from './ProClient';
import styles from '../../page.module.css';
import proStyles from './pro.module.css';

export const metadata = {
  title: 'Technology Partner for Professional Services Firms | FI Digital',
  description: 'CRM, client portals, time & billing, and AI copilots for US CPA firms, law firms, agencies, and consulting firms. Zoho Premium Partner and governed AI.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you work with law firms under ABA Model Rule 1.6 confidentiality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every AI and data engagement in legal scopes the confidentiality and privilege boundary up front. We default to tenant-isolated, US-hosted, no-training-on-prompts deployments and sign jurisdiction-appropriate confidentiality agreements."
      },
      "uiText": "Yes. Every <a href='/solutions/ai-digital-workers/'>AI</a> and <a href='/solutions/data-engineering/'>data</a> engagement in legal scopes the confidentiality and privilege boundary up front. We default to tenant-isolated, US-hosted, no-training-on-prompts deployments and sign jurisdiction-appropriate confidentiality agreements."
    },
    {
      "@type": "Question",
      "name": "Are you SOC 2 ready?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our delivery practices align with SOC 2 Type II controls and we provide a Delivery Security Summary. For firms pursuing SOC 2 themselves, we scope the tooling and workflow evidence required."
      },
      "uiText": "Our delivery practices align with SOC 2 Type II controls and we provide a <a href='/trust-security/'>Delivery Security Summary</a>. For firms pursuing SOC 2 themselves, we scope the tooling and workflow evidence required."
    },
    {
      "@type": "Question",
      "name": "Can you integrate with PracticePanther, Clio, NetDocuments, iManage, or Thomson Reuters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Custom integrations are standard on our Product Engineering practice."
      }
    },
    {
      "@type": "Question",
      "name": "How do you price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixed-fee starts for QuickStart, Discovery Sprint, AI Pilot, and Data Foundation Assessment; custom proposal after discovery for broader rollouts."
      },
      "uiText": "Fixed-fee starts for QuickStart, Discovery Sprint, AI Pilot, and Data Foundation Assessment; custom proposal after discovery for broader rollouts. See our <a href='/packages/'>Packages</a>."
    },
    {
      "@type": "Question",
      "name": "Can you help with realization and utilization reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Data Engineering practice ships BI on realization, utilization, WIP, and matter profitability as part of a Power BI / Zoho Analytics / Tableau layer."
      },
      "uiText": "Yes. Our <a href='/solutions/data-engineering/'>Data Engineering</a> practice ships BI on realization, utilization, WIP, and matter profitability as part of a Power BI / <a href='/solutions/zoho-implementation/'>Zoho Analytics</a> / Tableau layer."
    }
  ]
};

export default function ProfessionalServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Technology for CPA firms, law firms, agencies, and consulting firms.</h1>
      
      <main>
        <ProClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={proStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Professional Services</h2>
            
            <div className={proStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={proStyles.faqItem}>
                  <summary className={proStyles.faqQuestion}>{faq.name}</summary>
                  <div className={proStyles.faqAnswer}>
                    {faq.uiText ? (
                      <p dangerouslySetInnerHTML={{ __html: faq.uiText }} />
                    ) : (
                      <p>{faq.acceptedAnswer.text}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
