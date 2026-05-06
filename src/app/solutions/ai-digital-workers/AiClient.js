"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../page.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aiStyles from './ai.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packagesData = [
  { name: "AI Opportunity Workshop", outcome: "A scored map of 10-15 AI candidate workflows with ROI hypotheses", timeline: "1-2 weeks", model: "Fixed fee" },
  { name: "One-Workflow AI Pilot", outcome: "Production pilot on one workflow with measured lift and audit logs", timeline: "4-6 weeks", model: "Fixed fee" },
  { name: "Support Copilot", outcome: "Agent-assist or deflection copilot on Zoho Desk / Zendesk / Intercom", timeline: "6-10 weeks", model: "Fixed fee" },
  { name: "Internal Knowledge Assistant (RAG)", outcome: "Company knowledge base answer assistant with citations", timeline: "6-10 weeks", model: "Fixed fee" },
  { name: "Document AI Workflow", outcome: "Extraction, validation, and routing for invoices, contracts, claims, or forms", timeline: "6-12 weeks", model: "Fixed fee" },
  { name: "SDR / Outbound AI", outcome: "AI-drafted outbound email with human approval and CRM sync", timeline: "6-10 weeks", model: "Fixed fee" },
  { name: "Multi-Workflow AI Rollout", outcome: "Portfolio of 3-5 AI workflows with shared governance and observability", timeline: "3-6 months", model: "Custom proposal after discovery" }
];

const integrationsStack = [
  {
    category: "Systems of Record",
    stack: "Zoho (CRM, Desk, Creator), Salesforce, HubSpot, Zendesk, Intercom, Freshdesk, Microsoft Dynamics, NetSuite, QuickBooks",
    logos: []
  },
  {
    category: "Internal Workspaces",
    stack: "Slack, Microsoft Teams, Google Workspace, SharePoint, Box, Dropbox, Notion, Confluence, Jira, and custom REST / GraphQL",
    logos: []
  },
  {
    category: "Foundation Models",
    stack: "Claude, OpenAI, AWS Bedrock, Azure OpenAI",
    logos: []
  },
  {
    category: "Orchestration & Vector",
    stack: "LangChain, LlamaIndex, n8n, custom tool-use layers, pgvector, Pinecone, Azure AI Search",
    logos: []
  }
];

