import MfgClient from './MfgClient';
import styles from '../../page.module.css';
import mfgStyles from './mfg.module.css';

export const metadata = {
  title: 'Digital Transformation for US Manufacturers & Distributors | FI Digital',
  description: 'ERP / CRM integration, inventory visibility, quote-to-cash, and BI for US manufacturers and distributors. Fixed-fee assessments and an SMB-friendly integration engineering bench.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you integrate with NetSuite / Dynamics / Sage / SAP Business One?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Integration engineering is one of our top-3 engagement types in manufacturing and distribution."
      },
      "uiText": "Yes. <a href='/solutions/product-engineering/'>Integration engineering</a> is one of our top-3 engagement types in manufacturing and distribution. See our <a href='/packages/'>Packages</a> for starting points."
    },
    {
      "@type": "Question",
      "name": "Can you connect to shop-floor systems (MES / SCADA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, where an OPC-UA or MQTT bridge exists. We build the data and AI layer on top; we do not install PLCs."
      },
      "uiText": "Yes, where an OPC-UA or MQTT bridge exists. We build the <a href='/solutions/data-engineering/'>data</a> and <a href='/solutions/ai-digital-workers/'>AI</a> layer on top; we do not install PLCs."
    },
    {
      "@type": "Question",
      "name": "Do you support EDI (850, 810, 856, 940)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Custom EDI is standard in our distribution engagements."
      },
      "uiText": "Yes. Custom EDI is standard in our <a href='/solutions/zoho-implementation/'>Zoho implementation</a> and distribution engagements."
    },
    {
      "@type": "Question",
      "name": "What about ITAR or export-controlled data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We scope it explicitly. Where applicable we deploy in US-person-only environments and segregate workloads."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build a customer or distributor portal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This is one of our highest-frequency Product Engineering outcomes."
      },
      "uiText": "Yes. This is one of our highest-frequency <a href='/solutions/product-engineering/'>Product Engineering</a> outcomes."
    }
  ]
};

export default function ManufacturingDistribution() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Connect ERP, CRM, and the shop floor — without an SAP-scale budget.</h1>
      
      <main>
        <MfgClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={mfgStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Manufacturing & Distribution</h2>
            
            <div className={mfgStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={mfgStyles.faqItem}>
                  <summary className={mfgStyles.faqQuestion}>{faq.name}</summary>
                  <div className={mfgStyles.faqAnswer}>
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
