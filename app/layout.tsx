// app/layout.tsx
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { siteUrl, siteName, defaultDescription } from '@/utils/seo';
import { getAllTools } from '@/lib/tools';
import StructuredData from '@/components/StructuredData';

/** RTL languages your site supports */
const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'];

/** Site‑wide <head> via the Metadata API */
export const metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description: defaultDescription,
};

export default async function RootLayout({
  children,
  params: { locale = 'ar' },            // ← Next.js injects route params
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const isRTL = RTL_LOCALES.includes(locale);

  /* JSON‑LD for all tools (runs once per request) */
  const tools = await getAllTools();

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Global WebSite schema */}
        <StructuredData
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: siteUrl,
            description: defaultDescription,
            inLanguage: ['en', 'ar'],
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteUrl}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
            hasPart: {
              '@type': 'ItemList',
              itemListElement: tools.map((t, i) => ({
                '@type': 'SoftwareApplication',
                position: i + 1,
                name: t.label_en,
                applicationCategory: t.dir.replace('→', ' to '),
                url: `${siteUrl}/tools/${t.slug_en}`,
              })),
            },
          }}
        />
      </head>

      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
