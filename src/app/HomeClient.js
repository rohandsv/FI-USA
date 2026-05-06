"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const practicesData = [
  {
    title: "Zoho Implementation Stack",
    desc: "We do not just turn on licenses; we architect Zoho One to map perfectly to your operational realities. From advanced custom modules in Zoho CRM to unified workflows across Creator, Analytics, and Books, we ensure your entire stack communicates flawlessly.",
    link: "/solutions/zoho-implementation/",
    img: "/images/zoho-implementation-stack.png"
  },
  {
    title: "Product Engineering",
    desc: "Custom software should solve problems, not create technical debt. We build highly scalable, enterprise-grade web applications, client portals, and bespoke SaaS platforms using Next.js, React, and Python, tailored entirely for your unique business logic.",
    link: "/solutions/product-engineering/",
    img: "/images/practice-product-v2.png"
  },
  {
    title: "AI & Digital Workers",
    desc: "Move beyond AI hype into actual operational leverage. We deploy custom LLM agents, RAG-based knowledge retrieval systems, and autonomous digital workers that handle everything from customer support triage to complex data summarization directly within your environment.",
    link: "/solutions/ai-digital-workers/",
    img: "/images/practice-ai-v2.png"
  },
  {
    title: "Data Engineering",
    desc: "Siloed data is useless data. We construct resilient, high-performance data pipelines, cloud data warehouses on AWS or Azure, and real-time BI dashboards that give leadership absolute visibility and control over their entire operational landscape.",
    link: "/solutions/data-engineering/",
    img: "/images/practice-data-v2.png"
  }
];

const industriesData = [
  {
    name: "Professional Services",
    desc: "Unify CRM, time and billing, and client portals. Deploy AI copilots for email drafting.",
    link: "/industries/professional-services/",
    img: "/images/industry-pro.webp"
  },
  {
    name: "Manufacturing & Dist.",
    desc: "Connect ERP and CRM, modernize integrations, and deploy BI to replace spreadsheets.",
    link: "/industries/manufacturing-distribution/",
    img: "/images/industry-mfg-v2.png"
  },
  {
    name: "Logistics & Field",
    desc: "Build dispatch software, technician apps, and AI layers to triage service requests.",
    link: "/industries/logistics-field-service/",
    img: "/images/industry-logistics-v2.png"
  },
  {
    name: "Financial Services",
    desc: "Stabilize CRM, build compliance reporting, and pilot document AI for the back office.",
    link: "/industries/financial-services/",
    img: "/images/industry-finance-v2.png"
  }
];

