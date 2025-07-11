const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Mrcet campus is know for brand of excellence in placements.",
  "Try try until you succeed!!"
];
const sentenceEl = document.getElementById("sentence");
const inputEl    = document.getElementById("input");
const barEl      = document.getElementById("progress-bar");
const resultsEl  = document.getElementById("results");
const wpmEl      = document.getElementById("wpm");
const errorsEl   = document.getElementById("errors");
const accEl      = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let startTime, currentSentence, totalErrors;
function startTest() {

  inputEl.value = "";
  barEl.style.width = "0%";
  resultsEl.classList.add("hidden");
  totalErrors = 0;
//  random sentence picking
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceEl.textContent = "";             
  sentenceEl.style.animation = "none";     

  
  void sentenceEl.offsetWidth;

  
  sentenceEl.textContent = currentSentence;
  sentenceEl.style.animation = "typewriter 3s steps(40) 1";

  startTime = null;
}
restartBtn.addEventListener("click", startTest);

inputEl.addEventListener("input", () => {
  if (!startTime) startTime = Date.now();

  const typed = inputEl.value;
  let errors = 0;
const formatted = currentSentence.split("").map((char, i) => {
if (!typed[i]) {
    return char;
    }
if (typed[i] === char) {
      return char;
    } else {
      errors++;
    return `<span class="error">${char}</span>`;
    }
  }).join("");
sentenceEl.innerHTML = formatted;
totalErrors = errors;
const percent = (typed.length / currentSentence.length) * 100;
  barEl.style.width = `${percent}%`;
if (typed.length === currentSentence.length) {
    const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
    const wpm = Math.round((typed.length / 5) / elapsedMinutes);
    const accuracy = Math.round(((typed.length - totalErrors) / typed.length) * 100);

    wpmEl.textContent      = wpm;
    errorsEl.textContent   = totalErrors;
    accEl.textContent      = accuracy;

    resultsEl.classList.remove("hidden");
  }
});
startTest();
