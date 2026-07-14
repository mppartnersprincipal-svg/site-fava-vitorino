/* Carrega os componentes do design system.
   Usa _ds_bundle.js quando existir; senão compila os .jsx direto da fonte com Babel. */
(function () {
  const FILES = [
    'components/forms/Button.jsx',
    'components/forms/Input.jsx',
    'components/forms/Select.jsx',
    'components/forms/Checkbox.jsx',
    'components/forms/Switch.jsx',
    'components/display/Card.jsx',
    'components/display/Badge.jsx',
    'components/display/Tabs.jsx',
    'components/display/SectionHeading.jsx',
    'components/display/Accordion.jsx',
    'components/feedback/Toast.jsx',
    'components/feedback/Tooltip.jsx',
    'components/overlay/Dialog.jsx',
    'ui_kits/site/areas-data.js',
    'ui_kits/site/SiteHeader.jsx',
    'ui_kits/site/SiteFooter.jsx',
    'ui_kits/site/SiteHome.jsx',
    'ui_kits/site/SiteAreas.jsx',
    'ui_kits/site/SiteContato.jsx',
    'ui_kits/site/SiteApp.jsx',
  ];
  function norm(p) {
    const parts = [];
    for (const seg of p.split('/')) {
      if (seg === '.' || seg === '') continue;
      if (seg === '..') parts.pop(); else parts.push(seg);
    }
    return parts.join('/');
  }
  window.loadDS = async function (root) {
    // 1) bundle pronto?
    try {
      const r = await fetch(root + '_ds_bundle.js', { method: 'HEAD' });
      if (r.ok) {
        await new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = root + '_ds_bundle.js'; s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
        for (const k of Object.keys(window)) {
          const v = window[k];
          if (v && typeof v === 'object' && typeof v.Button === 'function') return v;
        }
      }
    } catch (e) { /* segue para fallback */ }
    // 2) compila da fonte
    const srcs = {};
    await Promise.all(FILES.map(async (f) => { srcs[f] = await (await fetch(root + f)).text(); }));
    const mods = {};
    function req(from, path) {
      if (!path.startsWith('.')) {
        if (path === 'react' || path.startsWith('react/')) return window.React;
        if (path === 'react-dom' || path.startsWith('react-dom/')) return window.ReactDOM;
        throw new Error('DS loader: módulo externo não suportado ' + path);
      }
      const dir = from.split('/').slice(0, -1).join('/');
      const key = norm(dir ? dir + '/' + path : path);
      if (mods[key]) return mods[key].exports;
      const src = srcs[key];
      if (src == null) throw new Error('DS loader: módulo não encontrado ' + key);
      const code = Babel.transform(src, { presets: [['react', { runtime: 'classic' }]], plugins: ['transform-modules-commonjs'], filename: key }).code;
      const module = { exports: {} };
      mods[key] = module;
      new Function('require', 'module', 'exports', 'React', code)(req.bind(null, key), module, module.exports, window.React);
      return module.exports;
    }
    const all = {};
    for (const f of FILES) Object.assign(all, req('', './' + f));
    return all;
  };
})();
