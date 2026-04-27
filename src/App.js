import { useState, useCallback } from "react";

const LOGO = "iVBORw0KGgoAAAANSUhEUgAABZ4AAAWeCAYAAADg6jCeAAAAUGVYSWZNTQAqAAAACAAEAQAABAAAAAEAAAAAAQEABAAAAAEAAAAAh2kABAAAAAEAAAA+ARIABAAAAAEAAAAAAAAAAAABkggABAAAAAEAAAAAAAAAALFNWc4AAAqOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Ij8iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgVGVzdC5TTkFQU0hPVCI+CiAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgeG1sbnM6QXR0cmliPSJodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvIj4KICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICA8cmRmOmxpCiAgICAgICAgICAgIEF0dHJpYjpGYklkPSI1MjUyNjU5MTQxNzk1ODAiCiAgICAgICAgICAgIEF0dHJpYjpDcmVhdGVkPSI/Pz8/LT8/LT8/IgogICAgICAgICAgICBBdHRyaWI6VG91Y2hUeXBlPSIyIgogICAgICAgICAgICBBdHRyaWI6RXh0SWQ9IjliMmQ1Mjc4LWJjNmEtNDA0YS05NGRmLTViNzdlMjU1NmMzOSIvPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgPC9BdHRyaWI6QWRzPgogICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+1cJPTwAAAAFzUkdCAK7OHOkAAAAEc0JJVAgICAh8CGSIAAAgAElEQVR4nOzdeZydZXk//ut+zixZWcIW9qBBMJJkwkgmEVGsC2BdEGVxqRLUql2U1lqwVYu11tqvYqG/aqmYCSAuiApqEUEBQUsiYBI2ZQ0gCCQGSMg+c57798cwIUGRLDPznDPzfr9eeSWTOTnnE8gk5/mc61x3BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwJZLVQcAAIDqnFFMmrR/W8serW3j1vcUPaPrxagNY4qyXJfqo1tSb0+9yGVLGlVuSPW29qIsN6SyrKW21rKIiEhFPff0FGVRtOVU1HOxrjevbynKoujNRa09t65vKVfXenKt1pNHbajXe3pG97a2rt1w003v66n6dw4AAINJ8QwAwLAyueurO4yK+qSiLPcqajExytgtUuwWKe8eOe0WKXZLkXePHLtFSmOqyplzfjSltDRyLIvIy6L/xzmWlUUsTZEeLXPL/TcveMeDVWUEAIBtpXgGAKCpdHaeM6a3aD8gpZgUKSblKA8oIk2KlA/IEZNSpAlVZxxIOfL6yOn+FHlJRLqvTLEkIt8XqbYkp3Tfzf/3zqVVZwQAgGdSPAMA0FAmTz67fcxOYyelIk2KiElFpAMi5Uk5pQMiYlKK2L3qjA0l5zU54r6ItCQi7ktPfV9P5ZJ6Ku+77fr3PFZ1RAAARh7FMwAAlers/NquPbV102pFHJJzOiRFPiQivShS7FB1tuaWeyPirhzp1pTzrWVKt0ZZ3Lr4F0vujjijrDodAADDm+IZAIAhcdDhXxk/ekOamos4pEjpkJzzIZHikBRpt6qzjTDrcuRfpZxuzSnfGjnduqG3uPX2m971QNXBAAAYPhTPAAAMmoMO/8r40T21l0VRvizlOCIiXhwptVadi83lnO+NlK7NOV9b7y2uvfWmk++pOhMAAM1N8QwAwICZMWPubtFWvCxHPiJSflnkmJ5SKqrOxdbJEQ+lHNdFyteW9eLaxTe86/aIlKvOBQBA81A8AwCwzaZMuWhc67hVR0aKV6eIV6WUplSdiUGQY3lOcVVEXBkRVy6aP+e+qiMBANDYFM8AAGy5I69u6Vh3f1dEfnVEvCpF7opILVXHYmjlnO+NiB+niCs3FOVVt13/nseqzgQAQGNRPAMA8EfN6Jo7JVK8Kke8OiJeniKNrzoTjSPnXKZICyPHjyOnK9evHnPd7befsKHqXAAAVEvxDADA75na2X1wS0u8LUecmFK8oOo8NJGc10TE93NO36jVN/zvTTe9r6fqSAAADD3FMwAAERFxSOe857e25P6y+UVV56H55YjHU47v5ohvLFow9qqIE+pVZwIAYGgongEARrApneft19pavjVFPjFFmlF1HoaxnH8XKV2cI765aP7910acUVYdCQCAwaN4BgAYYWbM+Mpe0V6clCNOTBEzq87DCJTjkUjxrVzP31h0w5zrI1KuOhIAAANL8QwAVClf9647gl51XAAAAsE0LzAAAAtE8AwAwAAbPJ8czAABTT/EMADBC5DztsHlH1Wrx3oj8hojUUnUiiIjIkW9Nkf5nQ6pfeNv173ms6jwAADywXvUMADAsvbjzgt3bW3p/KCLfFpE+lVKcUHUmeDY55/WRS8T9uYyI36ccV+YUL0fE0lQdCwCAn07xDAAwhDp7v/axPdrL/ypSvi0ivSti76rzEBHpPyKiN0f+S0qxIuf0uUR5VUT52pTq70YpPlV1NAAALkjxDAAwhDo7z9m9t7buZyOlu1KOfSLyXqrO80fkyOuKyL+PiG6JyK9POZ8XEXfniKdSjlsjx68iy9+mHO";
const TEACHER_PASSWORD = "hero2026";
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const GRADES = [
  { id:"p1", label:"الصف الأول الابتدائي",   short:"أول ابتدائي",  level:"primary", color:"#4ecdc4", eng:"Grade 1" },
  { id:"p2", label:"الصف الثاني الابتدائي",  short:"ثاني ابتدائي", level:"primary", color:"#45b7d1", eng:"Grade 2" },
  { id:"p3", label:"الصف الثالث الابتدائي",  short:"ثالث ابتدائي", level:"primary", color:"#96ceb4", eng:"Grade 3" },
  { id:"p4", label:"الصف الرابع الابتدائي",  short:"رابع ابتدائي", level:"primary", color:"#6bcb77", eng:"Grade 4" },
  { id:"p5", label:"الصف الخامس الابتدائي", short:"خامس ابتدائي",  level:"primary", color:"#4d9de0", eng:"Grade 5" },
  { id:"p6", label:"الصف السادس الابتدائي", short:"سادس ابتدائي",  level:"primary", color:"#88d8b0", eng:"Grade 6" },
  { id:"m1", label:"الصف الأول الإعدادي",    short:"أول إعدادي",   level:"middle",  color:"#e15554", eng:"Grade 7" },
  { id:"m2", label:"الصف الثاني الإعدادي",   short:"ثاني إعدادي",  level:"middle",  color:"#e1bc29", eng:"Grade 8" },
  { id:"m3", label:"الصف الثالث الإعدادي",   short:"ثالث إعدادي",  level:"middle",  color:"#f7971e", eng:"Grade 9" },
];

