(function () {
  'use strict';

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
      root.innerHTML = `<div class="empty-state">No items in this category.</div>`;
      return;
    }
    if (studyState.index >= total) studyState.index = 0;

    const item = itemById(studyState.order[studyState.index]);

    root.innerHTML = `
      <div class="section-title">Study</div>
      <div class="pill-row" id="study-cats">
        ${cats.map(([k, l]) => `<button class="pill ${studyState.category === k ? 'active' : ''}" data-cat="${k}">${l}</button>`).join('')}
        <button class="pill" id="study-shuffle">🔀 Shuffle</button>
      </div>
      <div class="progress-line">${studyState.index + 1} / ${total}</div>
      <div class="flip-card-wrap">
        <div class="flip-card ${studyState.flipped ? 'flipped' : ''}" id="flip-card">
          <div class="flip-face front">
            <span class="badge ${badgeClass(item)}">${categoryLabel(item)}</span>
            <div class="card-name">${escapeHtml(item.name)}</div>
            <div class="card-sub">${escapeHtml(item.varietal ? item.varietal + ' · ' + item.region : '')}</div>
            <div class="tap-hint">Tap card to flip</div>
          </div>
          <div class="flip-face back">
            ${studyBackHtml(item)}
          </div>
        </div>
      </div>
      <div class="study-nav">
        <button class="btn secondary" id="study-prev">◀ Prev</button>
        <button class="btn" id="study-next">Next ▶</button>
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
      html += `<div class="detail-row"><div class="detail-label">Source Page</div><div class="detail-value" style="color:var(--muted);font-size:13px">📄 ${escapeHtml(item.sourcePage)}</div></div>`;
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

  function genWineVarietal(item, pool) {
    if (item.category !== 'wine') return null;
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

  function genFlavorAlike(item, pool) {
    if (!item.tags || item.tags.length === 0) return null;
    const alike = pool.filter(i => i.id !== item.id && i.tags && i.tags.some(t => item.tags.includes(t)));
    const different = pool.filter(i => i.id !== item.id && (!i.tags || !i.tags.some(t => item.tags.includes(t))));
    if (alike.length < 1 || different.length < 3) return null;
    const correct = sample(alike, 1)[0];
    const distractors = sample(different, 3).map(i => i.name);
    return buildMC(
      `A guest loved the <b>${escapeHtml(item.name)}</b>. Based on flavour, what else on the menu might they enjoy?`,
      correct.name, distractors,
      `${correct.name} shares similar flavour notes (${correct.tags.filter(t => item.tags.includes(t)).join(', ')}) with the ${item.name}.`
    );
  }

  const GENERATORS_BY_CATEGORY = {
    wine: [genWineVarietal, genWinePairing, genNameFromBlurb, genFlavorAlike],
    cocktail: [genComposition, genAllergen, genPreset, genNameFromBlurb, genFlavorAlike],
    food: [genComposition, genAllergen, genPreset, genNameFromBlurb, genFlavorAlike]
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
    root.innerHTML = `<div class="empty-state">Couldn't build enough questions for that selection — try "All" categories.</div>
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
        <b>${correct ? '✅ Correct!' : '❌ Not quite.'}</b><br>${escapeHtml(q.explanation)}
      </div>
      <button class="btn block" id="quiz-next" style="margin-top:14px">${quizState.index + 1 < quizState.queue.length ? 'Next Question ▶' : 'See Results'}</button>
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
        <div class="big-score">${quizState.score} / ${total}</div>
        <p style="color:var(--muted)">${pct}% — ${pct >= 80 ? "You're basically a menu savant 🦝" : pct >= 50 ? "Solid! A little more drilling and you've got it." : "Good start — let's review the misses."}</p>
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
        <div class="empty-state">No weak spots yet — take a quiz and anything you miss will show up here for extra drilling.</div>
      `;
      return;
    }

    root.innerHTML = `
      <div class="section-title">Review — Weak Spots</div>
      <p style="color:var(--muted);font-size:13px;margin-top:-6px">Answer an item correctly ${MASTERY_STREAK} times in a row (in Quiz mode) to clear it from this list.</p>
      <button class="btn block" id="drill-btn" style="margin-bottom:16px">🎯 Drill These ${weak.length} Item${weak.length > 1 ? 's' : ''}</button>
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

  const refState = { search: '', category: 'all', editingId: null };

  function editableFieldsFor(item) {
    if (item.category === 'wine') {
      return [
        ['name', 'Name'], ['varietal', 'Varietal'], ['region', 'Region'],
        ['blurb', 'Flavour Profile'], ['pairings', 'Food Pairings']
      ];
    }
    return [
      ['name', 'Name'], ['blurb', 'Story & Flavour'], ['composition', 'Composition'],
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
          ${edited ? `<button class="btn secondary block" data-action="reset-edit" style="margin-top:10px">↺ Reset this item to the original scan</button>` : ''}
        </div>
      `;
    }
    return `
      <div class="ref-item" data-id="${item.id}">
        <div class="ref-item-head">
          <h3>${escapeHtml(item.name)}${edited ? ' <span class="badge">edited</span>' : ''}</h3>
          <span class="badge ${badgeClass(item)}">${categoryLabel(item)}</span>
        </div>
        ${studyBackHtml(item)}
        <button class="btn secondary block" data-action="start-edit" style="margin-top:6px">✏️ Fix a detail</button>
      </div>
    `;
  }

  function renderReference() {
    const cats = [['all', 'All'], ['wine', 'Wine'], ['cocktail', 'Cocktails'], ['food', 'Food']];
    let items = refState.category === 'all' ? LIVE_ITEMS : LIVE_ITEMS.filter(i => i.category === refState.category);
    if (refState.search.trim()) {
      const q = refState.search.trim().toLowerCase();
      items = items.filter(i => [i.name, i.composition, i.blurb, i.varietal, i.region, i.pairings, i.allergens]
        .filter(Boolean).some(f => f.toLowerCase().includes(q)));
    }

    const anyEdits = Object.keys(overrides).length > 0;

    root.innerHTML = `
      <div class="section-title">Reference</div>
      <p style="color:var(--muted);font-size:13px;margin-top:-6px">Spot a scan error? Tap "Fix a detail" on any item — the correction applies everywhere in the app.</p>
      <input class="search-input" id="ref-search" placeholder="Search name, ingredient, allergen..." value="${escapeHtml(refState.search)}">
      <div class="pill-row" id="ref-cats">
        ${cats.map(([k, l]) => `<button class="pill ${refState.category === k ? 'active' : ''}" data-cat="${k}">${l}</button>`).join('')}
      </div>
      <div class="progress-line">${items.length} item${items.length === 1 ? '' : 's'}</div>
      <div id="ref-list">
        ${items.length === 0 ? '<div class="empty-state">No matches.</div>' : items.map(refItemHtml).join('')}
      </div>
      ${anyEdits ? '<button class="btn secondary block" id="reset-all-edits" style="margin-top:6px">↺ Reset all corrections</button>' : ''}
    `;

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

  /* ============================ init ============================ */

  switchView('study');
})();
