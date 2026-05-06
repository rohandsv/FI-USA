import FinanceClient from './FinanceClient';
import styles from '../../page.module.css';
import finStyles from './finance.module.css';

export const metadata = {
  title: 'Technology for US RIAs, CPA Firms, Fintech & Lenders | FI Digital',
  description: 'Governed AI, compliance reporting, CRM, and data foundations for US RIAs, CPA firms, fintech operators, and lenders. SOC 2, GLBA, and state AI law alignment.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you SOC 2 Type II aligned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our delivery practices align with SOC 2 Type II controls and we provide a Delivery Security Summary."
      },
      "uiText": "Yes. Our delivery practices align with SOC 2 Type II controls and we provide a <a href='/trust-security/'>Delivery Security Summary</a>."
    },
    {
      "@type": "Question",
      "name": "Do you support GLBA Safeguards Rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Financial-services scopes include GLBA-aligned data handling, access control, and vendor-risk documentation."
      },
      "uiText": "Yes. Financial-services scopes include GLBA-aligned <a href='/solutions/data-engineering/'>data handling</a>, access control, and vendor-risk documentation."
    },
    {
      "@type": "Question",
      "name": "Can you comply with state AI laws?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every AI pilot in financial services ships with a state-specific disclosure plan covering Colorado, Utah, Illinois, and NYC at minimum."
      },
      "uiText": "Yes. Every <a href='/solutions/ai-digital-workers/'>AI pilot</a> in financial services ships with a state-specific disclosure plan covering Colorado, Utah, Illinois, and NYC at minimum."
    },
    {
      "@type": "Question",
      "name": "Do you integrate with Redtail / Wealthbox / Salesforce FSC / Orion / Addepar / Tamarac?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Custodian and practice-management integration is a standard scope in our RIA engagements."
      },
      "uiText": "Yes. Custodian and <a href='/solutions/zoho-implementation/'>practice-management integration</a> is a standard scope in our RIA <a href='/packages/'>engagements</a>."
    },
    {
      "@type": "Question",
      "name": "Can you sign a BAA or DPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We sign DPAs as standard. We sign BAAs where PHI enters scope (HSAs, some benefits workflows)."
      },
      "uiText": "We sign <a href='/trust-security/'>DPAs</a> as standard. We sign BAAs where PHI enters scope (HSAs, some benefits workflows)."
    }
  ]
};

export default function FinancialServices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>CRM, reporting, and governed AI for RIAs, CPA firms, fintech, and lenders.</h1>
      
      <main>
        <FinanceClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={finStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Financial Services</h2>
            
            <div className={finStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={finStyles.faqItem}>
                  <summary className={finStyles.faqQuestion}>{faq.name}</summary>
                  <div className={finStyles.faqAnswer}>
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
