import { notFound } from 'next/navigation';
import { getAllPosts } from '@/utils/posts';
import { marked } from 'marked';
import styles from './post.module.css';
import type { Locale } from '@/utils/i18n';
import { LOCALES } from '@/utils/i18n';
import { siteUrl } from '@/utils/seo';

interface BlogPostProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.flatMap((post) =>
    LOCALES.map((locale) => ({ locale, slug: post.slug }))
  );
}

export function generateMetadata({ params }: BlogPostProps) {
  const { locale, slug } = params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};

  const title = `${post.title} – Blog`;
  const description = post.excerpt ?? post.content.slice(0, 150);
  const canonical = `${siteUrl}/${locale}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: LOCALES.reduce((acc, loc) => {
        acc[loc] = `${siteUrl}/${loc}/blog/${slug}`;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const { locale, slug } = params;
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const htmlContent = marked(post.content);
  const description = post.excerpt ?? post.content.slice(0, 150);
  const canonical = `${siteUrl}/${locale}/blog/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'suuvai', // Replace with your name or brand
    },
    url: canonical,
    inLanguage: locale,
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <main
        className={styles.postContainer}
        lang={locale}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <article>
          <div className="mt-12"> 
          <h1 className={styles.postTitle}>{post.title}</h1>
          </div>
          <time dateTime={post.date} className={styles.postDate}>
            {new Date(post.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>

         
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </main>
    </>
  );
}
