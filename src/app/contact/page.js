import ContactClient from './ContactClient';
import styles from '../page.module.css';
import aboutStyles from '../about/about.module.css';

export const metadata = {
  title: 'Contact FI Digital | Atlanta, Georgia | US SMB Transformation Partner',
  description: 'Contact FI Digital. US-based account leads in Atlanta, Georgia. Book a fit call, route by practice, or email hello@fidigital.com.',
};

export default function ContactPage() {
  return (
    <>
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Contact FI Digital</h1>
      
      <main>
        <ContactClient />

        {/* CONTACT FAQ SECTION */}
        <section className={aboutStyles.sectionFaq} style={{ paddingBottom: '6rem' }}>
          <div className="container">
            <h2 className={styles.sectionTitleCentered}>Contact — Frequently Asked Questions</h2>
            
            <div className={aboutStyles.faqList}>
              <details className={aboutStyles.faqItem}>
                <summary className={aboutStyles.faqQuestion}>How fast will you respond?</summary>
                <div className={aboutStyles.faqAnswer}>
                  <p>One US business day on every form submission. Managed-services clients have a separate SLA defined in their retainer.</p>
                </div>
              </details>

              <details className={aboutStyles.faqItem}>
                <summary className={aboutStyles.faqQuestion}>Can I email directly?</summary>
                <div className={aboutStyles.faqAnswer}>
                  <p>Yes. hello@fidigital.com for general inquiries, privacy@fidigital.com for privacy, security@fidigital.com for security.</p>
                </div>
              </details>

              <details className={aboutStyles.faqItem}>
                <summary className={aboutStyles.faqQuestion}>Can I book directly without a call?</summary>
                <div className={aboutStyles.faqAnswer}>
                  <p>Yes. <a href="/book-a-fit-call/" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Book a fit call</a> has a live calendar for 30-minute fit calls.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
