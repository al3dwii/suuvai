// components/PillarTemplate.tsx
'use client';

import Link from 'next/link';
import FeatureCard from '@/components/landing/FeatureCard';
import type { LocalizedPillar, LocalizedTool } from '@/lib/data';  
import {
  FileText,
  FileCode,
  FileType2,    
  FileUp,       
  Presentation, 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PillarTemplateProps {
  locale: 'en' | 'ar';
  pillar: LocalizedPillar;
}

/** Map slug substrings → Lucide icons */
const iconMap: Record<string, LucideIcon> = {
  word: FileType2,
  pdf: FileUp,
  ppt: Presentation,
  markdown: FileCode,
  default: FileText,
};

export default function PillarTemplate({ locale, pillar }: PillarTemplateProps) {
  const toolsHeading =
    locale === 'ar' ? 'الأدوات ضمن هذه الفئة' : 'Tools in this Category';

  return (
    <main className="mx-auto mt-16 min-h-screen max-w-4xl px-4 py-8 pt-16">
      {/* Page header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{pillar.title}</h1>
        <p className="mt-2 text-gray-600">{pillar.description}</p>
      </header>

      {/* Tools */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">{toolsHeading}</h2>
        <ul
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pillar.tools.map((tool: LocalizedTool) => {
            // Pick an icon by inspecting the slug; default if none match
            const Icon =
              Object.entries(iconMap).find(([key]) =>
                tool.slug.includes(key),
              )?.[1] ?? iconMap.default;

            return (
              <li key={tool.slug}>
                {/* Entire card is a link */}
                <Link href={`/${locale}/tools/${tool.slug}`} passHref>
                  <FeatureCard
                    Icon={Icon}
                    title={tool.name}
                    desc={tool.slug}
                    rtl={locale === 'ar'}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

