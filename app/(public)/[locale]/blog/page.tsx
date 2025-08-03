// app/(public)/[locale]/blog/page.tsx
import { compareDesc } from 'date-fns';
import { BlogPosts } from './blog-posts';
import { getAllPosts } from '@/utils/posts';
import type { Locale } from '@/utils/i18n';
import { LOCALES } from '@/utils/i18n';
import { siteUrl } from '@/utils/seo';

type PageParams = { params: { locale: Locale } };

/** Dynamic metadata so we can use params.locale safely */
export async function generateMetadata({ params }: PageParams) {
  const { locale } = params;
  const canonical = `${siteUrl}/${locale}/blog`;

  return {
    title: 'Blog',
    description: 'Read the latest updates, tips and news from suuvai.',
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, loc) => {
        acc[loc] = `${siteUrl}/${loc}/blog`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: 'Blog – suuvai',
      description: 'Latest updates, tips and news.',
      url: canonical,
      type: 'website',
    },
  };
}

export default function BlogPage({ params }: PageParams) {
  const { locale } = params;
  const allPosts = getAllPosts();
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <main className="container mx-auto p-6 pt-12">
        <BlogPosts posts={posts} locale={locale} />
      </main>
    </>
  );
}
