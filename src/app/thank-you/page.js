import Link from "next/link";

export const metadata = {
  title: "Thanks! — FI Digital",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "calc(var(--header-h) + 2rem) 1.5rem 4rem",
      background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(29,78,216,0.08) 100%)",
    }}>
      <div style={{
        textAlign: "center",
        maxWidth: 520,
        width: "100%",
        padding: "clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 4vw, 3rem)",
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(29,78,216,0.12) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.75rem",
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
          Thank You!
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 380, margin: "0 auto 2rem" }}>
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>

        <Link href="/" className="btn-primary" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.85rem 2rem",
        }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