const PDFJS_CDN    = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
const PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const CSS = "\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { font-family: Cairo, sans-serif; background: #07080f; color: #e2e8f0; }\n  ::-webkit-scrollbar { width: 5px; }\n  ::-webkit-scrollbar-track { background: #080c14; }\n  ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }\n .fade-in { animation: fi.35s ease both; }\n  @keyframes fi { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }\n .spin { display:inline-block; animation: sp 1.2s linear infinite; }\n  @keyframes sp { to { transform: rotate(360deg); } }\n .btn { border:none; border-radius:10px; font-family:Cairo,sans-serif; font-weight:700; cursor:pointer; transition:all.2s; display:inline-flex; align-items:center; gap:6px; font-size:14px; }\n .btn:active { transform: scale(.97); }\n .card { background:#0f172a; border:1px solid #1e293b; border-radius:14px; }\n .q-card { padding:16px; border-radius:12px; cursor:pointer; transition:all.2s; border:1px solid #1e293b; margin-bottom:10px; }\n .q-card:hover { border-color: #334155; }\n .toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:#1e293b; border:1px solid #34d399; color:#34d399; padding:12px 20px; border-radius:10px; font-size:13px; font-weight:700; z-index:999; white-space:nowrap; }\n  input[type=number], input[type=text], input[type=password] { background:#0d1117; border:1px solid #30363d; border-radius:10px; color:#e6edf3; font-family:Cairo,sans-serif; font-size:16px; padding:12px 16px; width:100%; outline:none; transition:border.2s; }\n  input:focus { border-color: #f7971e; }\n";

async function loadPdfJs() {
  if (window.pdfjsLib) return window.pdfjsLib;
  await new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = PDFJS_CDN; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
  return window.pdfjsLib;
}

async function renderPdfPage(file, pageNum) {
  const lib = await loadPdfJs();
  const pdf = await lib.getDocument({ data: await file.arrayBuffer() }).promise;
  if (pageNum < 1 |

| pageNum > pdf.numPages) return null;
  const page = await pdf.getPage(pageNum);
  const vp = page.getViewport({ scale: 2 });
  const canvas = document.createElement("canvas");
  canvas.width = vp.width; canvas.height = vp.height;
  await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
  return { dataUrl: canvas.toDataURL("image/png"), totalPages: pdf.numPages };
}

