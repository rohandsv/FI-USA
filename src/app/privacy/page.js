import styles from '../page.module.css';

export const metadata = {
  title: 'Privacy Policy | FI Digital',
  description: 'FI Digital LLC Privacy Policy. Our commitment to your data security and CCPA/CPRA compliance.',
};

export default function PrivacyPage() {
  return (
    <main className="container" style={{ padding: '12rem 0 6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Effective Date: May 4, 2026
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Information We Collect</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            We collect information you provide directly to us when you fill out a form on our website or contact us via email. This information may include your full name, business email address, company name, phone number, and any other text you include.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>2. How We Use Information</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            FI Digital uses the information collected to:
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond directly to your inquiries and support needs.</li>
            <li>Send technical notices, administrative messages, and communications.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Data Privacy and Compliance</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            In alignment with CCPA/CPRA, Virginia CDPA, Colorado Privacy Act, and GLBA Safeguards rules, we maintain administrative, technical, and physical safeguards designed to protect personal information against unauthorized destruction, loss, alteration, or access.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>4. Contact & Identity</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>FI Digital LLC</strong><br />
            123 Innovation Drive, Suite 400, Atlanta, GA 30301<br />
            Phone: 1-866-555-0199 (ET business hours)<br />
            Email: <a href="mailto:hello@fidigital.com" style={{ color: 'var(--accent-color)' }}>hello@fidigital.com</a><br />
            Privacy Inquiries: <a href="mailto:privacy@fidigital.com" style={{ color: 'var(--accent-color)' }}>privacy@fidigital.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
