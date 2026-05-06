"use client";

import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '../../../page.module.css';
import styles from './quickstart.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const deliverables = [
  {
    name: "Sales Process Design",
    what: "Stakeholder interviews, current-state sales process audit, and a Scope and Configuration Map delivered before build begins.",
    scope: "Week 1 — included"
  },
  {
    name: "CRM Configuration",
    what: "Up to 3 sales pipelines, 2 user roles, custom fields, deal stages, activity tracking, and layout configuration built to your process.",
    scope: "Up to 3 pipelines, 2 roles"
  },
  {
    name: "Lead & Deal Automation",
    what: "Automated lead assignment, follow-up task creation, stage-change notifications, and workflow rules.",
    scope: "Standard automation included"
  },
  {
    name: "Data Migration",
    what: "Migration from one source system — Salesforce, HubSpot, Pipedrive, or CSV. Field mapping, accounts, contacts, deals, activities, and notes migrated and validated.",
    scope: "1 source system included"
  },
  {
    name: "Email & Calendar Integration",
    what: "Connection with one email and calendar tool — Google Workspace or Microsoft 365 / Outlook — so all emails and meetings log automatically.",
    scope: "1 tool included (Google or M365)"
  },
  {
    name: "User Training & Go-Live Support",
    what: "Up to 2 role-specific training sessions, admin playbooks, and 30 days of post-go-live admin support.",
    scope: "2 sessions + 30-day support"
  }
];

const timeline = [
  { phase: "Discover", timing: "Week 1", what: "Stakeholder interviews, sales process audit, data source review.", deliverable: "Scope and Configuration Map" },
  { phase: "Design", timing: "Week 2", what: "Field model, pipeline stages, automation rules, and migration mapping agreed and signed off.", deliverable: "Signed-off configuration spec" },
  { phase: "Build", timing: "Weeks 2–4", what: "CRM configured and tested, data migrated and validated, integrations connected, pilot-user review conducted.", deliverable: "Configured CRM, data validation report" },
  { phase: "Train & Go Live", timing: "Week 4–5", what: "Role-specific training (up to 2 sessions), admin playbooks handed over, go-live cutover managed.", deliverable: "Live CRM, training recordings, playbooks" },
  { phase: "Operate", timing: "Month 2 onward", what: "Optional. Monthly admin retainer, SLA-backed incident response, quarterly optimization review.", deliverable: "Zoho Managed Services retainer (optional)" }
];

const factors = [
  { title: "Number of users and roles", desc: "Standard scope covers up to 2 roles. Additional role hierarchies and profiles are quoted separately." },
  { title: "Data migration volume and source-system complexity", desc: "Standard scope covers one source system. Multiple sources, legacy databases, or complex object mapping are quoted as migration add-ons." },
  { title: "Number of sales pipelines", desc: "Standard scope covers up to 3 pipelines. Additional pipelines or product-specific variants add to scope." },
  { title: "Additional integrations", desc: "Standard scope includes one email and calendar tool. ERP connections (QuickBooks, NetSuite, Xero), telephony (RingCentral, JustCall), ecommerce (Shopify), and doc signing are quoted separately." },
  { title: "Zoho Creator custom apps or complex automation", desc: "Custom low-code apps inside Zoho Creator, multi-branch conditional automation, or webhook-driven integrations are scoped as separate fixed-fee engagements." }
];

const criteria = [
  "Operations-led SMBs with 25 to 150 users running their sales team on spreadsheets, a shared inbox, or a CRM no one logs into.",
  "Companies migrating away from Salesforce or HubSpot because the price is too high or the team never fully adopted the platform.",
  "Growth-stage companies scaling from 5 to 50+ sales users and needing a CRM configured properly — with role hierarchies, deal stages, and automation that grows with the team.",
  "Businesses starting a Zoho One rollout with CRM as Phase 1. The QuickStart is designed as a foundation that extends to Zoho Desk, Marketing Automation, and additional modules.",
  "US SMBs across Professional Services, Manufacturing and Distribution, Logistics and Field Service, and Financial Services where CRM configuration must match operational reality, not a generic template.",
  "Any team that needs a live, production CRM within a defined timeline at a fixed fee they can plan around."
];

const integrations = [
  { category: "Email and calendar", tools: "Google Workspace, Microsoft 365 / Outlook (one included in QuickStart)" },
  { category: "Migration paths", tools: "Salesforce, HubSpot, Pipedrive, CSV (one source included in QuickStart)" },
  { category: "Accounting and ERP", tools: "QuickBooks, Xero, Sage Intacct, NetSuite, Microsoft Dynamics 365" },
  { category: "Payments & Commerce", tools: "Stripe, Shopify, BigCommerce, WooCommerce" },
  { category: "Telephony & SMS", tools: "Twilio, RingCentral, JustCall, SendGrid" },
  { category: "Document signing", tools: "DocuSign, Adobe Sign" },
  { category: "Collaboration", tools: "Microsoft Teams, Slack" },
  { category: "Marketing", tools: "Mailchimp, Zoho Campaigns" },
  { category: "Custom", tools: "REST / GraphQL APIs for non-standard source systems" }
];

