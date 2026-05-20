// app.js — iPAS AI規劃師中級 備考平台

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const pageMap = { 'home': 'page-home', 's1-notes': 'page-s1-notes', 's2-notes': 'page-s2-notes', 'quiz': 'page-quiz' };
  const page = document.getElementById(pageMap[name]);
  if (page) page.classList.add('active');
  const navMap = { 'home': 0, 's1-notes': 1, 's2-notes': 2, 'quiz': 3 };
  const btns = document.querySelectorAll('.nav-btn');
  if (navMap[name] !== undefined) btns[navMap[name]].classList.add('active');
  if (name === 's1-notes' && !document.querySelector('#s1-content .section-accordion')) renderNotes('s1-content', S1_NOTES, 'blue-h');
  if (name === 's2-notes' && !document.querySelector('#s2-content .section-accordion')) renderNotes('s2-content', S2_NOTES, 'green-h');
  if (name === 'quiz') showQuizSelect();
  window.scrollTo(0, 0);
}

function renderNotes(containerId, notesData, colorClass) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  notesData.forEach((section, idx) => {
    const accord = document.createElement('div');
    accord.className = 'section-accordion';
    const titleEl = document.createElement('div');
    titleEl.className = `section-title ${colorClass}`;
    titleEl.innerHTML = `<span>${section.title}</span><span class="toggle-icon">▼</span>`;
    titleEl.addEventListener('click', () => {
      const body = accord.querySelector('.section-body');
      const isOpen = body.classList.contains('open');
      body.classList.toggle('open', !isOpen);
      titleEl.classList.toggle('open', !isOpen);
    });
    const body = document.createElement('div');
    body.className = 'section-body';
    if (idx === 0) { body.classList.add('open'); titleEl.classList.add('open'); }
    section.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'knowledge-item';
      const kwClass = colorClass === 'green-h' ? 'kw-green' : 'kw';
      let html = `<span class="${kwClass}">【${item.kw}】</span>`;
      if (item.text) html += `　${escHtml(item.text)}`;
      if (item.sub && item.sub.length) {
        html += `<ul class="k-sub">`;
        item.sub.forEach(s => { html += `<li>${escHtml(s)}</li>`; });
        html += `</ul>`;
      }
      div.innerHTML = html;
      body.appendChild(div);
    });
    accord.appendChild(titleEl);
    accord.appendChild(body);
    container.appendChild(accord);
  });
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let quizState = { questions: [], currentIdx: 0, selected: null, answered: false, results: [], mode: '' };

function showQuizSelect() {
  document.getElementById('quiz-select').style.display = 'block';
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-review').style.display = 'none';
}

function startQuiz(mode) {
  showPage('quiz');
  let questions;
  if (mode === 's1') questions = shuffle([...S1_QUESTIONS]);
  else if (mode === 's2') questions = shuffle([...S2_QUESTIONS]);
  else questions = shuffle([...S1_QUESTIONS, ...S2_QUESTIONS]);
  quizState = { questions, currentIdx: 0, selected: null, answered: false, results: [], mode };
  document.getElementById('quiz-select').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-review').style.display = 'none';
  const titleMap = { s1: '科目一 模擬測驗', s2: '科目二 模擬測驗', mixed: '混合模擬測驗' };
  document.getElementById('quiz-title-label').textContent = titleMap[mode];
  renderQuestion();
}

