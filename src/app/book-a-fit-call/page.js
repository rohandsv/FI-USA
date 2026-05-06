import { Suspense } from 'react';
import BookFitCallClient from './BookFitCallClient';

export const metadata = {
  title: 'Book a Fit Call | 30-Min Scoping | FI Digital',
  description: 'Book a 30-minute fit call with a US-based account lead. Walk away with a recommended starting package or a referral to a better-fit partner.',
};

export default function BookFitCallPage() {
  return (
    <>
      <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Book a 30-minute fit call</h1>
      
      <main>
        <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading calendar...</div>}>
          <BookFitCallClient />
        </Suspense>
      </main>
    </>
  );
}
