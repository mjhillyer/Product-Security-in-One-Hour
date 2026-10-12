/* Product Security in One Hour — course navigation and progress.
   Progress lives only in this browser (localStorage). Nothing is sent anywhere. */
(function () {
  var MODULES = [
    { id: 'start', file: 'start.html',                  n: '0', title: 'Start here',                 min: 2 },
    { id: 'm1',    file: '1-what-is-product-security.html', n: '1', title: 'What is product security?', min: 10 },
    { id: 'm2',    file: '2-secure-by-design.html',     n: '2', title: 'Secure by Design',           min: 12 },
    { id: 'm3',    file: '3-regulations-standards.html', n: '3', title: 'Regulations & standards',   min: 12 },
    { id: 'm4',    file: '4-before-after-release.html', n: '4', title: 'Before and after release',   min: 12 },
    { id: 'm5',    file: '5-your-role.html',            n: '5', title: 'Your role',                  min: 8 },
    { id: 'm6',    file: '6-next-steps.html',           n: '6', title: 'Next steps',                 min: 4 }
  ];
  var KEY = 'ps1h-progress-v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* storage unavailable: progress just isn't remembered */ }
  }
  function setDone(id, val) {
    var s = load();
    if (val) s[id] = 1; else delete s[id];
    save(s);
    refresh();
  }
  function doneCount(s) {
    return MODULES.filter(function (m) { return s[m.id]; }).length;
  }

  var current = document.body.getAttribute('data-module');
  var idx = MODULES.findIndex(function (m) { return m.id === current; });

  /* ── Sidebar (lesson pages) ── */
  var nav = document.getElementById('course-nav');
  if (nav) {
    nav.innerHTML =
      '<details class="side-box" open>' +
        '<summary><span class="eyebrow">Course · 60 min</span><span class="side-count" id="side-count"></span></summary>' +
        '<div class="side-bar"><i id="side-bar"></i></div>' +
        '<ol class="mod-list">' +
          MODULES.map(function (m) {
            return '<li><a href="' + m.file + '" data-mod="' + m.id + '"' + (m.id === current ? ' class="current" aria-current="page"' : '') + '>' +
              '<span class="mod-num">' + m.n + '</span><span>' + m.title + '</span><span class="mod-min">' + m.min + 'm</span></a></li>';
          }).join('') +
        '</ol>' +
      '</details>';
    var box = nav.querySelector('details');
    if (window.matchMedia('(max-width:1000px)').matches) box.removeAttribute('open');
    box.querySelector('summary').addEventListener('click', function (e) {
      if (!window.matchMedia('(max-width:1000px)').matches) e.preventDefault();
    });
  }

  /* ── Pager ── */
  var pager = document.getElementById('pager');
  if (pager && idx > -1) {
    var prev = MODULES[idx - 1], next = MODULES[idx + 1], html = '';
    if (prev) html += '<a class="prev" href="' + prev.file + '"><small>← Previous</small><b>' + prev.title + '</b></a>';
    if (next) html += '<a class="next" href="' + next.file + '"><small>Next · ' + next.min + ' min →</small><b>' + next.title + '</b></a>';
    else html += '<a class="next" href="../guides.html"><small>Keep going →</small><b>Reference guides</b></a>';
    pager.innerHTML = html;
    var nextLink = pager.querySelector('.next');
    if (nextLink) nextLink.addEventListener('click', function () { setDone(current, true); });
  }

  /* ── Mark-complete toggle ── */
  var btn = document.getElementById('done-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      setDone(current, btn.getAttribute('aria-pressed') !== 'true');
    });
  }

  /* ── Reset progress (landing page) ── */
  var reset = document.getElementById('reset-progress');
  if (reset) {
    reset.addEventListener('click', function (e) {
      e.preventDefault();
      save({});
      refresh();
    });
  }

  function refresh() {
    var s = load(), n = doneCount(s);
    document.querySelectorAll('[data-mod]').forEach(function (el) {
      el.classList.toggle('done', !!s[el.getAttribute('data-mod')]);
    });
    var c = document.getElementById('side-count');
    if (c) c.textContent = n + '/' + MODULES.length + ' done';
    var bar = document.getElementById('side-bar');
    if (bar) bar.style.width = Math.round(100 * n / MODULES.length) + '%';
    if (btn) {
      var on = !!s[current];
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.textContent = on ? '✓ Completed' : 'Mark module complete';
    }
    /* "Continue" link on the landing page points at the first unfinished module */
    var cont = document.getElementById('continue-link');
    if (cont) {
      var nextUp = MODULES.find(function (m) { return !s[m.id]; });
      if (n === 0) {
        cont.hidden = true;
      } else if (nextUp) {
        cont.hidden = false;
        cont.href = 'learn/' + nextUp.file;
        cont.querySelector('span').textContent = 'Continue: ' + nextUp.title;
      } else {
        cont.hidden = false;
        cont.href = 'guides.html';
        cont.querySelector('span').textContent = 'Course complete. Get the guides';
      }
      if (reset) reset.hidden = n === 0;
    }
  }
  refresh();
})();