async function extractRefText(file, aroundPage) {
  const lib = await loadPdfJs();
  const pdf = await lib.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = [aroundPage - 1, aroundPage, aroundPage + 1].filter(p => p >= 1 && p <= pdf.numPages);
  let text = "";
  for (const p of pages) {
    const page = await pdf.getPage(p);
    const tc = await page.getTextContent();
    text += tc.items.map(i => i.str).join(" ") + "\n";
    if (text.length > 5000) break;
  }
  return text.substring(0, 5000);
}

// الدالة المحدثة مع خيار إرجاع JSON إجباري
async function callGemini(prompt, apiKey, imageBase64, isJson = false) {
  const parts =;
  if (imageBase64) {
    parts.push({ inline_data: { mime_type: "image/png", data: imageBase64 } });
  }
  parts.push({ text: prompt });
  
  const generationConfig = { maxOutputTokens: 1000, temperature: 0.3 };
  if (isJson) {
    generationConfig.responseMimeType = "application/json";
  }

  const res = await fetch(GEMINI_URL + "?key=" + apiKey, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig
    })
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.candidates.content.parts.text |

| "";
}

export default function App() {
  const [mode, setMode] = useState("student");
  const [files, setFiles] = useState({});
  const [apiKey, setApiKey] = useState(localStorage.getItem("gemini_key") |

| "AIzaSyCn2crAaz0tmW3Auf7qA3rxwXfUQqbxSnY");
  const = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");

  const handleTeacherLogin = () => {
    if (pwInput === TEACHER_PASSWORD) {
      setTeacherAuth(true);
      setMode("teacher");
      setPwError("");
    } else {
      setPwError("كلمة السر غير صحيحة");
    }
  };

  const saveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem("gemini_key", key);
  };

  return (
    <div dir="rtl" style={{ minHeight:"100vh", background:"#07080f", fontFamily:"Cairo,sans-serif", color:"#e2e8f0", display:"flex", flexDirection:"column" }}>
      <style>{CSS}</style>
      <Header mode={mode} setMode={setMode} />
      <div style={{ flex:1 }}>
        {mode === "teacher"? (
          teacherAuth
           ? <TeacherPanel files={files} setFiles={setFiles} apiKey={apiKey} saveApiKey={saveApiKey} />
            : <TeacherLogin pwInput={pwInput} setPwInput={setPwInput} pwError={pwError} onLogin={handleTeacherLogin} />
        ) : (
          <StudentApp files={files} apiKey={apiKey} />
        )}
      </div>
      <Footer />
    </div>
  );
}

