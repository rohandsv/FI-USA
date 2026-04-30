import styles from './solutions.module.css';
import SolutionsClient from './SolutionsClient';

export const metadata = {
  title: 'Solutions for US SMBs | Zoho, Product, AI, Data | FI Digital',
  description: 'Four integrated practices for US SMBs: Zoho Implementation, Product Engineering, AI & Digital Workers, and Data Engineering. See packages and starting offers.',
};

export default function SolutionsHub() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I have to buy all four practices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Most engagements start with one practice. The four are designed to work together, but each ships standalone."
        }
      },
      {
        "@type": "Question",
        "name": "Which practice should I start with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If CRM / service ops is broken, start with Zoho. If you need to build software, start with Product Engineering. If reporting is unreliable, start with Data Engineering. If you have a specific workflow draining headcount, start with an AI pilot."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do pure staff augmentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We sell outcomes and packages, not hours."
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
        <SolutionsClient />

        {/* FAQ SECTION (Static Server Component for perfect SEO) */}
        <section className={`${styles.sectionFaq} scroll-section`}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions</h2>
            
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
