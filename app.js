(function () {
  'use strict';


  const ICONS = {
    'martini': '<path d="M4 4h16l-8 9z"/><path d="M12 13v7M8 20h8"/><circle cx="15" cy="6.5" r="1"/>',
    'coffee': '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c0 1.5 1.5 1.5 1.5 3M12 3c0 1.5 1.5 1.5 1.5 3"/>',
    'chili': '<path d="M18 6c-2 0-3 2-4 4-1.5 3-4 6-9 8 6 1 11-2 13-6 1-2 1-4 0-6z"/><path d="M18 6c0-1.5 1-2.5 2.5-3"/>',
    'wheat': '<path d="M12 21V8"/><path d="M12 12c-3 0-4-2-4-4 3 0 4 2 4 4zM12 12c3 0 4-2 4-4-3 0-4 2-4 4zM12 17c-3 0-4-2-4-4 3 0 4 2 4 4zM12 17c3 0 4-2 4-4-3 0-4 2-4 4zM12 8c-1.5-1-1.5-3 0-5 1.5 2 1.5 4 0 5z"/><path d="M4 4l16 16"/>',
    'milk': '<path d="M8 3h8v3l2 3v12H6V9l2-3z"/><path d="M6 12h12"/><path d="M3 4l18 17"/>',
    'nut': '<path d="M5 10h14c0 5-3 10-7 10s-7-5-7-10z"/><path d="M4 10c0-3 3-5 8-5s8 2 8 5M12 5V3"/>',
    'egg': '<path d="M12 3c-4 0-7 6-7 11a7 7 0 0 0 14 0c0-5-3-11-7-11z"/>',
    'shrimp': '<path d="M19 6c-6-2-13 1-14 7 0 3 2 5 5 5h3"/><path d="M13 18l2 3M13 18l-1 3M9 8l1 3M13 7l1 3M17 7l.5 3"/><circle cx="17" cy="8.5" r=".6"/>',
    'pig': '<ellipse cx="12" cy="13" rx="7" ry="6"/><ellipse cx="12" cy="14.5" rx="2.5" ry="1.8"/><path d="M7 8L6 4l4 3M17 8l1-4-4 3"/><path d="M3 3l18 18"/>',
    'leaf': '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19l9-9"/>',
    'zero': '<path d="M7 3h10l-1 17H8z"/><path d="M7.5 9h9"/><circle cx="12" cy="14" r="2"/><path d="M3 3l18 18"/>',
    'cherry': '<circle cx="7" cy="16" r="4"/><circle cx="16.5" cy="17" r="3.5"/><path d="M7 12c1-5 4-8 9-9M16.5 13.5c0-4 0-7-0.5-10.5"/>',
    'whiskey': '<path d="M5 8h14l-1.5 12h-11z"/><rect x="8" y="12" width="5" height="5" rx="1"/><path d="M5.5 11h13"/>',
    'sprig': '<path d="M6 20C10 15 13 9 14 3"/><circle cx="16" cy="9" r="1.6"/><circle cx="18" cy="13" r="1.6"/><circle cx="14" cy="14" r="1.6"/><path d="M12 9c-3 0-4-2-5-4 3 0 4 2 5 4z"/>',
    'lime': '<path d="M3 15a9 9 0 0 0 18 0z"/><path d="M12 15V7M12 15l-6-5M12 15l6-5"/><path d="M6 15a6 6 0 0 0 12 0"/>',
    'highball': '<path d="M7 3h10l-1 18H8z"/><path d="M7.4 9h9.2"/><path d="M14 3l3-2"/><path d="M10 13h3M10.5 16h2"/>',
    'wine': '<path d="M7 3h10v4a5 5 0 0 1-10 0z"/><path d="M7.3 6h9.4M12 12v8M8 20h8"/>',
    'flute': '<path d="M9 3h6l-1 9a2 2 0 0 1-4 0z"/><path d="M12 14v6M9 20h6"/><circle cx="12" cy="7" r=".5"/><circle cx="13" cy="9.5" r=".5"/><path d="M17 4l2-1M17.5 7H20"/>',
    'steak': '<path d="M4 12c0-5 5-8 10-7s7 5 5 9-6 6-10 5-5-3-5-7z"/><circle cx="14" cy="10" r="2"/><path d="M7 14c2 1 4 1 6 0"/>',
    'cloche': '<path d="M3 18h18M4 18a8 8 0 0 1 16 0"/><path d="M12 10V8M10.5 8h3"/><path d="M8 14a4 4 0 0 1 3-3"/>',
    'cake': '<path d="M4 12h16v8H4z"/><path d="M4 15c2 1.5 4 1.5 5.3 0S12 13.5 14 15s4 1.5 6 0"/><path d="M8 12V9M12 12V9M16 12V9"/><path d="M8 6.5v.5M12 6.5v.5M16 6.5v.5"/>',
    'star': '<path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z"/>',
    'bulb': '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"/>',
    'pin': '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    'chat': '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    'mask': '<path d="M4 5c5 2 11 2 16 0v6a8 8 0 0 1-16 0z"/><path d="M8 10h2M14 10h2M9 15c2 1.5 4 1.5 6 0"/>',
    'next': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    'shuffle': '<path d="M3 7h4c4 0 6 10 10 10h4M3 17h4c1.5 0 2.7-1.4 3.7-3M14 8.5C15 7.5 16 7 17 7h4"/><path d="M18 4l3 3-3 3M18 14l3 3-3 3"/>',
    'page': '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    'target': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    'note': '<path d="M5 3h14v12l-6 6H5z"/><path d="M13 21v-6h6M8 8h8M8 12h5"/>',
    'reset': '<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 3v5h5"/>',
    'pencil': '<path d="M4 20l1-5L16 4l4 4L9 19z"/><path d="M13 7l4 4"/>',
    'list': '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    'cards': '<rect x="7" y="3" width="12" height="16" rx="2"/><path d="M5 6.5v12A2.5 2.5 0 0 0 7.5 21H15"/><path d="M13 8l-2 3h4l-2 3"/>',
    'question': '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><circle cx="12" cy="17" r=".6"/>',
    'book': '<path d="M3 5c3-1.5 6-1.5 9 1 3-2.5 6-2.5 9-1v14c-3-1.5-6-1.5-9 1-3-2.5-6-2.5-9-1z"/><path d="M12 6v14"/>',
    'heart': '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
    'check': '<path d="M5 12.5l4.5 4.5L19 7"/>',
    'x': '<path d="M6 6l12 12M18 6L6 18"/>'
  };
  function icon(name, cls = '') {
    return `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  }

  /* ============================ mascot ============================ */
  const MASCOT = {
    happy: 'img/face-happy.webp', laugh: 'img/face-laugh.webp', surprised: 'img/face-surprised.webp',
    love: 'img/face-love.webp', notepad: 'img/notepad.webp', cloche: 'img/cloche.webp',
    cheer: 'img/cheer.webp', pour: 'img/pour.webp', wave: 'img/wave.webp'
  };
  function mascot(pose, cls = '') {
    return `<img class="mascot ${cls}" src="${MASCOT[pose]}" alt="" aria-hidden="true">`;
  }
  // A little waiter strolls across the bottom of the screen with a coffee.
  function waiterStroll() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const w = document.createElement('div');
    w.className = 'walker walker-stroll';
    w.setAttribute('aria-hidden', 'true');
    document.body.appendChild(w);
    w.addEventListener('animationend', e => { if (e.animationName === 'stroll') w.remove(); });
  }
  (function initAvatar() {
    const btn = document.getElementById('brand-avatar');
    if (!btn) return;
    const faces = ['laugh', 'love', 'surprised', 'happy'];
    let i = 0;
    let taps = [];
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      img.src = MASCOT[faces[i++ % faces.length]];
      btn.classList.remove('boop'); void btn.offsetWidth; btn.classList.add('boop');
      // Secret: tap the raccoon 5 times quickly for a love note on demand.
      taps = taps.filter(t => Date.now() - t < 2500); taps.push(Date.now());
      if (taps.length >= 5) { taps = []; showLoveNote(true); }
    });
  })();

  /* ============================ love notes ============================ */
  // Little notes from the boyfriend. They pop up now and then when the app is
  // opened from the home screen — not every time, so they stay a surprise.
  const LOVE_NOTES = [
    "Your boyfriend loves you very much. This is not a drill. (Okay, the quiz is a drill.)",
    "Reminder: you're the best thing on any menu. Sorry, Sticky Toffee Pudding.",
    "Your boyfriend thinks you're cuter than a raccoon in a tiny hat. And that's a high bar.",
    "Fun fact: 100% of your boyfriends think you're amazing. Sample size: 1. Very reliable.",
    "If a guest is rude today, just know your boyfriend would fight them. Politely. From a distance.",
    "You're going to crush this shift. Your boyfriend said so, and he's never wrong. (He's sometimes wrong.)",
    "Pairs well with: you. Notes of brilliance, a hint of chaos, and a very long finish.",
    "Your boyfriend is proud of you. Like, embarrassingly proud. Tells-strangers proud.",
    "Drink water. Eat something. Be kind to your feet. Your boyfriend loves you.",
    "Allergen warning: may contain traces of your boyfriend missing you.",
    "You make memorizing the whole menu look easy. Your boyfriend can't remember where he put his keys.",
    "Today's special: one (1) boyfriend who loves you a disgusting amount.",
    "The raccoon has been instructed to tell you that you're doing great. The raccoon agrees.",
    "Somewhere, your boyfriend is thinking about you right now. Probably also about snacks. But mostly you.",
    "You are a full-bodied, bold, unforgettable vintage. Your boyfriend will not be taking questions.",
    "Guest asks: 'What do you recommend?' Your boyfriend recommends: you, taking a break and smiling.",
    "Your boyfriend would give you the last fry. That's how you know it's real.",
    "Breaking news: local girlfriend is extremely loved. More at 11.",
    "You're the espresso martini of people: a little chaotic, a lot amazing, and everyone wants you.",
    "No matter how the shift goes, someone's very happy you're coming home. (It's him. Your boyfriend.)"
  ];
  const LOVE_KEY = 'raccoon-love-v1';

  function isHomeScreenApp() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  }

  function showLoveNote(force) {
    let st = {};
    try { st = JSON.parse(localStorage.getItem(LOVE_KEY)) || {}; } catch (e) {}
    const now = Date.now();
    if (!force) {
      if (!isHomeScreenApp()) return;
      const firstTime = !st.last;
      // After the first one: at most one every ~20 hours, and only some of the time.
      if (!firstTime && (now - st.last < 20 * 3600e3 || Math.random() > 0.55)) return;
    }
    // Cycle through the notes without repeating until they've all been seen.
    let seen = Array.isArray(st.seen) ? st.seen : [];
    if (seen.length >= LOVE_NOTES.length) seen = [];
    const fresh = LOVE_NOTES.map((_, i) => i).filter(i => !seen.includes(i));
    const pick = fresh[Math.floor(Math.random() * fresh.length)];
    seen.push(pick);
    try { localStorage.setItem(LOVE_KEY, JSON.stringify({ last: now, seen })); } catch (e) {}

    const old = document.querySelector('.love-note');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'love-note';
    el.setAttribute('role', 'status');
    el.innerHTML = `
      ${mascot('love', 'love-mascot')}
      <div class="love-body">
        <div class="love-title">${icon('heart', 'love-heart')}A note for you</div>
        <div class="love-text">${escapeHtml(LOVE_NOTES[pick])}</div>
      </div>
      <button class="love-close" aria-label="Close">${icon('x')}</button>`;
    document.body.appendChild(el);
    const close = () => { el.classList.add('leaving'); setTimeout(() => el.remove(), 300); };
    el.querySelector('.love-close').addEventListener('click', close);
    setTimeout(close, 12000);
  }

  /* ============================ password gate ============================ */
  /* NOTE: this is a deterrent, not real security. This is a static site with no
     server — anyone who specifically requests data.js directly can still read the
     raw menu data regardless of this gate. It exists to keep casual visitors and
     search engines from landing on the page and seeing it render. */

  const GATE_HASH = 'df4ac416257333cf770e5b162da9c2a06b37e428d0a4035ec3a0f114df08d231';
  const GATE_KEY = 'racoonnoisseur-unlocked-v1';

  async function sha256Hex(text) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function isUnlocked() {
    return localStorage.getItem(GATE_KEY) === '1';
  }

  function initGate(onUnlock) {
    const overlay = document.getElementById('gate-overlay');
    if (isUnlocked()) {
      overlay.classList.add('hidden');
      onUnlock();
      return;
    }

    const input = document.getElementById('gate-input');
    const errorEl = document.getElementById('gate-error');
    const submit = document.getElementById('gate-submit');

    async function tryUnlock() {
      const value = input.value;
      if (!value) return;
      const hash = await sha256Hex(value);
      if (hash === GATE_HASH) {
        localStorage.setItem(GATE_KEY, '1');
        overlay.classList.add('hidden');
        onUnlock();
      } else {
        errorEl.textContent = 'Wrong password — try again.';
        input.value = '';
        input.focus();
      }
    }

    submit.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });
    input.focus();
  }

  /* ============================ storage / stats ============================ */

  const STORAGE_KEY = 'racoonnoisseur-stats-v1';
  const MASTERY_STREAK = 2; // consecutive correct answers needed to clear a "weak spot"

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStats(s) { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }

  let stats = loadStats();

  function recordAnswer(itemId, correct) {
    const s = stats[itemId] || { misses: 0, streak: 0, lastMissed: null, lastSeen: null };
    s.lastSeen = Date.now();
    if (correct) {
      s.streak = (s.streak || 0) + 1;
    } else {
      s.misses = (s.misses || 0) + 1;
      s.streak = 0;
      s.lastMissed = Date.now();
    }
    stats[itemId] = s;
    saveStats(stats);
  }

  function getWeakItems() {
    return Object.keys(stats)
      .map(id => ({ id, ...stats[id] }))
      .filter(s => s.misses > 0 && (s.streak || 0) < MASTERY_STREAK)
      .sort((a, b) => (b.lastMissed || 0) - (a.lastMissed || 0));
  }

  function timeAgo(ts) {
    if (!ts) return '';
    const diff = Date.now() - ts;
    const min = Math.floor(diff / 60000);
    if (min < 1) return 'just now';
    if (min < 60) return `${min}m ago`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h ago`;
    const day = Math.floor(hr / 24);
    return `${day}d ago`;
  }

  /* ============================ item overrides (corrections) ============================ */
  /* Lets someone fix a mis-scanned menu detail right in the app. Overrides are stored
     per-item in localStorage and layered on top of the base data.js content, so a
     correction made once shows up everywhere the item appears (Study, Quiz, Review). */

  const OVERRIDES_KEY = 'racoonnoisseur-overrides-v1';
  function loadOverrides() {
    try { return JSON.parse(localStorage.getItem(OVERRIDES_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveOverrides(o) { localStorage.setItem(OVERRIDES_KEY, JSON.stringify(o)); }

  let overrides = loadOverrides();
  let LIVE_ITEMS = [];

  function rebuildLiveItems() {
    LIVE_ITEMS = ALL_ITEMS.map(base => {
      const o = overrides[base.id];
      return o ? { ...base, ...o } : { ...base };
    });
  }
  rebuildLiveItems();

  function hasOverride(id) { return !!overrides[id]; }

  function saveItemEdits(id, fields) {
    const ov = overrides[id] || {};
    Object.assign(ov, fields);
    overrides[id] = ov;
    saveOverrides(overrides);
    rebuildLiveItems();
  }

  function resetItemOverride(id) {
    delete overrides[id];
    saveOverrides(overrides);
    rebuildLiveItems();
  }

  function resetAllOverrides() {
    overrides = {};
    saveOverrides(overrides);
    rebuildLiveItems();
  }

  /* ============================ annotations (sticky notes / highlights) ============================ */
  /* Separate from overrides: these don't change the underlying data, they're the digital
     version of pen marks on the printed pages — e.g. highlighting a wine's name as
     "bubbly", or writing "straw" under an allergen box that just says N/A. */

  const ANNOTATIONS_KEY = 'racoonnoisseur-annotations-v1';
  function loadAnnotations() {
    try { return JSON.parse(localStorage.getItem(ANNOTATIONS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveAnnotationsToStorage(a) { localStorage.setItem(ANNOTATIONS_KEY, JSON.stringify(a)); }

  let annotations = loadAnnotations();

  function getAnnotation(itemId, field) {
    const ann = (annotations[itemId] && annotations[itemId][field]) || null;
    if (!ann) return null;
    // Older saved annotations used a boolean `highlight` flag instead of a color.
    if (ann.color === undefined) return { note: ann.note || '', color: ann.highlight ? 'gold' : '' };
    return ann;
  }

  function setAnnotation(itemId, field, { note, color }) {
    const forItem = annotations[itemId] || {};
    if (!note && !color) {
      delete forItem[field];
    } else {
      forItem[field] = { note: note || '', color: color || '' };
    }
    if (Object.keys(forItem).length === 0) delete annotations[itemId];
    else annotations[itemId] = forItem;
    saveAnnotationsToStorage(annotations);
  }

  function clearAllAnnotations() {
    annotations = {};
    saveAnnotationsToStorage(annotations);
  }

  /* ============================ helpers ============================ */

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  function itemById(id) { return LIVE_ITEMS.find(i => i.id === id); }

  function categoryLabel(item) {
    if (item.category === 'wine') return item.subcategory === 'red' ? 'Red Wine' : item.subcategory === 'rose' ? 'Rosé' : item.subcategory === 'sparkling' ? 'Sparkling' : 'White Wine';
    if (item.category === 'cocktail') return item.subcategory === 'mocktail' ? 'Mocktail' : item.subcategory === 'shot' ? 'Shot' : 'Cocktail';
    if (item.category === 'food') return item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1);
    return item.category;
  }

  function badgeClass(item) { return item.category; }

  /* ============================ view router ============================ */

  const root = document.getElementById('view-root');
  const tabBar = document.getElementById('tab-bar');
  let currentView = 'study';

  const renderers = {
    study: renderStudy,
    quiz: renderQuiz,
    review: renderReview,
    guest: renderGuest,
    reference: renderReference
  };

  function switchView(view) {
    currentView = view;
    [...tabBar.querySelectorAll('.tab-btn')].forEach(b => {
      b.classList.toggle('active', b.dataset.view === view);
    });
    renderers[view]();
    root.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  tabBar.addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    // Navigating to Quiz via the tab bar always starts at the setup screen —
    // only a direct "Drill weak spots" launch from Review skips straight into a session.
    if (btn.dataset.view === 'quiz') quizState.phase = 'setup';
    switchView(btn.dataset.view);
  });

  /* ============================ GUEST QUESTIONS ============================ */
  // "A guest says X — what do I point them to?" Every answer is computed live from
  // data.js, so it stays correct when the menu changes.

  const txt = i => `${i.name} ${i.blurb || ''} ${i.composition || ''} ${i.varietal || ''} ${(i.tags || []).join(' ')}`.toLowerCase();
  const has = (i, re) => re.test(txt(i));
  const ing = i => `${i.name} ${i.composition || ''}`.toLowerCase();
  const isMock = i => i.subcategory === 'mocktail';
  const allergenText = i => (i.allergens || '').toLowerCase();
  const isDrink = i => i.category === 'cocktail';
  const isFood = i => i.category === 'food';
  const isWine = i => i.category === 'wine';

  function menuSection(i) {
    if (isWine(i)) return { sparkling: 'Wine list › Sparkling', rose: 'Wine list › Rosé', white: 'Wine list › Whites', red: 'Wine list › Reds' }[i.subcategory] || 'Wine list';
    if (isDrink(i)) return { mocktail: 'Drinks › Mocktails (zero-proof)', shot: 'Drinks › Shots', whiskey: 'Drinks › Whiskey / bold & smoky', sangria: 'Drinks › Sangria', signature: 'Drinks › Signature cocktails' }[i.subcategory] || 'Drinks';
    return { starter: 'Food › Starters & shareables', salad: 'Food › Salads', main: 'Food › Mains & handhelds', dessert: 'Food › Desserts', sauce: 'Food › Butters, sauces & add-ons' }[i.subcategory] || 'Food';
  }

  // Free-of an allergen: only items whose listed allergens don't mention it.
  // Wines have no allergen sheet (and all contain sulfites), so they're left out.
  function freeOf(words) {
    const re = new RegExp(words, 'i');
    return (i, alsoIngredients) => (isFood(i) || isDrink(i)) && !re.test(allergenText(i)) && !/ask for details|rotating/i.test(allergenText(i)) && !(alsoIngredients && alsoIngredients.test(ing(i)))
      ? (/cross/.test(allergenText(i)) ? 'Not listed, but cross-contamination noted — check with kitchen' : 'Not listed in allergens')
      : null;
  }
  const nice = s => s.replace(/\b\w/g, c => c.toUpperCase());
  // Match on the item name + ingredients only (blurbs say things like "anything but vodka").
  function find(re, pick = () => true) {
    return i => pick(i) && re.test(ing(i)) ? nice(ing(i).match(re)[0]) : null;
  }

  const GUEST_TOPICS = [
    { id: 'martini', icon: 'martini', label: 'Martinis', keys: /martini|stirred|spirit[- ]forward|strong/i,
      quotes: ["I'm a martini person.", 'Do you have anything like a martini?'],
      tip: 'Our "martinis" are creative twists — mention the base spirit and whether it\'s savoury, sweet or coffee.',
      match: i => isDrink(i) && !isMock(i) && (has(i, /martini/) || /coupe|nick and nora/i.test(i.preset || '')) ? (has(i, /martini/) ? 'Martini-style' : 'Served up in a coupe/Nick & Nora') : null },
    { id: 'espresso', icon: 'coffee', label: 'Coffee / espresso', keys: /coffee|espresso|caffeine/i,
      quotes: ['Do you have an espresso martini?', 'Anything with coffee?'],
      tip: 'Flag the caffeine for late-night guests.',
      match: find(/espresso|coffee/, isDrink) },
    { id: 'spicy', icon: 'chili', label: 'Spicy', keys: /spic|hot\b|heat|kick/i,
      quotes: ["What's spicy?", 'I like a bit of heat.'],
      tip: 'Say where the heat comes from (chili, jalapeño, horseradish…) and how much.',
      match: i => { if (isWine(i)) return null; const m = /(maple chili|chili crunch|calabrian chili|chili|jalape[ñn]o|piri piri|fresno|gochujang|cajun spice|tabasco|horseradish|black pepper tincture|hot honey|peppercorn glaze)/i.exec(i.composition || ''); return m ? nice(m[0].toLowerCase()) : null; } },
    { id: 'gluten', icon: 'wheat', label: 'Gluten-free', keys: /gluten|celiac|coeliac|gf\b/i,
      quotes: ["I'm gluten-free, what can I have?", 'Where should I look on the menu if I\'m celiac?'],
      tip: 'Always confirm with the kitchen for celiac guests — fryers and prep surfaces are shared.',
      match: freeOf('gluten') },
    { id: 'dairy', icon: 'milk', label: 'Dairy-free', keys: /dairy|lactose|milk/i,
      quotes: ["I'm lactose intolerant.", 'What\'s dairy-free?'], tip: 'Butter counts as dairy — check sauces and add-ons too.',
      match: i => freeOf('dairy|butter|cheese|cream')(i, /butter|cheese|cream|cheddar|ricotta|gruy|parm|provolone|half and half|ice cream|milk/) },
    { id: 'nut', icon: 'nut', label: 'Nut allergy', keys: /nut|almond|peanut|walnut|pecan/i,
      quotes: ['I have a nut allergy — what should I avoid?'], tip: 'These items list NO nuts. Avoid anything with nuts, almond, orgeat, walnuts, pecans or pepitas.',
      match: i => freeOf('nut')(i, /almond|orgeat|walnut|pecan|amaretto|peanut|pepita|\bnut/) ? 'No nuts listed' : null },
    { id: 'egg', icon: 'egg', label: 'Egg-free', keys: /egg/i,
      quotes: ['I can\'t have egg — which cocktails are safe?'], tip: 'Sours with foam use egg whites; aiolis contain egg.',
      match: i => freeOf('egg')(i, /egg|aioli|mayo/) ? 'No egg listed' : null },
    { id: 'shellfish', icon: 'shrimp', label: 'Shellfish / seafood', keys: /shellfish|seafood|fish|prawn|shrimp|clam|salmon/i,
      quotes: ['Do you have any seafood?', 'I\'m allergic to shellfish.'], tip: 'If it\'s an allergy, flip it: everything listed here is what to AVOID. The Caesar has clam (Clamato).',
      match: i => !isWine(i) && (/(shellfish|seafood|fish)/i.exec(allergenText(i)) || /(prawn|shrimp|clam|salmon|halibut)/i.exec(i.composition || '') || [])[0] || null },
    { id: 'pork', icon: 'pig', label: 'No pork', keys: /pork|bacon|halal|kosher/i,
      quotes: ["I don't eat pork."], tip: 'Watch for bacon, sausage, pepperoni and the Sui Mai dumplings.',
      match: i => isFood(i) && !/pork|ask for details/i.test(allergenText(i)) && !/pork|bacon|sausage|pepperoni|lardon|boar/.test(ing(i)) ? 'No pork listed' : null },
    { id: 'vegetarian', icon: 'leaf', label: 'Vegetarian', keys: /vegetarian|veggie|no meat|meatless|plant/i,
      quotes: ["I'm vegetarian — what are my options?"], tip: 'Based on ingredients listed — double-check stocks/jus with the kitchen.',
      match: i => isFood(i) && !/beef|steak|chicken|pork|bacon|sausage|pepperoni|jerky|short rib|salmon|prawn|shrimp|clam|boar|pastrami|lardon|jus|wing|fish|board|sirloin|tenderloin|ribeye/.test(ing(i)) && !/seafood|fish|shellfish|pork/i.test(allergenText(i)) && !/soup|chicken breast/i.test(i.name) ? 'No meat or fish listed' : null },
    { id: 'zero', icon: 'zero', label: 'Non-alcoholic', keys: /non[- ]?alc|mocktail|sober|no alcohol|pregnan|driving|zero/i,
      quotes: ["I'm not drinking tonight — what do you have?"], tip: 'Point them to the Mocktails section.',
      match: i => isDrink(i) && i.subcategory === 'mocktail' ? 'Zero-proof' : null },
    { id: 'sweet', icon: 'cherry', label: 'Sweet / fruity drinks', keys: /sweet|fruity|fruit|not too strong|light/i,
      quotes: ['I like something sweet and fruity.'], tip: 'Ask which fruit they like to narrow it down.',
      match: i => {
        const hit = (i.tags || []).filter(t => ['sweet', 'fruit-forward', 'berry', 'tropical'].includes(t));
        if (isDrink(i) && hit.length) return nice(hit.join(', ').replace('-', ' '));
        if (isWine(i) && /sweet|semi-dry|off-dry/i.test(`${i.name} ${i.blurb}`)) return 'Touch of sweetness';
        return null;
      } },
    { id: 'bourbon', icon: 'whiskey', label: 'Whiskey / bourbon', keys: /whisk|bourbon|rye|old fashion|smoky/i,
      quotes: ["I'm a whiskey drinker.", 'Got an old fashioned?'], tip: 'Mention the bourbon brand (Brothers Bond, Elijah Craig, Woodford).',
      match: find(/bourbon|whiskey|\brye\b|woodford|elijah craig|brothers bond/, isDrink) },
    { id: 'gin', icon: 'sprig', label: 'Gin', keys: /\bgin\b/i, quotes: ['Anything with gin?'], tip: '',
      match: find(/\bgin\b/, isDrink) },
    { id: 'tequila', icon: 'lime', label: 'Tequila / margarita', keys: /tequila|marg|agave|mezcal/i, quotes: ['Do you have a margarita?'], tip: '',
      match: find(/tequila|cimarron|cimmaron|reposado|blanco/, i => isDrink(i) && !isMock(i)) },
    { id: 'vodka', icon: 'highball', label: 'Vodka', keys: /vodka/i, quotes: ['What do you have with vodka?'], tip: '', match: find(/vodka/, isDrink) },
    { id: 'bold-red', icon: 'wine', label: 'Big bold red', keys: /bold|full[- ]bod|cab|red wine|dry red|tannic/i,
      quotes: ['I like a big, bold red.'], tip: 'Lead with the Cabernets and Toro.',
      match: i => isWine(i) && i.subcategory === 'red' && ((i.tags || []).includes('bold-tannic') || /full-bodied|bold/i.test(i.blurb)) ? (i.varietal || 'Bold red') : null },
    { id: 'light-white', icon: 'flute', label: 'Crisp white / bubbles', keys: /white|crisp|dry white|bubbl|sparkl|prosecco|champagne/i,
      quotes: ['Something crisp and dry?', 'Do you have bubbles?'], tip: '',
      match: i => isWine(i) && ['white', 'sparkling', 'rose'].includes(i.subcategory) ? (i.varietal || '') : null },
    { id: 'steak', icon: 'steak', label: 'Steak / beef', keys: /steak|beef|ribeye|meat/i, quotes: ['I want a good steak.', 'What goes with steak?'], tip: 'Upsell a house butter, Whiskey Peppercorn Sauce or Garlic Prawns, and a bold red.',
      match: find(/striploin|ribeye|sirloin|short rib|tenderloin|pastrami|beef/, isFood) },
    { id: 'share', icon: 'cloche', label: 'To share', keys: /share|sharing|group|table|snack|app/i, quotes: ['What\'s good to share for the table?'], tip: '',
      match: i => isFood(i) && i.subcategory === 'starter' ? 'Starter / shareable' : null },
    { id: 'dessert', icon: 'cake', label: 'Dessert', keys: /dessert|sweet tooth|cake/i, quotes: ['What\'s for dessert?'], tip: '',
      match: i => isFood(i) && i.subcategory === 'dessert' ? 'Dessert' : (isDrink(i) && has(i, /dessert|chocolate|cheesecake|black forest/) ? 'Dessert-y drink' : null) },
    { id: 'popular', icon: 'star', label: 'Favourites / house picks', keys: /popular|favou?rite|recommend|best|signature|must/i,
      quotes: ['What do you recommend?', "What's popular?"], tip: 'Share a personal favourite — it lands better than a list.',
      match: i => !isWine(i) && has(i, /favou?rite|guest choice|signature|crowd favou?rite/) ? 'Staff/house favourite' : null }
  ];

  function answerTopic(t) {
    const rows = [];
    LIVE_ITEMS.forEach(i => { const why = t.match(i); if (why) rows.push({ item: i, why: String(why) }); });
    const groups = {};
    rows.forEach(r => { const s = menuSection(r.item); (groups[s] = groups[s] || []).push(r); });
    return { rows, groups };
  }

  function matchTopics(q) {
    return GUEST_TOPICS.filter(t => t.keys.test(q));
  }

  const guestState = { mode: 'ask', query: '', topicId: null, practiceId: null, quote: '', revealed: false };

  function topicAnswerHtml(t) {
    const { rows, groups } = answerTopic(t);
    if (!rows.length) return `<div class="empty-state">${mascot('surprised', 'mascot-md')}<div>Nothing on the current menu matches that.</div></div>`;
    return `
      ${t.tip ? `<div class="guest-tip">${icon('bulb')}${escapeHtml(t.tip)}</div>` : ''}
      <div class="guest-count">${rows.length} item${rows.length > 1 ? 's' : ''} · look in ${Object.keys(groups).length} section${Object.keys(groups).length > 1 ? 's' : ''}</div>
      ${Object.entries(groups).map(([sec, list]) => `
        <div class="guest-section">
          <div class="guest-section-title">${icon('pin')}${escapeHtml(sec)}</div>
          ${list.map(({ item, why }) => `
            <details class="guest-row">
              <summary><span class="guest-name">${escapeHtml(item.name)}</span><span class="guest-why">${escapeHtml(why)}</span></summary>
              <div class="guest-detail">
                ${item.blurb ? `<p>${escapeHtml(item.blurb)}</p>` : ''}
                ${item.composition ? `<p><b>What's in it:</b> ${escapeHtml(item.composition)}</p>` : ''}
                ${item.allergens ? `<p><b>Allergens:</b> ${escapeHtml(item.allergens)}</p>` : ''}
                ${item.pairings ? `<p><b>Pairs with:</b> ${escapeHtml(item.pairings)}</p>` : ''}
              </div>
            </details>`).join('')}
        </div>`).join('')}
    `;
  }

  function freeTextHtml(q) {
    const words = q.toLowerCase().split(/[^a-z0-9']+/).filter(w => w.length > 2 && !['what', 'whats', "what's", 'the', 'have', 'you', 'like', 'any', 'anything', 'with', 'menu', 'should', 'look', 'where', 'and', 'for', 'can', 'there', 'something', 'love', 'want', 'does', 'got'].includes(w));
    if (!words.length) return '';
    const hits = LIVE_ITEMS.filter(i => words.some(w => txt(i).includes(w) || allergenText(i).includes(w)));
    if (!hits.length) return `<div class="empty-state">${mascot('surprised', 'mascot-md')}<div>No matches — try one of the quick questions above.</div></div>`;
    return topicAnswerHtml({ tip: 'Matched by keyword — read the details before recommending.', match: i => hits.includes(i) ? (words.find(w => txt(i).includes(w) || allergenText(i).includes(w))) : null });
  }

  function renderGuest() {
    const tabs = `<div class="pill-row" id="guest-mode">
      <button class="pill ${guestState.mode === 'ask' ? 'active' : ''}" data-mode="ask">${icon('chat')}Guest asks…</button>
      <button class="pill ${guestState.mode === 'practice' ? 'active' : ''}" data-mode="practice">${icon('mask')}Practice</button>
    </div>`;
    if (guestState.mode === 'practice') return renderGuestPractice(tabs);
    const matched = guestState.query ? matchTopics(guestState.query) : [];
    const active = GUEST_TOPICS.find(t => t.id === guestState.topicId);
    root.innerHTML = `
      <div class="section-title">Guest Questions</div>
      ${tabs}
      <div class="guest-hero">${mascot('notepad', 'mascot-sm')}<p>Type what the guest said, or tap a common question.</p></div>
      <input class="search-input" id="guest-q" placeholder="e.g. &quot;I like martinis&quot; or &quot;what&#39;s gluten free?&quot;" value="${escapeHtml(guestState.query)}">
      <div class="pill-row guest-chips">
        ${GUEST_TOPICS.map(t => `<button class="pill ${t.id === guestState.topicId ? 'active' : ''}" data-topic="${t.id}">${icon(t.icon)}${t.label}</button>`).join('')}
      </div>
      <div id="guest-answer">
        ${active ? `<h3 class="guest-h">${icon(active.icon)}${active.label}</h3>${topicAnswerHtml(active)}`
          : matched.length ? matched.map(t => `<h3 class="guest-h">${icon(t.icon)}${t.label}</h3>${topicAnswerHtml(t)}`).join('')
          : guestState.query ? freeTextHtml(guestState.query) : ''}
      </div>
    `;
    bindGuestMode();
    const input = document.getElementById('guest-q');
    input.addEventListener('change', () => { guestState.query = input.value; guestState.topicId = null; renderGuest(); });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });
    root.querySelectorAll('[data-topic]').forEach(b => b.addEventListener('click', () => {
      guestState.topicId = guestState.topicId === b.dataset.topic ? null : b.dataset.topic;
      guestState.query = '';
      renderGuest();
      const a = document.getElementById('guest-answer'); if (a && guestState.topicId) a.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  }

  function newPractice() {
    const t = sample(GUEST_TOPICS.filter(t => answerTopic(t).rows.length), 1)[0];
    guestState.practiceId = t.id;
    guestState.quote = sample(t.quotes, 1)[0];
    guestState.revealed = false;
  }

  function renderGuestPractice(tabs) {
    if (!guestState.practiceId) newPractice();
    const t = GUEST_TOPICS.find(x => x.id === guestState.practiceId);
    root.innerHTML = `
      <div class="section-title">Guest Questions</div>
      ${tabs}
      <div class="guest-bubble-wrap">
        ${mascot('wave', 'mascot-sm')}
        <div class="guest-bubble">“${escapeHtml(guestState.quote)}”</div>
      </div>
      <p class="guest-prompt">How would you answer? Say it out loud — which items, and where on the menu?</p>
      ${guestState.revealed
        ? `<h3 class="guest-h">${icon(t.icon)}${t.label}</h3>${topicAnswerHtml(t)}<button class="btn block" id="guest-next" style="margin-top:14px">Next guest ${icon('next')}</button>`
        : `<button class="btn block" id="guest-reveal">Reveal answer</button><button class="btn secondary block" id="guest-next" style="margin-top:10px">Skip</button>`}
    `;
    bindGuestMode();
    const r = document.getElementById('guest-reveal');
    if (r) r.addEventListener('click', () => { guestState.revealed = true; renderGuest(); });
    document.getElementById('guest-next').addEventListener('click', () => { newPractice(); renderGuest(); window.scrollTo(0, 0); });
  }

  function bindGuestMode() {
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { guestState.mode = b.dataset.mode; renderGuest(); }));
  }


  /* ============================ STUDY (flashcards) ============================ */

  const studyState = { category: 'all', order: [], index: 0, flipped: false };

  function studyPool() {
    if (studyState.category === 'all') return LIVE_ITEMS;
    return LIVE_ITEMS.filter(i => i.category === studyState.category);
  }

  function studyReset(shuffleIt) {
    const pool = studyPool();
    studyState.order = shuffleIt ? shuffle(pool.map(i => i.id)) : pool.map(i => i.id);
    studyState.index = 0;
    studyState.flipped = false;
  }

  function renderStudy() {
    if (studyState.order.length === 0) studyReset(true);

    const cats = [
      ['all', 'All'], ['wine', 'Wine'], ['cocktail', 'Cocktails'], ['food', 'Food']
    ];

    const total = studyState.order.length;
    if (total === 0) {
      root.innerHTML = `<div class="empty-state">${mascot('notepad', 'mascot-md')}<div>No items in this category.</div></div>`;
      return;
    }
    if (studyState.index >= total) studyState.index = 0;

    const item = itemById(studyState.order[studyState.index]);

    root.innerHTML = `
      <div class="section-title">Study</div>
      <div class="pill-row" id="study-cats">
        ${cats.map(([k, l]) => `<button class="pill ${studyState.category === k ? 'active' : ''}" data-cat="${k}">${l}</button>`).join('')}
        <button class="pill" id="study-shuffle">${icon('shuffle')}Shuffle</button>
      </div>
      <div class="progress-line">${studyState.index + 1} / ${total}</div>
      <div class="flip-card-wrap">
        <div class="flip-card ${studyState.flipped ? 'flipped' : ''}" id="flip-card">
          <div class="flip-face front">
            <span class="badge ${badgeClass(item)}">${categoryLabel(item)}</span>
            <div class="card-name">${escapeHtml(item.name)}</div>
            <div class="card-sub">${escapeHtml(item.varietal ? item.varietal + ' · ' + item.region : '')}</div>
            ${item.note ? `<div class="card-note">${escapeHtml(item.note)}</div>` : ''}
            <div class="tap-hint">Tap card to flip</div>
          </div>
          <div class="flip-face back">
            ${studyBackHtml(item)}
          </div>
        </div>
      </div>
      <div class="study-nav">
        <button class="btn secondary" id="study-prev">${icon('next', 'flip')}Prev</button>
        <button class="btn" id="study-next">Next ${icon('next')}</button>
      </div>
    `;

    document.getElementById('flip-card').addEventListener('click', () => {
      studyState.flipped = !studyState.flipped;
      renderStudy();
    });
    document.getElementById('study-prev').addEventListener('click', e => {
      e.stopPropagation();
      studyState.index = (studyState.index - 1 + total) % total;
      studyState.flipped = false;
      renderStudy();
    });
    document.getElementById('study-next').addEventListener('click', e => {
      e.stopPropagation();
      studyState.index = (studyState.index + 1) % total;
      studyState.flipped = false;
      renderStudy();
    });
    document.getElementById('study-shuffle').addEventListener('click', () => {
      studyReset(true);
      renderStudy();
    });
    document.getElementById('study-cats').querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        studyState.category = btn.dataset.cat;
        studyReset(true);
        renderStudy();
      });
    });
  }

  function studyBackHtml(item) {
    const rows = [];
    if (item.category === 'wine') {
      rows.push(['Varietal', item.varietal]);
      rows.push(['Region', item.region]);
      rows.push(['Flavour Profile', item.blurb]);
      rows.push(['Food Pairings', item.pairings]);
    } else {
      rows.push(['Story & Flavour', item.blurb]);
      rows.push(['Composition', item.composition]);
      rows.push(['Allergens', item.allergens]);
      rows.push(['Garnish / Preset', item.preset]);
    }
    let html = rows.map(([label, val]) => `
      <div class="detail-row">
        <div class="detail-label">${label}</div>
        <div class="detail-value">${escapeHtml(val || 'N/A')}</div>
      </div>
    `).join('');
    if (item.sourcePage) {
      html += `<div class="detail-row"><div class="detail-label">Source Page</div><div class="detail-value" style="color:var(--muted);font-size:13px">${icon('page')}${escapeHtml(item.sourcePage)}</div></div>`;
    }
    return html;
  }

  /* ============================ QUIZ ============================ */

  const quizState = { phase: 'setup', category: 'all', length: 10, queue: [], index: 0, score: 0, answered: false, selected: null, missedThisSession: [] };

  function quizPool() {
    if (quizState.category === 'all') return LIVE_ITEMS;
    return LIVE_ITEMS.filter(i => i.category === quizState.category);
  }

  // --- question generators. Each takes (item, pool) and returns a question or null. ---

  function pickDistractors(pool, field, correctText, count) {
    const seen = new Set([String(correctText).toLowerCase()]);
    const candidates = pool.filter(i => i[field] && i[field] !== 'N/A' && !seen.has(String(i[field]).toLowerCase()));
    const picked = [];
    for (const c of shuffle(candidates)) {
      const key = String(c[field]).toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      picked.push(c[field]);
      if (picked.length === count) break;
    }
    return picked;
  }

  // Prefer distractors from the exact same subcategory first (e.g. other reds, other
  // shots, other mains) so wrong answers are genuinely plausible rather than trivially
  // eliminable, then top up from the wider category if there aren't enough.
  function pickSmartDistractors(item, pool, field, count) {
    const correctText = item[field];
    const sameSub = pool.filter(i => i.id !== item.id && i.category === item.category && i.subcategory === item.subcategory);
    const picked = pickDistractors(sameSub, field, correctText, count);
    if (picked.length < count) {
      const seen = new Set([String(correctText).toLowerCase(), ...picked.map(p => String(p).toLowerCase())]);
      const sameCat = pool.filter(i => i.id !== item.id && i.category === item.category && !seen.has(String(i[field]).toLowerCase()));
      picked.push(...pickDistractors(sameCat, field, correctText, count - picked.length));
    }
    return picked;
  }

  function buildMC(promptText, correctText, distractors, explanation) {
    if (distractors.length < 3) return null;
    const options = shuffle([{ text: correctText, correct: true }, ...distractors.slice(0, 3).map(d => ({ text: d, correct: false }))]);
    return { prompt: promptText, options, explanation };
  }

  function genComposition(item, pool) {
    if (!item.composition) return null;
    const distractors = pickSmartDistractors(item, pool, 'composition', 3);
    return buildMC(
      `A guest asks what's in the <b>${escapeHtml(item.name)}</b>. What do you tell them?`,
      item.composition, distractors,
      `The ${item.name} is made with: ${item.composition}`
    );
  }

  // Skip questions whose answer is already spelled out in the item's own name
  // (e.g. asking the varietal of the "... Sauvignon Blanc" wine) — not a real test of memory.
  function answerGivenAwayByName(item, answerText) {
    if (!answerText) return false;
    const name = item.name.toLowerCase();
    const cleaned = answerText.toLowerCase().replace(/\([^)]*\)/g, '');
    const parts = cleaned.split(/[,&/]| and | with /).map(s => s.trim()).filter(s => s.length >= 4);
    return parts.some(p => name.includes(p));
  }

  function genWineVarietal(item, pool) {
    if (item.category !== 'wine' || answerGivenAwayByName(item, item.varietal)) return null;
    const distractors = pickSmartDistractors(item, pool, 'varietal', 3);
    return buildMC(
      `A guest asks what varietal the <b>${escapeHtml(item.name)}</b> is. What's the answer?`,
      item.varietal, distractors,
      `${item.name} is a ${item.varietal} from ${item.region}.`
    );
  }

  function genWinePairing(item, pool) {
    if (item.category !== 'wine' || !item.pairings) return null;
    const distractors = pickSmartDistractors(item, pool, 'pairings', 3);
    return buildMC(
      `A guest orders the <b>${escapeHtml(item.name)}</b>. What does the menu recommend pairing it with?`,
      item.pairings, distractors,
      `${item.name} pairs with: ${item.pairings}`
    );
  }

  function genAllergen(item, pool) {
    if (!item.allergens || item.allergens === 'N/A') return null;
    const KEYWORDS = ['gluten', 'dairy', 'egg', 'nuts', 'nut', 'shellfish', 'seafood', 'soy', 'garlic', 'nightshade', 'sesame', 'pork', 'fish', 'cilantro', 'tannins', 'caffeine', 'honey'];
    const lower = item.allergens.toLowerCase();
    const found = KEYWORDS.find(k => lower.includes(k));
    if (!found) return null;
    const eligiblePool = pool.filter(i => i.id !== item.id && i.allergens);
    const safe = eligiblePool.filter(i => !i.allergens.toLowerCase().includes(found));
    if (safe.length < 3) return null;
    // Prefer distractors from the same category (a guest asking about a cocktail is more
    // realistically deciding between cocktails, not comparing it to a dessert).
    const safeSameCat = safe.filter(i => i.category === item.category);
    const distractorPool = safeSameCat.length >= 3 ? safeSameCat : safe;
    const distractors = sample(distractorPool, 3).map(i => i.name);
    return buildMC(
      `A guest has a <b>${found}</b> allergy or sensitivity. Which of these should you flag as a problem?`,
      item.name, distractors,
      `${item.name} contains: ${item.allergens}`
    );
  }

  function genPreset(item, pool) {
    if (!item.preset || item.preset === 'N/A') return null;
    const distractors = pickSmartDistractors(item, pool, 'preset', 3);
    return buildMC(
      `How is the <b>${escapeHtml(item.name)}</b> served or garnished?`,
      item.preset, distractors,
      `${item.name}: ${item.preset}`
    );
  }

  function genNameFromBlurb(item, pool) {
    if (!item.blurb) return null;
    const distractors = pickSmartDistractors(item, pool, 'name', 3);
    if (distractors.length < 3) return null;
    return buildMC(
      `Which item matches this description? <br><i>"${escapeHtml(item.blurb)}"</i>`,
      item.name, distractors,
      `That's the ${item.name}.`
    );
  }

  // Flavour-alike suggestions stay within the same category (another wine, another
  // cocktail, another dish) — a cocktail is never surfaced as something that "pairs"
  // with a wine or a dish; that's what the dedicated pairing questions are for.
  function genFlavorAlike(item, pool) {
    if (!item.tags || item.tags.length === 0) return null;
    const sameCat = pool.filter(i => i.id !== item.id && i.category === item.category);
    const alike = sameCat.filter(i => i.tags && i.tags.some(t => item.tags.includes(t)));
    const different = sameCat.filter(i => !i.tags || !i.tags.some(t => item.tags.includes(t)));
    if (alike.length < 1 || different.length < 3) return null;
    const correct = sample(alike, 1)[0];
    const distractors = sample(different, 3).map(i => i.name);
    return buildMC(
      `A guest loved the <b>${escapeHtml(item.name)}</b>. Based on flavour, what else on the menu might they enjoy?`,
      correct.name, distractors,
      `${correct.name} shares similar flavour notes (${correct.tags.filter(t => item.tags.includes(t)).join(', ')}) with the ${item.name}.`
    );
  }

  // Wine <-> food pairing, cross-referenced to real menu items rather than free text.
  // Both stay dormant (return null) until each wine's `pairsWithFoodIds` is populated in
  // data.js with confirmed matches — no guessing which dish a wine's pairing note means.
  function genWineFoodPairing(item, pool) {
    if (item.category !== 'wine' || !item.pairsWithFoodIds || item.pairsWithFoodIds.length === 0) return null;
    const correct = pool.find(i => i.id === sample(item.pairsWithFoodIds, 1)[0]);
    if (!correct) return null;
    const distractorPool = pool.filter(i => i.category === 'food' && !item.pairsWithFoodIds.includes(i.id));
    if (distractorPool.length < 3) return null;
    const distractors = sample(distractorPool, 3).map(i => i.name);
    return buildMC(
      `A guest orders the <b>${escapeHtml(item.name)}</b>. Which dish on the menu would you recommend pairing it with?`,
      correct.name, distractors,
      `${item.name} pairs with: ${item.pairings}`
    );
  }

  function genFoodWinePairing(item, pool) {
    if (item.category !== 'food') return null;
    const matches = pool.filter(i => i.category === 'wine' && i.pairsWithFoodIds && i.pairsWithFoodIds.includes(item.id));
    if (matches.length === 0) return null;
    const correct = sample(matches, 1)[0];
    const distractorPool = pool.filter(i => i.category === 'wine' && !matches.some(m => m.id === i.id));
    if (distractorPool.length < 3) return null;
    const distractors = sample(distractorPool, 3).map(i => i.name);
    return buildMC(
      `A guest orders the <b>${escapeHtml(item.name)}</b>. Which wine on the list would you recommend pairing it with?`,
      correct.name, distractors,
      `${correct.name} pairs with: ${correct.pairings}`
    );
  }

  const GENERATORS_BY_CATEGORY = {
    wine: [genWineVarietal, genWinePairing, genWineFoodPairing, genNameFromBlurb, genFlavorAlike],
    cocktail: [genComposition, genAllergen, genPreset, genNameFromBlurb, genFlavorAlike],
    food: [genComposition, genAllergen, genPreset, genFoodWinePairing, genNameFromBlurb, genFlavorAlike]
  };

  function generateQuestionForItem(item, pool) {
    const gens = shuffle(GENERATORS_BY_CATEGORY[item.category] || []);
    for (const g of gens) {
      const q = g(item, pool);
      if (q) { q.itemId = item.id; q.itemName = item.name; return q; }
    }
    return null;
  }

  function buildQuizQueue(sourceItems, length) {
    const pool = LIVE_ITEMS; // distractors can come from the whole menu for realism
    const candidates = shuffle(sourceItems);
    const queue = [];
    let i = 0;
    while (queue.length < length && i < candidates.length * 3) {
      const item = candidates[i % candidates.length];
      const q = generateQuestionForItem(item, pool);
      if (q) queue.push(q);
      i++;
    }
    return queue;
  }

  function startQuiz(sourceItems) {
    const len = quizState.length === 'all' ? sourceItems.length : Math.min(quizState.length, sourceItems.length * 3);
    quizState.queue = buildQuizQueue(sourceItems, quizState.length === 'all' ? sourceItems.length : quizState.length);
    quizState.index = 0;
    quizState.score = 0;
    quizState.answered = false;
    quizState.selected = null;
    quizState.missedThisSession = [];
    quizState.phase = quizState.queue.length ? 'active' : 'empty';
    if (quizState.queue.length) waiterStroll();
  }

  function renderQuiz() {
    if (quizState.phase === 'setup') return renderQuizSetup();
    if (quizState.phase === 'empty') return renderQuizEmpty();
    if (quizState.phase === 'summary') return renderQuizSummary();
    renderQuizActive();
  }

  function renderQuizSetup() {
    const cats = [['all', 'All'], ['wine', 'Wine'], ['cocktail', 'Cocktails'], ['food', 'Food']];
    const lens = [[10, '10'], [20, '20'], ['all', 'All']];
    root.innerHTML = `
      <div class="section-title">Quiz</div>
      <div class="quiz-setup-card">
        ${mascot('notepad', 'mascot-md bob')}
        <h2>Pick Your Quiz</h2>
        <div class="section-title" style="text-align:left">Category</div>
        <div class="pill-row" id="quiz-cats">
          ${cats.map(([k, l]) => `<button class="pill ${quizState.category === k ? 'active' : ''}" data-cat="${k}">${l}</button>`).join('')}
        </div>
        <div class="section-title" style="text-align:left">Length</div>
        <div class="pill-row" id="quiz-lens">
          ${lens.map(([k, l]) => `<button class="pill ${quizState.length === k ? 'active' : ''}" data-len="${k}">${l}</button>`).join('')}
        </div>
        <button class="btn block" id="quiz-start">Start Quiz</button>
      </div>
    `;
    document.getElementById('quiz-cats').querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => { quizState.category = btn.dataset.cat; renderQuiz(); });
    });
    document.getElementById('quiz-lens').querySelectorAll('[data-len]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.len === 'all' ? 'all' : parseInt(btn.dataset.len, 10);
        quizState.length = v; renderQuiz();
      });
    });
    document.getElementById('quiz-start').addEventListener('click', () => {
      startQuiz(quizPool());
      renderQuiz();
    });
  }

  function renderQuizEmpty() {
    root.innerHTML = `<div class="empty-state">${mascot('surprised', 'mascot-md')}<div>Couldn't build enough questions for that selection — try "All" categories.</div></div>
      <button class="btn block" id="quiz-back">Back</button>`;
    document.getElementById('quiz-back').addEventListener('click', () => { quizState.phase = 'setup'; renderQuiz(); });
  }

  function renderQuizActive() {
    const total = quizState.queue.length;
    const q = quizState.queue[quizState.index];
    const pct = Math.round((quizState.index / total) * 100);

    root.innerHTML = `
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-score"><span>Question ${quizState.index + 1} / ${total}</span><span>Score: <b>${quizState.score}</b></span></div>
      <div class="quiz-question-card">
        <div class="quiz-question-text">${q.prompt}</div>
      </div>
      <div class="quiz-options" id="quiz-options">
        ${q.options.map((o, idx) => `<button class="quiz-option" data-idx="${idx}">${escapeHtml(o.text)}</button>`).join('')}
      </div>
      <div id="quiz-feedback"></div>
    `;

    document.getElementById('quiz-options').querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => onQuizAnswer(parseInt(btn.dataset.idx, 10)));
    });
  }

  function onQuizAnswer(idx) {
    if (quizState.answered) return;
    quizState.answered = true;
    const q = quizState.queue[quizState.index];
    const chosen = q.options[idx];
    const correct = chosen.correct;

    if (correct) quizState.score++;
    else quizState.missedThisSession.push(q.itemId);

    recordAnswer(q.itemId, correct);

    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (q.options[i].correct) btn.classList.add('correct');
      else if (i === idx) btn.classList.add('incorrect');
    });

    const fb = document.getElementById('quiz-feedback');
    fb.innerHTML = `
      <div class="quiz-feedback ${correct ? 'correct' : 'incorrect'}">
        ${mascot(correct ? sample(['laugh', 'love', 'happy'], 1)[0] : 'surprised', 'mascot-fb ' + (correct ? 'pop' : 'shake'))}
        <div><b class="fb-head">${icon(correct ? 'check' : 'x')}${correct ? 'Correct!' : 'Not quite.'}</b><br>${escapeHtml(q.explanation)}</div>
      </div>
      <button class="btn block" id="quiz-next" style="margin-top:14px">${quizState.index + 1 < quizState.queue.length ? `Next Question ${icon('next')}` : 'See Results'}</button>
    `;
    document.getElementById('quiz-next').addEventListener('click', () => {
      quizState.index++;
      quizState.answered = false;
      if (quizState.index >= quizState.queue.length) quizState.phase = 'summary';
      renderQuiz();
    });
  }

  function renderQuizSummary() {
    const total = quizState.queue.length;
    const pct = Math.round((quizState.score / total) * 100);
    const missedCount = quizState.missedThisSession.length;
    root.innerHTML = `
      <div class="quiz-summary">
        <div class="section-title">Quiz Complete</div>
        ${mascot(pct >= 80 ? 'cheer' : pct >= 50 ? 'cloche' : 'pour', 'mascot-lg pop')}
        <div class="big-score">${quizState.score} / ${total}</div>
        <p style="color:var(--muted)">${pct}% — ${pct >= 80 ? "You're basically a menu savant" : pct >= 50 ? "Solid! A little more drilling and you've got it." : "Good start — let's review the misses."}</p>
        <button class="btn block" id="quiz-retry">Take Another Quiz</button>
        ${missedCount ? `<button class="btn secondary block" id="quiz-goreview" style="margin-top:10px">Review ${missedCount} Missed Item${missedCount > 1 ? 's' : ''}</button>` : ''}
      </div>
    `;
    document.getElementById('quiz-retry').addEventListener('click', () => { quizState.phase = 'setup'; renderQuiz(); });
    const rv = document.getElementById('quiz-goreview');
    if (rv) rv.addEventListener('click', () => switchView('review'));
  }

  /* ============================ REVIEW (weak spots) ============================ */

  function renderReview() {
    const weak = getWeakItems();
    if (weak.length === 0) {
      root.innerHTML = `
        <div class="section-title">Review</div>
        <div class="empty-state">${mascot('wave', 'mascot-lg bob')}<div>No weak spots yet — take a quiz and anything you miss will show up here for extra drilling.</div></div>
      `;
      return;
    }

    root.innerHTML = `
      <div class="section-title">Review — Weak Spots</div>
      <p style="color:var(--muted);font-size:13px;margin-top:-6px">Answer an item correctly ${MASTERY_STREAK} times in a row (in Quiz mode) to clear it from this list.</p>
      <button class="btn block" id="drill-btn" style="margin-bottom:16px">${icon('target')}Drill These ${weak.length} Item${weak.length > 1 ? 's' : ''}</button>
      ${weak.map(w => {
        const item = itemById(w.id);
        if (!item) return '';
        return `
          <div class="weak-item">
            <div>
              <div class="weak-item-name">${escapeHtml(item.name)} <span class="badge ${badgeClass(item)}" style="margin-left:6px">${categoryLabel(item)}</span></div>
              <div class="weak-item-meta">Missed ${w.misses} time${w.misses > 1 ? 's' : ''} · last ${timeAgo(w.lastMissed)}${w.streak ? ` · ${w.streak}/${MASTERY_STREAK} correct streak` : ''}</div>
            </div>
            <div class="miss-count">${w.misses}</div>
          </div>
        `;
      }).join('')}
    `;

    document.getElementById('drill-btn').addEventListener('click', () => {
      const weakItems = weak.map(w => itemById(w.id)).filter(Boolean);
      quizState.category = 'all';
      quizState.length = weakItems.length;
      startQuiz(weakItems);
      switchView('quiz');
    });
  }

  /* ============================ REFERENCE ============================ */

  const refState = { search: '', category: 'all', editingId: null, mode: 'list', pageIndex: 0, editingCell: null, zoom: 1 };

  function clampZoom(z) { return Math.min(1.3, Math.max(0.5, Math.round(z * 10) / 10)); }

  function getPageGroups() {
    const winePages = ['Wine List, p.1', 'Wine List, p.2', 'Wine List, p.3'];
    const menuPages = Array.from({ length: 13 }, (_, i) => `Menu Knowledge, p.${i + 1}`);
    const pages = [];
    winePages.forEach(label => pages.push({
      label, type: 'wine',
      items: LIVE_ITEMS.filter(i => i.category === 'wine' && i.sourcePage === label)
    }));
    menuPages.forEach(label => pages.push({
      label, type: 'menu',
      items: LIVE_ITEMS.filter(i => (i.category === 'cocktail' || i.category === 'food') && i.sourcePage === label)
    }));
    pages.push({ label: 'Well & Beer (Menu p.6)', type: 'liquors', items: WELL_LIQUORS });
    return pages;
  }

  function pageShortLabel(label) {
    return label.replace('Wine List, ', 'Wine ').replace('Menu Knowledge, ', 'Menu ').replace('Well & Beer (Menu p.6)', 'Well & Beer');
  }

  const CELL_COLORS = [['', 'None'], ['gold', 'Gold'], ['green', 'Know it'], ['red', 'Review']];

  function pageCellHtml(item, field, asHeader) {
    const ann = getAnnotation(item.id, field);
    const editingThis = refState.editingCell && refState.editingCell.id === item.id && refState.editingCell.field === field;
    const value = field === 'name' ? item.name : (item[field] || 'N/A');
    const tag = asHeader ? 'th' : 'td';
    const headClass = asHeader ? ' page-cell-head' : '';
    if (editingThis) {
      const currentColor = ann ? (ann.color || '') : '';
      return `
        <${tag} class="page-cell editing-cell${headClass}" data-id="${item.id}" data-field="${field}">
          <div class="page-cell-value">${escapeHtml(value)}</div>
          <textarea class="search-input cell-note-input" rows="2" placeholder="Add a note...">${escapeHtml(ann ? ann.note : '')}</textarea>
          <div class="cell-color-row">
            ${CELL_COLORS.map(([val, label]) => `
              <label class="color-swatch-label" title="${label}">
                <input type="radio" name="cell-color" value="${val}" ${currentColor === val ? 'checked' : ''}>
                <span class="color-swatch swatch-${val || 'none'}"></span>
              </label>
            `).join('')}
          </div>
          <div class="study-nav" style="margin-top:8px">
            <button class="btn secondary" data-cell-action="cancel">Cancel</button>
            <button class="btn" data-cell-action="save">Save</button>
          </div>
          ${ann ? `<button class="btn secondary block" data-cell-action="clear" style="margin-top:8px">Clear note</button>` : ''}
        </${tag}>
      `;
    }
    const colorClass = ann && ann.color ? `cell-color-${ann.color}` : '';
    return `
      <${tag} class="page-cell ${colorClass}${headClass}" data-id="${item.id}" data-field="${field}">
        <div class="page-cell-value">${escapeHtml(value)}</div>
        ${asHeader && item.note ? `<div class="page-cell-tag">${escapeHtml(item.note)}</div>` : ''}
        ${ann && ann.note ? `<div class="page-cell-note">${icon('note')}${escapeHtml(ann.note)}</div>` : ''}
      </${tag}>
    `;
  }

  // Each row is one item (wine / menu item / well liquor), read left to right through its
  // fields — matching the printed binder rather than a field-per-row / item-per-column grid.
  function renderPageTable(page) {
    if (page.items.length === 0) return `<div class="empty-state">${mascot('notepad', 'mascot-md')}<div>No items landed on this page.</div></div>`;
    const fields = page.type === 'liquors'
      ? [['brand', 'Brand']]
      : page.type === 'wine'
        ? [['varietal', 'Varietal'], ['region', 'Region'], ['blurb', 'Flavour Profile'], ['pairings', 'Food Pairings']]
        : [['blurb', 'Story & Flavour'], ['composition', 'Composition'], ['allergens', 'Allergens'], ['preset', 'Garnish / Preset']];
    const firstColLabel = page.type === 'wine' ? 'Wine' : page.type === 'liquors' ? 'Spirit' : 'Menu Item';
    const firstColField = page.type === 'liquors' ? 'spirit' : 'name';
    return `
      <div class="page-table-wrap" style="zoom:${refState.zoom}">
        <table class="page-table">
          <thead>
            <tr><th>${firstColLabel}</th>${fields.map(([, label]) => `<th>${label}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${page.items.map(item => `
              <tr>
                ${pageCellHtml(item, firstColField, true)}
                ${fields.map(([field]) => pageCellHtml(item, field)).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderReferencePagesInner() {
    const pages = getPageGroups();
    if (refState.pageIndex >= pages.length) refState.pageIndex = 0;
    const page = pages[refState.pageIndex];
    const anyAnnotations = Object.keys(annotations).length > 0;
    return `
      <p style="color:var(--muted);font-size:13px;margin-top:-6px">Browsed page by page, just like the printed binder. Tap any cell to highlight it or add a note.</p>
      <div class="pill-row" id="page-selector" style="flex-wrap:nowrap;overflow-x:auto;padding-bottom:6px">
        ${pages.map((p, idx) => `<button class="pill ${idx === refState.pageIndex ? 'active' : ''}" data-page="${idx}" style="white-space:nowrap">${pageShortLabel(p.label)}</button>`).join('')}
      </div>
      <div class="zoom-row" id="zoom-controls">
        <button class="btn secondary zoom-btn" type="button" id="zoom-out">−</button>
        <span class="zoom-label" id="zoom-label">${Math.round(refState.zoom * 100)}%</span>
        <button class="btn secondary zoom-btn" type="button" id="zoom-in">+</button>
        <button class="btn secondary zoom-btn" type="button" id="zoom-reset" style="margin-left:auto">Reset</button>
      </div>
      <div id="page-table-area">${renderPageTable(page)}</div>
      ${anyAnnotations ? '<button class="btn secondary block" id="clear-all-annotations" style="margin-top:12px">' + icon('reset') + 'Clear all notes &amp; highlights</button>' : ''}
    `;
  }

  // Re-renders only the table itself (not the whole Reference view), so the page you're on,
  // the scroll position, and the zoom level all survive editing or coloring a cell.
  function refreshPageTable() {
    const pages = getPageGroups();
    if (refState.pageIndex >= pages.length) refState.pageIndex = 0;
    const page = pages[refState.pageIndex];
    const area = document.getElementById('page-table-area');
    const oldWrap = area.querySelector('.page-table-wrap');
    const scrollLeft = oldWrap ? oldWrap.scrollLeft : 0;
    area.innerHTML = renderPageTable(page);
    const newWrap = area.querySelector('.page-table-wrap');
    if (newWrap) newWrap.scrollLeft = scrollLeft;
    const anyAnnotations = Object.keys(annotations).length > 0;
    const clearAllBtn = document.getElementById('clear-all-annotations');
    if (anyAnnotations && !clearAllBtn) {
      area.insertAdjacentHTML('afterend', '<button class="btn secondary block" id="clear-all-annotations" style="margin-top:12px">' + icon('reset') + 'Clear all notes &amp; highlights</button>');
      wireClearAllButton();
    } else if (!anyAnnotations && clearAllBtn) {
      clearAllBtn.remove();
    }
  }

  function setZoom(z) {
    refState.zoom = clampZoom(z);
    const label = document.getElementById('zoom-label');
    if (label) label.textContent = Math.round(refState.zoom * 100) + '%';
    refreshPageTable();
  }

  function wireClearAllButton() {
    const clearAllBtn = document.getElementById('clear-all-annotations');
    if (clearAllBtn) clearAllBtn.addEventListener('click', () => { clearAllAnnotations(); refreshPageTable(); });
  }

  function wireReferencePagesListeners() {
    document.getElementById('page-selector').querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        refState.pageIndex = parseInt(btn.dataset.page, 10);
        refState.editingCell = null;
        renderReference();
      });
    });

    document.getElementById('zoom-out').addEventListener('click', () => setZoom(refState.zoom - 0.1));
    document.getElementById('zoom-in').addEventListener('click', () => setZoom(refState.zoom + 0.1));
    document.getElementById('zoom-reset').addEventListener('click', () => setZoom(1));

    document.getElementById('page-table-area').addEventListener('click', e => {
      const actionBtn = e.target.closest('[data-cell-action]');
      if (actionBtn) {
        const cell = actionBtn.closest('.page-cell');
        const id = cell.dataset.id, field = cell.dataset.field;
        if (actionBtn.dataset.cellAction === 'save') {
          const note = cell.querySelector('.cell-note-input').value.trim();
          const colorInput = cell.querySelector('input[name="cell-color"]:checked');
          const color = colorInput ? colorInput.value : '';
          setAnnotation(id, field, { note, color });
        } else if (actionBtn.dataset.cellAction === 'clear') {
          setAnnotation(id, field, { note: '', color: '' });
        }
        refState.editingCell = null;
        refreshPageTable();
        return;
      }
      const cell = e.target.closest('.page-cell:not(.editing-cell)');
      if (cell) {
        refState.editingCell = { id: cell.dataset.id, field: cell.dataset.field };
        refreshPageTable();
      }
    });

    wireClearAllButton();
  }

  function editableFieldsFor(item) {
    if (item.category === 'wine') {
      return [
        ['name', 'Name'], ['note', 'Note / Tag'], ['varietal', 'Varietal'], ['region', 'Region'],
        ['blurb', 'Flavour Profile'], ['pairings', 'Food Pairings']
      ];
    }
    return [
      ['name', 'Name'], ['note', 'Note / Tag'], ['blurb', 'Story & Flavour'], ['composition', 'Composition'],
      ['allergens', 'Allergens'], ['preset', 'Garnish / Preset']
    ];
  }

  function refItemHtml(item) {
    const edited = hasOverride(item.id);
    if (refState.editingId === item.id) {
      const fields = editableFieldsFor(item);
      return `
        <div class="ref-item editing" data-id="${item.id}">
          <div class="ref-item-head">
            <h3>Editing</h3>
            <span class="badge ${badgeClass(item)}">${categoryLabel(item)}</span>
          </div>
          ${fields.map(([key, label]) => `
            <div class="detail-row">
              <div class="detail-label">${label}</div>
              <textarea class="search-input edit-input" data-field="${key}" rows="2">${escapeHtml(item[key] || '')}</textarea>
            </div>
          `).join('')}
          <div class="study-nav">
            <button class="btn secondary" data-action="cancel-edit">Cancel</button>
            <button class="btn" data-action="save-edit">Save</button>
          </div>
          ${edited ? `<button class="btn secondary block" data-action="reset-edit" style="margin-top:10px">${icon('reset')}Reset this item to the original scan</button>` : ''}
        </div>
      `;
    }
    return `
      <div class="ref-item" data-id="${item.id}">
        <div class="ref-item-head">
          <h3>${escapeHtml(item.name)}${edited ? ' <span class="badge">edited</span>' : ''}</h3>
          <span class="badge ${badgeClass(item)}">${categoryLabel(item)}</span>
        </div>
        ${item.note ? `<div class="ref-item-note">${escapeHtml(item.note)}</div>` : ''}
        ${studyBackHtml(item)}
        <button class="btn secondary block" data-action="start-edit" style="margin-top:6px">${icon('pencil')}Fix a detail</button>
      </div>
    `;
  }

  function renderReferenceListInner() {
    const cats = [['all', 'All'], ['wine', 'Wine'], ['cocktail', 'Cocktails'], ['food', 'Food']];
    let items = refState.category === 'all' ? LIVE_ITEMS : LIVE_ITEMS.filter(i => i.category === refState.category);
    if (refState.search.trim()) {
      const q = refState.search.trim().toLowerCase();
      items = items.filter(i => [i.name, i.note, i.composition, i.blurb, i.varietal, i.region, i.pairings, i.allergens]
        .filter(Boolean).some(f => f.toLowerCase().includes(q)));
    }
    const anyEdits = Object.keys(overrides).length > 0;
    return `
      <p style="color:var(--muted);font-size:13px;margin-top:-6px">Spot a scan error? Tap "Fix a detail" on any item — the correction applies everywhere in the app.</p>
      <input class="search-input" id="ref-search" placeholder="Search name, ingredient, allergen..." value="${escapeHtml(refState.search)}">
      <div class="pill-row" id="ref-cats">
        ${cats.map(([k, l]) => `<button class="pill ${refState.category === k ? 'active' : ''}" data-cat="${k}">${l}</button>`).join('')}
      </div>
      <div class="progress-line">${items.length} item${items.length === 1 ? '' : 's'}</div>
      <div id="ref-list">
        ${items.length === 0 ? `<div class="empty-state">${mascot('surprised', 'mascot-md')}<div>No matches.</div></div>` : items.map(refItemHtml).join('')}
      </div>
      ${anyEdits ? '<button class="btn secondary block" id="reset-all-edits" style="margin-top:6px">' + icon('reset') + 'Reset all corrections</button>' : ''}
    `;
  }

  function wireReferenceListListeners() {
    const searchInput = document.getElementById('ref-search');
    searchInput.addEventListener('input', () => {
      refState.search = searchInput.value;
      renderReference();
      document.getElementById('ref-search').focus();
      const val = document.getElementById('ref-search');
      val.selectionStart = val.selectionEnd = val.value.length;
    });
    document.getElementById('ref-cats').querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => { refState.category = btn.dataset.cat; renderReference(); });
    });

    document.getElementById('ref-list').addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const card = btn.closest('[data-id]');
      const id = card.dataset.id;
      if (btn.dataset.action === 'start-edit') {
        refState.editingId = id;
        renderReference();
      } else if (btn.dataset.action === 'cancel-edit') {
        refState.editingId = null;
        renderReference();
      } else if (btn.dataset.action === 'save-edit') {
        const fields = {};
        card.querySelectorAll('.edit-input').forEach(input => { fields[input.dataset.field] = input.value; });
        saveItemEdits(id, fields);
        refState.editingId = null;
        renderReference();
      } else if (btn.dataset.action === 'reset-edit') {
        resetItemOverride(id);
        refState.editingId = null;
        renderReference();
      }
    });

    const resetAllBtn = document.getElementById('reset-all-edits');
    if (resetAllBtn) resetAllBtn.addEventListener('click', () => { resetAllOverrides(); renderReference(); });
  }

  function renderReference() {
    root.innerHTML = `
      <div class="section-title">Reference</div>
      <div class="pill-row" id="ref-mode-toggle">
        <button class="pill ${refState.mode === 'list' ? 'active' : ''}" data-mode="list">${icon('list')}List</button>
        <button class="pill ${refState.mode === 'pages' ? 'active' : ''}" data-mode="pages">${icon('page')}Pages</button>
      </div>
      <div id="ref-body">${refState.mode === 'pages' ? renderReferencePagesInner() : renderReferenceListInner()}</div>
    `;

    document.getElementById('ref-mode-toggle').querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (refState.mode === btn.dataset.mode) return;
        refState.mode = btn.dataset.mode;
        refState.editingCell = null;
        renderReference();
      });
    });

    if (refState.mode === 'pages') wireReferencePagesListeners();
    else wireReferenceListListeners();
  }

  /* ============================ init ============================ */

  initGate(() => { switchView('study'); setTimeout(() => showLoveNote(false), 1200); });
})();
