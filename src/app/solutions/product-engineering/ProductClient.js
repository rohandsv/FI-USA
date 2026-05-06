"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './product.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const packagesData = [
  { name: "Product Discovery Sprint", outcome: "Architecture, scope, fixed-fee estimate, and decision-ready report", timeline: "2 weeks", model: "Fixed fee" },
  { name: "MVP Build", outcome: "Production MVP on React / Next.js + Node / Python + Postgres", timeline: "10-12 weeks", model: "Fixed fee after discovery" },
  { name: "Customer Portal", outcome: "Authenticated portal with Zoho / Salesforce / NetSuite integration", timeline: "8-12 weeks", model: "Fixed fee after discovery" },
  { name: "Internal Workflow App", outcome: "Operations app for dispatch, approvals, planning, or inventory", timeline: "6-10 weeks", model: "Fixed fee after discovery" },
  { name: "Mobile App (React Native)", outcome: "iOS + Android app on a shared React Native codebase", timeline: "10-14 weeks", model: "Fixed fee after discovery" },
  { name: "App Modernization", outcome: "Incremental modernization of a legacy codebase without a rewrite", timeline: "12-24 weeks", model: "Milestone-based" },
  { name: "Integration Engineering", outcome: "Custom integrations between CRM, ERP, fulfillment, and payment", timeline: "4-12 weeks", model: "Fixed fee or milestone" }
];

const techStack = [
  {
    category: "Front-end",
    stack: "React, Next.js, React Native, TypeScript, Tailwind",
    logos: [
      { name: "React", path: "/logos/react.png" }, 
      { name: "Next.js", path: "/logos/nextjs.png" },
      { name: "React Native", path: "/logos/reactnative.png" },
      { name: "TypeScript", path: "/logos/typescript.png" },
      { name: "Tailwind", path: "/logos/tailwind.png" }
    ]
  },
  {
    category: "Back-end",
    stack: "Node, Python / FastAPI, .NET, Ruby on Rails",
    logos: [
      { name: "Node.js", path: "/logos/nodejs.png" },
      { name: "Python", path: "/logos/python.png" },
      { name: "FastAPI", path: "/logos/fastapi.png" },
      { name: ".NET", path: "/logos/dotnet.png" },
      { name: "Ruby on Rails", path: "/logos/rails.png" }
    ]
  },
  {
    category: "Data",
    stack: "Postgres, MongoDB, Redis, Elasticsearch",
    logos: [
      { name: "Postgres", path: "/logos/postgres.png" },
      { name: "MongoDB", path: "/logos/mongodb.png" },
      { name: "Redis", path: "/logos/redis.png" },
      { name: "Elasticsearch", path: "/logos/elasticsearch.png" }
    ]
  },
  {
    category: "Cloud",
    stack: "AWS, Azure, GCP, Vercel, Cloudflare",
    logos: [
      { name: "AWS", path: "/logos/aws.png" }, 
      { name: "Azure", path: "/logos/azure.png" },
      { name: "GCP", path: "/logos/gcp.png" },
      { name: "Vercel", path: "/logos/vercel.png" },
      { name: "Cloudflare", path: "/logos/cloudflare.png" }
    ]
  },
  {
    category: "DevOps",
    stack: "Docker, Terraform, GitHub Actions",
    logos: [
      { name: "Docker", path: "/logos/docker.png" },
      { name: "Terraform", path: "/logos/terraform.png" },
      { name: "GitHub", path: "/logos/github.png" }
    ]
  },
  {
    category: "Auth & Identity",
    stack: "Auth0, Clerk, Cognito, Azure AD B2C",
    logos: [
      { name: "Auth0", path: "/logos/auth0.png" },
      { name: "Clerk", path: "/logos/clerk.png" }
    ]
  },
  {
    category: "Payments",
    stack: "Stripe, Braintree",
    logos: [
      { name: "Stripe", path: "/logos/stripe.png" },
      { name: "Braintree", path: "/logos/braintree.png" }
    ]
  },
  {
    category: "Observability",
    stack: "Datadog, Sentry",
    logos: [
      { name: "Datadog", path: "/logos/datadog.png" },
      { name: "Sentry", path: "/logos/sentry.png" }
    ]
  }
];

const pricingFactors = [
  { icon: "📐", title: "Scope", desc: "Number of screens, user roles, and major workflows." },
  { icon: "🔌", title: "Integrations", desc: "Number of external systems (CRM, ERP, payment, auth) and their API maturity." },
  { icon: "💾", title: "Data Complexity", desc: "Legacy data migrations, multi-tenant requirements, reporting depth." },
  { icon: "🛡️", title: "Compliance", desc: "SOC 2, HIPAA, GLBA, CCPA / CPRA requirements." },
  { icon: "📱", title: "Mobile", desc: "Whether iOS + Android are in scope and whether offline-first is required." },
  { icon: "🔑", title: "Ownership", desc: "Whether we transfer code, IP, and DevOps to your team on day one or hand over after an operate phase." }
];

