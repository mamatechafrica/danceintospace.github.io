// Shared navigation and footer loader
document.addEventListener('DOMContentLoaded', async function() {
  const basePath = '/danceintospace.github.io';
  
  // Load nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    try {
      const navResponse = await fetch(basePath + '/includes/nav.html');
      navPlaceholder.innerHTML = await navResponse.text();
      
      // Initialize mobile menu after nav loads
      document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });
      document.addEventListener('click', function(event) {
        const menu = document.getElementById('mobile-menu');
        const button = document.getElementById('mobile-menu-btn');
        if (!menu.contains(event.target) && !button.contains(event.target) && !menu.classList.contains('hidden')) {
          closeMobileMenu();
        }
      });
    } catch (e) {
      console.error('Failed to load nav:', e);
    }
  }
  
  // Load footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    try {
      const footerResponse = await fetch(basePath + '/includes/footer.html');
      footerPlaceholder.innerHTML = await footerResponse.text();
      initStickyFooter();
    } catch (e) {
      console.error('Failed to load footer:', e);
    }
  }
  
  // Load social icons
  const socialPlaceholder = document.getElementById('social-placeholder');
  if (socialPlaceholder) {
    try {
      const socialResponse = await fetch(basePath + '/includes/socials.html');
      socialPlaceholder.innerHTML = await socialResponse.text();
    } catch (e) {
      console.error('Failed to load social icons:', e);
    }
  }
});

function initStickyFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  
  function checkSticky() {
    const body = document.body;
    const html = document.documentElement;
    const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowHeight = window.innerHeight;
    
    if (bodyHeight < windowHeight) {
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
      footer.style.width = '100%';
      footer.style.zIndex = '40';
    } else {
      footer.style.position = 'relative';
      footer.style.bottom = 'auto';
      footer.style.width = 'auto';
      footer.style.zIndex = 'auto';
    }
  }
  
  checkSticky();
  window.addEventListener('resize', checkSticky);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');
  menu.classList.toggle('hidden');
  if (menu.classList.contains('hidden')) {
    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  } else {
    icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  }
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
  document.getElementById('menu-icon').setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
}
