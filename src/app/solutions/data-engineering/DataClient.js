"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../page.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import dataStyles from './data.module.css';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packagesData = [
  { name: "Data Foundation Assessment", outcome: "Decision-ready architecture, platform recommendation, and fixed-fee build plan", timeline: "2-3 weeks", model: "Fixed fee" },
  { name: "ETL / ELT Modernization", outcome: "Fivetran / Airbyte / dbt ingestion layer replacing brittle scripts and manual exports", timeline: "6-10 weeks", model: "Fixed fee" },
  { name: "Databricks Lakehouse", outcome: "Bronze / silver / gold medallion architecture on Databricks with unity catalog governance", timeline: "10-16 weeks", model: "Milestone" },
  { name: "Snowflake Analytics Foundation", outcome: "Snowflake warehouse with dbt models, role-based access, and reporting layer", timeline: "8-12 weeks", model: "Milestone" },
  { name: "Microsoft Fabric", outcome: "Unified Fabric deployment (OneLake, Warehouses, Data Factory, Power BI)", timeline: "10-14 weeks", model: "Milestone" },
  { name: "BI Acceleration", outcome: "Power BI / Tableau / Looker / Zoho Analytics semantic layer and dashboards", timeline: "6-10 weeks", model: "Fixed fee" },
  { name: "Data Governance", outcome: "Catalog, lineage, access, PII handling, and retention policy", timeline: "4-8 weeks", model: "Fixed fee" },
  { name: "AI-Ready Data Foundation", outcome: "Curated, permissioned data surfaces ready for RAG and AI workloads", timeline: "8-12 weeks", model: "Fixed fee" },
  { name: "Analytics Managed Services", outcome: "Ongoing pipeline operations, dashboard maintenance, and model refresh", timeline: "Monthly", model: "Monthly starting point" }
];

const platformStack = [
  { 
    category: "Databricks", 
    desc: "Medallion architecture, Unity Catalog, Delta Live Tables, MLflow",
    logos: [
      { name: "Databricks", path: "/logos/databricks.png" }
    ]
  },
  { 
    category: "Snowflake", 
    desc: "Role-based access control, dbt projects, Snowpark, semantic layer, Snowpipe for streaming",
    logos: [
      { name: "Snowflake", path: "/logos/snowflake.png" }
    ]
  },
  { 
    category: "Microsoft Fabric", 
    desc: "OneLake lakehouse, Warehouses, Data Factory, Power BI integration, Copilot in Fabric",
    logos: [
      { name: "Microsoft Fabric", path: "/logos/fabric.png" },
      { name: "PowerBI", path: "/logos/powerbi.png" }
    ]
  },
  { 
    category: "Transform & Orchestrate", 
    desc: "dbt (Core and Cloud), AWS Glue, Step Functions, Airflow",
    logos: [
      { name: "dbt", path: "/logos/dbt.png" },
      { name: "AWS", path: "/logos/aws.png" },
      { name: "Airflow", path: "/logos/airflow.png" }
    ]
  },
  { 
    category: "Managed Ingestion", 
    desc: "Fivetran, Airbyte",
    logos: [
      { name: "Fivetran", path: "/logos/fivetran.png" },
      { name: "Airbyte", path: "/logos/airbyte.png" }
    ]
  },
  { 
    category: "Downstream Consumers", 
    desc: "Power BI, Tableau, Looker, Zoho Analytics",
    logos: [
      { name: "Tableau", path: "/logos/tableau.png" },
      { name: "Looker", path: "/logos/looker.png" },
      { name: "Zoho", path: "/logos/zoho.png" }
    ]
  }
];

const buyerEntryPoints = [
  { quote: "Need CRM + ERP + support + finance data in one place?", solution: "ETL / ELT Modernization + Warehouse", link: "/packages/#etl-elt-modernization" },
  { quote: "Need AI-ready data without rebuilding everything?", solution: "AI-Ready Data Foundation", link: "/packages/#ai-ready-data-foundation" },
  { quote: "Tired of Power BI saying something different every Monday?", solution: "BI Acceleration", link: "/packages/#bi-acceleration" },
  { quote: "Considering Databricks, Snowflake, or Fabric and not sure?", solution: "Data Foundation Assessment", link: "/packages/#data-foundation-assessment" },
  { quote: "Our data is in Zoho Analytics and we've hit the ceiling.", solution: "Zoho to warehouse migration", link: "/solutions/zoho-implementation/" }
];