export default function ProductClient() {
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
            src="/images/product-hero.webp"
            alt="Product Engineering"
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
              <span className={styles.eyebrow}>Engineering-led product delivery for US SMB and growth-stage companies</span>
            </div>
            <h1 className={`hero-animate ${styles.heroH1}`}>Ship software, not slide decks.</h1>
            <p className={`hero-animate ${styles.heroSub}`}>
              A 2-week fixed-fee Product Discovery Sprint. A 10- to 12-week production MVP. A customer portal that deflects 40% of inbound support. An app modernization plan that does not require a rewrite your board will not sign. FI Digital&apos;s Product Engineering practice is built for the US SMBs and growth-stage companies who are done with offshore staff-augmentation lotteries and consultancy slide decks.
            </p>
            <div className={`hero-animate ${styles.heroCtas}`}>
              <Link href="/packages/#product-discovery-sprint" className="btn btn-primary">Book a Product Discovery Sprint &rarr;</Link>
              <Link href="/book-a-fit-call/?practice=product" className="btn btn-secondary">Talk to our engineering lead &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className={styles.trustStrip}>
        <div className="container">
          <div className={styles.partnerBadgesRow}>
            <div className={`${styles.partnerBadge} hero-animate`}>
              <Image src="/logos/microsoft-partner.png" alt="Microsoft Partner" width={140} height={45} style={{ objectFit: 'contain' }} />
            </div>
            <div className={`${styles.partnerBadge} hero-animate`}>
              <Image src="/logos/aws-partner.png" alt="AWS Partner" width={140} height={45} style={{ objectFit: 'contain' }} />
            </div>
            <div className={`${styles.partnerBadgeText} hero-animate`}>
              <span>US-based Account Leads</span>
            </div>
            <div className={`${styles.partnerBadgeText} hero-animate`}>
              <span>Senior Engineering Bench</span>
            </div>
            <div className={`${styles.partnerBadgeText} hero-animate`}>
              <span>SOC 2 Type II Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: WHY US */}
      <section className={`${styles.sectionWhy} scroll-section`}>
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyTextCol}>
            <h2 className={styles.sectionTitle}>Why US SMBs Hire a Product Engineering Partner</h2>
            <p>
              Three patterns trigger this hire. <strong>Pattern one:</strong> the founder or product leader has an MVP commitment and no engineering bench that can ship it on time.
            </p>
            <p>
              <strong>Pattern two:</strong> the operations-led business has outgrown off-the-shelf tools and needs a customer portal, a partner app, or a workflow tool that Zoho, Salesforce, or NetSuite will not ship natively.
            </p>
            <p>
              <strong>Pattern three:</strong> the technology debt from a legacy app (Classic ASP, old .NET, old Rails, on-prem Laravel) is slowing the business down and a rewrite is too risky.
            </p>
            <p>
              All three are product engineering problems, not staff-augmentation problems. We solve them with a US account lead, a senior engineering squad, and a scope that publishes a fixed fee after the Discovery Sprint.
            </p>
          </div>
          <div className={styles.whyImageCol}>
            <Image 
              src="/images/product-why-us.jpg" 
              alt="Engineers collaborating on custom software" 
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
          <h2 className={styles.sectionTitleCentered}>What We Build</h2>
          
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
          <h2 className={styles.sectionTitleCentered}>Our Engineering Method</h2>
          <p className={styles.sectionIntroCentered}>Every Product Engineering engagement begins with a 2-week Product Discovery Sprint to eliminate risk before we write a line of code.</p>

          <div className={styles.methodGrid}>
            <div className={styles.methodTimeline}>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>1</div>
                <div className={styles.stepContent}>
                  <h4>Discover</h4>
                  <p>We run stakeholder interviews, decompose the problem, produce a reference architecture, identify integration risk, scope the build, and deliver a fixed-fee proposal. You can take the artifacts and walk — we will not lock you into a build.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>2</div>
                <div className={styles.stepContent}>
                  <h4>Design</h4>
                  <p>We staff a product squad (senior engineer, engineering manager, optional designer, QA) and finalize wireframes, schema, and API contracts.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>3</div>
                <div className={styles.stepContent}>
                  <h4>Build</h4>
                  <p>We ship on 2-week iterations with a live preview environment, so you never wait 10 weeks to see what we built.</p>
                </div>
              </div>
              <div className={styles.methodStep}>
                <div className={styles.stepIcon}>4</div>
                <div className={styles.stepContent}>
                  <h4>Operate</h4>
                  <p>We hand over code, IP, and a runbook to your team, or we continue to operate and maintain the application under an SLA.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.methodImageCol}>
              <Image 
                src="/images/product-methodology.jpg" 
                alt="Engineering squad whiteboard session" 
                fill 
                style={{ objectFit: 'cover' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TECH STACK */}
      <section className={`${styles.sectionTech} scroll-section`}>
        <div className="container">
          <div className={styles.techText}>
            <h2 className={styles.sectionTitleCentered}>Technology Stack</h2>
            <p>We are not &quot;technology agnostic&quot; — we are opinionated. We will tell you which stack fits your ops team, not the one that gets us the most hours.</p>
          </div>

          <div className={`${styles.techGrid} stagger-grid`}>
            {techStack.map((tech, i) => (
              <div key={i} className={`stagger-card ${styles.techCard}`}>
                <span className={styles.techCategory}>{tech.category}</span>
                
                {tech.logos.length > 0 && (
                  <div className={styles.techLogosRow}>
                    {tech.logos.map((logo, j) => (
                      <div key={j} className={styles.techLogoWrapper}>
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
                
                <div className={styles.techStackList}>
                  {tech.stack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING FACTORS */}
      <section className={`${styles.sectionPricing} scroll-section`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>What Changes the Price of Product Engineering</h2>
          
          <div className={`${styles.pricingGrid} stagger-grid`}>
            {pricingFactors.map((factor, i) => (
              <div key={i} className={`stagger-card ${styles.pricingCard}`}>
                <div className={styles.pricingIcon}>{factor.icon}</div>
                <h3>{factor.title}</h3>
                <p>{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
