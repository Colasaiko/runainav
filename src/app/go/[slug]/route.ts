import { NextResponse } from 'next/server';
import { vpnBrands } from '@/data/vpnBrands';

export const dynamic = 'force-dynamic'; // Prevent static generation of redirect routes

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // Search in VPN Brands
  const vpn = vpnBrands.find((b) => b.slug === slug);
  
  if (vpn && vpn.url) {
    // 302 Found (Temporary Redirect) for cloaking
    return NextResponse.redirect(vpn.url, 302);
  }

  // Fallback to home page if not found
  return NextResponse.redirect(new URL('/', request.url), 302);
}