export default function HomeClient() {
  const containerRef = useRef(null);
  const [activePractice, setActivePractice] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const practiceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePractice(Number(entry.target.dataset.index));
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px" });

    practiceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

    // Stagger cards in grids
    const grids = gsap.utils.toArray('.stagger-grid');
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('.stagger-card');
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
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
            src="/images/home-hero.webp"
            alt="Business Transformation"
            fill
            priority
            className={styles.heroImageReal}
          />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className="hero-animate">
              <span className={styles.eyebrow}>US SMB transformation partner &middot; Atlanta, Georgia</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>Modernize operations.<br />Ship digital products.<br />Deploy AI workers.<br />Unify data.</h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              One execution partner for four integrated practices — Zoho Implementation, Product Engineering, AI and Digital Workers, and Data Engineering — delivered by US-based account leads with fixed-fee starting points.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/" className="btn btn-primary">See packages &rarr;</Link>
              <Link href="/book-a-fit-call/" className="btn btn-secondary">Talk to a solution expert &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <div className="container">
            <ul className={styles.trustList}>
              <li className="hero-animate">Zoho Premium Partner</li>
              <li className="hero-animate">200+ projects delivered &middot; 10 years</li>
              <li className="hero-animate">SOC 2 Type II aligned delivery</li>
              <li className="hero-animate">US-based account leads</li>
              <li className="hero-animate">AWS and Azure delivery partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOUR PRACTICES */}
      <section className={`${styles.sectionPractices}`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>Four practices. One partner. All outcomes.</h2>
            <p className={styles.sectionIntro}>
              Most US SMBs buy technology help in pieces — a Zoho partner here, a web-app shop there, an AI freelancer off a Slack community, a data contractor on a retainer — and then spend the next 12 months stitching the pieces together. FI Digital is built to end that pattern. We deliver four connected practices as one team, with one account lead, one contract, and one outcome.
            </p>
          </div>

          <div className={styles.practiceRowContainer}>
            {practicesData.map((prac, i) => (
              <div
                key={i}
                className={`${styles.practiceRow} ${i % 2 !== 0 ? styles.practiceRowReverse : ''} scroll-section`}
              >
                <div className={styles.practiceImageCol}>
                  <Image src={prac.img} alt={prac.title} fill className={styles.practiceImage} />
                </div>
                <div className={styles.practiceTextCol}>
                  <h3>{prac.title}</h3>
                  <p>{prac.desc}</p>
                  <Link href={prac.link} className={styles.practiceCta}>Explore &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNOLOGY STACK MARQUEE */}
      <section className={`${styles.sectionTechStack} scroll-section`}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitle}>We build on the platforms your team already trusts.</h2>
            <p className={styles.sectionIntro}>
              We are platform-opinionated where it matters and platform-agnostic where it does not. We deploy on AWS, Azure, and GCP. If your stack looks different, we will tell you honestly before we take your money.
            </p>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeContent}>
            {/* 14 Brands listed by user */}
            <span className={styles.techBadge}><img src="/logos/zoho.png" alt="Zoho" onError={(e) => e.target.style.display = 'none'} /> Zoho</span>
            <span className={styles.techBadge}><img src="/logos/react.png" alt="React" onError={(e) => e.target.style.display = 'none'} /> React</span>
            <span className={styles.techBadge}><img src="/logos/nextjs.png" alt="Next.js" onError={(e) => e.target.style.display = 'none'} /> Next.js</span>
            <span className={styles.techBadge}><img src="/logos/python.png" alt="Python" onError={(e) => e.target.style.display = 'none'} /> Python</span>
            <span className={styles.techBadge}><img src="/logos/aws.png" alt="AWS" onError={(e) => e.target.style.display = 'none'} /> AWS</span>
            <span className={styles.techBadge}><img src="/logos/azure.png" alt="Azure" onError={(e) => e.target.style.display = 'none'} /> Azure</span>
            <span className={styles.techBadge}><img src="/logos/claude.png" alt="Claude" onError={(e) => e.target.style.display = 'none'} /> Claude</span>
            <span className={styles.techBadge}><img src="/logos/openai.png" alt="OpenAI" onError={(e) => e.target.style.display = 'none'} /> OpenAI</span>
            <span className={styles.techBadge}><img src="/logos/databricks.png" alt="Databricks" onError={(e) => e.target.style.display = 'none'} /> Databricks</span>
            <span className={styles.techBadge}><img src="/logos/snowflake.png" alt="Snowflake" onError={(e) => e.target.style.display = 'none'} /> Snowflake</span>
            <span className={styles.techBadge}><img src="/logos/fabric.png" alt="Microsoft Fabric" onError={(e) => e.target.style.display = 'none'} /> Fabric</span>
            <span className={styles.techBadge}><img src="/logos/dbt.png" alt="dbt" onError={(e) => e.target.style.display = 'none'} /> dbt</span>
            <span className={styles.techBadge}><img src="/logos/fivetran.png" alt="Fivetran" onError={(e) => e.target.style.display = 'none'} /> Fivetran</span>
            <span className={styles.techBadge}><img src="/logos/postgres.png" alt="Postgres" onError={(e) => e.target.style.display = 'none'} /> Postgres</span>

            {/* Duplicated for infinite loop effect */}
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/zoho.png" alt="Zoho" onError={(e) => e.target.style.display = 'none'} /> Zoho</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/react.png" alt="React" onError={(e) => e.target.style.display = 'none'} /> React</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/nextjs.png" alt="Next.js" onError={(e) => e.target.style.display = 'none'} /> Next.js</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/python.png" alt="Python" onError={(e) => e.target.style.display = 'none'} /> Python</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/aws.png" alt="AWS" onError={(e) => e.target.style.display = 'none'} /> AWS</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/azure.png" alt="Azure" onError={(e) => e.target.style.display = 'none'} /> Azure</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/claude.png" alt="Claude" onError={(e) => e.target.style.display = 'none'} /> Claude</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/openai.png" alt="OpenAI" onError={(e) => e.target.style.display = 'none'} /> OpenAI</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/databricks.png" alt="Databricks" onError={(e) => e.target.style.display = 'none'} /> Databricks</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/snowflake.png" alt="Snowflake" onError={(e) => e.target.style.display = 'none'} /> Snowflake</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/fabric.png" alt="Fabric" onError={(e) => e.target.style.display = 'none'} /> Fabric</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/dbt.png" alt="dbt" onError={(e) => e.target.style.display = 'none'} /> dbt</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/fivetran.png" alt="Fivetran" onError={(e) => e.target.style.display = 'none'} /> Fivetran</span>
            <span className={styles.techBadge} aria-hidden="true"><img src="/logos/postgres.png" alt="Postgres" onError={(e) => e.target.style.display = 'none'} /> Postgres</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: ICPs */}
      <section className={`${styles.sectionIcp} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Built for US SMBs that are done duct-taping their stack.</h2>

          <div className={`${styles.icpGrid} stagger-grid`}>
            <div className={`stagger-card ${styles.icpCard}`}>
              <div className={styles.icpHeader}>
                <h4>Operations-led SMBs</h4>
                <span className={styles.icpSize}>25–250 employees</span>
              </div>
              <p>Founder-, CEO-, COO-, or VP Operations-led. Professional services, property operations, manufacturing, distribution, logistics, field service, selected financial services workflows. You feel the bottleneck in manual handoffs, weak reporting, and a service team running on spreadsheets.</p>
              <Link href="/solutions/zoho-implementation/" className={styles.cardCta}>Start with a Zoho QuickStart &rarr;</Link>
            </div>

            <div className={`stagger-card ${styles.icpCard}`}>
              <div className={styles.icpHeader}>
                <h4>Growth-stage companies</h4>
                <span className={styles.icpSize}>20–150 employees</span>
              </div>
              <p>Founder-, product-leader-, or CTO-led. You have an MVP in your head, an integration backlog that will not clear, or a customer portal you keep putting off.</p>
              <Link href="/solutions/product-engineering/" className={styles.cardCta}>Start with a Product Discovery Sprint &rarr;</Link>
            </div>

            <div className={`stagger-card ${styles.icpCard}`}>
              <div className={styles.icpHeader}>
                <h4>SMBs moving to AI readiness</h4>
                <span className={styles.icpSize}>50–500 employees</span>
              </div>
              <p>COO-, CIO-, or BI-lead. Siloed systems, unreliable dashboards, AI ambitions that keep stalling because the data is not ready.</p>
              <Link href="/solutions/data-engineering/" className={styles.cardCta}>Start with a Data Foundation Assessment &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WAYS TO START */}
      <section className={`${styles.sectionOffers} scroll-section`}>
        <div className={`container ${styles.offersContainer}`}>
          <div className={styles.offersText}>
            <h2 className={styles.sectionTitle}>No six-month discovery. Start where you feel the pain.</h2>
            <p>We publish fixed-fee starting offers because US SMB buyers should not have to sit through three sales calls just to learn what a project might cost. Pick the offer that matches the problem you have today. Each one carries a defined scope, a defined deliverable, and a defined fee. None are &quot;free consultations dressed up as workshops.&quot;</p>
            <Link href="/packages/" className="btn btn-primary">See all packages &rarr;</Link>
          </div>

          <div className={`${styles.offersTable} stagger-grid`}>
            <div className={`stagger-card ${styles.offerRow}`}>
              <div className={styles.offerHead}>
                <h4>Zoho CRM QuickStart</h4>
                <span className={styles.offerTime}>3-5 weeks</span>
              </div>
              <p>Operations-led teams ready to exit spreadsheets. Fixed fee, starting at a published price.</p>
            </div>
            <div className={`stagger-card ${styles.offerRow}`}>
              <div className={styles.offerHead}>
                <h4>Product Discovery Sprint</h4>
                <span className={styles.offerTime}>2 weeks</span>
              </div>
              <p>Growth-stage teams about to build or modernize. Fixed fee, published price.</p>
            </div>
            <div className={`stagger-card ${styles.offerRow}`}>
              <div className={styles.offerHead}>
                <h4>One-Workflow AI Pilot</h4>
                <span className={styles.offerTime}>4-6 weeks</span>
              </div>
              <p>Teams that want AI proof before committing at scale. Fixed fee, published price.</p>
            </div>
            <div className={`stagger-card ${styles.offerRow}`}>
              <div className={styles.offerHead}>
                <h4>Data Foundation Assessment</h4>
                <span className={styles.offerTime}>2-3 weeks</span>
              </div>
              <p>Teams staring at a data platform decision. Fixed fee, published price.</p>
            </div>
            <div className={`stagger-card ${styles.offerRow}`}>
              <div className={styles.offerHead}>
                <h4>Managed Services</h4>
                <span className={styles.offerTime}>Monthly</span>
              </div>
              <p>Teams that want the system kept healthy after go-live. Monthly retainer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW ENGAGEMENT WORKS */}
      <section className={`${styles.sectionTimeline} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>How Engagement Works</h2>
          <p className={styles.sectionIntroCentered}>No PowerPoint-only engagements. Every phase ends with something you can touch.</p>

          <div className={`${styles.timelineGrid} stagger-grid`}>
            <div className={`stagger-card ${styles.timelineStep}`}>
              <div className={styles.stepNum}>1</div>
              <h4>Discover</h4>
              <p>Short, time-boxed, and fixed-fee. We audit systems, quantify pain, and produce a decision-ready recommendation.</p>
            </div>
            <div className={`stagger-card ${styles.timelineStep}`}>
              <div className={styles.stepNum}>2</div>
              <h4>Design</h4>
              <p>Turns the recommendation into architecture, a package scope, and a change plan.</p>
            </div>
            <div className={`stagger-card ${styles.timelineStep}`}>
              <div className={styles.stepNum}>3</div>
              <h4>Build</h4>
              <p>US-based leads and a senior engineering squad ship production code, configuration, and integrations.</p>
            </div>
            <div className={`stagger-card ${styles.timelineStep}`}>
              <div className={styles.stepNum}>4</div>
              <h4>Operate</h4>
              <p>Most clients choose a managed-service retainer so the platform keeps earning after go-live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES */}
      <section className={`${styles.sectionIndustries} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionIntro}>Our four practices converge differently depending on your industry.</p>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              {industriesData.map((ind, i) => (
                <button
                  key={i}
                  className={`${styles.tabButton} ${activeIndustry === i ? styles.tabButtonActive : ''}`}
                  onClick={() => setActiveIndustry(i)}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            <div className={styles.tabContentPanel}>
              <div className={styles.tabTextCol}>
                <h4>{industriesData[activeIndustry].name}</h4>
                <p>{industriesData[activeIndustry].desc}</p>
                <Link href={industriesData[activeIndustry].link} className="btn btn-primary">
                  Explore {industriesData[activeIndustry].name} &rarr;
                </Link>
              </div>
              <div className={styles.tabImageCol}>
                {industriesData.map((ind, i) => (
                  <div
                    key={i}
                    className={`${styles.tabImageWrapper} ${activeIndustry === i ? styles.activeTabImage : ''}`}
                  >
                    <Image src={ind.img} alt={ind.name} fill className={styles.tabImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: PROOF & TRUST */}
      <section className={`${styles.sectionTrust} scroll-section`}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.proofBlock}>
            <h2>Client & Social Proof</h2>
            <span className={styles.proofMetric}>200+</span>
            <p>projects delivered across 10 years. Zoho Premium Partner. SOC 2 Type II aligned delivery. Clients include operations-led SMBs, growth-stage product companies, mid-market manufacturers, RIAs, CPA firms, logistics operators, and regional healthcare providers.</p>
            <p>We publish metrics, not adjectives.</p>
            <Link href="/case-studies/" className="btn btn-secondary">Read our case studies &rarr;</Link>
          </div>

          <div className={styles.trustBlock}>
            <h2>Trust & Security</h2>
            <p>FI Digital LLC is a US legal entity headquartered in Atlanta, Georgia. Our US-based account leads are on every engagement. Our delivery bench includes senior engineers, Zoho-certified consultants, data platform architects, and AI engineers.</p>
            <ul className={styles.trustChecklist}>
              <li>Professional indemnity insurance</li>
              <li>NDAs, MSAs, DPAs, and BAAs available</li>
              <li>Default deployment on US regions (AWS, Azure, Zoho)</li>
            </ul>
            <Link href="/trust-security/" className="btn btn-secondary">View Security Summary &rarr;</Link>
          </div>
        </div>

        <div className={`container ${styles.badgeStrip}`} style={{ marginTop: '4rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/images/zoho-premium-partner.png" alt="Zoho Premium Partner" width={140} height={50} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }} />
          <Image src="/images/soc2-badge.png" alt="SOC 2 Type II Aligned" width={100} height={50} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }} />
          <Image src="/images/aws-partner.png" alt="AWS Partner" width={100} height={50} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }} />
          <Image src="/images/microsoft-partner.png" alt="Microsoft Partner" width={140} height={50} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }} />
        </div>
      </section>

    </div>
  );
}
