import AiClient from './AiClient';
import styles from '../../page.module.css';
import aiStyles from './ai.module.css';

export const metadata = {
  title: 'AI Automation for US SMBs | AI Agents & Digital Workers | FI Digital',
  description: 'Governed AI and Digital Workers for US SMBs. One-Workflow AI Pilots, support copilots, document AI, and RAG. Audit logs, human-in-the-loop, and state AI law alignment.',
};

export default function AiDigitalWorkers() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a 'digital worker'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A governed AI system that completes a defined task inside one workflow — e.g., summarizing every sales call, triaging every inbound support ticket, reading every invoice, or drafting the first version of every SDR email. It is not a chatbot and it is not autonomous; it is a task worker with a human-in-the-loop layer."
        }
      },
      {
        "@type": "Question",
        "name": "Which foundation model will you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We select per workflow. Claude for long-form reasoning and code, GPT-4o / GPT-5 for general tasks, AWS Bedrock or Azure OpenAI when data residency is required, open models (Llama, Mistral) when cost or air-gap is the driver."
        }
      },
      {
        "@type": "Question",
        "name": "Will my data be used to train a model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We deploy on enterprise / API plans that do not retain or train on prompts (Claude for Business, OpenAI enterprise, Bedrock, Azure OpenAI). We contractually confirm this in every engagement."
        }
      },
      {
        "@type": "Question",
        "name": "What does an AI pilot cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We publish a starting-from price for One-Workflow AI Pilot on the Packages page. Final fee depends on integration complexity, data volume, and governance scope."
        },
        "uiText": "We publish a starting-from price for <a href=\"/packages/#one-workflow-ai-pilot\">One-Workflow AI Pilot</a> on the Packages page. Final fee depends on integration complexity, data volume, and governance scope."
      },
      {
        "@type": "Question",
        "name": "How do you measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One primary metric per pilot, agreed in Discovery. Typical metrics: support ticket deflection rate, first-response time, SDR open rate, invoice cycle time, claim cycle time, agent handle time, CSAT."
        }
      },
      {
        "@type": "Question",
        "name": "Do you comply with state AI laws?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every pilot ships with a disclosure plan that aligns with Colorado AI Act, Utah AI Policy Act, NYC Local Law 144, and the Illinois AI Video Interview Act, depending on where the pilot touches customers or employees."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with our Zoho / Salesforce / HubSpot / Zendesk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. CRM and service-desk integration is standard scope on most pilots."
        },
        "uiText": "Yes. <a href=\"/solutions/zoho-implementation/\">CRM and service-desk integration</a> is standard scope on most pilots."
      },
      {
        "@type": "Question",
        "name": "What about hallucinations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ship RAG (retrieval-augmented generation) with citation, structured output validation, and an eval set that runs before every production change. For decisions with customer impact we require human-in-the-loop approval."
        }
      },
      {
        "@type": "Question",
        "name": "Can the AI take actions on our behalf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only within a scoped tool-use contract. The AI can draft a reply, create a ticket, update a record, or send an email — with a human approval layer for any action class you flag."
        }
      },
      {
        "@type": "Question",
        "name": "How do we start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book an AI Opportunity Workshop, or jump straight into a One-Workflow AI Pilot if you already know which workflow you want to attack."
        },
        "uiText": "<a href=\"/packages/#ai-opportunity-workshop\">Book an AI Opportunity Workshop</a>, or jump straight into a One-Workflow AI Pilot if you already know which workflow you want to attack."
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing AI managed services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. After a pilot, most clients move to an AI Operations retainer that covers eval refresh, prompt tuning, integration maintenance, and governance updates."
        }
      },
      {
        "@type": "Question",
        "name": "Is FI Digital independent of AI vendors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are not a reseller for any single model. We pick the model and tooling that fits the workflow — Claude, OpenAI, Bedrock, Azure OpenAI, or open models."
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
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Governed AI and Digital Workers — pick one workflow, prove the lift.</h1>
      
      <main>
        <AiClient />

        {/* FAQ SECTION (Static Server Component) */}
        <section className={aiStyles.sectionFaq}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Frequently Asked Questions — AI &amp; Digital Workers</h2>
            
            <div className={aiStyles.faqList}>
              {faqSchema.mainEntity.map((faq, index) => (
                <details key={index} className={aiStyles.faqItem}>
                  <summary className={aiStyles.faqQuestion}>{faq.name}</summary>
                  <div className={aiStyles.faqAnswer}>
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
