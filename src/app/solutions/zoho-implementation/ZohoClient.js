"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './zoho.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packagesData = [
  { name: "Zoho CRM QuickStart", outcome: "Production CRM, lead routing, pipeline, reports, and user training", timeline: "3-5 weeks", model: "Fixed fee, starting from published price" },
  { name: "Zoho Desk Setup", outcome: "Production service desk, queues, SLAs, macros, and customer portal", timeline: "3-4 weeks", model: "Fixed fee" },
  { name: "Zoho Marketing Automation Launch", outcome: "Zoho Campaigns + MarketingHub with lead-nurture journeys and reports", timeline: "4-6 weeks", model: "Fixed fee" },
  { name: "Zoho One Rollout", outcome: "Full Zoho One deployment across CRM, Desk, Books, People, Projects, Analytics", timeline: "10-16 weeks", model: "Custom proposal after discovery" },
  { name: "Zoho Creator App Build", outcome: "Custom low-code app on Zoho Creator (field ops, partner portal, approvals)", timeline: "6-12 weeks", model: "Fixed fee or milestone" },
  { name: "Zoho Analytics Foundation", outcome: "Unified reporting layer across CRM, Desk, Books, and external sources", timeline: "4-6 weeks", model: "Fixed fee" },
  { name: "Zoho Managed Services", outcome: "Ongoing optimization, admin, and enhancement retainer", timeline: "Month to month", model: "Monthly starting point" },
  { name: "Zoho Optimization Audit", outcome: "Audit of an existing, underperforming Zoho implementation with a remediation plan", timeline: "2-3 weeks", model: "Fixed fee" }
];

const integrations = [
  { name: "QuickBooks", logo: "/logos/quickbooks.png" },
  { name: "Xero", logo: "/logos/xero.png" },
  { name: "Sage Intacct", logo: "/logos/sage.png" },
  { name: "NetSuite", logo: "/logos/netsuite.png" },
  { name: "Dynamics 365", logo: "/logos/dynamics.png" },
  { name: "Salesforce", logo: "/logos/salesforce.png" },
  { name: "HubSpot", logo: "/logos/hubspot.png" },
  { name: "Stripe", logo: "/logos/stripe.png" },
  { name: "Twilio", logo: "/logos/twilio.png" },
  { name: "SendGrid", logo: "/logos/sendgrid.png" },
  { name: "RingCentral", logo: "/logos/ringcentral.png" },
  { name: "JustCall", logo: "/logos/justcall.png" },
  { name: "DocuSign", logo: "/logos/docusign.png" },
  { name: "Adobe Sign", logo: "/logos/adobesign.png" },
  { name: "Microsoft 365", logo: "/logos/microsoft365.png" },
  { name: "Google Workspace", logo: "/logos/googleworkspace.png" },
  { name: "Microsoft Teams", logo: "/logos/teams.png" },
  { name: "Slack", logo: "/logos/slack.png" },
  { name: "Shopify", logo: "/logos/shopify.png" },
  { name: "BigCommerce", logo: "/logos/bigcommerce.png" },
  { name: "WooCommerce", logo: "/logos/woocommerce.png" },
  { name: "Mailchimp", logo: "/logos/mailchimp.png" },
  { name: "REST APIs", logo: "/logos/api.png" }
];

