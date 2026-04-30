import styles from './product.module.css';
import ProductClient from './ProductClient';

export const metadata = {
  title: 'Product Engineering Services for US SMBs | MVPs, Portals, Apps',
  description: 'Ship MVPs, customer portals, and custom software with a US-led product engineering squad. Fixed-fee Product Discovery Sprints. Senior engineers, no staff aug.',
};

export default function ProductEngineeringHub() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you do staff augmentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We deliver scoped outcomes with a US account lead. If you want bodies-in-seats, we will politely decline and suggest a staff-aug firm."
        }
      },
      {
        "@type": "Question",
        "name": "How senior are your engineers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our product squad leads are senior engineers with 8+ years of US SMB and growth-stage delivery experience. We do not put junior engineers in lead roles."
        }
      },
      {
        "@type": "Question",
        "name": "Where are your engineers based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "US-based account leads and senior engineers drive every engagement. Our global engineering bench supports delivery under US leadership."
        }
      },
      {
        "@type": "Question",
        "name": "Do we own the code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every engagement transfers full IP to the client on acceptance. We do not retain derivative rights to client code."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with our existing engineering team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many engagements are hybrid — our squad leads delivery while your engineers ramp up on the codebase. We leave your team with a code handover, documentation, and a runbook."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Product Discovery Sprint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 2-week fixed-fee engagement that produces a reference architecture, a scope, a fixed-fee build estimate, and a decision-ready report. It is the cheapest way to find out whether you should build or buy."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical MVP take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most production MVPs ship in 10 to 12 weeks after Discovery. Complex, multi-tenant, or regulated builds take 14 to 20 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you write unit and integration tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every build ships with unit tests, integration tests, and a CI / CD pipeline. Test coverage expectations are set in Discovery."
        }
      },
      {
        "@type": "Question",
        "name": "What about security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every build ships with authentication, authorization, input validation, encryption at rest and in transit, and a security review before go-live. For regulated workloads we add SOC 2- or HIPAA-aligned controls from day one."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a fit call or book the Product Discovery Sprint directly."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main>
        <ProductClient />

        {/* FAQ SECTION (Static Server Component for perfect SEO) */}
        <section className={`${styles.sectionFaq} scroll-section`}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Product Engineering</h2>
            
            <div className={styles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.name}</summary>
                  <div className={styles.faqAnswer}>
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