function renderQuestion() {
  const { questions, currentIdx } = quizState;
  const q = questions[currentIdx];
  const total = questions.length;
  document.getElementById('quiz-progress-text').textContent = `${currentIdx + 1} / ${total}`;
  document.getElementById('quiz-progress-fill').style.width = `${((currentIdx + 1) / total) * 100}%`;
  document.getElementById('q-number-badge').textContent = `第 ${currentIdx + 1} 題`;
  document.getElementById('q-subject-badge').textContent = q.subject;
  document.getElementById('q-text').textContent = q.q;
  const optsEl = document.getElementById('q-options');
  optsEl.innerHTML = '';
  q.opts.forEach(opt => {
    const label = opt.charAt(0);
    const text = opt.slice(3);
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${label}</span><span>${escHtml(text)}</span>`;
    btn.dataset.opt = label;
    btn.addEventListener('click', () => selectOption(label));
    optsEl.appendChild(btn);
  });
  quizState.selected = null;
  quizState.answered = false;
  document.getElementById('q-feedback').style.display = 'none';
  document.getElementById('btn-check').style.display = 'inline-block';
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('btn-finish').style.display = 'none';
}

function selectOption(opt) {
  if (quizState.answered) return;
  quizState.selected = opt;
  document.querySelectorAll('.option-btn').forEach(btn => btn.classList.toggle('selected', btn.dataset.opt === opt));
  document.getElementById('btn-check').disabled = false;
}

function checkAnswer() {
  if (!quizState.selected || quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.currentIdx];
  const correct = quizState.selected === q.ans;
  quizState.results.push({ correct, selected: quizState.selected, answer: q.ans, question: q });
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.opt === q.ans) { btn.classList.remove('selected'); btn.classList.add('correct'); }
    else if (btn.dataset.opt === quizState.selected && !correct) { btn.classList.remove('selected'); btn.classList.add('wrong'); }
  });
  const fb = document.getElementById('q-feedback');
  fb.style.display = 'block';
  if (correct) {
    fb.className = 'q-feedback correct-fb';
    fb.innerHTML = `✅ 答對了！<br><strong>解析：</strong>${escHtml(q.exp)}`;
  } else {
    fb.className = 'q-feedback wrong-fb';
    fb.innerHTML = `❌ 答錯了，正確答案是 <strong>${q.ans}</strong><br><strong>解析：</strong>${escHtml(q.exp)}`;
  }
  document.getElementById('btn-check').style.display = 'none';
  const isLast = quizState.currentIdx === quizState.questions.length - 1;
  if (isLast) document.getElementById('btn-finish').style.display = 'inline-block';
  else document.getElementById('btn-next').style.display = 'inline-block';
}

function nextQuestion() { quizState.currentIdx++; renderQuestion(); }

function finishQuiz() {
  document.getElementById('quiz-active').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
  const total = quizState.results.length;
  const correct = quizState.results.filter(r => r.correct).length;
  const wrong = total - correct;
  const score = Math.round((correct / total) * 100);
  const pass = score >= 60;
  document.getElementById('result-icon').textContent = pass ? '🎉' : '📚';
  document.getElementById('result-title').textContent = pass ? '恭喜通過！' : '繼續加油！';
  document.getElementById('result-title').className = pass ? 'pass-color' : 'fail-color';
  document.getElementById('result-score-num').textContent = score;
  document.getElementById('result-score-num').className = `result-score ${pass ? 'pass-color' : 'fail-color'}`;
  document.getElementById('result-detail').textContent = `共 ${total} 題，答對 ${correct} 題，答錯 ${wrong} 題`;
  document.getElementById('result-breakdown').innerHTML = `<span class="rb-item rb-correct">✅ 答對 ${correct} 題</span><span class="rb-item rb-wrong">❌ 答錯 ${wrong} 題</span><span class="rb-item rb-total">📊 總分 ${score} 分</span>`;
}

function reviewAnswers() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-review').style.display = 'block';
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  quizState.results.forEach((r, i) => {
    const q = r.question;
    const div = document.createElement('div');
    div.className = `review-item ${r.correct ? 'r-correct' : 'r-wrong'}`;
    let optsHtml = '';
    q.opts.forEach(opt => {
      const label = opt.charAt(0);
      let cls = 'review-opt';
      if (label === q.ans) cls += ' r-ans';
      else if (label === r.selected && !r.correct) cls += ' r-user-wrong';
      optsHtml += `<div class="${cls}">${opt}${label === q.ans ? ' ✓ 正解' : ''}${label === r.selected && !r.correct ? ' ✗ 你的選擇' : ''}</div>`;
    });
    div.innerHTML = `<div class="review-qnum">第 ${i + 1} 題　${q.subject}　${r.correct ? '✅ 答對' : '❌ 答錯'}</div><div class="review-q">${escHtml(q.q)}</div><div class="review-opts">${optsHtml}</div><div class="review-exp">📖 ${escHtml(q.exp)}</div>`;
    list.appendChild(div);
  });
}

function showQuizResult() {
  document.getElementById('quiz-review').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
}

function resetQuiz() { startQuiz(quizState.mode); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

document.addEventListener('DOMContentLoaded', () => { showPage('home'); });
