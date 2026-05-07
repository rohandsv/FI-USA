import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'zoho-form.html');
  const content = readFileSync(filePath, 'utf-8');
  return new Response(content, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
