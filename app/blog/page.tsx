import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge, Card, SectionHeading } from '@/components/ds';
import { Section } from '@/components/sections/Section';
import { Reveal } from '@/components/sections/Reveal';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Fava e Vitorino Advocacia',
  description:
    'Artigos, guias e orientações sobre Direito de Família, Planejamento Patrimonial, Direito Bancário e Empresarial. Conteúdo jurídico acessível.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section tone="areia" containerStyle={{ paddingBlock: 'clamp(48px, 7vw, 80px)' }}>
      <Reveal>
        <SectionHeading
          as="h1"
          overline="Blog"
          title="Conteúdo jurídico para quem quer entender antes de decidir"
          lead="Artigos, guias e orientações escritos pelo Fava e Vitorino para ajudar você a tomar decisões mais seguras sobre família, patrimônio, empresa e finanças."
        />
      </Reveal>

      {posts.length === 0 ? (
        <p style={{ marginTop: 'var(--space-7)', font: 'var(--text-body-lg)', color: 'var(--text-muted)' }}>
          Os primeiros artigos estão a caminho. Volte em breve.
        </p>
      ) : (
        <div className="grid-2" style={{ marginTop: 'var(--space-7)' }}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 100}>
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <Card interactive style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {post.tags.map((t) => (
                      <Badge key={t} tone="sand">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <h2
                    style={{
                      margin: 0,
                      font: 'var(--text-h3)',
                      letterSpacing: 'var(--tracking-title)',
                      textTransform: 'uppercase',
                      color: 'var(--text-title)',
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ margin: 0, font: 'var(--text-body-md)', color: 'var(--text-muted)' }}>{post.description}</p>
                  <div style={{ marginTop: 'auto', font: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
                    {formatDate(post.date)} — {post.author}
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
