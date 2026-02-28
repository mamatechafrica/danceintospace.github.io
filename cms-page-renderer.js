// Lightweight CMS page renderer for frontend (MVP)
// - Reads a page by slug from the 'pages' table in Supabase
// - Renders its sections into the existing site layout
// - Sections use: { title, subtitle, body }
// - Expects a container: <div id="cms-content" data-slug="<slug>"></div>

(function(){
  const SUPABASE_URL = 'https://alyeeqlwemcqtticapot.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_wf4JGCogJQENREaZe4F_5w_x23Huhpe';
  const CONTAINER_ID = 'cms-content';

  function ensureSupabase() {
    return new Promise((resolve, reject) => {
      if (window.supabase && typeof window.supabase.createClient === 'function') {
        resolve(window.supabase);
        return;
      }
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      s.onload = () => {
        if (window.supabase && typeof window.supabase.createClient === 'function') resolve(window.supabase);
        else reject('Supabase not loaded');
      };
      s.onerror = () => reject('Failed to load Supabase library');
      document.head.appendChild(s);
    });
  }

  async function renderPage(slug) {
    try {
      const lib = await ensureSupabase();
      const client = lib.createClient(SUPABASE_URL, SUPABASE_KEY);
      const { data, error } = await client.from('pages').select('*').eq('slug', slug).maybeSingle();
      if (error) {
        console.error('CMS fetch error', error);
        return;
      }
      if (!data) return;
      const sections = data.sections || [];
      const container = document.getElementById(CONTAINER_ID);
      if (!container) return;
      container.innerHTML = '';
      // Optional page title
      if (data.title) {
        const h = document.createElement('h1');
        h.textContent = data.title;
        h.className = 'text-2xl font-bold mb-4';
        container.appendChild(h);
      }
      sections.forEach((s) => {
        const sec = document.createElement('section');
        sec.className = 'mb-6';
        if (s.title) {
          const t = document.createElement('h2');
          t.textContent = s.title;
          t.className = 'text-xl font-semibold mb-2';
          sec.appendChild(t);
        }
        if (s.subtitle) {
          const st = document.createElement('p');
          st.textContent = s.subtitle;
          st.className = 'text-gray-700 mb-2';
          sec.appendChild(st);
        }
        if (s.body) {
          const b = document.createElement('div');
          // Treat body as HTML for flexibility, but you can switch to plain text if needed
          b.innerHTML = s.body;
          b.className = 'text-base';
          sec.appendChild(b);
        }
        container.appendChild(sec);
      });
    } catch (err) {
      console.error('CMS render error', err);
    }
  }

  function init() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;
    const slug = container.getAttribute('data-slug');
    if (!slug) return;
    renderPage(slug);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
