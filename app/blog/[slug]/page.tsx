import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Badge } from '@/components/ds';
import { JsonLd } from '@/components/analytics/JsonLd';
import { Section } from '@/components/sections/Section';
import { articleSchema } from '@/lib/schema';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/blog';
import { SITE } from '@/content/data/site';

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Fava e Vitorino Advocacia`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Section tone="areia" containerStyle={{ paddingBlock: 'clamp(48px, 7vw, 80px)' }}>
      <article style={{ maxWidth: 720, marginInline: 'auto' }}>
        <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {post.tags.map((t) => (
              <Badge key={t} tone="sand">
                {t}
              </Badge>
            ))}
          </div>
          <h1
            style={{
              margin: 0,
              font: 'var(--text-h1)',
              letterSpacing: 'var(--tracking-title)',
              textTransform: 'uppercase',
              color: 'var(--text-title)',
            }}
          >
            {post.title}
          </h1>
          <span aria-hidden="true" style={{ width: 48, height: 2, background: 'var(--accent)' }} />
          <p style={{ margin: 0, font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
            {formatDate(post.date)} — por {post.author}
          </p>
        </header>

        <div className="prose">
          <MDXRemote source={post.content} />
        </div>

        <footer style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-subtle)' }}>
          <Link
            href="/blog"
            style={{
              font: 'var(--text-overline)',
              letterSpacing: 'var(--tracking-overline)',
              textTransform: 'uppercase',
              color: 'var(--accent-strong)',
              textDecoration: 'none',
            }}
          >
            ← Voltar para o blog
          </Link>
        </footer>
      </article>

      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.description,
          author: post.author,
          datePublished: post.date,
          url: `${SITE.url}/blog/${post.slug}`,
        })}
      />
    </Section>
  );
}
