import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from './nav-links';
import { SITE } from '@/content/data/site';
import { PENDING } from '@/content/data/pending';

const colStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10 };
const overlineStyle: React.CSSProperties = {
  font: 'var(--text-overline)', letterSpacing: 'var(--tracking-overline)',
  textTransform: 'uppercase', color: 'var(--accent)',
};
const linkStyle: React.CSSProperties = {
  font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', textDecoration: 'none',
};
const textStyle: React.CSSProperties = { font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)' };

export function SiteFooter() {
  return (
    <footer style={{ background: 'var(--verde-900)', color: 'var(--text-on-dark)' }}>
      <div className="footer-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={colStyle}>
          <Image
            src="/images/logos/logo-horizontal-transparente.png"
            alt="Fava e Vitorino Advocacia"
            width={216}
            height={40}
            style={{ height: 40, width: 'auto', alignSelf: 'flex-start' }}
          />
          <p style={{ margin: '12px 0 0', font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', maxWidth: 340 }}>
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" style={colStyle}>
          <span style={overlineStyle}>Navegação</span>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={linkStyle}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={colStyle}>
          <span style={overlineStyle}>Contato</span>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            WhatsApp {SITE.whatsappDisplay}
          </a>
          {SITE.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} style={{ ...linkStyle, overflowWrap: 'anywhere' }}>
              {email}
            </a>
          ))}
          <span style={textStyle}>{SITE.horario}</span>
          <span style={textStyle}>Atendimento presencial: {SITE.atendimentoPresencial.toLowerCase()}</span>
          <span style={textStyle}>{SITE.endereco.completo}</span>
        </div>

        <div style={colStyle}>
          <span style={overlineStyle}>Redes sociais</span>
          <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Instagram {SITE.instagram.handle}
          </a>
          {PENDING.facebookUrl && (
            <a href={PENDING.facebookUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Facebook
            </a>
          )}
          {PENDING.linkedinUrl && (
            <a href={PENDING.linkedinUrl} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-on-dark)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)', margin: '0 auto', padding: '16px 24px',
            font: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)',
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} {SITE.nome}</span>
          <span>{SITE.razaoSocial} — CNPJ {SITE.cnpj}</span>
        </div>
      </div>
    </footer>
  );
}
