import styles from './zoho.module.css';
import ZohoClient from './ZohoClient';

export const metadata = {
  title: 'Zoho Premium Partner USA | Zoho Implementation | FI Digital',
  description: 'Zoho Premium Partner for US SMBs. Zoho CRM, Desk, Books, Creator, and Zoho One implementation with QuickStarts, managed services, and fixed-fee pricing.',
};

export default function ZohoImplementationHub() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Zoho Premium Partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zoho Premium Partner is a partnership tier that Zoho reserves for firms with deep delivery credentials, long tenure, and sustained client growth. It is one of the highest Zoho-partner designations available in the US."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Zoho CRM QuickStart cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We publish a starting-from price on the Packages page. Final fee depends on number of users, data migration complexity, and integrations in scope. All QuickStart engagements are fixed fee, not hourly."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate us from Salesforce or HubSpot to Zoho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. CRM migration is a common engagement. We map fields, migrate accounts, contacts, leads, deals, activities, notes, and attachments, and we stage the cutover to minimize downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver Zoho One?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zoho One rollouts are our biggest multi-practice engagements. They typically run 10 to 16 weeks and integrate CRM, Desk, Books, People, Projects, and Analytics into one operating system."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build custom apps inside Zoho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zoho Creator (low-code) is one of our specialties. We build field-ops apps, partner portals, approval workflows, and custom objects inside Zoho that extend the platform without external code."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support day-two operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Zoho Managed Services is a monthly retainer that covers admin, optimization, enhancement, data hygiene, and end-user support."
        }
      },
      {
        "@type": "Question",
        "name": "Is my Zoho data stored in the US?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By default Zoho US customers are hosted on Zoho US data centers. We can confirm and document this in a Delivery Security Summary."
        }
      },
      {
        "@type": "Question",
        "name": "What changes the price of a Zoho implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Five factors: (1) number of users and roles, (2) data migration volume and source-system complexity, (3) number and type of integrations, (4) custom object or Zoho Creator app scope, and (5) whether managed services are included."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with non-profits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We deliver Zoho for Nonprofit programs and are familiar with nonprofit reporting and fundraising workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a fit call. In 30 minutes we will tell you whether a QuickStart, a Zoho One rollout, or an Optimization Audit is the right starting point."
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
        <ZohoClient />

        {/* FAQ SECTION (Static Server Component for perfect SEO) */}
        <section className={`${styles.sectionFaq} scroll-section`}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Zoho Implementation</h2>
            
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
