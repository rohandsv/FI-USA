"use client";

import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '../../../page.module.css';
import styles from './managed-services.module.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const serviceAreas = [
  {
    area: "Monthly Admin Hours",
    covers: "A dedicated block of hours per month for configuration changes, field edits, pipeline adjustments, automation rule updates, user management, and integration maintenance. Unlike generic helpdesks, our managed zoho services provide proactive administration. Hours are consumed against your prioritized request queue and reported monthly with full transparency. This ensures your system evolves alongside your business requirements without the overhead of a full-time hire."
  },
  {
    area: "SLA-Backed Incident Response",
    covers: "We provide published response-time targets by severity tier, ensuring your business stays operational. Business-critical incidents — such as broken workflows, failed data syncs, or user access loss — receive prioritized response within your tier's specific SLA window. Our zoho managed services usa team is available during standard business hours (Monday–Friday, 9am–6pm ET) to provide immediate relief for platform-breaking issues, ensuring minimal downtime for your sales and operations teams."
  },
  {
    area: "Quarterly Optimization Review",
    covers: "A structured quarterly audit of platform health, usage and adoption metrics, and upcoming Zoho releases. We deliver a prioritized improvement roadmap for the next 90 days as a written report with a live review session. This proactive zoho crm maintenance strategy prevents technical debt and ensures you are always leveraging the latest features of the Zoho One ecosystem. We don't just fix what's broken; we look for ways to make your workflows faster and more efficient."
  },
  {
    area: "Small Enhancements",
    covers: "Minor feature additions, new workflow rules, updated reports, dashboard adjustments, and field changes completed within your monthly hours — no separate scoping or additional fee. This allows for continuous deployment of improvements without the friction of project-based billing. Our zoho partner managed services approach encourages iterative growth, meaning your CRM is never 'finished' but always improving based on real user feedback."
  },
  {
    area: "User Support & Training",
    covers: "End-user support via a shared ticketing channel covering login issues, role and permission changes, training reinforcement, and day-to-day usage questions. High-quality zoho admin support means your team stays productive and confident in the tools they use. We act as an extension of your internal team, providing the documentation and quick answers needed to maintain high user adoption rates across all modules."
  },
  {
    area: "Data Hygiene & Integrity",
    covers: "Regular deduplication reviews, data quality audits, field cleanup, and record validation to keep CRM data accurate, reporting reliable, and the pipeline trustworthy. Bad data is the leading cause of CRM failure. Our proactive approach to data management ensures your leadership team is making decisions based on facts, not artifacts. We help you define validation rules and cleanup routines that keep your database pristine month after month."
  },
  {
    area: "Monthly Strategic Reporting",
    covers: "A monthly activity summary covering hours used, incidents resolved, enhancements shipped, open backlog items, and a platform health score. These reports provide clear visibility into the ROI of your managed zoho services investment. You'll see exactly where your budget is going and the tangible progress we're making on your digital transformation roadmap. This data-driven approach ensures total accountability and strategic alignment."
  },
  {
    area: "Named US-Based Account Lead",
    covers: "One US-based account lead who knows your system, attends your quarterly review, owns the relationship, and is the escalation path for anything outside day-to-day support. Having a dedicated expert means you never have to repeat your business logic to a new consultant. Your account lead acts as a Zoho architect, ensuring every change we make is architecturally sound and scales with your future growth plans."
  },
  {
    area: "Security & Access Reviews",
    covers: "Periodic role and permission audits, user access hygiene, and API key / integration credential rotation support. As your team grows and changes, security gaps naturally emerge. Our managed zoho services include regular security check-ups to ensure that the right people have the right access to the right data. We help you stay compliant with internal security policies and industry best practices like SOC 2."
  }
];