export default function ZohoClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero Entrance
    gsap.fromTo(".hero-animate",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );

    // Scroll Sections
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
            src="/images/zoho-hero.webp"
            alt="Zoho Implementation"
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
              <span className={styles.eyebrow}>Zoho Premium Partner &middot; Atlanta, GA &middot; Serving US SMBs</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>Make Zoho the operating system for your business.</h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              CRM that your salespeople actually use. A service desk that does not drop tickets. Marketing automation that nurtures without spamming. A unified Zoho One rollout that replaces six tools with one system. Delivered by a Zoho Premium Partner with fixed-fee QuickStarts, US-based account leads, and a managed-services bench for day-two operations.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/#zoho-crm-quickstart" className="btn btn-primary">Start with a Zoho CRM QuickStart &rarr;</Link>
              <Link href="/book-a-fit-call/?practice=zoho" className="btn btn-secondary">Book a Zoho fit call &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <div className="container">
            <ul className={styles.trustList}>
              <li className="hero-animate">
                <Image src="/logos/zoho.png" alt="Zoho" width={60} height={20} style={{ objectFit: 'contain' }} onError={(e) => e.target.style.display='none'} />
                Premium Partner
              </li>
              <li className="hero-animate">Zoho Authorized Partner USA</li>
              <li className="hero-animate">10+ years delivering Zoho</li>
              <li className="hero-animate">200+ Zoho customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY ZOHO */}
      <section className={`${styles.sectionWhy} scroll-section`}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyTextCol}>
            <h2 className={styles.sectionTitle}>Why SMBs Pick Zoho (and Why They Pick FI Digital to Deliver It)</h2>
            <p>
              Zoho One is the most cost-effective all-in-one business platform for US SMBs under 500 employees. CRM, service, project management, marketing, books, analytics, people, and creator (low-code) all inside one license, one SSO, and one data layer. 
            </p>
            <p>
              The catch: it is only powerful if it is implemented well. The same platform that can run a 200-person distribution company can also become an expensive address book if it is rolled out by a partner that does not understand SMB operations.
            </p>
            <p>
              FI Digital is a Zoho Premium Partner — a level Zoho reserves for partners with deep delivery credentials and long tenure. We have shipped more than 200 Zoho engagements across CRM, Desk, Creator, Books, People, and Analytics. Our US-based account leads scope every project, and our Zoho-certified consultants own the build. We do not sell generic &quot;Zoho consultations.&quot; We sell fixed-fee QuickStarts, outcome-led implementations, and managed services.
            </p>
          </div>
          <div className={styles.whyImageCol}>
            <Image 
              src="/images/zoho-why-us.jpg" 
              alt="Consultants reviewing Zoho CRM dashboard" 
              fill 
              style={{ objectFit: 'cover' }}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: PACKAGED OUTCOMES */}
      <section className={`${styles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>What We Build — Packaged Outcomes</h2>
          
          <div className={styles.tableWrapper}>
            <table className={styles.packagesTable}>
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
                    <td className={styles.packageName}>{pkg.name}</td>
                    <td className={styles.packageOutcome}>{pkg.outcome}</td>
                    <td className={styles.packageTimeline}>{pkg.timeline}</td>
                    <td className={styles.packageModel}>{pkg.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERY METHOD */}
      <section className={`${styles.sectionMethod} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Our Zoho Delivery Method</h2>
          <p className={styles.sectionIntroCentered}>Every Zoho engagement follows the same cadence. We build transparently and train rigorously.</p>

          <div className={styles.methodGrid}>
            <div className={styles.methodTimeline}>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>1</div>
                <div className={styles.stepContent}>
                  <h4>Discover (Week 1)</h4>
                  <p>We interview your stakeholders, audit the sales, service, and ops processes, and deliver a Scope and Configuration Map.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>2</div>
                <div className={styles.stepContent}>
                  <h4>Design (Week 2)</h4>
                  <p>We agree on field models, automation rules, role hierarchies, and integration points.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>3</div>
                <div className={styles.stepContent}>
                  <h4>Build (Weeks 2-4)</h4>
                  <p>We configure, migrate data, connect integrations, and iterate with a pilot user group.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>4</div>
                <div className={styles.stepContent}>
                  <h4>Train & Cut Over (Week 5)</h4>
                  <p>We run role-specific training, issue playbooks, and go-live support.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>5</div>
                <div className={styles.stepContent}>
                  <h4>Operate (Month 2 Onward)</h4>
                  <p>We hand over to your admin, or we run the platform for you under a managed-services retainer.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.methodImageCol}>
              <Image 
                src="/images/zoho-methodology.jpg" 
                alt="Delivery team conducting a rollout" 
                fill 
                style={{ objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATIONS */}
      <section className={`${styles.sectionIntegrations} scroll-section`}>
        <div className="container">
          <div className={styles.integrationsText}>
            <h2 className={styles.sectionTitleCentered}>Integrations We Ship with Zoho</h2>
            <p>Our integration engineering squad handles the non-trivial cases — multi-entity finance, multi-brand marketing, and regulated-data handoffs.</p>
          </div>

          <div className={`${styles.integrationsGrid} stagger-grid`}>
            {integrations.map((item, i) => (
              <div key={i} className={`stagger-card ${styles.integrationCard}`}>
                <div className={styles.integrationLogoWrapper}>
                  <Image 
                    src={item.logo} 
                    alt={item.name} 
                    fill 
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.display = 'none';
                    }}
                  />
                </div>
                <span className={styles.integrationName}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST */}
      <section className={`${styles.sectionTrust} scroll-section`}>
        <div className="container">
          <div className={styles.trustWrapper}>
            <div className={styles.trustLogoCol}>
              <div className={styles.trustLogoWrapper}>
                <Image 
                  src="/logos/zoho.png" 
                  alt="Zoho Premium Partner" 
                  fill 
                  style={{ objectFit: 'contain' }}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <h3>Premium Partner</h3>
            </div>
            
            <ul className={styles.trustListItems}>
              <li>Zoho Premium Partner — reviewed annually against delivery quality and client growth.</li>
              <li>Zoho Authorized Partner USA.</li>
              <li>Zoho CRM, Desk, Creator, Books, People, Analytics, and Campaigns certified consultants on staff.</li>
              <li>200+ Zoho engagements across 10 years.</li>
              <li>SOC 2 Type II aligned delivery practices.</li>
              <li>Delivery Security Summary available on NDA.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