export default function AiClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Entrance Animation
    gsap.fromTo(".hero-animate",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );

    // Scroll Reveal Animations for generic sections
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger items
    const grids = gsap.utils.toArray('.stagger-grid');
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('.stagger-card');
      gsap.fromTo(cards,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/real-ai-practice.jpg"
            alt="AI Digital Workers"
            fill
            priority
            className={styles.heroImageReal}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add(styles.heroImagePlaceholder);
            }}
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className="hero-animate">
              <span className={styles.eyebrow}>Governed AI for US SMB and mid-market ops</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>
              Pick one workflow.<br />Prove the lift.<br />Then scale.
            </h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              The AI that matters for a US SMB is not a demo and it is not a chatbot. It is a governed digital worker sitting inside one real workflow — triaging tickets, drafting SDR emails, summarizing sales calls, reading invoices, matching claims, or routing contracts — with audit logs, a kill-switch, and a human-in-the-loop layer. FI Digital ships One-Workflow AI Pilots as fixed-fee engagements so you get <Link href="/case-studies/?practice=ai" style={{textDecoration: 'underline'}}>measurable lift</Link> in 4 to 6 weeks without committing to a six-month "AI transformation" engagement.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/#one-workflow-ai-pilot" className="btn btn-primary">Start with one AI workflow &rarr;</Link>
              <Link href="/packages/#ai-opportunity-workshop" className="btn btn-outline">Book an AI Opportunity Workshop &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <div className="container">
            <ul className={styles.trustList}>
              <li className="hero-animate">AI & LLM Integration</li>
              <li className="hero-animate">200+ projects delivered &middot; 10 years</li>
              <li className="hero-animate">SOC 2 Type II aligned delivery</li>
              <li className="hero-animate">US-based account leads</li>
              <li className="hero-animate">AWS and Azure delivery partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY SMBS STALL ON AI */}
      <section className="scroll-section" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitleCentered}>Why SMBs Stall on AI</h2>
            <p className={styles.sectionIntroCentered}>
              Most SMBs have tried AI. The founder paid for a ChatGPT Team account, someone on ops built an n8n workflow in a weekend, and a pilot died in a team that did not know how to scope it. The pattern is always the same: too broad a scope, no clear success metric, <Link href="/solutions/data-engineering/" style={{textDecoration: 'underline'}}>no data foundation</Link>, and no governance. The 60% of US small businesses that now use AI (U.S. Chamber of Commerce, 2025) are discovering that the hard part is not the model, it is the workflow design, the data, and the guardrails. That is what we ship.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILD */}
      <section className={`${aiStyles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>What We Build</h2>
          
          <div className={aiStyles.tableWrapper}>
            <table className={aiStyles.packagesTable}>
              <thead>
                <tr>
                  <th>Offer</th>
                  <th>Outcome</th>
                  <th>Timeline</th>
                  <th>Commercial Model</th>
                </tr>
              </thead>
              <tbody className="stagger-grid">
                {packagesData.map((pkg, i) => (
                  <tr key={i} className="stagger-card">
                    <td className={aiStyles.packageName}>{pkg.name}</td>
                    <td className={aiStyles.packageOutcome}>{pkg.outcome}</td>
                    <td className={aiStyles.packageTimeline}>{pkg.timeline}</td>
                    <td className={aiStyles.packageModel}>{pkg.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW AN AI PILOT ACTUALLY WORKS */}
      <section className={`${aiStyles.sectionMethod} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>How an AI Pilot Actually Works</h2>
          <p className={styles.sectionIntroCentered}>A structured, 6-week engagement that delivers measured lift without the risk of a long-term transformation project.</p>

          <div className={aiStyles.methodGrid}>
            <div className={aiStyles.methodTimeline}>
              <div className={aiStyles.methodStep}>
                <div className={aiStyles.stepIcon}>1</div>
                <div className={aiStyles.stepContent}>
                  <h4>Weeks 1-2: Discovery</h4>
                  <p>We interview the team that owns the workflow, quantify the current cost, map the data the workflow reads and writes, and define one success metric.</p>
                </div>
              </div>
              <div className={aiStyles.methodStep}>
                <div className={aiStyles.stepIcon}>2</div>
                <div className={aiStyles.stepContent}>
                  <h4>Weeks 2-3: Design</h4>
                  <p>We choose the foundation model (Claude, GPT-4o / GPT-5, or an open model hosted on Bedrock / Azure), design the prompt and tool-use architecture, and write the guardrail spec.</p>
                </div>
              </div>
              <div className={aiStyles.methodStep}>
                <div className={aiStyles.stepIcon}>3</div>
                <div className={aiStyles.stepContent}>
                  <h4>Weeks 3-5: Build &amp; Shadow Mode</h4>
                  <p>We ship a shadow-mode deployment so the AI runs alongside the human for two weeks without touching production.</p>
                </div>
              </div>
              <div className={aiStyles.methodStep}>
                <div className={aiStyles.stepIcon}>4</div>
                <div className={aiStyles.stepContent}>
                  <h4>Weeks 5-6: Go-Live &amp; Measure</h4>
                  <p>We cut the AI into production behind a kill-switch, run a two-week measured period, and deliver a final report with lift, cost, and scaling plan.</p>
                </div>
              </div>
            </div>
            
            <div className={aiStyles.methodImageCol}>
              <Image 
                src="/images/ai-pilot-timeline.png" 
                alt="AI Pilot 6-Week Timeline with Shadow Mode highlight" 
                fill 
                style={{ objectFit: 'contain', backgroundColor: 'var(--bg-primary)' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GOVERNANCE AND GUARDRAILS */}
      <section className={`${aiStyles.sectionGovernance} scroll-section`}>
        <div className={`container ${aiStyles.governanceGrid}`}>
          <div className={aiStyles.governanceTextCol}>
            <h2 className={styles.sectionTitle}>Governance and Guardrails (Read This First)</h2>
            <p>Every AI pilot FI Digital ships comes with a governance kit: a model card describing the model, the training data class, and the intended use; a prompt and output log retained for at least 90 days; a human-in-the-loop escalation path for any decision that touches customers or regulated data; an evaluation set run before every production change; and a kill-switch that turns off the AI without a deploy.</p>
            <p>For customer-facing workflows we ship a disclosure plan that complies with the Colorado AI Act, the Utah AI Policy Act, NYC Local Law 144, and the Illinois AI Video Interview Act, depending on where your customers are.</p>
            <p><strong>We will not deliver an autonomous agent into a customer workflow without <Link href="/trust-security/" style={{textDecoration: 'underline'}}>approved guardrails</Link></strong> — if you need that, we will tell you before we take your money.</p>
          </div>
          <div className={aiStyles.governanceImageCol}>
            <Image 
              src="/images/ai-governance-diagram.png" 
              alt="AI Governance and Guardrails: Model Card, Prompt Log, Eval Set, HITL, Kill-Switch" 
              fill 
              style={{ objectFit: 'cover' }}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: INTEGRATIONS */}
      <section className={`${aiStyles.sectionTech} scroll-section`}>
        <div className="container">
          <div className={aiStyles.techText}>
            <h2 className={styles.sectionTitleCentered}>Integrations We Ship With</h2>
            <p>We build AI workflows that connect directly into your existing systems of record, communication tools, and data stores.</p>
          </div>

          <div className={`${aiStyles.techGrid} stagger-grid`}>
            {integrationsStack.map((tech, i) => (
              <div key={i} className={`stagger-card ${aiStyles.techCard}`}>
                <span className={aiStyles.techCategory}>{tech.category}</span>
                
                {tech.logos.length > 0 && (
                  <div className={aiStyles.techLogosRow}>
                    {tech.logos.map((logo, j) => (
                      <div key={j} className={aiStyles.techLogoWrapper}>
                        <Image 
                          src={logo.path} 
                          alt={logo.name} 
                          fill 
                          style={{ objectFit: 'contain' }}
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                <div className={aiStyles.techStackList}>
                  {tech.stack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="scroll-section" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Ready to ship your first AI workflow?</h2>
          <p className={styles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Get a fixed-fee pilot scoped to your operations, or review our past AI deliverables.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?practice=ai" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?practice=ai" className="btn btn-outline">View AI Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