const tiers = [
  { feature: "Monthly admin hours", essential: "Light tier", professional: "Standard tier", enterprise: "Premium tier" },
  { feature: "Incident response SLA (P1)", essential: "Next business day", professional: "4 hours (business hours)", enterprise: "2 hours (business hours)" },
  { feature: "Optimization review cadence", essential: "Quarterly", professional: "Quarterly + mid-quarter check-in", enterprise: "Monthly + weekly stand-up" },
  { feature: "User support channel", essential: "Ticketed", professional: "Ticketed + email", enterprise: "Dedicated Slack or Teams channel" },
  { feature: "Small enhancements", essential: "Within hours", professional: "Within hours", enterprise: "Enhancements + Creator and integration maintenance" },
  { feature: "Data hygiene", essential: "Quarterly", professional: "Monthly", enterprise: "Monthly + proactive monitoring" },
  { feature: "Zoho modules supported", essential: "Up to 2", professional: "Up to 4", enterprise: "All modules (unlimited)" },
  { feature: "Named account lead", essential: "Yes", professional: "Yes", enterprise: "Yes — senior Zoho consultant assigned" },
  { feature: "Security & access review", essential: "Annual", professional: "Semi-annual", enterprise: "Quarterly" },
  { feature: "Commitment / commercial", essential: "Monthly retainer. 90-day minimum.", professional: "Monthly retainer. 90-day minimum.", enterprise: "Custom pricing. Contact us." }
];

const factors = [
  { title: "Monthly hours included", desc: "The primary cost driver for zoho admin support. Right-sized at onboarding based on your current backlog and ongoing admin load. We help you determine the optimal capacity to keep your team moving forward." },
  { title: "Number of Zoho modules in scope", desc: "CRM only versus a full Zoho One suite (Desk, Books, Campaigns) requires different coverage breadth. Managing the interplay between multiple integrated modules increases the complexity of managed zoho services." },
  { title: "Number of users", desc: "More users generate more support tickets, access management requests, and training needs. We factor in your headcount to ensure our response times remain fast as your organization scales." },
  { title: "SLA response-time tier", desc: "The speed of our response affects the retainer level. Next-business-day, 4-hour, and 2-hour business-hours response windows correspond to Essential, Professional, and Enterprise tiers respectively." },
  { title: "Enhancement complexity", desc: "While light changes are absorbed in hours, major new module implementations or custom Zoho Creator app builds are scoped as separate fixed-fee projects to ensure clarity and budget control." }
];

const slas = [
  { severity: "P1 — Business-critical", definition: "Broken workflow, failed sync, or access loss affecting production.", essential: "Next business day", professional: "4 hours (BH)", enterprise: "2 hours (BH)" },
  { severity: "P2 — Major function broken", definition: "Key automation or integration not functioning. Workaround exists.", essential: "2 business days", professional: "8 hours (BH)", enterprise: "4 hours (BH)" },
  { severity: "P3 — Minor issue / request", definition: "Non-critical config request, report update, minor field change.", essential: "5 business days", professional: "3 business days", enterprise: "2 business days" }
];

const onboardingSteps = [
  { step: "Fit call", timing: "Before contract", what: "We review your current Zoho setup, understand your admin load and backlog, and recommend the right retainer tier. No pitch deck — honest scoping focused on managed zoho services ROI." },
  { step: "System audit & handover", timing: "Weeks 1–2", what: "We document your system — modules, integrations, workflows, user roles, known issues — and take ownership of the admin stack from whoever managed it previously." },
  { step: "Backlog triage", timing: "Week 2", what: "We capture your open requests, prioritize by business impact, and clear the first backlog sprint in month 1. You see tangible zoho admin support output from week one." },
  { step: "Ongoing retainer cadence", timing: "Month 1 onward", what: "Monthly hours consumed against your request queue. SLA-backed incident response. Monthly report delivered. Quarterly review on the calendar to drive crm maintenance." },
  { step: "Quarterly review & roadmap", timing: "Every 90 days", what: "Platform health audit, usage review, Zoho release notes summary, and a prioritized improvement roadmap for the next quarter. This ensures your zoho partner managed services deliver long-term value." }
];

