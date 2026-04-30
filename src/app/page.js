import styles from './page.module.css';
import HomeClient from './HomeClient';

export const metadata = {
  title: 'Business Transformation Partner for US SMBs | FI Digital',
  description: 'FI Digital is a US SMB transformation partner. Zoho Premium Partner, product engineering, AI automation, and data engineering — one execution partner, fixed-fee starts.',
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does FI Digital do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FI Digital is a US SMB transformation partner. We deliver four integrated practices — Zoho Implementation Stack, Product Engineering, AI and Digital Workers, and Data Engineering — as one execution partner, with fixed-fee starting offers and US-based account leads."
        }
      },
      {
        "@type": "Question",
        "name": "Where is FI Digital based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FI Digital LLC is headquartered in Atlanta, Georgia. We serve US SMB and mid-market clients with US-based account leads and a globally distributed engineering bench."
        }
      },
      {
        "@type": "Question",
        "name": "Is FI Digital only a Zoho partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Zoho Implementation Stack is one of four equal practices. We are a Zoho Premium Partner, and we also deliver Product Engineering, AI and Digital Workers, and Data Engineering as standalone services."
        }
      },
      {
        "@type": "Question",
        "name": "What size company does FI Digital work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with US SMB and mid-market companies, typically 25 to 500 employees, across Professional Services, Manufacturing and Distribution, Logistics and Field Service, and Financial Services."
        }
      },
      {
        "@type": "Question",
        "name": "How does FI Digital price its work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not publish hourly rates. We publish fixed-fee starting offers (Zoho QuickStart, Product Discovery Sprint, One-Workflow AI Pilot, Data Foundation Assessment), monthly starting points for Managed Services, and custom proposals after discovery for bespoke builds."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can we start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most fixed-fee starting offers kick off within 2 weeks of a signed agreement. Discovery, QuickStart, and Pilot phases run 2 to 6 weeks; full implementations typically run 10 to 16 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Where is my data stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By default we deploy on US regions — AWS us-east / us-west, Azure East US / Central US, and Zoho US data centers. We can support in-country residency requirements for specific regulated workloads on request."
        }
      },
      {
        "@type": "Question",
        "name": "Is FI Digital SOC 2 or HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our delivery practices align with SOC 2 Type II controls and we can deliver against HIPAA-aligned controls with a signed BAA for healthcare-adjacent workflows. See the Trust & Security page for the full Delivery Security Summary."
        }
      },
      {
        "@type": "Question",
        "name": "How is FI Digital different from a large consultancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Large consultancies sell six-month advisory engagements and a recommendation deck. FI Digital sells fixed-fee outcomes. Our account leads stay on the engagement, our engineers ship production code, and our packages publish starting-from pricing so SMB buyers can plan without a three-meeting sales cycle."
        }
      },
      {
        "@type": "Question",
        "name": "How is FI Digital different from a freelancer or offshore shop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a US-registered firm with a US-based account lead on every engagement, a senior delivery bench, professional indemnity insurance, SOC 2 aligned controls, and a Zoho Premium Partner designation. We publish case studies with metrics, not adjectives."
        }
      },
      {
        "@type": "Question",
        "name": "Can FI Digital integrate my existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We have integrated 40+ platforms including Salesforce, HubSpot, NetSuite, QuickBooks, Sage, Xero, Microsoft Dynamics, Shopify, BigCommerce, Stripe, Twilio, SendGrid, Zoho, and custom REST / GraphQL APIs. Complex multi-system work runs through our integration engineering practice."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support AI governance and state AI laws?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every AI pilot ships with audit logs, a human-in-the-loop layer, a model card, and a disclosure plan that fits the client's jurisdictions, including Colorado AI Act, Utah AI Policy Act, Illinois AI Video Interview Act, and NYC Local Law 144."
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
      
      <main className={styles.main}>
        {/* Dynamic GSAP Sections */}
        <HomeClient />

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
