import AboutClient from './AboutClient';
import styles from '../page.module.css';
import aboutStyles from './about.module.css';

export const metadata = {
  title: 'Why FI Digital | US SMB Transformation Partner | About Us',
  description: 'FI Digital LLC is a US-registered transformation partner for SMBs. Four integrated practices, US-based account leads, fixed-fee starts, and 200+ projects delivered.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who owns FI Digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FI Digital LLC is a US-registered limited liability company headquartered in Atlanta, Georgia. For financial transparency, see the SAM.gov or Georgia Secretary of State registration linked on the Trust & Security page."
      }
    },
    {
      "@type": "Question",
      "name": "How many people does FI Digital employ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FI Digital carries a senior-heavy delivery bench across four practices. Exact headcount is shared under NDA on request."
      }
    },
    {
      "@type": "Question",
      "name": "What is FI Digital's insurance posture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional indemnity, general liability, and cyber liability insurance are in place. Certificates of insurance are available under NDA."
      }
    },
    {
      "@type": "Question",
      "name": "What does a typical engagement look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fit call (30 minutes), scoping (1 week), fixed-fee starting offer (2 to 6 weeks), fixed-fee or milestone build (8 to 16 weeks), optional managed services (month to month)."
      }
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Why FI Digital</h1>
      
      <main>
        <AboutClient />

        {/* FAQ SECTION */}
        <section className={aboutStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — About</h2>
            
            <div className={aboutStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={aboutStyles.faqItem}>
                  <summary className={aboutStyles.faqQuestion}>{faq.name}</summary>
                  <div className={aboutStyles.faqAnswer}>
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
