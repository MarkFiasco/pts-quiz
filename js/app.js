// ----- Full Quiz App -----

const startScreenTitle = document.getElementById("startScreenTitle");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const app = document.getElementById("app");
const questionArea = document.getElementById("questionArea");
const qIndexEl = document.getElementById("qIndex");
const qTotalEl = document.getElementById("qTotal");
const qLeftEl = document.getElementById("qLeft");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const resultsEl = document.getElementById("results");

// ----- Reactive quiz title binding -----
function updateQuizTitle() {
  if(QUIZ_DATA && QUIZ_DATA.title){
    if(startScreenTitle) startScreenTitle.textContent = QUIZ_DATA.title;
    const mainHeaderTitle = document.querySelector("header h1");
    if(mainHeaderTitle) mainHeaderTitle.textContent = QUIZ_DATA.title;
  }
}
updateQuizTitle();

// ----- Custom modal for exit confirmation -----
const confirmModal = document.createElement("div");
confirmModal.id = "confirmModal";
confirmModal.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999;";
confirmModal.innerHTML = `
  <div style="background:#fff; padding:24px; border-radius:12px; max-width:320px; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,0.2);">
    <p style="margin-bottom:20px;">Exit the test and lose your progress?</p>
    <div style="display:flex; justify-content:space-around;">
      <button id="confirmYes" style="padding:8px 16px; background:#0b66ff; color:#fff; border:none; border-radius:6px;">Yes</button>
      <button id="confirmNo" style="padding:8px 16px; background:#dc2626; color:#fff; border:none; border-radius:6px;">No</button>
    </div>
  </div>
`;
document.body.appendChild(confirmModal);
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

function showConfirm(callback) {
  confirmModal.style.display = "flex";
  function cleanUp() {
    confirmModal.style.display = "none";
    confirmYes.removeEventListener("click", yesHandler);
    confirmNo.removeEventListener("click", noHandler);
  }
  function yesHandler() { cleanUp(); callback(true); }
  function noHandler() { cleanUp(); callback(false); }
  confirmYes.addEventListener("click", yesHandler);
  confirmNo.addEventListener("click", noHandler);
}

// ----- Start Test -----
startBtn.onclick = () => {
  startScreen.style.display = "none";
  app.style.display = "block";
  init();
};

// ----- Reset / go to start screen -----
function goToStartScreen(){
  clearInterval(state.timerIntervalId);
  state = {questionOrder:[], qmap:{}, currentIndex:0, answers:{}, startTime:null, timerIntervalId:null, finished:false};
  questionArea.style.display = "block";
  document.querySelector(".question-header").style.display = "flex";
  document.querySelector(".controls").style.display = "flex";
  document.querySelector(".footer").style.display = "flex";
  resultsEl.classList.remove("visible");
  resultsEl.innerHTML = "";
  app.style.display = "none";
  startScreen.style.display = "block";
  window.scrollTo({top:0, behavior:'smooth'});
}
resetBtn.onclick = () => { showConfirm(result => { if(result) goToStartScreen(); }); };

// ----- Navigation buttons -----
prevBtn.onclick = () => {
  if(state.currentIndex>0){
    state.currentIndex--;
    renderCurrent();
    window.scrollTo({top:0, behavior:'smooth'});
  }
};
nextBtn.onclick = () => {
  const qid=state.questionOrder[state.currentIndex];
  const q=state.qmap[qid];
  if((state.answers[qid]||[]).length!==q.requiredAnswers) return;
  if(state.currentIndex<state.questionOrder.length-1){
    state.currentIndex++;
    renderCurrent();
    window.scrollTo({top:0, behavior:'smooth'});
  } else {
    finish();
  }
};

