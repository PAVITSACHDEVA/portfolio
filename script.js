"use strict";

const fallbackProjects = [
  {
    title: "Lumix Core",
    folder: "lumix-core",
    image: "assets/images/lumix.svg",
    description: "A polished AI platform landing page with a responsive hero, feature grid, and interactive dashboard preview.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    demo: "codes/lumix-core/index.html"
  },
  {
    title: "Study Sprint",
    folder: "study-sprint",
    image: "assets/images/study-sprint.svg",
    description: "A productivity timer for students with session tracking, subject filters, and clean focus-mode controls.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML", "CSS", "JavaScript", "School"],
    demo: "codes/study-sprint/index.html"
  },
  {
    title: "Python Marks Analyzer",
    folder: "marks-analyzer",
    image: "assets/images/marks-analyzer.svg",
    description: "A Python utility that analyzes class marks, calculates grades, and prints helpful performance summaries.",
    technologies: ["Python"],
    tags: ["Python", "School"],
    demo: "codes/marks-analyzer/main.py"
  }
];

const codeManifest = {
  "lumix-core": {
    name: "Lumix Core",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumix Core</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="shell">
    <section class="hero">
      <p class="badge">Lumix Core AI</p>
      <h1>Plan faster with a calm AI workspace.</h1>
      <p>Organize prompts, notes, and smart actions in one focused dashboard.</p>
      <button id="action">Generate Insight</button>
    </section>
    <section class="panel">
      <h2>Live Signals</h2>
      <div class="meter"><span></span></div>
      <p id="insight">Ready to turn ideas into a plan.</p>
    </section>
  </main>
  <script src="script.js"><\/script>
</body>
</html>`,
      "style.css": `* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Inter, Arial, sans-serif; color: white; background: radial-gradient(circle at top left, #2563eb, #111827 52%, #020617); }
.shell { width: min(960px, 92vw); display: grid; grid-template-columns: 1.3fr .7fr; gap: 24px; }
.hero, .panel { padding: 36px; border: 1px solid rgba(255,255,255,.18); border-radius: 28px; background: rgba(15,23,42,.72); box-shadow: 0 30px 80px rgba(0,0,0,.35); }
.badge { color: #93c5fd; font-weight: 800; text-transform: uppercase; letter-spacing: .12em; }
h1 { font-size: clamp(2.4rem, 7vw, 5.4rem); line-height: 1; margin: 0 0 20px; }
p { color: #dbeafe; font-size: 1.05rem; }
button { border: 0; padding: 14px 20px; border-radius: 14px; color: white; background: linear-gradient(135deg, #38bdf8, #7c3aed); font-weight: 800; cursor: pointer; }
.meter { height: 14px; overflow: hidden; border-radius: 999px; background: #1f2937; }
.meter span { display: block; width: 72%; height: 100%; background: #38bdf8; }
@media (max-width: 760px) { .shell { grid-template-columns: 1fr; } }`,
      "script.js": `const insight = document.querySelector("#insight");
const ideas = [
  "Your top task is ready for a focused sprint.",
  "Three project ideas can become one polished prototype.",
  "A simple plan beats a crowded dashboard."
];
document.querySelector("#action").addEventListener("click", () => {
  insight.textContent = ideas[Math.floor(Math.random() * ideas.length)];
});`
    }
  },
  "study-sprint": {
    name: "Study Sprint",
    files: {
      "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study Sprint</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="timer-app">
    <h1>Study Sprint</h1>
    <p class="subject">Mathematics focus session</p>
    <div class="timer" id="timer">25:00</div>
    <button id="start">Start Focus</button>
  </main>
  <script src="script.js"><\/script>
</body>
</html>`,
      "style.css": `body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Inter, Arial, sans-serif; background: #ecfeff; color: #0f172a; }
.timer-app { width: min(430px, 92vw); text-align: center; padding: 42px; border-radius: 28px; background: white; box-shadow: 0 28px 80px rgba(15,23,42,.16); }
h1 { margin: 0; font-size: 3rem; }
.subject { color: #475569; }
.timer { margin: 28px auto; width: 220px; height: 220px; border-radius: 50%; display: grid; place-items: center; font-size: 3rem; font-weight: 800; border: 18px solid #22c55e; }
button { border: 0; border-radius: 14px; padding: 14px 22px; color: white; background: #0f172a; font-weight: 800; cursor: pointer; }`,
      "script.js": `let seconds = 25 * 60;
let running = false;
const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
function paint() {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  timer.textContent = \`\${min}:\${sec}\`;
}
start.addEventListener("click", () => {
  if (running) return;
  running = true;
  start.textContent = "Focus Running";
  setInterval(() => {
    if (seconds > 0) seconds -= 1;
    paint();
  }, 1000);
});`
    }
  },
  "marks-analyzer": {
    name: "Python Marks Analyzer",
    files: {
      "main.py": `students = {
    "Aarav": [91, 84, 88],
    "Diya": [76, 82, 79],
    "Pavit": [95, 92, 97],
    "Riya": [68, 74, 71],
}

def grade(average):
    if average >= 90:
        return "A"
    if average >= 75:
        return "B"
    if average >= 60:
        return "C"
    return "Needs practice"

for name, marks in students.items():
    average = sum(marks) / len(marks)
    print(f"{name}: {average:.1f}% - {grade(average)}")

topper = max(students, key=lambda student: sum(students[student]))
print(f"Top performer: {topper}")`
    }
  }
};

let projects = [];
let learningCodes = [];
let currentFilter = "All";
let currentLearningFilter = "All";
let activeFolder = "lumix-core";
let activeFile = "index.html";
let currentCode = "";
let activeFiles = {};
let activeProjectName = "Lumix Core";
let activeRootPath = "codes";
let activeRootLabel = "codes";
const fallbackLearningFolders = ["HTML Basics", "CSS Flexbox", "JavaScript Arrays", "Python Loops"];
const fallbackLearningCodes = [
  {
    title: "HTML Basics",
    description: "Practice pages for headings, links, lists, forms, and semantic HTML structure.",
    language: "HTML",
    difficulty: "Beginner",
    category: "Learning",
    folder: "HTML Basics",
    created: "2026-01-10",
    preview: "learning-codes/HTML%20Basics/index.html"
  },
  {
    title: "CSS Flexbox",
    description: "Layout experiments for rows, columns, wrapping, spacing, and centered content.",
    language: "CSS",
    difficulty: "Beginner",
    category: "Web",
    folder: "CSS Flexbox",
    created: "2026-02-05",
    preview: "learning-codes/CSS%20Flexbox/index.html"
  },
  {
    title: "JavaScript Arrays",
    description: "Practice exercises for mapping, filtering, reducing, sorting, and searching arrays.",
    language: "JavaScript",
    difficulty: "Beginner",
    category: "Learning",
    folder: "JavaScript Arrays",
    created: "2026-03-12",
    preview: ""
  },
  {
    title: "Python Loops",
    description: "Loop practice with ranges, lists, totals, and simple pattern printing.",
    language: "Python",
    difficulty: "Beginner",
    category: "School",
    folder: "Python Loops",
    created: "2026-04-18",
    preview: ""
  }
];
const candidateFiles = [
  "index.html",
  "index.htm",
  "solution.html",
  "style.css",
  "styles.css",
  "script.js",
  "main.js",
  "main.py",
  "README.md",
  "app.py",
  "data.json",
  "metadata.json",
  "main.cpp",
  "Main.java",
  "server.js",
  "package.json",
  "package-lock.json",
  "Public/AI.html",
  "Public/ABOUT.HTML",
  "Public/Converter.html",
  "Public/Genartor.html",
  "Public/pdfCompressor.html",
  "Public/script.js",
  "Public/Style.css",
  "Public/index.css",
  "Public/styleAi.css",
  "Public/api.js",
  "Public/lumix-ui.js",
  "Public/converter.js",
  "Public/converterstyle.css",
  "Public/generaterscript.js",
  "Public/generatorstyle.css",
  "solution/solution.html",
  "solution/style.css",
  "solution/styles.css",
  "goal.png",
  "preview.png",
  "solution.css",
  "solution.js"
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", init);

async function init() {
  setupTheme();
  setupNav();
  setupTyping();
  setupObservers();
  setupRipple();
  setupTime();
  setupShortcuts();
  setupContact();
  projects = await loadProjects();
  learningCodes = await loadLearningCodes();
  renderFilters();
  renderProjects();
  updateProjectStats();
  renderLearningFilters();
  renderLearningCodes();
  updateLearningStats();
  openProject(projects[0]?.folder || "lumix-core");
}

async function loadProjects() {
  try {
    const response = await fetch("projects.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Project file unavailable");
    return await response.json();
  } catch {
    return fallbackProjects;
  }
}

async function loadLearningCodes() {
  const discovered = await discoverDirectoryItems("learning-codes", "folders");
  const manifest = await loadLearningManifest();
  const folders = [...new Set([...discovered, ...manifest])];
  const sourceFolders = folders.length ? folders : fallbackLearningFolders;
  const entries = [];

  for (const folder of sourceFolders) {
    const metadata = await loadLearningMetadata(folder);
    const previewPath = await findPreviewPath(folder);
    entries.push({
      ...inferLearningMetadata(folder, metadata),
      folder,
      created: metadata?.created || "1970-01-01",
      preview: previewPath ? encodeUrlPath(previewPath) : metadata?.preview || ""
    });
  }

  return entries.length ? entries : fallbackLearningCodes;
}

async function loadLearningManifest() {
  try {
    const response = await fetch("learning-codes/manifest.json", { cache: "no-store" });
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

async function loadLearningMetadata(folder) {
  try {
    const response = await fetch(encodeUrlPath(joinPath("learning-codes", folder, "metadata.json")), { cache: "no-store" });
    if (!response.ok) throw new Error("Metadata unavailable");
    return await response.json();
  } catch {
    return fallbackLearningCodes.find(item => item.folder === folder) || null;
  }
}

function inferLearningMetadata(folder, metadata) {
  if (metadata) return metadata;
  const readableTitle = folder.replace(/\+/g, " ").replace(/\s+/g, " ").trim();
  const lower = readableTitle.toLowerCase();
  let language = "HTML";
  if (lower.includes("css") || lower.includes("flex") || lower.includes("color") || lower.includes("font") || lower.includes("box model")) language = "CSS";
  if (lower.includes("javascript") || lower.includes("js")) language = "JavaScript";
  if (lower.includes("python")) language = "Python";
  if (lower.includes("java ") || lower === "java snippets") language = "Java";
  if (lower.includes("c++")) language = "C++";
  const category = lower.includes("project") ? "School" : lower.includes("web") || lower.includes("html") || lower.includes("css") ? "Web" : "Learning";
  return {
    title: readableTitle,
    description: `Practice code and exercises for ${readableTitle}.`,
    language,
    difficulty: "Beginner",
    category
  };
}

async function discoverDirectoryItems(root, type) {
  try {
    const response = await fetch(`${root}/`, { cache: "no-store" });
    if (!response.ok) return [];
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    return Array.from(doc.querySelectorAll("a[href]"))
      .map(link => link.getAttribute("href"))
      .filter(Boolean)
      .map(href => href.split("?")[0].split("#")[0])
      .filter(href => href && href !== "../" && href !== "/")
      .filter(href => type === "folders" ? href.endsWith("/") : !href.endsWith("/"))
      .map(href => href.replace(/\/$/, "").split("/").filter(Boolean).pop())
      .map(name => decodeURIComponent(name))
      .filter(Boolean);
  } catch {
    return [];
  }
}

async function fileExists(path) {
  try {
    const response = await fetch(encodeUrlPath(path), { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function findPreviewPath(folder) {
  const names = ["index.html", "index.htm", "solution.html"];
  for (const name of names) {
    const path = joinPath("learning-codes", folder, name);
    if (await fileExists(path)) return path;
  }
  return "";
}

function setupTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
  $(".theme-icon").textContent = saved === "dark" ? "\u263e" : "\u2600";
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    $(".theme-icon").textContent = next === "dark" ? "\u263e" : "\u2600";
  });
}

function setupNav() {
  const header = $("#siteHeader");
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");
  const links = $$(".nav-links a");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  links.forEach(link => link.addEventListener("click", event => {
    navLinks.classList.remove("open");
    if (link.getAttribute("href") === "#code-viewer") {
      event.preventDefault();
      scrollToCodePanel();
    }
  }));
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    $("#scrollProgress").style.width = `${(window.scrollY / (document.body.scrollHeight - innerHeight)) * 100}%`;
    $("#backTop").classList.toggle("show", window.scrollY > 650);
  }, { passive: true });
  $("#backTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

function setupTyping() {
  const words = ["Student", "Programmer", "Web Developer", "Designer"];
  const target = $("#typingText");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const tick = () => {
    const word = words[wordIndex];
    target.textContent = word.slice(0, charIndex);
    if (!deleting && charIndex < word.length) charIndex += 1;
    else if (deleting && charIndex > 0) charIndex -= 1;
    else if (!deleting) deleting = true;
    else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(tick, deleting ? 58 : 105);
  };
  tick();
}

function setupObservers() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .16 });
  $$(".reveal").forEach(el => revealObserver.observe(el));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$(".nav-links a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(section => sectionObserver.observe(section));

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$(".skill", entry.target).forEach(skill => {
        $("i", skill).style.width = `${skill.dataset.level}%`;
      });
      $$(".stats strong").forEach(counter => animateCounter(counter));
      skillObserver.unobserve(entry.target);
    });
  }, { threshold: .35 });
  $$(".skill-group").forEach(group => skillObserver.observe(group));
}

function setupRipple() {
  document.addEventListener("click", event => {
    const button = event.target.closest(".ripple");
    if (!button) return;
    const dot = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    dot.className = "ripple-dot";
    dot.style.width = dot.style.height = `${size}px`;
    dot.style.left = `${event.clientX - rect.left - size / 2}px`;
    dot.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.append(dot);
    setTimeout(() => dot.remove(), 600);
  });
}

function setupTime() {
  $("#year").textContent = new Date().getFullYear();
  const paint = () => {
    $("#currentTime").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };
  paint();
  setInterval(paint, 1000);
}

function setupShortcuts() {
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      $("#projectSearch").focus();
    }
    if (event.key === "Escape") {
      $("#projectSearch").value = "";
      $("#learningSearch").value = "";
      $("#codeSearch").value = "";
      renderProjects();
      renderLearningCodes();
      renderCode(currentCode);
    }
  });
}

function setupContact() {
  $("#contactForm").addEventListener("submit", event => {
    event.preventDefault();
    showToast("Message ready to send from your email app.");
    const data = new FormData(event.currentTarget);
    location.href = `mailto:hello@pavits.dev?subject=Portfolio message from ${encodeURIComponent(data.get("name"))}&body=${encodeURIComponent(data.get("message"))}%0A%0AReply to: ${encodeURIComponent(data.get("email"))}`;
  });
}

function renderFilters() {
  const filters = ["All", "HTML", "CSS", "JavaScript", "Python", "AI", "School"];
  $("#projectFilters").innerHTML = filters.map(filter => `<button class="filter-btn ${filter === currentFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
  $$(".filter-btn").forEach(button => button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    renderFilters();
    renderProjects();
  }));
  $("#projectSearch").addEventListener("input", renderProjects);
}

function filteredProjects() {
  const query = $("#projectSearch").value.trim().toLowerCase();
  return projects.filter(project => {
    const tags = project.tags || [];
    const matchesFilter = currentFilter === "All" || tags.includes(currentFilter) || (project.technologies || []).includes(currentFilter);
    const haystack = `${project.title} ${project.description} ${tags.join(" ")} ${(project.technologies || []).join(" ")}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function renderProjects() {
  const list = filteredProjects();
  $("#projectGrid").innerHTML = list.map((project, index) => `
    <article class="project-card" style="animation-delay:${index * 70}ms">
      <img src="${project.image}" alt="${project.title} project preview" loading="lazy">
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="chip-row">${(project.tags || []).map(tag => `<span class="chip">${tag}</span>`).join("")}</div>
        <div class="project-actions">
          <a class="btn secondary ripple" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
          <button class="btn primary ripple view-code" data-folder="${project.folder}">View Code</button>
        </div>
      </div>
    </article>
  `).join("") || `<p class="glass-panel" style="padding:24px">No projects match that search.</p>`;
  $$(".view-code").forEach(button => button.addEventListener("click", async () => {
    await openProject(button.dataset.folder);
    scrollToCodePanel();
  }));
}

function updateProjectStats() {
  const uniqueTags = new Set(projects.flatMap(project => project.tags || []));
  $("#projectStats").innerHTML = `
    <span>${projects.length} projects loaded</span>
    <span>${uniqueTags.size} tags tracked</span>
    <span>${projects.filter(project => (project.tags || []).includes("AI")).length} AI project</span>
  `;
}

function renderLearningFilters() {
  const filters = ["All", "HTML", "CSS", "JavaScript", "Python", "C++", "Java", "School", "Learning", "AI", "Web"];
  $("#learningFilters").innerHTML = filters.map(filter => `<button class="filter-btn ${filter === currentLearningFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("");
  $$("#learningFilters .filter-btn").forEach(button => button.addEventListener("click", () => {
    currentLearningFilter = button.dataset.filter;
    renderLearningFilters();
    renderLearningCodes();
  }));
  $("#learningSearch").addEventListener("input", renderLearningCodes);
  $("#learningSort").addEventListener("change", renderLearningCodes);
}

function filteredLearningCodes() {
  const query = $("#learningSearch").value.trim().toLowerCase();
  const sort = $("#learningSort").value;
  const list = learningCodes.filter(item => {
    const values = [item.title, item.language, item.description, item.category, item.difficulty];
    const matchesSearch = values.join(" ").toLowerCase().includes(query);
    const matchesFilter = currentLearningFilter === "All" || values.includes(currentLearningFilter);
    return matchesSearch && matchesFilter;
  });

  return list.sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title);
    if (sort === "za") return b.title.localeCompare(a.title);
    const aTime = new Date(a.created || 0).getTime();
    const bTime = new Date(b.created || 0).getTime();
    return sort === "oldest" ? aTime - bTime : bTime - aTime;
  });
}

function renderLearningCodes() {
  const list = filteredLearningCodes();
  $("#learningGrid").innerHTML = list.map((item, index) => `
    <article class="project-card" style="animation-delay:${index * 70}ms">
      <div class="project-body">
        <h3><span aria-hidden="true">&#128196;</span> ${item.title}</h3>
        <p><span aria-hidden="true">&#128221;</span> ${item.description}</p>
        <div class="chip-row">
          <span class="chip">&#128187; ${item.language}</span>
          <span class="chip">&#11088; ${item.difficulty}</span>
          <span class="chip">${item.category}</span>
        </div>
        <div class="project-actions">
          <button class="btn primary ripple view-learning-code" data-folder="${item.folder}">View Code</button>
          ${item.preview ? `<a class="btn secondary ripple" href="${item.preview}" target="_blank" rel="noreferrer">Preview</a>` : ""}
        </div>
      </div>
    </article>
  `).join("") || `<p class="glass-panel" style="padding:24px">No learning codes match that search.</p>`;

  $$(".view-learning-code").forEach(button => button.addEventListener("click", async () => {
    await openLearningCode(button.dataset.folder);
    scrollToCodePanel();
  }));
}

function updateLearningStats() {
  const languages = new Set(learningCodes.map(item => item.language).filter(Boolean));
  const categories = new Set(learningCodes.map(item => item.category).filter(Boolean));
  const values = { total: learningCodes.length, languages: languages.size, categories: categories.size };
  $$("[data-learning-count]").forEach(counter => {
    counter.dataset.count = values[counter.dataset.learningCount] || 0;
  });

  const stats = $("#learningStats");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$("[data-learning-count]").forEach(counter => animateCounter(counter));
      observer.unobserve(stats);
    });
  }, { threshold: .35 });
  observer.observe(stats);
}

async function openProject(folder) {
  $("#codeSpinner").classList.add("show");
  activeFolder = folder;
  activeRootPath = "codes";
  activeRootLabel = "codes";
  const project = projects.find(item => item.folder === folder);
  activeProjectName = project?.title || codeManifest[folder]?.name || folder;
  activeFiles = await loadFolderFiles(activeRootPath, folder);
  if (!Object.keys(activeFiles).length) {
    activeFiles = codeManifest[folder]?.files || { "README.md": `# ${activeProjectName}\n\nAdd files inside codes/${folder}/ and list the project in projects.json.` };
  }
  const files = Object.keys(activeFiles);
  activeFile = files[0];
  $("#currentProjectName").textContent = activeProjectName;
  renderTree();
  await openFile(activeFile);
}

async function openLearningCode(folder) {
  $("#codeSpinner").classList.add("show");
  activeFolder = folder;
  activeRootPath = "learning-codes";
  activeRootLabel = "learning-codes";
  const item = learningCodes.find(code => code.folder === folder);
  activeProjectName = item?.title || folder;
  activeFiles = await loadFolderFiles(activeRootPath, folder);
  if (!Object.keys(activeFiles).length) {
    activeFiles = { "metadata.json": JSON.stringify(item || { title: activeProjectName }, null, 2) };
  }
  const files = Object.keys(activeFiles);
  activeFile = files.includes("index.html") ? "index.html" : files[0];
  $("#currentProjectName").textContent = activeProjectName;
  renderTree();
  await openFile(activeFile);
}

async function loadFolderFiles(root, folder) {
  const loaded = {};
  const discovered = await discoverDirectoryItems(joinPath(root, folder), "files");
  const files = [...new Set([...discovered, ...candidateFiles])];
  await Promise.all(files.map(async file => {
    try {
      const response = await fetch(encodeUrlPath(joinPath(root, folder, file)), { cache: "no-store" });
      if (response.ok) loaded[file] = await response.text();
    } catch {
      return null;
    }
    return null;
  }));
  return loaded;
}

function renderTree() {
  const files = Object.keys(activeFiles);
  $("#folderTree").innerHTML = `
    <button class="tree-item folder" data-folder-toggle="root" aria-expanded="true">[-] ${activeRootLabel}/${activeFolder}</button>
    <div class="tree-children" id="rootChildren">
      ${files.map(file => `<button class="tree-item file ${file === activeFile ? "active" : ""}" data-file="${file}">[file] ${file}</button>`).join("")}
    </div>
  `;
  $(".folder").addEventListener("click", event => {
    const children = $("#rootChildren");
    children.classList.toggle("collapsed");
    event.currentTarget.textContent = `${children.classList.contains("collapsed") ? "[+]" : "[-]"} ${activeRootLabel}/${activeFolder}`;
    event.currentTarget.setAttribute("aria-expanded", String(!children.classList.contains("collapsed")));
  });
  $$(".file").forEach(file => file.addEventListener("click", () => openFile(file.dataset.file)));
}

function openFile(file) {
  activeFile = file;
  currentCode = activeFiles[file] || "";
  $("#codeSpinner").classList.add("show");
  return new Promise(resolve => {
    setTimeout(() => {
      renderTree();
      renderTabs();
      $("#breadcrumb").textContent = `${activeRootLabel} / ${activeFolder} / ${activeFile}`;
      $("#codeSearch").value = "";
      renderCode(currentCode);
      $("#codeSpinner").classList.remove("show");
      resolve();
    }, 180);
  });
}

function renderTabs() {
  const files = Object.keys(activeFiles);
  $("#editorTabs").innerHTML = files.map(file => `<button class="tab ${file === activeFile ? "active" : ""}" data-file="${file}">${file}</button>`).join("");
  $$(".tab").forEach(tab => tab.addEventListener("click", () => openFile(tab.dataset.file)));
}

$("#codeSearch").addEventListener("input", () => renderCode(currentCode, $("#codeSearch").value));
$("#copyCode").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentCode);
    showToast("Code copied to clipboard.");
  } catch {
    showToast("Copy shortcut unavailable in this browser.");
  }
});

