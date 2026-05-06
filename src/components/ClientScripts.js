import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      <Script
        id="pagesense-script"
        src="https://cdn.pagesense.io/js/fristineinfotechpvtltd/f614a38d77ca403aba041c58108102e5.js"
        strategy="afterInteractive"
      />
    </>
  );
}