// ----- Helpers -----
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function escapeHtml(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}
function arraysEqualAsSets(a,b){if(a.length!==b.length)return false; const A=[...a].sort(),B=[...b].sort(); return A.every((v,i)=>v===B[i]);}
function formatTimeSeconds(sec){const m=Math.floor(sec/60),s=sec%60;return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");}

// ----- State -----
let state = {
  questionOrder: [],
  qmap: {},
  currentIndex: 0,
  answers: {},
  startTime: null,
  timerIntervalId: null,
  finished: false
};

// ----- Initialize quiz -----
function init(){
  state.questionOrder = shuffle(QUIZ_DATA.questions.map(q=>q.id));
  state.qmap = {};
  QUIZ_DATA.questions.forEach(q=>{
    const order = shuffle(q.choices.map((_,i)=>i));
    const newChoices = order.map(i=>q.choices[i]);
    const newAnswer = Array.isArray(q.answer)?q.answer.map(a=>order.indexOf(a)):order.indexOf(q.answer);
    state.qmap[q.id] = {...q, choices:newChoices, answer:newAnswer};
  });
  state.answers = {};
  state.currentIndex = 0;
  state.finished = false;
  state.startTime = Date.now();
  clearInterval(state.timerIntervalId);
  state.timerIntervalId = setInterval(()=>{ 
    if(!state.finished){document.getElementById("timerInline").textContent=formatTimeSeconds(Math.floor((Date.now()-state.startTime)/1000));} 
  },500);
  qTotalEl.textContent = state.questionOrder.length;
  renderCurrent();
  window.scrollTo({top:0, behavior:'smooth'});
}

// ----- Render current question -----
function renderCurrent(){
  const qid=state.questionOrder[state.currentIndex]; 
  const q=state.qmap[qid]; 
  const chosen=new Set(state.answers[qid]||[]);
  qIndexEl.textContent=state.currentIndex+1; 
  qLeftEl.textContent=state.currentIndex+1;
  progressBar.style.width=Math.round((state.currentIndex+1)/state.questionOrder.length*100)+"%";
  nextBtn.textContent=(state.currentIndex===state.questionOrder.length-1)?"Finish":"Next →";

  let html=`<div class="qtext">${escapeHtml(q.q)}</div>`;
  html += `<div style="color:var(--muted); font-size:14px; margin-bottom:6px;">Select ${q.requiredAnswers}</div>`;
  if(q.image){html+=`<div style="text-align:center;margin-bottom:12px;"><img src="${q.image}" alt="${q.imageAlt}" style="max-width:100%;border-radius:8px;"></div>`;}
  html+=`<div class="choices">`;
  q.choices.forEach((c,i)=>{html+=`<div class="choice ${chosen.has(i)?"selected":""}" data-choice="${i}">${escapeHtml(c)}</div>`;});
  html+=`</div>`;
  questionArea.innerHTML=html;
  document.querySelectorAll(".choice").forEach(el=>el.onclick=()=>{handleSelect(qid,Number(el.dataset.choice));});
  prevBtn.disabled=state.currentIndex===0;
  nextBtn.disabled=(state.answers[qid]||[]).length!==q.requiredAnswers;
}

// ----- Handle answer selection -----
function handleSelect(qid,idx){
  const q=state.qmap[qid], req=q.requiredAnswers; 
  let selected=[...(state.answers[qid]||[])];
  if(req===1){selected=[idx];} 
  else {
    if(selected.includes(idx)){selected=selected.filter(i=>i!==idx);} 
    else if(selected.length<req){selected.push(idx);}
  }
  state.answers[qid]=selected; 
  renderCurrent();
}

// ----- Finish quiz -----
function finish(){
  state.finished=true; 
  clearInterval(state.timerIntervalId);

  let correct=0; 
  const total=state.questionOrder.length;

  const results=state.questionOrder.map(id=>{
    const q=state.qmap[id]; 
    const chosen=state.answers[id]||[]; 
    const correctAns=Array.isArray(q.answer)?q.answer:[q.answer]; 
    const ok=arraysEqualAsSets(chosen,correctAns); 
    if(ok) correct++; 
    return {q,chosen,correctAns,ok};
  });

  document.getElementById("questionArea").style.display="none";
  document.querySelector(".question-header").style.display="none";
  document.querySelector(".controls").style.display="none";
  document.querySelector(".footer").style.display="none";

  let html=`
    <div class="score">
      Your Score: ${correct} / ${total} (${Math.round(correct/total*100)}%)<br>
      Time: ${document.getElementById("timerInline").textContent}
    </div>
    
    <div style="text-align:center; margin-top:12px;">
      <button id="exitTopBtn" class="small" style="background:#dc2626; color:#fff; border:none; padding:10px 14px; border-radius:8px; cursor:pointer; font-weight:600;">
        Exit Test
      </button>
    </div>
  `;

  results.forEach((r,i)=>{
    html+=`<div class="review-item">
      <div class="qtext">${escapeHtml(r.q.q)}<span class="${r.ok?'correct-label':'wrong-label'}">${r.ok?'Correct':'Incorrect'}</span></div>`;
    if(r.q.image){
      html+=`<div style="text-align:center;margin:6px 0;"><img src="${r.q.image}" alt="${r.q.imageAlt}" style="max-width:100%;border-radius:8px;"></div>`;
    }
    r.q.choices.forEach((c,ci)=>{
      const isCorrect=r.correctAns.includes(ci), isChosen=r.chosen.includes(ci);
      let bg="transparent"; 
      if(isCorrect&&isChosen) bg="rgba(22,163,74,0.2)"; 
      else if(isCorrect&&!isChosen) bg="rgba(22,163,74,0.1)"; 
      else if(!isCorrect&&isChosen) bg="rgba(220,38,38,0.2)";
      html+=`<div class="choice" style="display:flex;gap:10px;margin-top:4px;padding:6px;border-radius:6px;background:${bg};">
        <div style="width:20px;">${String.fromCharCode(65+ci)}</div>
        <div>${escapeHtml(c)}</div>
        <div style="margin-left:auto;color:${isCorrect?"var(--correct)":isChosen?"var(--wrong)":"transparent"}">${isCorrect?"✓":isChosen?"✕":""}</div>
      </div>`;
    });
    html+=`<div style="margin-top:6px;color:var(--muted);font-weight:bold;">Explanation:</div>
      <pre class="expl">${escapeHtml(r.q.explanation)}</pre>
    </div>`;
  });

  html+=`
    <div style="text-align:center; margin-top:12px;">
      <button id="exitBottomBtn" class="small" style="background:#dc2626; color:#fff; border:none; padding:10px 14px; border-radius:8px; cursor:pointer; font-weight:600;">
        Exit Test
      </button>
    </div>
  `;

  resultsEl.innerHTML=html; 
  resultsEl.classList.add("visible");

  document.getElementById("exitTopBtn").onclick = () => { showConfirm(result => { if(result) goToStartScreen(); }); };
  document.getElementById("exitBottomBtn").onclick = () => { showConfirm(result => { if(result) goToStartScreen(); }); };

  window.scrollTo({top:0, behavior:'smooth'});
}

// ----- Keyboard shortcuts -----
// ----- Keyboard shortcuts -----
document.onkeydown = e => {

  // Modal keys
  if(confirmModal.style.display === "flex") {
    if(e.key === "Escape") {
      e.preventDefault();
      confirmNo.click();
    } else if(e.key === "Enter") {
      e.preventDefault();
      confirmYes.click();
    }
    return;
  }

  // Start screen
  if(startScreen.style.display !== "none"){ 
    if(e.key === "Enter") {
      e.preventDefault();
      startBtn.click(); 
    }
    return; 
  }

  // Escape always triggers Exit Test modal
  if(e.key === "Escape") {
    e.preventDefault();
    showConfirm(result => { if(result) goToStartScreen(); });
    return;
  }

  // Ignore other keys if quiz finished
  if(state.finished) return;

  const qid = state.questionOrder[state.currentIndex]; 
  const q = state.qmap[qid];

  // Number keys
  if(e.key >= "1" && e.key <= "8"){ 
    const idx = Number(e.key) - 1; 
    if(idx < q.choices.length) handleSelect(qid, idx);
  }

  // Navigation keys
  if(e.key === "Enter") {
    e.preventDefault();
    if((state.answers[qid]||[]).length === q.requiredAnswers) {
      nextBtn.click();
    }
  }

  // ← Previous question (ArrowLeft or Backspace)
  if(e.key === "ArrowLeft" || e.key === "Backspace") prevBtn.click();

  // → Next question
  if(e.key === "ArrowRight") nextBtn.click();
};