const modules = [
  { name: "Zoho CRM", desc: "pipelines, automation, roles, custom objects, reports", logo: "/images/zoho-Apps/crm.png" },
  { name: "Zoho Desk", desc: "queues, SLAs, macros, escalation rules, customer portal", logo: "/images/zoho-Apps/desk.png" },
  { name: "Zoho Books", desc: "invoicing, expense workflows, chart of accounts, CRM sync", logo: "/images/zoho-Apps/books.png" },
  { name: "Zoho Analytics", desc: "unified reporting across CRM, Desk, Books, and external sources", logo: "/images/zoho-Apps/analytics.png" },
  { name: "Zoho Creator", desc: "low-code custom apps, field-ops tools, approval workflows", logo: "/images/zoho-Apps/creator.png" },
  { name: "Zoho Campaigns", desc: "email journeys, lead scoring, list management", logo: "/images/zoho-Apps/campaigns.png" },
  { name: "Zoho People", desc: "HR workflows, leave management, performance, onboarding", logo: "/images/zoho-Apps/people.png" },
  { name: "Zoho Projects", desc: "project tracking, task automation, deal-to-project handoff", logo: "/images/zoho-Apps/projects.png" },
  { name: "Zoho Inventory", desc: "stock management, multi-warehouse, purchase orders", logo: "/images/zoho-Apps/inventory.png" },
  { name: "Zoho Sign", desc: "document signing workflows and CRM integration", logo: "/images/zoho-Apps/sign.png" },
  { name: "Zoho SalesIQ", desc: "live chat, visitor tracking, lead routing into CRM", logo: "/images/zoho-Apps/salesiq.png" },
  { name: "Zoho Flow", desc: "multi-app integration workflows and API connectors", logo: "/images/zoho-Apps/flow.png" },
  { name: "Zoho One (all apps)", desc: "full-suite administration and cross-module governance", logo: "/images/zoho-Apps/one.png" }
];

const idealCustomers = [
  "SMBs that went live after a QuickStart or a Zoho One rollout and whose post-go-live admin support has run out. The retainer is the natural continuation of the implementation engagement.",
  "Teams that inherited a Zoho implementation from another partner who left. We start with a system audit and take over ongoing management with full context.",
  "Operations-led SMBs with no in-house Zoho administrator. Your team uses Zoho every day but no one owns it. The retainer replaces the full-time hire you do not want to make.",
  "Companies whose internal Zoho admin is leaving, overloaded, or whose institutional system knowledge is at risk of walking out the door.",
  "Businesses running Zoho One across four or more modules that need structured ongoing management to keep all modules performing and integrated.",
  "Teams that want enhancement work done steadily month by month, rather than in expensive project sprints with separate scoping overhead each time."
];

const credentials = [
  "Zoho Premium Partner — reviewed annually against delivery quality and client growth.",
  "Zoho Authorized Partner USA.",
  "Zoho CRM, Desk, Creator, Books, People, Analytics, and Campaigns certified consultants on staff.",
  "200+ Zoho engagements delivered across 10 years.",
  "SOC 2 Type II aligned delivery practices. Delivery Security Summary available on NDA.",
  "US-based account lead on every engagement. FI Digital LLC, Atlanta, Georgia.",
  "Zoho US data centers by default. US data residency confirmed in writing on request.",
  "Month-to-month after 90-day minimum. We keep clients by delivering value — not lock-in clauses."
];