const credentials = [
  { title: "Zoho Premium Partner", desc: "Reviewed annually against delivery quality and client growth." },
  { title: "Zoho Authorized Partner USA", desc: "US-based certified partner." },
  { title: "Zoho Certified Consultants", desc: "Zoho CRM, Desk, Creator, Books, People, Analytics, and Campaigns certified consultants on staff." },
  { title: "200+ Zoho Engagements", desc: "Delivered across 10 years of operations." },
  { title: "SOC 2 Type II Aligned", desc: "Delivery Security Summary available on NDA." },
  { title: "US-Based Account Lead", desc: "On every engagement. FI Digital LLC, Atlanta, Georgia." },
  { title: "US Data Residency", desc: "Zoho US data centers by default. Confirmed in writing on request." }
];

export default function QuickstartClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Entrance Animation
    gsap.fromTo(".hero-animate",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );

    // Section Reveal
    const sections = gsap.utils.toArray('.scroll-section');
    sections.forEach((sec) => {
      gsap.fromTo(sec,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Timeline Stagger
    gsap.fromTo(".timeline-card",
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-trigger",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Factors Stagger
    gsap.fromTo(".factor-card",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: ".factors-trigger",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Criteria Stagger
    gsap.fromTo(".who-item",
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: ".who-trigger",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Integrations Stagger
    gsap.fromTo(".integration-card",
      { scale: 0.95, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".integrations-trigger",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Credentials Stagger
    gsap.fromTo(".credential-item",
      { x: 20, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: ".trust-trigger",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={homeStyles.heroSection}>
        <div className={homeStyles.heroImageWrapper}>
          <Image
            src="/images/home-hero.webp"
            alt="Zoho CRM Quickstart"
            fill
            priority
            className={homeStyles.heroImageReal}
          />
        </div>

        <div className={`container ${homeStyles.heroContainer}`}>
          <div className={homeStyles.heroContent}>
            <div className="hero-animate">
              <span className={homeStyles.eyebrow}>Zoho Premium Partner &middot; Atlanta, GA &middot; Serving US SMBs</span>
            </div>
            <h1 className={`hero-animate ${homeStyles.heroH1}`}>
              Get a Production Zoho CRM Live in 3 to 5 Weeks — Fixed Fee
            </h1>
            <p className={`hero-animate ${homeStyles.heroSub}`}>
              A fixed-fee implementation that gives your sales team a CRM they will actually use — configured pipelines, data migration from one source system, lead and deal automation, email and calendar integration, user training, and 30 days of post-go-live admin support. One scope. One fee. Live in 3 to 5 weeks.
            </p>
            <div className={`hero-animate ${homeStyles.heroCtas}`}>
              <Link href="/packages/#zoho-crm-quickstart" className="btn btn-primary">Start with a Zoho CRM QuickStart &rarr;</Link>
              <Link href="/book-a-fit-call/?practice=zoho" className="btn btn-secondary">Book a Zoho fit call &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={homeStyles.trustStrip}>
          <div className="container">
            <ul className={homeStyles.trustList}>
              <li className="hero-animate">Zoho Premium Partner badge</li>
              <li className="hero-animate">Fixed fee — not hourly</li>
              <li className="hero-animate">US-based account lead</li>
              <li className="hero-animate">200+ Zoho projects delivered</li>
              <li className="hero-animate">SOC 2 Type II aligned delivery</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* SECTION 1: WHAT IS THE QUICKSTART */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 className={homeStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Section 1: What Is the Zoho CRM QuickStart?</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  The Zoho CRM QuickStart is FI Digital&apos;s fixed-fee implementation package for US SMBs that are ready to exit spreadsheets, retire an underperforming legacy CRM, or launch Zoho CRM for the first time. It is designed to deliver a production CRM — one your salespeople will actually use — in 3 to 5 weeks.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Every QuickStart is scoped around six deliverables: sales process design, CRM configuration (up to 3 pipelines, 2 roles), lead and deal automation, data migration from one source system, email and calendar integration with one tool, and user training with 30 days of post-go-live admin support. The fixed fee covers all six. Items outside this scope are quoted separately in writing before work begins.
                </p>
                <p>
                  FI Digital is a Zoho Premium Partner — a designation Zoho reserves for a small number of partners with deep delivery credentials, long tenure, and sustained client growth. We have delivered more than 200 Zoho engagements across 10 years. We do not sell generic Zoho consultations. We sell fixed-fee, outcome-led QuickStarts.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '500px', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <Image 
                src="/images/zoho-why-us.jpg" 
                alt="Zoho Implementation" 
                fill 
                style={{ objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS INCLUDED */}
      <section className={`${styles.sectionDeliverables} scroll-section`}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Section 2: What Is Included</h2>
            <p className={homeStyles.sectionSubtitle}>Every QuickStart includes the following six deliverables. Nothing is held behind an add-on tier.</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.deliverablesTable}>
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>What we do</th>
                  <th>Scope</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item, i) => (
                  <tr key={i}>
                    <td className={styles.deliverableName}>{item.name}</td>
                    <td className={styles.deliverableWhat}>{item.what}</td>
                    <td className={styles.deliverableScope}>{item.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE (UNIQUE DESIGN) */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Section 3: Delivery Timeline — 3 to 5 Weeks, Start to Finish</h2>
            <p className={homeStyles.sectionSubtitle}>Every QuickStart follows the same five-phase cadence. You know what is happening each week — and so does your team.</p>
          </div>

          <div className={`${styles.timelineGrid} timeline-trigger`}>
            {timeline.map((item, i) => (
              <div key={i} className={`${styles.timelinePhaseCard} timeline-card`}>
                <div className={styles.phaseIndicator}>
                  <span className={styles.phaseNumber}>Phase {i + 1}</span>
                  <span className={styles.phaseTiming}>{item.timing.split(' ')[0]}</span>
                </div>
                <div className={styles.phaseContent}>
                  <div className={styles.phaseHeader}>
                    <h3 className={styles.phaseTitle}>{item.phase}</h3>
                    <span className={styles.phaseTimingLabel}>{item.timing}</span>
                  </div>
                  <p className={styles.phaseWhat}>{item.what}</p>
                  <div className={styles.phaseDeliverableTag}>
                    {item.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT CHANGES THE PRICE */}
      <section className={`${styles.pricingSection} scroll-section`}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Section 4: What Changes the Price</h2>
            <p className={homeStyles.sectionSubtitle}>The QuickStart is fixed fee. The price on the Packages page is the starting-from floor for a standard scope. Five factors push the final fee above the floor:</p>
          </div>

          <div className={`${styles.factorsGrid} factors-trigger`}>
            {factors.map((item, i) => (
              <div key={i} className={`${styles.factorCard} factor-card`}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.pricingCallout}>
            <p>We provide a written scope before any work begins. There are no billable-hour surprises.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO THIS IS FOR */}
      <section className={`${styles.whoSection} scroll-section`}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Section 5: Who This Is For</h2>
            <p className={homeStyles.sectionSubtitle}>The Zoho CRM QuickStart is the right starting point if any of the following apply:</p>
          </div>

          <div className={`${styles.whoList} who-trigger`}>
            {criteria.map((item, i) => (
              <div key={i} className={`${styles.whoItem} who-item`}>
                <div className={styles.whoCheck}>✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY FI DIGITAL */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className={homeStyles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Section 6: Why FI Digital — Not Just Any Zoho Partner</h2>
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '2rem' }}>
                Zoho has hundreds of authorized partners in the US. FI Digital is a Zoho Premium Partner — a level Zoho reserves for firms with deep delivery credentials and long tenure, reviewed annually against delivery quality and client growth.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                We have delivered more than 200 Zoho engagements across CRM, Desk, Creator, Books, People, Analytics, and Campaigns. Our US-based account leads scope every project. Our Zoho-certified consultants own the build. We publish fixed-fee starting prices so you can plan before you get on a call with us. Most Zoho partners hide pricing and bill hourly. We do not.
              </p>
              <p>
                After your QuickStart, you can hand off to an internal admin with our playbooks, or continue with a Zoho Managed Services retainer where the same team maintains, optimizes, and enhances your platform month to month. You do not need to find a new partner for day-two operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INTEGRATIONS */}
      <section className={`${styles.integrationsSection} scroll-section`}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Section 7: Integrations We Ship with Zoho CRM</h2>
            <p className={homeStyles.sectionSubtitle}>
              The QuickStart includes one email and calendar integration. Our integration engineering squad handles the more complex cases — ERP, accounting, telephony, ecommerce, and document signing — as separate scopes or as part of a broader Zoho One rollout.
            </p>
          </div>

          <div className={`${styles.integrationsGrid} integrations-trigger`}>
            {integrations.map((item, i) => (
              <div key={i} className={`${styles.integrationCard} integration-card`}>
                <h3>{item.category}</h3>
                <p>{item.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TRUST & CREDENTIALS */}
      <section className={`${styles.trustSection} scroll-section`}>
        <div className="container">
          <div className={homeStyles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle} style={{ color: '#ffffff' }}>Section 8: Trust & Delivery Credentials</h2>
          </div>

          <div className={`${styles.credentialsGrid} trust-trigger`}>
            {credentials.map((item, i) => (
              <div key={i} className={`${styles.credentialItem} credential-item`}>
                <div className={styles.credentialDot}></div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Get Started with FI Digital &rarr;</Link>
          </div>
        </div>
      </section>

      <div style={{ height: '5vh' }}></div>
    </div>
  );
}
