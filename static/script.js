function openSection(section) {
  const content = document.getElementById('section-content');
  if (!content) return;

  if (section === 'query') {
    content.innerHTML = `
      <h2>🤔 Ask Query</h2>
      <p>Type your question in local language (Malayalam/Hindi/English):</p>
      <textarea id="qbox" rows="4" style="width:95%; padding:8px;"></textarea>
      <br/><button onclick="fakeAnswer()" style="margin-top:10px;padding:10px 16px;">Ask</button>
      <div id="answer" style="margin-top:12px;"></div>
    `;
  }
  else if (section === 'upload') {
    content.innerHTML = `
      <h2>📷 Upload Crop Image</h2>
      <p>Take a clear photo of affected leaf/fruit and upload.</p>
      <input type="file" accept="image/*" style="margin-top:10px;">
    `;
  }
  else if (section === 'weather') {
    content.innerHTML = `
      <h2>⛅ Check Weather</h2>
      <p>Location-based forecast (demo):</p>
      <ul><li>Today: Sunny — 32°C</li><li>Tomorrow: Light showers — 29°C</li></ul>
    `;
  }
  else if (section === 'schemes') {
    content.innerHTML = `
      <h2>📜 Government Schemes</h2>
      <ul>
        <li>PM-Kisan Yojana</li>
        <li>Pradhan Mantri Fasal Bima Yojana</li>
        <li>Subsidy on Micro Irrigation</li>
      </ul>
    `;
  }

  content.style.opacity = 0;
  setTimeout(()=> content.style.opacity = 1, 50);
}

function fakeAnswer() {
  const q = document.getElementById('qbox').value.trim();
  const a = document.getElementById('answer');
  if (!q) { a.innerHTML = '<em style="color:#b00020">Please type a question first.</em>'; return; }
  a.innerHTML = '<strong>Analyzing…</strong>';
  setTimeout(()=> {
    a.innerHTML = `<div style="margin-top:10px; background:#fff; padding:12px; border-radius:8px;">
      <strong>Suggestion (demo):</strong> Use a copper-based fungicide as per label. Wear gloves. (This is a demo answer.)
    </div>`;
  }, 900);
}