const faqs = [
  { q: "What is Zoho Managed Services?", a: "Zoho Managed Services is FI Digital's monthly retainer for US SMBs already live on Zoho. It covers monthly admin hours, SLA-backed incident response, user support, small enhancements, data hygiene, monthly reporting, and quarterly optimization reviews — delivered by a US-based Zoho Premium Partner team. This managed zoho services model is designed to provide enterprise-grade administration to mid-market companies." },
  { q: "Who is Zoho Managed Services for?", a: "SMBs already live on Zoho who need ongoing admin and support without hiring a full-time Zoho resource. Also for teams inheriting an existing implementation, or whose internal admin capacity is insufficient for the platform's ongoing needs. It is the ideal solution for companies looking for reliable zoho managed services usa." },
  { q: "How much does it cost?", a: "We publish a starting monthly fee on the Packages page. The retainer price depends on monthly hours included, number of Zoho modules supported, user count, and SLA response tier. Enterprise-tier pricing is custom — contact us for a quote tailored to your zoho partner managed services needs." },
  { q: "What is the minimum commitment?", a: "90 days (3 months). After the initial term the retainer is month-to-month. We keep clients by doing good work — not lock-in clauses. This flexibility is a core part of our zoho crm maintenance philosophy." },
  { q: "What SLA does FI Digital offer for incident response?", a: "SLA response times are tiered by retainer level. P1 business-critical incidents: next business day (Essential), 4 hours (Professional), 2 hours (Enterprise). Our zoho admin support is optimized for US business hours: Monday–Friday, 9am–6pm ET." },
  { q: "Can I use monthly hours for new features or enhancements?", a: "Yes. Monthly hours can be applied to admin tasks, incident response, user support, and small enhancements. Larger enhancements — new module implementations, Zoho Creator app builds, or complex new integrations — are scoped separately. This is a key benefit of managed zoho services." },
  { q: "What if I need more hours than my retainer includes?", a: "We offer a retainer upgrade or an overage rate at a published blended rate. We will always flag before you exceed your included hours so there are no surprise invoices. Transparency is vital in zoho managed services usa." },
  { q: "We had Zoho implemented by another partner — can FI Digital take over?", a: "Yes. We frequently take over from other Zoho partners. We start with a Zoho Optimization Audit to document the current state, then move into the managed-services retainer with full system context. This is the hallmark of a true zoho partner managed services." },
  { q: "What Zoho modules does the retainer cover?", a: "All Zoho modules — CRM, Desk, Books, People, Analytics, Creator, Campaigns, Projects, Inventory, Zoho One, and more. The modules in scope are defined and documented during the onboarding system audit, ensuring comprehensive zoho crm maintenance." },
  { q: "Is our Zoho data stored in the US?", a: "Zoho US customers are hosted on Zoho US data centers by default. We confirm and document this in a Delivery Security Summary available on request, which is standard for our zoho managed services usa clients." },
  { q: "How do we get started?", a: "Book a fit call. In 30 minutes we will review your current Zoho setup, recommend the right retainer tier, and schedule the onboarding kickoff for your new zoho admin support team." }
];

