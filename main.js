document.addEventListener("DOMContentLoaded", () => {
  document.body.style.paddingTop = '80px';
  const noCache = '?v=' + new Date().getTime();

  Promise.all([
    fetch('navbar.html' + noCache).then(res => res.text()),
    fetch('footer.html' + noCache).then(res => res.text())
  ]).then(([navData, footData]) => {
    document.getElementById('navbar-placeholder').innerHTML = navData;
    document.getElementById('footer-placeholder').innerHTML = footData;

    // 1. Scramble Animation for Navbar
    setTimeout(() => {
      if (window.motion && window.motion.scrambleText) {
        window.motion.scrambleText("#title", { duration: 1, characters: "01" });
      }
    }, 100);

    // 2. Inject Navbar Actions (Icons + Button)
    const actionContainer = document.getElementById('nav-actions-container');
    if (actionContainer) {
      actionContainer.innerHTML = `
        <div class="flex items-center gap-5">
          <a href="https://linktr.ee/didula.daluwaththa/" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>
          <a href="mailto:didula.dinanjaya@gmail.com" class="text-gray-400 hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></a>
          <a href="https://github.com/DidulaDaluwaththa/" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.2 5.2 0 0 0-1.5-3.8 4.1 4.1 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a12.5 12.5 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.1 4.1 0 0 0 .1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg></a>
          <a href="https://www.linkedin.com/in/diduladaluwaththa/" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <button onclick="window.open('https://drive.google.com/file/d/1bp4QYfLMaSsr91uOhinli9mXYmSPrMGi/view?usp=sharing', '_blank')" class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg shadow-lg shadow-cyan-500/20 transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span class="text-sm font-semibold whitespace-nowrap">View CV</span></button>
        </div>
      `;
    }

    // 3. Inject Footer Socials (Unblockable SVGs)
    const footerSocials = document.getElementById('footer-socials');
    if (footerSocials) {
      footerSocials.innerHTML = `
        <a href="https://linktr.ee/didula.daluwaththa/" target="_blank" class="hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>
        <a href="https://github.com/DidulaDaluwaththa/" target="_blank" class="hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7a5.2 5.2 0 0 0-1.5-3.8 4.1 4.1 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a12.5 12.5 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a4.1 4.1 0 0 0 .1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.6 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg></a>
        <a href="https://www.linkedin.com/in/diduladaluwaththa/" target="_blank" class="hover:text-cyan-400 transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
      `;
    }

    // Initialize regular Lucide icons (for Mail/Phone in footer text)
    if (window.lucide) { window.lucide.createIcons(); }

  });
});