function renderCode(code, query = "") {
  if (typeof code !== "string") code = "";
  const lines = code.split("\n");
  $("#codeEditor").innerHTML = lines.map((line, index) => {
    const highlighted = highlightSyntax(escapeHtml(line), activeFile);
    return `<div class="code-line"><span class="line-number">${index + 1}</span><span class="line-code">${markSearch(highlighted, query)}</span></div>`;
  }).join("");
}

function scrollToCodePanel() {
  $(".code-viewer").scrollIntoView({ behavior: "smooth", block: "start" });
}

function highlightSyntax(line, file) {
  if (file.endsWith(".html")) {
    return line
      .replace(/(&lt;\/?[\w-]+)/g, '<span class="tok-tag">$1</span>')
      .replace(/([\w-]+)=/g, '<span class="tok-attr">$1</span>=')
      .replace(/(".*?")/g, '<span class="tok-string">$1</span>');
  }
  if (file.endsWith(".css")) {
    return line
      .replace(/(\/\*.*?\*\/)/g, '<span class="tok-comment">$1</span>')
      .replace(/([.#]?[\w-]+)(\s*\{)/g, '<span class="tok-tag">$1</span>$2')
      .replace(/(:\s*)([^;]+)/g, '$1<span class="tok-string">$2</span>');
  }
  if (file.endsWith(".py")) {
    return line
      .replace(/\b(def|for|if|return|in|print|import|from|else|elif)\b/g, '<span class="tok-key">$1</span>')
      .replace(/(".*?")/g, '<span class="tok-string">$1</span>');
  }
  return line
    .replace(/\b(const|let|function|return|if|else|new|document|setInterval)\b/g, '<span class="tok-key">$1</span>')
    .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="tok-string">$1</span>');
}

function markSearch(html, query) {
  if (!query.trim()) return html;
  const escaped = escapeRegExp(escapeHtml(query.trim()));
  return html.replace(new RegExp(escaped, "gi"), match => `<span class="mark">${match}</span>`);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function joinPath(...parts) {
  return parts.map(part => String(part).replace(/^\/+|\/+$/g, "")).filter(Boolean).join("/");
}

function encodeUrlPath(path) {
  return path.split("/").map(part => encodeURIComponent(part)).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function animateCounter(counter) {
  const target = Number(counter.dataset.count);
  const start = performance.now();
  const step = now => {
    const progress = Math.min((now - start) / 900, 1);
    counter.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}
