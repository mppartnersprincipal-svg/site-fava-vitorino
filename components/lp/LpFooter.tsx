import Link from 'next/link';
import { SITE } from '@/content/data/site';
import { PENDING } from '@/content/data/pending';

export interface LpFooterProps {
  /** Aviso do Provimento 205/2021 da OAB — obrigatório em toda LP do escritório. */
  aviso: string;
}

/**
 * Rodapé da landing page: CNPJ, endereços, redes, política de privacidade e
 * aviso legal. Sem navegação para o site — a página tem um caminho só.
 *
 * A política de privacidade fica linkada mesmo sem formulário na página,
 * porque os cookies de rastreamento (GA4 e Pixel da Meta) já são tratamento
 * de dados.
 */
export function LpFooter({ aviso }: LpFooterProps) {
  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer__grid">
          <div>
            <span className="lp-footer__titulo">{SITE.nome}</span>
            <span className="lp-footer__linha">{SITE.razaoSocial}</span>
            <span className="lp-footer__linha">CNPJ {SITE.cnpj}</span>
            <span className="lp-footer__linha">{SITE.horario}</span>
          </div>

          <div>
            <span className="lp-footer__titulo">Onde estamos</span>
            <span className="lp-footer__linha">{SITE.endereco.completo}</span>
            {PENDING.enderecoGoiania && (
              <span className="lp-footer__linha">{PENDING.enderecoGoiania}</span>
            )}
            <span className="lp-footer__linha">Atuação em todo o Brasil, com atendimento digital.</span>
          </div>

          <div>
            <span className="lp-footer__titulo">Contato e redes</span>
            <a
              className="lp-footer__linha"
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram {SITE.instagram.handle}
            </a>
            {SITE.emails.map((email) => (
              <a key={email} className="lp-footer__linha" href={`mailto:${email}`}>
                {email}
              </a>
            ))}
            <Link className="lp-footer__linha" href="/politica-de-privacidade">
              Política de privacidade
            </Link>
          </div>
        </div>

        <p className="lp-footer__aviso">{aviso}</p>
      </div>
    </footer>
  );
}
