import CaseStudiesClient from './CaseStudiesClient';

export const metadata = {
  title: 'Case Studies | Before-and-After Outcomes | FI Digital',
  description: 'FI Digital case studies: before-and-after outcomes across Zoho, Product Engineering, AI, and Data for US SMBs. Filter by practice and industry.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Case Studies</h1>
      
      <main>
        <CaseStudiesClient />
      </main>
    </>
  );
}
