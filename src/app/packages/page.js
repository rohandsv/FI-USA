import PackagesClient from './PackagesClient';
import styles from '../page.module.css';
import pkgStyles from './packages.module.css';

export const metadata = {
  title: 'Packages & Starting Offers | Fixed-Fee Diagnostics | FI Digital',
  description: 'Fixed-fee starting offers for US SMBs: Zoho QuickStart, Product Discovery Sprint, One-Workflow AI Pilot, Data Foundation Assessment, Managed Services.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why don't you publish hourly rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hourly rates are only useful to the buyer who has already scoped the project. For US SMBs choosing a partner, hourly rates are not a helpful comparison — they incentivize the wrong thing (longer projects) and they do not tell you what a project will actually cost. Fixed fees and package starting points are honest commercial signals."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after the Discovery Sprint or Assessment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get a fixed-fee build proposal. You can take the deliverable and walk; we do not lock you in."
      }
    },
    {
      "@type": "Question",
      "name": "Are packages negotiable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starting-from prices are firm. Scope is flexible. We will scope up or down to match your constraints."
      }
    },
    {
      "@type": "Question",
      "name": "Can you do T&M?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only as an exception, and only after a fixed-fee Discovery or Pilot sets expectations. It is not our default."
      }
    }
  ]
};

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Packages — no hourly rates. Start where you feel the pain.</h1>
      
      <main>
        <PackagesClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={pkgStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Packages</h2>
            
            <div className={pkgStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={pkgStyles.faqItem}>
                  <summary className={pkgStyles.faqQuestion}>{faq.name}</summary>
                  <div className={pkgStyles.faqAnswer}>
                    <p>{faq.acceptedAnswer.text}</p>
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
