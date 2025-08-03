// app/(public)/[locale]/blog/blog-posts.tsx
import Link from 'next/link';
import styles from './blog-posts.module.css'; // Optional CSS module

interface BlogPost {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

interface BlogPostsProps {
  /** Posts to display */
  posts: BlogPost[];
  /** Current locale, used to build locale‑aware links */
  locale: string;
}

export function BlogPosts({ posts, locale }: BlogPostsProps) {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="grid p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <time
                dateTime={post.date}
                className="text-sm text-gray-500 mb-3 block"
              >
                {new Date(post.date).toLocaleDateString()}
              </time>
              <p className="text-gray-600 mb-4">{post.excerpt}...</p>
              {/* Always prefix blog links with the current locale so that navigation stays within the same language */}
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
