import DataClient from './DataClient';
import dataStyles from './data.module.css';
import styles from '../../page.module.css';

export const metadata = {
  title: 'Data Engineering Services for US SMBs | Databricks, Snowflake, Fabric',
  description: 'Data Engineering for US SMBs. Databricks lakehouse, Snowflake analytics, Microsoft Fabric, ETL / ELT modernization, governance, BI acceleration. Fixed-fee Data Foundation Assessment.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Databricks vs Snowflake vs Microsoft Fabric — which should we pick?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your starting data estate, your team's platform familiarity, and whether AI / ML is a near-term requirement. Our Data Foundation Assessment answers this question in 2 to 3 weeks with an architecture, a platform pick, and a build plan."
      },
      "uiText": "It depends on your starting data estate, your team's platform familiarity, and whether AI / ML is a near-term requirement. Our <a href='/packages/#data-foundation-assessment'>Data Foundation Assessment</a> answers this question in 2 to 3 weeks with an architecture, a platform pick, and a build plan."
    },
    {
      "@type": "Question",
      "name": "Do we need a lakehouse, a warehouse, or both?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most SMB estates start with a warehouse plus dbt. A lakehouse (Databricks, Fabric OneLake, Iceberg-on-S3) becomes the right answer when unstructured data, ML workloads, or cost pressure at scale enter the picture. We do not over-architect."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Data Foundation Assessment cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "See the Packages page for the published fixed fee. The deliverable is a decision-ready architecture, a platform recommendation, and a fixed-fee build plan."
      },
      "uiText": "See the <a href='/packages/#data-foundation-assessment'>Packages page for the published fixed fee</a>. The deliverable is a decision-ready architecture, a platform recommendation, and a fixed-fee build plan."
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing warehouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you already run Snowflake, Databricks, Redshift, BigQuery, Synapse, or Postgres-as-warehouse, we extend and modernize rather than re-platforming for the sake of it."
      }
    },
    {
      "@type": "Question",
      "name": "What about data governance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We implement Unity Catalog (Databricks), object tags and row-access policies (Snowflake), or Microsoft Purview (Fabric) depending on platform. Governance is scoped separately so it does not get cut under budget pressure."
      },
      "uiText": "We implement Unity Catalog (Databricks), object tags and row-access policies (Snowflake), or Microsoft Purview (Fabric) depending on platform. <a href='/trust-security/'>Governance</a> is scoped separately so it does not get cut under budget pressure."
    },
    {
      "@type": "Question",
      "name": "Can you prepare data for AI workflows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our AI-Ready Data Foundation work cleans, permissions, and surfaces the specific data an AI workflow needs, with freshness, lineage, and access logging baked in."
      },
      "uiText": "Yes. Our <a href='/solutions/ai-digital-workers/'>AI-Ready Data Foundation</a> work cleans, permissions, and surfaces the specific data an AI workflow needs, with freshness, lineage, and access logging baked in."
    },
    {
      "@type": "Question",
      "name": "Do you support streaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Kafka, Kinesis, Event Hubs, Snowpipe, and Delta Live Tables for streaming workloads where batch is not fast enough."
      }
    },
    {
      "@type": "Question",
      "name": "Which BI tools do you build on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Power BI, Tableau, Looker, Zoho Analytics, Sigma, and Mode. We have a bias toward semantic layers in dbt so the BI layer is not the source of truth."
      },
      "uiText": "Power BI, Tableau, Looker, <a href='/solutions/zoho-implementation/'>Zoho Analytics</a>, Sigma, and Mode. We have a bias toward semantic layers in dbt so the BI layer is not the source of truth."
    },
    {
      "@type": "Question",
      "name": "Is my data stored in the US?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes by default. We deploy on AWS us-east / us-west, Azure East US / Central US, and Snowflake / Databricks / Fabric US regions."
      }
    },
    {
      "@type": "Question",
      "name": "How do we start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a Data Foundation Assessment. It is the most expensive thing to skip and the cheapest thing to buy."
      },
      "uiText": "<a href='/packages/#data-foundation-assessment'>Book a Data Foundation Assessment</a>. It is the most expensive thing to skip and the cheapest thing to buy."
    }
  ]
};

export default function DataEngineeringHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Data Engineering — Turn sprawl into one source of truth.</h1>
      
      <main>
        <DataClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={dataStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — Data Engineering</h2>
            
            <div className={dataStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={dataStyles.faqItem}>
                  <summary className={dataStyles.faqQuestion}>{faq.name}</summary>
                  <div className={dataStyles.faqAnswer}>
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
