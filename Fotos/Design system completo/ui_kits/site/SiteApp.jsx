import React from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { SiteHome } from './SiteHome.jsx';
import { SiteAreas } from './SiteAreas.jsx';
import { SiteContato } from './SiteContato.jsx';

export function SiteApp() {
  const [route, setRoute] = React.useState('home');
  const nav = (r) => { setRoute(r); const el = document.scrollingElement; if (el) el.scrollTop = 0; };
  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-page)', minHeight: '100vh' }}>
      <SiteHeader route={route} onNavigate={nav} />
      {route === 'home' && <SiteHome onNavigate={nav} />}
      {route === 'areas' && <SiteAreas onNavigate={nav} />}
      {route === 'contato' && <SiteContato />}
      <SiteFooter onNavigate={nav} />
    </div>
  );
}
