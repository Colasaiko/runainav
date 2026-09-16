import { vpnBrands } from '@/data/vpnBrands';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  }
};


export function generateStaticParams() {
  return vpnBrands.map((brand) => ({
    slug: brand.slug,
  }));
}


export default async function GoRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vpn = vpnBrands.find((b) => b.slug === slug);

  if (!vpn || !vpn.url) {
    notFound();
  }

  // Next.js static export will automatically generate a meta refresh tag
  redirect(vpn.url);
}
