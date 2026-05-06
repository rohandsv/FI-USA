"use client";

import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import pageStyles from '../page.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function BookFitCallClient() {
  const searchParams = useSearchParams();
  const practiceParam = searchParams.get('practice') || '';
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.hero-animate', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.1
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* HERO SECTION */}
      <section className={pageStyles.heroSection} style={{ minHeight: 'auto', paddingTop: '160px', paddingBottom: '4rem' }}>
        <div className={pageStyles.heroImageWrapper}>
          <Image
            src="/images/home-hero.webp"
            alt="Book a Fit Call"
            fill
            priority
            className={pageStyles.heroImageReal}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add(pageStyles.heroImagePlaceholder);
            }}
          />
        </div>

        <div className={`container ${pageStyles.heroContainer}`}>
          <div className={pageStyles.heroContent} style={{ maxWidth: '850px' }}>
            <h1 className={`hero-animate ${pageStyles.heroH1}`}>Book a 30-minute fit call</h1>
            <p className={`hero-animate ${pageStyles.heroSub}`} style={{ maxWidth: '750px' }}>
              A fit call is 30 minutes, US-based, scoping-first. No deck. No pitch. In the call we will: understand what you are trying to solve, recommend one of the fixed-fee starting offers (or tell you that none are a fit), and — where helpful — refer you to a better-fit partner. You will leave the call with a recommended next step and a ballpark investment range.
            </p>
          </div>
        </div>
      </section>

      {/* CALENDAR EMBED SECTION */}
      <section style={{ padding: '4rem 0 6rem', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '1rem', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '4rem'
          }}>
            <iframe 
              src={`https://cal.com/fi-digital/fit-call${practiceParam ? `?practice=${encodeURIComponent(practiceParam)}` : ''}`}
              style={{ width: '100%', height: '700px', border: 'none' }}
              title="Book a Fit Call"
            ></iframe>
          </div>

          <div style={{ 
            backgroundColor: 'var(--bg-card)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '1rem', 
            padding: '3rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>What happens after the fit call?</h2>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}>
              <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>•</span>
                We email you a 1-page recap within 1 business day with recommended starting offer, ballpark fee range, and links to the relevant practice page and case studies.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>•</span>
                If you want to move forward, we scope the starting offer and send a signed SOW within 3 business days.
              </li>
              <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>•</span>
                If you are not ready, we will send 1 reminder in 30 days and 1 reminder in 90 days. We will not spam you.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