export default function DataClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Hero animations
    gsap.fromTo('.hero-animate', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.2 }
    );

    // Scroll sections
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
            src="/images/real-data-practice.jpg" 
            alt="Data Engineering Services"
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
            <h1 className={`hero-animate ${styles.heroH1}`}>
              Turn sprawl into one source of truth.
            </h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              Reliable reporting. AI-ready data foundations. ETL / ELT that does not break on a Tuesday night. We ship fixed-fee Data Foundation Assessments that tell you whether you need Databricks, Snowflake, Microsoft Fabric, or a warehouse-plus-dbt starter — and we implement whichever answer fits your team, not our sales quota.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/#data-foundation-assessment" className="btn btn-primary">Book a Data Foundation Assessment &rarr;</Link>
              <Link href="/book-a-fit-call/?practice=data" className="btn btn-outline">Talk to a data architect &rarr;</Link>
            </div>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <div className="container">
            <ul className={styles.trustList}>
              <li className="hero-animate">Databricks Select Partner</li>
              <li className="hero-animate">Snowflake Partner</li>
              <li className="hero-animate">Microsoft Fabric Certified</li>
              <li className="hero-animate">US-based Data Architects</li>
              <li className="hero-animate">SOC 2 Type II aligned</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY SMBS STALL ON DATA */}
      <section className="scroll-section" style={{ padding: '8rem 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.sectionTitleCentered}>Why SMBs Stall on Data</h2>
            <p className={styles.sectionIntroCentered}>
              Three patterns. One: reporting is unreliable — every dashboard tells a slightly different story and everyone has lost trust in the BI tool. Two: AI ambitions are blocked — a pilot stalled because "the data is not ready" and nobody owns the fix. Three: a platform decision is looming — Databricks, Snowflake, Microsoft Fabric, or a pure warehouse-plus-dbt stack — and there is no-one internally who can scope it independently. All three are data engineering problems. The answer is not buying a bigger platform. The answer is starting with an assessment that chooses the right one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE BUILD */}
      <section className={`${dataStyles.sectionPackages} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>What We Build</h2>
          
          <div className={dataStyles.tableWrapper}>
            <table className={dataStyles.packagesTable}>
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
                    <td className={dataStyles.packageName}>{pkg.name}</td>
                    <td className={dataStyles.packageOutcome}>{pkg.outcome}</td>
                    <td className={dataStyles.packageTimeline}>{pkg.timeline}</td>
                    <td className={dataStyles.packageModel}>{pkg.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: PLATFORM EXPERTISE */}
      <section className={`${dataStyles.sectionTech} scroll-section`}>
        <div className="container">
          <div className={dataStyles.techText}>
            <h2 className={styles.sectionTitleCentered}>Platform Expertise</h2>
            <p>We are certified partners and active practitioners across the modern data stack.</p>
          </div>

          <div className={`${dataStyles.techGrid} stagger-grid`}>
            {platformStack.map((tech, i) => (
              <div key={i} className={`stagger-card ${dataStyles.techCard}`}>
                <span className={dataStyles.techCategory}>{tech.category}</span>
                
                {tech.logos && tech.logos.length > 0 && (
                  <div className={dataStyles.techLogosRow}>
                    {tech.logos.map((logo, j) => (
                      <div key={j} className={dataStyles.techLogoWrapper}>
                        <Image 
                          src={logo.path} 
                          alt={`${logo.name} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                
                <p className={dataStyles.techStackList}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NAMED BUYER ENTRY POINTS */}
      <section className={`${dataStyles.sectionEntry} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>How Our Clients Find Us</h2>
          <p className={styles.sectionIntroCentered}>
            Not sure where to start? Here are the five most common triggers that launch a data engineering engagement.
          </p>

          <div className={`${dataStyles.entryGrid} stagger-grid`}>
            {buyerEntryPoints.map((entry, i) => (
              <Link href={entry.link} key={i} className={`stagger-card ${dataStyles.entryCard}`}>
                <div className={dataStyles.entryQuote}>{entry.quote}</div>
                <div className={dataStyles.entryArrow}>&rarr;</div>
                <div className={dataStyles.entrySolution}>{entry.solution}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="scroll-section" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Ready to modernize your data stack?</h2>
          <p className={styles.sectionIntroCentered} style={{ marginBottom: '3rem' }}>
            Book a Data Foundation Assessment or explore how we've solved data sprawl for other SMBs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/book-a-fit-call/?practice=data" className="btn btn-primary">Book a Fit Call</Link>
            <Link href="/case-studies/?practice=data" className="btn btn-outline">View Data Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