export default function ManagedServicesClient() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

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

    // Service Grid Stagger
    gsap.fromTo(".service-card-animate",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-trigger",
          start: "top 80%",
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

    // SLA Cards Stagger
    gsap.fromTo(".sla-card-animate",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".sla-trigger",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

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

    // Modules Stagger
    gsap.fromTo(".module-card",
      { scale: 0.95, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".modules-trigger",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Ideal Customers Stagger
    gsap.fromTo(".ideal-card",
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: ".ideal-trigger",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Credentials Stagger
    gsap.fromTo(".cred-item",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".cred-trigger",
          start: "top 80%",
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
            alt="Managed Zoho Services"
            fill
            priority
            className={homeStyles.heroImageReal}
          />
        </div>

        <div className={`container ${homeStyles.heroContainer}`}>
          <div className={homeStyles.heroContent}>
            <div className="hero-animate">
              <span className={homeStyles.eyebrow}>Zoho Premium Partner &middot; Atlanta, GA &middot; Zoho Admin Support Experts</span>
            </div>
            <h1 className={`hero-animate ${homeStyles.heroH1}`}>
              Managed Zoho Services — Expert Zoho Admin and Support for US SMBs
            </h1>
            <p className={`hero-animate ${homeStyles.heroSub}`}>
              Keep your Zoho platform healthy with FI Digital&apos;s <strong>managed zoho services</strong>. Monthly admin hours, SLA-backed incident response, and quarterly optimization reviews — delivered by a US-based Zoho Premium Partner. No full-time in-house hire required.
            </p>
            <div className={`hero-animate ${homeStyles.heroCtas}`}>
              <Link href="/book-a-fit-call/?practice=zoho-managed" className="btn btn-primary">Book a fit call &rarr;</Link>
              <Link href="/packages/#zoho-managed-services" className="btn btn-secondary">See retainer pricing &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={homeStyles.trustStrip}>
          <div className="container">
            <ul className={homeStyles.trustList}>
              <li className="hero-animate">Zoho Premium Partner badge</li>
              <li className="hero-animate">Month-to-month after 90-day minimum</li>
              <li className="hero-animate">US-based account lead</li>
              <li className="hero-animate">SLA-backed incident response</li>
              <li className="hero-animate">SOC 2 Type II aligned delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY IMPLEMENTATIONS STALL */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 className={homeStyles.sectionTitle} style={{ marginBottom: '2rem' }}>Why Most Zoho Implementations Stall After Go-Live</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Most <Link href="/solutions/zoho-implementation/" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Zoho implementations</Link> go live successfully, but the months that follow often tell a different story. User requests for custom reports pile up. Automation rules that worked perfectly in sandbox begin to break as data volume grows. Data hygiene degrades because no one is tasked with constant cleanup. The enhancement backlog grows into a source of organizational frustration rather than progress.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Hiring a full-time Zoho administrator is a significant commitment that many SMBs can&apos;t justify when they only need 10 to 20 expert hours per month. After a <Link href="/solutions/zoho-implementation/zoho-crm-quickstart/" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Zoho CRM QuickStart</Link>, many teams find that they need ongoing, specialized support rather than another large project phase. Relying on ad-hoc project engagements means spinning up a new scope and budget for every minor fix, leading to &quot;nickel-and-diming&quot; and long lead times.
                </p>
                <p>
                  Our <strong>zoho crm maintenance</strong> approach ensures your system evolves alongside your business requirements. We provide a named US-based account lead and a Zoho-certified delivery team who maintain context on your specific implementation. From incident response to strategic roadmapping, we ensure your Zoho platform earns its keep every single day.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '550px', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <Image 
                src="/images/go-live.png" 
                alt="Stalled Zoho Implementation" 
                fill 
                style={{ objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: THE VALUE OF MANAGED SERVICES */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <h2 className={homeStyles.sectionTitle} style={{ marginBottom: '2rem' }}>The Strategic Advantage of Zoho Partner Managed Services</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Choosing <strong>zoho partner managed services</strong> over an in-house hire or a freelance developer provides several key strategic advantages. First is the depth of knowledge. A single admin might know CRM well, but our team brings certified experts in Books, Analytics, Desk, and Creator to every engagement. When you run into a complex cross-module sync issue, we have the specialist on hand to resolve it quickly.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Second is continuity. In-house admins can leave, taking institutional knowledge with them. With FI Digital&apos;s <strong>zoho managed services usa</strong>, your system documentation is centralized within our team. If a consultant moves on, your account lead ensures a seamless transition with zero loss of context. Learn more <Link href="/about/" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>about FI Digital</Link> and our delivery approach.
                </p>
                <p>
                  Finally, there is the proactive element. Most admins are reactive, fixing what is reported. Our <strong>zoho admin support</strong> includes quarterly reviews where we audit your system against the latest Zoho feature releases and industry benchmarks. We proactively identify automation opportunities that your team might not even know exist, turning your CRM from a digital filing cabinet into a growth engine.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', height: '550px', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', order: 1 }}>
              <Image 
                src="/images/managed-services.png" 
                alt="Value of Zoho Managed Services" 
                fill 
                style={{ objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS INCLUDED */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>What Is Included in Every Managed Services Retainer</h2>
            <p className={homeStyles.sectionSubtitle}>All retainer tiers include the following nine service areas. We provide comprehensive <strong>managed zoho services</strong> designed for platform stability and growth.</p>
          </div>

          <div className={`${styles.serviceList} service-trigger`}>
            {serviceAreas.map((item, i) => (
              <div key={i} className={`${styles.serviceItem} service-card-animate`}>
                <div className={styles.serviceIconWrapper}>
                  {i === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>}
                  {i === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                  {i === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
                  {i === 3 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>}
                  {i === 4 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                  {i === 5 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>}
                  {i === 6 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
                  {i === 7 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>}
                  {i === 8 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{item.area}</h3>
                  <p className={styles.serviceDesc}>{item.covers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: RETAINER TIERS */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Retainer Tiers for Zoho Admin Support</h2>
            <p className={homeStyles.sectionSubtitle}>Three tiers to right-size your administration needs. Whether you need light crm maintenance or full-scale <strong>zoho admin support</strong>, we have a tier for you. See our <Link href="/packages/#zoho-managed-services" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>full pricing packages</Link> for details.</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Essential</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{row.essential}</td>
                    <td>{row.professional}</td>
                    <td>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT CHANGES THE PRICE */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>What Changes the Retainer Price</h2>
            <p className={homeStyles.sectionSubtitle}>Our <strong>managed zoho services</strong> are priced transparently based on five primary variables. We help you right-size your plan to maximize ROI.</p>
          </div>

          <div className={`${styles.factorsGrid} factors-trigger`}>
            {factors.map((item, i) => (
              <div key={i} className={`${styles.factorCard} factor-card`}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: ROI OF MANAGED SERVICES */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className={homeStyles.sectionTitle} style={{ marginBottom: '3rem' }}>The ROI of Proactive Zoho CRM Maintenance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
              <div className={styles.factorCard}>
                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Reduced Opportunity Cost</h4>
                <p style={{ color: 'var(--text-secondary)' }}>When your CRM is broken, your sales team is guessing. Proactive <strong>zoho crm maintenance</strong> ensures every lead is routed, every task is alerted, and every deal is tracked. The cost of one missed enterprise deal often pays for an entire year of managed zoho services.</p>
              </div>
              <div className={styles.factorCard}>
                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Increased Employee Retention</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Friction in the toolset leads to frustration in the team. Providing expert <strong>zoho admin support</strong> means your employees focus on their jobs, not on fighting the software. A healthy Zoho environment is a key factor in operational morale.</p>
              </div>
              <div className={styles.factorCard}>
                <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Smarter Strategic Decisions</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Clean data enables reliable analytics. Our <strong>zoho partner managed services</strong> prioritize data integrity, giving your leadership team the accurate dashboards they need to pivot quickly in a competitive market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SLA REFERENCE */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>SLA Reference for Managed Zoho Services</h2>
            <p className={homeStyles.sectionSubtitle}>Reliability is the foundation of our <strong>zoho managed services usa</strong>. (BH) = Business Hours.</p>
          </div>

          <div className={`${styles.slaGrid} sla-trigger`}>
            {slas.map((item, i) => (
              <div key={i} className={`${styles.slaCard} ${i === 0 ? styles.slaP1 : i === 1 ? styles.slaP2 : styles.slaP3} sla-card-animate`}>
                <div className={styles.slaBadge}>Severity {i + 1}</div>
                <h3 className={styles.slaTitle}>{item.severity.split('—')[1].trim()}</h3>
                <p className={styles.slaDef}>{item.definition}</p>
                
                <div className={styles.slaResponseList}>
                  <div className={styles.slaResponseItem}>
                    <span className={styles.slaTierName}>Essential</span>
                    <span className={styles.slaTime}>{item.essential}</span>
                  </div>
                  <div className={styles.slaResponseItem}>
                    <span className={styles.slaTierName}>Professional</span>
                    <span className={styles.slaTime}>{item.professional}</span>
                  </div>
                  <div className={styles.slaResponseItem}>
                    <span className={styles.slaTierName}>Enterprise</span>
                    <span className={styles.slaTime}>{item.enterprise}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', fontSize: '1rem', color: 'var(--text-secondary)', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: '1rem' }}>
            <p style={{ margin: 0 }}><strong>BH = Business hours, Monday–Friday, 9am–6pm ET.</strong> SLAs are response targets, not resolution guarantees. Final SLAs confirmed in the retainer agreement.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW ONBOARDING WORKS */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>How Onboarding for Zoho Admin Support Works</h2>
            <p className={homeStyles.sectionSubtitle}>We ensure a seamless transition of knowledge. Our <strong>zoho partner managed services</strong> start with a deep dive into your unique business logic.</p>
          </div>

          <div className={`${styles.timelineGrid} timeline-trigger`}>
            {onboardingSteps.map((item, i) => (
              <div key={i} className={`${styles.timelinePhaseCard} timeline-card`}>
                <div className={styles.phaseIndicator}>
                  <span className={styles.phaseNumber}>Step {i + 1}</span>
                  <span className={styles.phaseTiming}>{item.timing.split(' ')[0]}</span>
                </div>
                <div className={styles.phaseContent}>
                  <div className={styles.phaseHeader}>
                    <h3 className={styles.phaseTitle}>{item.step}</h3>
                    <span className={styles.phaseTimingLabel}>{item.timing}</span>
                  </div>
                  <p className={styles.phaseWhat}>{item.what}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MODULES SUPPORTED */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Zoho Modules Covered by Managed Services</h2>
            <p className={homeStyles.sectionSubtitle}>Our team brings certified expertise across the entire Zoho ecosystem, providing the most comprehensive <strong>managed zoho services</strong> available.</p>
          </div>

          <div className={`${styles.factorsGrid} modules-trigger`} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {modules.map((item, i) => (
              <div key={i} className={`${styles.factorCard} module-card`} style={{ padding: '2rem' }}>
                <div className={styles.moduleCardHeader}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: '700', marginBottom: 0 }}>{item.name}</h3>
                  <div className={styles.moduleLogo}>
                    <Image 
                      src={item.logo} 
                      alt={`${item.name} logo`} 
                      fill 
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS IS FOR */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Who Is Managed Zoho Services For?</h2>
            <p className={homeStyles.sectionSubtitle}>Our <strong>zoho managed services usa</strong> are designed for companies that view their tech stack as a strategic asset, not just a utility.</p>
          </div>

          <div className={`${styles.factorsGrid} ideal-trigger`} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {idealCustomers.map((text, i) => (
              <div key={i} className={`${styles.factorCard} ${styles.idealCard} ideal-card`}>
                <div className={styles.idealIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/industries/professional-services/" className="btn btn-secondary">Professional Services Support &rarr;</Link>
            <Link href="/industries/manufacturing-distribution/" className="btn btn-secondary">Manufacturing & Distribution Support &rarr;</Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: TRUST & CREDENTIALS */}
      <section className={`${styles.sectionCredentials} scroll-section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>Trust & Delivery Credentials</h2>
            <p className={homeStyles.sectionSubtitle}>Why we are the preferred partner for <strong>zoho admin support</strong> in the United States.</p>
          </div>

          <div className={`${styles.credentialsGrid} cred-trigger`}>
            {credentials.map((text, i) => (
              <div key={i} className={`${styles.credentialCard} cred-item`}>
                <div className={styles.credentialIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div className={styles.credentialText}>
                  {i === 3 ? (
                    <Link href="/case-studies/?practice=zoho" style={{ color: 'inherit', textDecoration: 'none' }}>{text}</Link>
                  ) : i === 4 ? (
                    <Link href="/trust-security/" style={{ color: 'inherit', textDecoration: 'none' }}>{text}</Link>
                  ) : (
                    text
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={homeStyles.sectionTitle}>FAQ — Managed Zoho Services</h2>
            <p className={homeStyles.sectionSubtitle}>Common questions about our <strong>zoho admin support</strong> and retainer models.</p>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {faq.q}
                  <span className={styles.faqIcon} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${homeStyles.sectionAbout} scroll-section`} style={{ padding: '8rem 0', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <h2 className={homeStyles.sectionTitle} style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to Scale with Managed Zoho Services?</h2>
          <p className={homeStyles.sectionSubtitle} style={{ maxWidth: '750px', margin: '0 auto 3rem' }}>Book a 30-minute fit call to review your current Zoho setup and explore how our <strong>zoho admin support</strong> can accelerate your growth.</p>
          <Link href="/book-a-fit-call/?practice=zoho-managed" className="btn btn-primary btn-lg">Book a fit call &rarr;</Link>
        </div>
      </section>

      <div style={{ height: '5vh' }}></div>
    </div>
  );
}
