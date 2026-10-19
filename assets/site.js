(function () {
  var buttons = document.querySelectorAll('.lang button');
  function show(lang) {
    document.querySelectorAll('[data-l]').forEach(function (el) { el.hidden = el.getAttribute('data-l') !== lang; });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    document.documentElement.lang = lang;
    try { localStorage.setItem('foredex-lang', lang); } catch (e) {}
    try { history.replaceState(null, '', location.pathname + location.search + '#' + lang); } catch (e) {}
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.lang); }); });
  var stored = null;
  try { stored = localStorage.getItem('foredex-lang'); } catch (e) {}
  var wanted = location.hash === '#en' ? 'en' : location.hash === '#tr' ? 'tr'
    : stored === 'en' || stored === 'tr' ? stored
    : (navigator.language || '').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en';
  show(wanted);
})();
