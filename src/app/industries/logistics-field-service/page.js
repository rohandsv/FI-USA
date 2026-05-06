import LogisticsClient from './LogisticsClient';
import styles from '../../page.module.css';
import logStyles from './logistics.module.css';

export const metadata = {
  title: 'Dispatch & Field Service Software for US SMBs | FI Digital',
  description: 'Field service management, dispatch software, driver apps, and AI triage for US logistics and field service SMBs. Zoho Premium Partner and custom product engineering.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you integrate with ServiceTitan, FieldEdge, Jobber, or Housecall Pro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We extend or integrate packaged FSM; we also build custom alternatives where packaged does not fit."
      },
      "uiText": "Yes. We extend or integrate packaged FSM; we also build <a href='/solutions/product-engineering/'>custom alternatives</a> where packaged does not fit."
    },
    {
      "@type": "Question",
      "name": "Can you build DOT / FMCSA-aware workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. HOS, eLog awareness, and DVIR workflows can be built into custom apps; we are not a DOT-compliance vendor but we build on DOT-aware data."
      },
      "uiText": "Yes. HOS, eLog awareness, and DVIR workflows can be built into <a href='/solutions/zoho-implementation/'>custom apps</a>; we are not a DOT-compliance vendor but we build on DOT-aware <a href='/solutions/data-engineering/'>data</a>."
    },
    {
      "@type": "Question",
      "name": "Do you ship iOS and Android driver apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. React Native on a shared codebase is our standard approach."
      },
      "uiText": "Yes. React Native on a shared codebase is our standard <a href='/solutions/product-engineering/'>product engineering</a> approach."
    },
    {
      "@type": "Question",
      "name": "Can you do route optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We integrate with Routific, OptimoRoute, or custom OR-Tools solvers. We do not build a route-optimization engine from scratch."
      },
      "uiText": "We integrate with Routific, OptimoRoute, or custom OR-Tools solvers. We do not build a route-optimization engine from scratch. <a href='/solutions/ai-digital-workers/'>AI & Digital Workers</a> can help automate the dispatch flow."
    },
    {
      "@type": "Question",
      "name": "How long does a custom dispatch build take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 to 16 weeks is typical after Discovery."
      },
      "uiText": "10 to 16 weeks is typical after Discovery. See our <a href='/packages/'>packages</a> for more timeline and pricing details."
    }
  ]
};

export default function LogisticsFieldService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Dispatch, driver apps, and AI triage — built for US operators.</h1>
      
      <main>
        <LogisticsClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={logStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Logistics & Field Service</h2>
            
            <div className={logStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={logStyles.faqItem}>
                  <summary className={logStyles.faqQuestion}>{faq.name}</summary>
                  <div className={logStyles.faqAnswer}>
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