function Header({ mode, setMode }) {
  return (
    <header style={{ background:"rgba(10,13,25,.97)", borderBottom:"1px solid rgba(255,215,0,.2)", padding:"0 20px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:100, boxShadow:"0 4px 24px rgba(0,0,0,.5)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <img src={"data:image/png;base64," + LOGO} alt="ALABTAL" style={{ height:46, width:46, objectFit:"contain" }} />
        <div>
          <div style={{ fontWeight:900, fontSize:15, background:"linear-gradient(135deg,#ffd200,#f7971e)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>ALABTAL Book Series</div>
          <div style={{ fontSize:10, color:"#64748b" }}>English Language AI</div>
        </div>
      </div>
      <div style={{ display:"flex", gap:8 }}>
        {[["student","الطالب"],["teacher","المعلم"]].map(([v, lb]) => (
          <button key={v} className="btn" onClick={() => setMode(v)}
            style={{ padding:"7px 16px", background:mode===v?"linear-gradient(135deg,#f7971e,#ffd200)":"rgba(255,255,255,.06)", color:mode===v?"#1c1917":"#94a3b8", border:"none" }}>
            {v === "student"? "🎓" : "🏫"} {lb}
          </button>
        ))}
      </div>
    </header>
  );
}

function TeacherLogin({ pwInput, setPwInput, pwError, onLogin }) {
  return (
    <div style={{ maxWidth:400, margin:"80px auto", padding:"0 20px" }} className="fade-in">
      <div className="card" style={{ padding:36, textAlign:"center" }}>
        <div style={{ fontSize:52, marginBottom:16 }}>🔐</div>
        <div style={{ fontSize:20, fontWeight:900, marginBottom:6, color:"#f1f5f9" }}>لوحة المعلم</div>
        <div style={{ fontSize:13, color:"#64748b", marginBottom:24 }}>هذه اللوحة خاصة بالمعلم فقط</div>
        <input type="password" placeholder="أدخل كلمة السر"
          value={pwInput} onChange={e => setPwInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onLogin()}
          style={{ marginBottom:12, textAlign:"center", fontSize:18 }} />
        {pwError && <div style={{ color:"#f87171", fontSize:13, marginBottom:12 }}>{pwError}</div>}
        <button className="btn" onClick={onLogin}
          style={{ width:"100%", padding:"13px", fontSize:15, justifyContent:"center", background:"linear-gradient(135deg,#f7971e,#ffd200)", color:"#1c1917" }}>
          دخول
        </button>
      </div>
    </div>
  );
}

function TeacherPanel({ files, setFiles, apiKey, saveApiKey }) {
  const = useState(null);
  const = useState(1);
  const = useState("");
  const [keyInput, setKeyInput] = useState(apiKey);

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const setFile = (gid, term, type, f) => {
    setFiles(p => ({
     ...p,
      [gid]: {...p[gid], ["term" + term]: {...(p[gid]? p[gid]["term" + term] : {}), [type]: f } }
    }));
    showToast("تم رفع " + f.name + " بنجاح");
  };

  const total = GRADES.reduce((acc, g) =>
    acc +.[1, 2]reduce((a, t) =>
      a + (files[g.id] && files[g.id]["term"+t] && files[g.id]["term"+t].book? 1 : 0)
        + (files[g.id] && files[g.id]["term"+t] && files[g.id]["term"+t].ref ? 1 : 0), 0), 0);

  return (
    <div style={{ maxWidth:960, margin:"0 auto", padding:"24px 20px" }}>
      {toast && <div className="toast fade-in">{toast}</div>}
      <div className="card" style={{ padding:20, marginBottom:20, border:"1px solid rgba(247,151,30,.3)" }}>
        <div style={{ fontWeight:700, marginBottom:8, color:"#f7971e" }}>Gemini API Key</div>
        <div style={{ fontSize:12, color:"#64748b", marginBottom:10 }}>
          احصل على مفتاحك المجاني من{" "}
          <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color:"#38bdf8" }}>
            Google AI Studio
          </a>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          <input type="password" placeholder="AIzaSy..." value={keyInput} onChange={e => setKeyInput(e.target.value)} style={{ flex:1 }} />
          <button className="btn" onClick={() => { saveApiKey(keyInput); showToast("تم حفظ المفتاح!"); }}
            style={{ padding:"10px 18px", background:"linear-gradient(135deg,#f7971e,#ffd200)", color:"#1c1917", whiteSpace:"nowrap" }}>
            حفظ
          </button>
        </div>
        {apiKey && <div style={{ fontSize:12, color:"#34d399", marginTop:8 }}>المفتاح محفوظ ويعمل</div>}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:20 }}>
        {, ["ملفات مرفوعة", total],].map(([lb, v]) => (
          <div key={lb} className="card" style={{ padding:16, textAlign:"center" }}>
            <div style={{ fontSize:20, fontWeight:900, color:"#f7971e" }}>{v}</div>
            <div style={{ fontSize:11, color:"#64748b", marginTop:2 }}>{lb}</div>
          </div>
        ))}
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"240px 1fr", gap:16 }}>
        <div className="card" style={{ padding:14 }}>
          <div style={{ fontSize:11, fontWeight:700, color:"#64748b", marginBottom:10 }}>اختر الصف</div>
          {["primary","middle"].map(lv => (
            <div key={lv} style={{ marginBottom:12 }}>
              <div style={{ fontSize:10, fontWeight:700, color:lv==="primary"?"#34d399":"#fb923c", marginBottom:6 }}>
                {lv === "primary"? "ابتدائي" : "إعدادي"}
              </div>
              {GRADES.filter(g => g.level === lv).map(g => {
                const up =.[1, 2]reduce((a,t) =>
                  a + (files[g.id] && files[g.id]["term"+t] && files[g.id]["term"+t].book? 1 : 0)
                    + (files[g.id] && files[g.id]["term"+t] && files[g.id]["term"+t].ref ? 1 : 0), 0);
                return (
                  <div key={g.id} onClick={() => setSelGrade(g)}
                    style={{ padding:"9px 11px", borderRadius:9, cursor:"pointer", marginBottom:3, transition:"all.2s",
                      background: selGrade && selGrade.id === g.id? g.color + "20" : "transparent",
                      border: selGrade && selGrade.id === g.id? "1px solid " + g.color + "60" : "1px solid transparent" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ fontSize:12, fontWeight:600 }}>{g.short}</span>
                      <span style={{ fontSize:10, fontWeight:700, padding:"2px 6px", borderRadius:20,
                        background: up === 4? "rgba(52,211,153,.15)" : "rgba(100,116,139,.1)",
                        color: up === 4? "#34d399" : "#64748b" }}>{up}/4</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {selGrade? (
          <div className="card fade-in" style={{ padding:22 }}>
            <div style={{ fontWeight:900, fontSize:16, marginBottom:16 }}>{selGrade.label}</div>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              {.[1, 2]map(t => (
                <button key={t} onClick={() => setSelTerm(t)}
                  style={{ padding:"7px 18px", borderRadius:8, fontSize:13, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"Cairo,sans-serif",
                    background: selTerm === t? "linear-gradient(135deg,#f7971e,#ffd200)" : "rgba(255,255,255,.06)",
                    color: selTerm === t? "#1c1917" : "#94a3b8" }}>
                  {"الترم " + (t === 1? "الأول" : "الثاني")}
                </button>
              ))}
            </div>
            {[
              { type:"book", title:"ملف التقييمات", desc:"كتاب الأسئلة للطالب" },
              { type:"ref",  title:"مرجع الشرح",    desc:"مرجع الذكاء الاصطناعي" }
            ].map(({ type, title, desc }) => {
              const f = files[selGrade.id] && files[selGrade.id] && files[selGrade.id][type];
              return (
                <div key={type} className="card" style={{ padding:16, marginBottom:10, border:"1px solid " + (f? "#34d39950" : "#1e293b") }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontWeight:700, fontSize:14 }}>{title}</div>
                      <div style={{ fontSize:11, color:"#64748b" }}>{desc}</div>
                      {f && <div style={{ fontSize:11, color:"#34d399", marginTop:4 }}>{f.name}</div>}
                    </div>
                    <label style={{ padding:"8px 14px", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer",
                      background: f? "rgba(255,255,255,.06)" : "linear-gradient(135deg,#0ea5e9,#6366f1)",
                      color: f? "#94a3b8" : "#fff", border: f? "1px solid #1e293b" : "none" }}>
                      {f? "تغيير" : "رفع PDF"}
                      <input type="file" accept=".pdf" style={{ display:"none" }}
                        onChange={e => e.target.files && setFile(selGrade.id, selTerm, type, e.target.files)} />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card" style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:40, textAlign:"center", color:"#475569" }}>
            <div>
              <div style={{ fontSize:48, marginBottom:12 }}>👈</div>
              <div style={{ fontWeight:700 }}>اختر صفاً من القائمة</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StudentApp({ files, apiKey }) {
  const = useState("term");
  const = useState(null);
  const [grade, setGrade] = useState(null);
  const [pageNum, setPageNum] = useState("");
  const [pageImg, setPageImg] = useState(null);
  const = useState(null);
  const [pageLoad, setPageLoad] = useState(false);
  const [questions, setQuestions] = useState();
  const [qLoad, setQLoad] = useState(false);
  const [activeQ, setActiveQ] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(null);
  const = useState(null);

  const tKey = "term" + term;
  const bookFile = grade && files[grade.id] && files[grade.id][tKey]? files[grade.id][tKey].book : null;
  const refFile  = grade && files[grade.id] && files[grade.id][tKey]? files[grade.id][tKey].ref  : null;

  const reset = () => {
    setStep("term"); setTerm(null); setGrade(null); setPageNum(""); setPageImg(null);
    setQuestions(); setActiveQ(null); setAnswers({}); setOpenBox(null); setLoading(null);
  };

  const loadPage = async () => {
    if (!bookFile ||!pageNum) return;
    setPageLoad(true); setQuestions(); setActiveQ(null); setAnswers({}); setOpenBox(null);
    try {
      const result = await renderPdfPage(bookFile, parseInt(pageNum));
      if (!result) { alert("رقم الصفحة غير موجود!"); setPageLoad(false); return; }
      setPageImg(result.dataUrl); setTotalPgs(result.totalPages); setStep("viewer");
      extractQuestions(parseInt(pageNum));
    } catch(e) { alert("خطأ في تحميل الصفحة"); }
    setPageLoad(false);
  };

  // الدالة المحدثة مع آلية التنظيف
  const extractQuestions = async (pn) => {
    if (!bookFile) return;
    setQLoad(true);
    try {
      if (!apiKey) {
        setQuestions([{ id:1, text:"يرجى اضافة Gemini API Key في لوحة المعلم" }]);
        setQLoad(false); return;
      }
      const result = await renderPdfPage(bookFile, pn);
      if (!result) { setQuestions(); setQLoad(false); return; }
      const imgBase64 = result.dataUrl.replace("data:image/png;base64,", "");
      const prompt = "This is a page from an Egyptian school English language textbook (evaluation/exercise book). Look at the image carefully and extract ALL questions, exercises, and fill-in-the-blank items. Include question numbers if visible. Return ONLY a valid JSON array: [{\"id\":1,\"text\":\"question text here\"},{\"id\":2,\"text\":\"...\"}]. No markdown, no explanation, ONLY the JSON array.";
      
      const raw = await callGemini(prompt, apiKey, imgBase64, true);
      
      let jsonStr = raw.trim();
      const fenceRegex = /^```(?:json)?\s*\n?(.*?)\n?\s*```$/s;
      const match = jsonStr.match(fenceRegex);
      if (match && match[1]) {
        jsonStr = match.[1]trim();
      }

      try {
        const parsed = JSON.parse(jsonStr);
        setQuestions(Array.isArray(parsed)? parsed :);
      } catch (e) {
        const jsonMatch = jsonStr.match(/\*\}\s*\]/);
        if (jsonMatch) {
          const parsedFallback = JSON.parse(jsonMatch);
          setQuestions(Array.isArray(parsedFallback)? parsedFallback :);
        } else {
          setQuestions();
        }
      }
    } catch(e) { 
      console.error(e); 
      setQuestions(); 
    }
    setQLoad(false);
  };

  const getResponse = useCallback(async (qIdx, type) => {
    const q = questions[qIdx];
    if (!q) return;
    const key = qIdx + "-" + type;
    if (answers[key]) { setOpenBox(prev => prev === key? null : key); return; }
    if (loading === key) return;
    if (!apiKey) { alert("يرجى اضافة Gemini API Key في لوحة المعلم"); return; }
    setLoading(key);
    try {
      let refText = "";
      if (refFile) { try { refText = await extractRefText(refFile, parseInt(pageNum)); } catch(e) {} }
      const gradeInfo = "Student grade: " + (grade? grade.label : "") + " (" + (grade? grade.eng : "") + ")";
      const refSection = refText? "\n\nReference book:\n" + refText : "";
      let prompt = "";
      if (type === "answer") {
        prompt = "You are an Egyptian English teacher.\n" + gradeInfo + "\n\nQuestion: " + q.text + refSection + "\n\nGive ONLY the correct answer in Arabic (1-2 sentences), keeping English words in English.";
      } else {
        prompt = "You are an expert Egyptian English teacher.\n" + gradeInfo + "\n\nQuestion: " + q.text + refSection + "\n\nExplain in Arabic:\n1. الاجابة الصحيحة بالانجليزي\n2. السبب والقاعدة النحوية\n3. مثال مفيد\n\nKeep English terms in English.";
      }
      const result = await callGemini(prompt, apiKey);
      setAnswers(prev => { const n = Object.assign({}, prev); n[key] = result; return n; });
      setOpenBox(key);
    } catch(e) {
      setAnswers(prev => { const n = Object.assign({}, prev); n[key] = "حدث خطا. تحقق من API Key."; return n; });
      setOpenBox(key);
    }
    setLoading(null);
  }, [questions, answers, loading, refFile, grade, pageNum, apiKey]);

  if (step === "term") return (
    <div style={{ maxWidth:500, margin:"0 auto", padding:"50px 20px" }} className="fade-in">
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <img src={"data:image/png;base64," + LOGO} alt="ALABTAL" style={{ height:90, width:90, objectFit:"contain", marginBottom:14 }} />
        <div style={{ fontSize:11, letterSpacing:3, color:"#f7971e", fontWeight:700, marginBottom:8 }}>ALABTAL BOOK SERIES</div>
        <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8, color:"#f1f5f9" }}>English Language AI</h1>
        <p style={{ color:"#64748b", fontSize:14, lineHeight:1.8 }}>حل اسئلة اللغة الانجليزية بمساعدة الذكاء الاصطناعي</p>
      </div>
      {!apiKey && (
        <div style={{ background:"rgba(239,68,68,.1)", border:"1px solid rgba(239,68,68,.3)", borderRadius:12, padding:"12px 16px", marginBottom:20, color:"#f87171", fontSize:13, textAlign:"center" }}>
          لم يتم اعداد الذكاء الاصطناعي بعد. تواصل مع المعلم.
        </div>
      )}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        {.[1, 2]map(t => (
          <button key={t} onClick={() => { setTerm(t); setStep("grade"); }}
            style={{ padding:"30px 16px", borderRadius:16, border:"none", cursor:"pointer", fontFamily:"Cairo,sans-serif",
              flexDirection:"column", gap:10, display:"flex", alignItems:"center", justifyContent:"center",
              background: t === 1? "linear-gradient(145deg,#1e3a5f,#0f2942)" : "linear-gradient(145deg,#1a3a2a,#0d2018)" }}>
            <span style={{ fontSize:34 }}>{t === 1? "📘" : "📗"}</span>
            <span style={{ fontSize:16, fontWeight:900, color:"#f1f5f9" }}>{"الترم " + (t === 1? "الاول" : "الثاني")}</span>
            <span style={{ fontSize:11, color:"#64748b" }}>{"Term " + t}</span>
          </button>
        ))}
      </div>
    </div>
  );

  if (step === "grade") return (
    <div style={{ maxWidth:620, margin:"0 auto", padding:"28px 20px" }} className="fade-in">
      <BackHeader onBack={() => setStep("term")} sub={"الترم " + (term === 1? "الاول" : "الثاني")} title="اختر الصف الدراسي" />
      {["primary","middle"].map(lv => (
        <div key={lv} style={{ marginBottom:18 }}>
          <div style={{ fontSize:12, fontWeight:700, color: lv === "primary"? "#34d399" : "#fb923c", marginBottom:8 }}>
            {lv === "primary"? "المرحلة الابتدائية" : "المرحلة الاعدادية"}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {GRADES.filter(g => g.level === lv).map(g => {
              const tK = "term" + term;
              const ok =!!(files[g.id] && files[g.id][tK] && files[g.id][tK].book);
              return (
                <div key={g.id} onClick={() => { setGrade(g); setStep("search"); }}
                  style={{ padding:"14px 16px", borderRadius:12, cursor:"pointer", transition:"all.2s",
                    border: "1.5px solid " + (ok? g.color + "50" : "#1e293b"),
                    background: g.color + "08" }}>
                  <div style={{ fontWeight:700, fontSize:14, marginBottom:3 }}>{g.short}</div>
                  <div style={{ fontSize:11, color:"#64748b", marginBottom:5 }}>{g.eng}</div>
                  <div style={{ fontSize:11, fontWeight:700, color: ok? "#34d399" : "#ef4444" }}>
                    {ok? "متوفر" : "لم يرفع بعد"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  if (step === "search") return (
    <div style={{ maxWidth:440, margin:"0 auto", padding:"40px 20px" }} className="fade-in">
      <BackHeader onBack={() => setStep("grade")} sub={grade? grade.short : ""} title="ابحث عن صفحة" />
      {!bookFile && (
        <div style={{ background:"rgba(239,68,68,.1)", border:"1px solid rgba(239,68,68,.3)", borderRadius:12, padding:"12px 16px", marginBottom:16, color:"#f87171", fontSize:13 }}>
          لم يتم رفع ملف التقييمات لهذا الصف بعد.
        </div>
      )}
      <div className="card" style={{ padding:26 }}>
        <div style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ fontSize:42, marginBottom:8 }}>📖</div>
          <div style={{ fontWeight:700, fontSize:15, color:"#f1f5f9" }}>رقم الصفحة</div>
          <div style={{ fontSize:13, color:"#64748b", marginTop:4 }}>اكتب رقم الصفحة من كتاب التقييمات</div>
        </div>
        <input type="number" min="1" placeholder="e.g. 45" value={pageNum}
          onChange={e => setPageNum(e.target.value)}
          onKeyDown={e => e.key === "Enter" && bookFile && pageNum && loadPage()}
          style={{ textAlign:"center", fontSize:22, fontWeight:700 }} />
        <button className="btn" onClick={loadPage}
          disabled={!bookFile ||!pageNum |

| pageLoad}
          style={{ width:"100%", marginTop:12, padding:"13px", fontSize:15, justifyContent:"center",
            background: (!bookFile ||!pageNum |

| pageLoad)? "#1e293b" : "linear-gradient(135deg,#f7971e,#ffd200)",
            color: (!bookFile ||!pageNum |

| pageLoad)? "#475569" : "#1c1917",
            cursor: (!bookFile ||!pageNum |

| pageLoad)? "not-allowed" : "pointer" }}>
          {pageLoad? "جاري التحميل..." : "عرض الصفحة"}
        </button>
        {totalPgs && <div style={{ textAlign:"center", fontSize:11, color:"#475569", marginTop:10 }}>الكتاب يحتوي على {totalPgs} صفحة</div>}
      </div>
    </div>
  );

  if (step === "viewer") return (
    <div style={{ maxWidth:1100, margin:"0 auto", padding:"20px" }} className="fade-in">
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16, flexWrap:"wrap" }}>
        <button className="btn" style={{ background:"rgba(255,255,255,.06)", color:"#94a3b8", border:"1px solid #1e293b", padding:"8px 14px", fontSize:13 }}
          onClick={() => setStep("search")}>صفحة اخرى</button>
        <div style={{ flex:1 }}>
          <div style={{ color:"#64748b", fontSize:12 }}>{grade? grade.short : ""} - صفحة {pageNum}</div>
          <div style={{ fontWeight:700, fontSize:15, color:"#f1f5f9" }}>
            {qLoad? "الذكاء الاصطناعي يستخرج الاسئلة..."
              : questions.length > 0? "تم استخراج " + questions.length + " سؤال - اضغط على اي سؤال"
              : "لم يستخرج اي سؤال"}
          </div>
        </div>
        <button className="btn" style={{ background:"rgba(255,255,255,.06)", color:"#94a3b8", border:"1px solid #1e293b", padding:"8px 14px", fontSize:13 }}
          onClick={reset}>البداية</button>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 400px", gap:16, alignItems:"start" }}>
        <div className="card" style={{ padding:10, position:"sticky", top:80 }}>
          {pageImg
           ? <img src={pageImg} alt="page" style={{ width:"100%", borderRadius:8, display:"block" }} />
            : <div style={{ height:400, display:"flex", alignItems:"center", justifyContent:"center", color:"#475569" }}>جاري التحميل...</div>}
        </div>

        <div>
          {qLoad && (
            <div className="card" style={{ padding:22, textAlign:"center", color:"#64748b" }}>
              <div style={{ fontSize:30, marginBottom:8 }} className="spin">🤖</div>
              <div>جاري استخراج الاسئلة...</div>
            </div>
          )}
          {!qLoad && questions.length === 0 && (
            <div className="card" style={{ padding:22, textAlign:"center", color:"#64748b" }}>
              <div style={{ fontSize:30, marginBottom:8 }}>📭</div>
              <div>لا توجد اسئلة في هذه الصفحة</div>
            </div>
          )}
          {questions.map((q, idx) => {
            const isActive = activeQ === idx;
            const aKey = idx + "-answer";
            const eKey = idx + "-explain";
            return (
              <div key={idx} className="q-card"
                style={{ borderColor: isActive? "#f7971e40" : "#1e293b", background: isActive? "#1a1200" : "#0f172a" }}
                onClick={() => setActiveQ(isActive? null : idx)}>
                <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ background:"rgba(245,158,11,.15)", color:"#f59e0b", fontWeight:900, fontSize:11, padding:"3px 8px", borderRadius:20, flexShrink:0 }}>
                    {"Q" + q.id}
                  </span>
                  <span style={{ fontSize:13, lineHeight:1.8, color:"#e2e8f0", fontWeight:600, direction:"ltr", textAlign:"left", display:"block", flex:1 }}>
                    {q.text}
                  </span>
                </div>
                {isActive && (
                  <div style={{ display:"flex", gap:8, marginTop:10 }} onClick={e => e.stopPropagation()}>
                    <button onClick={() => getResponse(idx, "answer")}
                      style={{ padding:"7px 14px", borderRadius:20, fontSize:12, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"Cairo,sans-serif",
                        background: openBox === aKey? "linear-gradient(135deg,#f59e0b,#fbbf24)" : "rgba(255,255,255,.07)",
                        color: openBox === aKey? "#1c1917" : "#94a3b8",
                        opacity: loading === aKey? 0.5 : 1 }}>
                      {loading === aKey? "..." : "الاجابة"}
                    </button>
                    <button onClick={() => getResponse(idx, "explain")}
                      style={{ padding:"7px 14px", borderRadius:20, fontSize:12, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"Cairo,sans-serif",
                        background: openBox === eKey? "linear-gradient(135deg,#0ea5e9,#6366f1)" : "rgba(255,255,255,.07)",
                        color: openBox === eKey? "#fff" : "#94a3b8",
                        opacity: loading === eKey? 0.5 : 1 }}>
                      {loading === eKey? "..." : "الشرح"}
                    </button>
                  </div>
                )}
                {openBox === aKey && answers[aKey] && (
                  <div style={{ marginTop:10, borderRadius:10, padding:12, border:"1px solid rgba(245,158,11,.35)", background:"rgba(245,158,11,.07)" }}
                    onClick={e => e.stopPropagation()}>
                    <div style={{ fontSize:11, color:"#f59e0b", fontWeight:700, marginBottom:6 }}>الاجابة الصحيحة</div>
                    <div style={{ fontSize:13, lineHeight:1.8, color:"#e2e8f0" }}>{answers[aKey]}</div>
                  </div>
                )}
                {openBox === eKey && answers[eKey] && (
                  <div style={{ marginTop:10, borderRadius:10, padding:12, border:"1px solid rgba(14,165,233,.35)", background:"rgba(14,165,233,.07)" }}
                    onClick={e => e.stopPropagation()}>
                    <div style={{ fontSize:11, color:"#38bdf8", fontWeight:700, marginBottom:6 }}>الشرح والتحليل</div>
                    <div style={{ fontSize:13, lineHeight:1.8, color:"#e2e8f0", whiteSpace:"pre-wrap" }}>{answers[eKey]}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return null;
}

function BackHeader({ onBack, sub, title }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:22 }}>
      <button className="btn" style={{ background:"rgba(255,255,255,.06)", color:"#94a3b8", border:"1px solid #1e293b", padding:"8px 14px", fontSize:13 }}
        onClick={onBack}>رجوع</button>
      <div>
        <div style={{ color:"#64748b", fontSize:12 }}>{sub}</div>
        <div style={{ fontWeight:900, fontSize:18, color:"#f1f5f9" }}>{title}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background:"rgba(10,13,25,.97)", borderTop:"1px solid rgba(255,215,0,.15)", padding:"14px 24px", textAlign:"center" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
        <img src={"data:image/png;base64," + LOGO} alt="ALABTAL" style={{ height:28, width:28, objectFit:"contain", opacity:.85 }} />
        <div>
          <div style={{ fontSize:11, color:"#64748b" }}>ALABTAL Book Series</div>
          <div style={{ fontSize:13, fontWeight:700, background:"linear-gradient(135deg,#f7971e,#ffd200)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>By Walid Elhagary</div>
        </div>
      </div>
    </footer>
  );
}
