import styles from '../page.module.css';

export const metadata = {
  title: 'Terms of Service | FI Digital',
  description: 'Terms of Service for FI Digital LLC. Overview of our professional services and code delivery policies.',
};

export default function TermsPage() {
  return (
    <main className="container" style={{ padding: '12rem 0 6rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Effective Date: May 4, 2026
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            By using our website or engaging with FI Digital LLC, you agree to be legally bound by these Terms of Service. If you do not accept these terms, you should refrain from utilizing our services.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>2. Professional Services & Intellectual Property</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            All code, configurations, designs, and materials produced by us during the term of an engagement are transferred in complete ownership to you on project acceptance and final invoice satisfaction.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>3. Company Identity and Governing Law</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1rem' }}>
            These terms are governed by the laws of the State of Georgia, United States, without reference to its conflict of laws rules.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <strong>Corporate Address:</strong><br />
            FI Digital LLC<br />
            123 Innovation Drive, Suite 400, Atlanta, GA 30301<br />
            Phone: 1-866-555-0199 (ET business hours)<br />
            Email: <a href="mailto:hello@fidigital.com" style={{ color: 'var(--accent-color)' }}>hello@fidigital.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
