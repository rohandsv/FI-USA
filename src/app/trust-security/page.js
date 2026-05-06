import TrustClient from './TrustClient';
import styles from '../page.module.css';
import aboutStyles from '../about/about.module.css';

export const metadata = {
  title: 'Trust & Security | SOC 2, HIPAA, GLBA, AI Governance | FI Digital',
  description: 'FI Digital\'s Trust & Security page. SOC 2 Type II aligned delivery, HIPAA support, GLBA, CCPA, and governed AI with model cards, audit logs, and human-in-the-loop.',
};

const trustFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you SOC 2 Type II certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our delivery practices align with SOC 2 Type II controls and a Delivery Security Summary is available on NDA. Clients seeking a full SOC 2 Type II report from a vendor should reach out — we will scope the evidence, controls, and subservice posture."
      }
    },
    {
      "@type": "Question",
      "name": "Will my data be used to train an AI model?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We deploy on enterprise / API plans that do not retain or train on prompts. We contractually confirm this in every engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Can you sign a BAA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, where PHI is in scope."
      }
    },
    {
      "@type": "Question",
      "name": "What about international data transfer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We default to US-region hosting. Cross-border transfer is scoped explicitly when required (e.g., Canadian clients with Canadian-resident users)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you conduct penetration testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Production builds ship with static analysis and dependency scanning on CI. Full penetration testing is scoped separately, often via a client-chosen third-party testing firm."
      }
    }
  ]
};

export default function TrustSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trustFaqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Trust & Security at FI Digital</h1>
      
      <main>
        <TrustClient />

        {/* TRUST FAQ SECTION */}
        <section className={aboutStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Trust — Frequently Asked Questions</h2>
            
            <div className={aboutStyles.faqList}>
              {trustFaqSchema.mainEntity.map((faq, index) => (
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
