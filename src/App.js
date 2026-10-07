import React, { useEffect, useRef, useState } from "react";

/* ---------- DATA ---------- */
const data = {
  personal: {
    name: "Shalini Choudhary",
    email: "shalini47choudhary@gmail.com",
    github: "https://github.com/shalini47ch",
    linkedin: "https://linkedin.com/in/shalini9ch",
    leetcode: "https://leetcode.com/shalini47choudhary/",
    medium: "https://medium.com/@shalini47choudhary",
    roles: [
      "Backend & Distributed Systems Engineer",
      "Microservices Architect",
      "Design Patterns Enthusiast",
      "Top 0.03% on LeetCode",
    ],
    summary:
      "Software Engineer with 4+ years of experience specializing in high-throughput microservices, low-level design (LLD) patterns, and relational database tuning.",
  },
  stats: [
    { label: "Global Rank", prefix: "#", value: 1600, suffix: "", sep: true },
    { label: "Day Streak", value: 1500, suffix: "+", sep: true },
    { label: "Problems Solved", value: 2070, suffix: "+", sep: true },
    { label: "Years Experience", value: 4, suffix: "+" },
  ],
  skills: [
    { title: "Languages", color: "from-blue-400 to-cyan-300", items: ["Java", "Python", "C++", "JavaScript", "TypeScript"] },
    { title: "Backend", color: "from-purple-400 to-fuchsia-300", items: ["Spring Boot", "Node.js", "Microservices", "REST APIs", "JWT", "RBAC"] },
    { title: "Frontend", color: "from-pink-400 to-rose-300", items: ["React.js", "Tailwind CSS", "Material UI", "HTML5/CSS3"] },
    { title: "Databases & Tools", color: "from-emerald-400 to-teal-300", items: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "Git", "Postman"] },
  ],
  experience: [
    {
      role: "Software Engineer (Backend & Distributed Systems)",
      company: "Independent Software Development",
      period: "Jan 2022 — Present",
      duration: "4+ yrs",
      current: true,
      metrics: [{ v: "23", l: "GoF patterns built" }, { v: "Top 0.03%", l: "LeetCode rank" }, { v: "JWT + RBAC", l: "Secured services" }],
      stack: ["Java", "Spring Boot", "Node.js", "Microservices", "JWT", "RBAC"],
      location: "Remote",
      highlights: [
        "Architected and deployed decoupled microservices using Java, Spring Boot, and Node.js with JWT authentication and granular RBAC.",
        "Engineered a comprehensive LLD repository covering all 23 Gang of Four (GoF) design patterns with clean class diagrams.",
        "Authored technical architectural deep-dives on Medium deconstructing microservices scaling, database indexing, and communication patterns.",
        "Sustained top-tier problem-solving agility on LeetCode, holding a Top 0.03% global ranking (#1,600).",
      ],
    },
    {
      role: "Software Engineer (Associate XT L1 / Junior Software Engineer)",
      company: "Publicis Sapient",
      period: "Jan 2021 — Nov 2021",
      duration: "11 mos",
      current: false,
      metrics: [{ v: "54→85%", l: "Acknowledgment rate" }, { v: "+30%", l: "Test coverage" }, { v: "+10%", l: "Web performance" }],
      stack: ["React", "A/B Testing", "SVG", "Unit Testing"],
      location: "Bangalore, Karnataka",
      highlights: [
        "Boosted microapp conversion metrics by driving user acknowledgment rates from 54% to 85% (+57% relative improvement) via A/B testing validations.",
        "Optimized production web performance by 10% through structural script optimization and custom SVG loading elements.",
        "Expanded codebase test coverage by 30% by refactoring monolithic components into modular UI structures paired with automated unit test suites.",
      ],
    },
  ],
  projects: [
    {
      title: "Task & Access Control Portal",
      tech: ["Spring Boot", "React", "MongoDB", "JWT"],
      description: "Secure full-stack task portal featuring encrypted onboarding, cryptographic password hashing, and stateless JWT validation layers.",
      github: "https://github.com/shalini47ch/task-manager-backend",
      live: "",
      grad: "from-blue-500 to-cyan-400",
    },
    {
      title: "Architectural Sandbox & LLD Hub",
      tech: ["React", "Node.js", "GoF Design Patterns"],
      description: "Interactive sandbox platform engineered to evaluate and practice all 23 Gang of Four structural, creational, and behavioral design patterns.",
      github: "https://github.com/shalini47ch/DesignHub",
      live: "https://design-hub-frontend-theta.vercel.app/",
      grad: "from-purple-500 to-pink-400",
    },
    {
      title: "Real-Time Messaging Engine",
      tech: ["Node.js", "Express", "Socket.io", "WebSockets"],
      description: "Asynchronous WebSocket communication server supporting real-time bi-directional messaging, typing indicators, and presence updates.",
      github: "https://github.com/shalini47ch/chit-chat-frontend",
      live: "",
      grad: "from-emerald-500 to-teal-400",
    },
  ],
};

data.articles = [
  { title: "Understanding Single Responsibility Principle (S of SOLID)", date: "May 30, 2026", tag: "SOLID", url: "https://medium.com/@shalini47choudhary/understanding-single-responsibility-principle-s-of-solid-b5e538b36ac1" },
  { title: "Strategy Design Pattern", date: "Feb 5, 2026", tag: "Design Patterns", url: "https://medium.com/@shalini47choudhary/strategy-design-pattern-1d2e713d34a4" },
  { title: "Diving Deep into Builder Design Pattern", date: "Jan 1, 2025", tag: "Design Patterns", url: "https://medium.com/@shalini47choudhary/diving-deep-into-builder-design-pattern-4f414997b223" },
  { title: "Diving Deep into Observer Design Pattern", date: "Aug 6, 2024", tag: "Design Patterns", url: "https://medium.com/@shalini47choudhary/diving-deep-into-observer-design-pattern-73b9480d22cf" },
  { title: "Adapter Design Pattern: Your Key to Compatibility in Coding", date: "Jun 1, 2024", tag: "Design Patterns", url: "https://medium.com/@shalini47choudhary/adapter-design-pattern-your-key-to-compatibility-in-coding-1d448014db2f" },
  { title: "Unveiling the Power of Promises In JavaScript", date: "Jul 8, 2023", tag: "JavaScript", url: "https://medium.com/@shalini47choudhary/unveiling-the-power-of-promises-in-javascript-739c6a243464" },
  { title: "JavaScript Working, Execution and Hoisting", date: "Oct 2, 2021", tag: "JavaScript", url: "https://medium.com/@shalini47choudhary/javascript-working-execution-and-hoisting-e0232074b22d" },
  { title: "Visualizing Sorting Algorithms", date: "Jul 19, 2020", tag: "Algorithms", url: "https://medium.com/@shalini47choudhary/visualizing-sorting-algorithms-e7b7b4c11056" },
  { title: "Converting a Color Image To Sketch", date: "Jun 29, 2020", tag: "Computer Vision", url: "https://medium.com/@shalini47choudhary/converting-a-color-image-to-sketch-8ca58bf7e346" },
  { title: "Hand Digit Recognition Using ANN And MNIST", date: "Jun 22, 2020", tag: "Machine Learning", url: "https://medium.com/@shalini47choudhary/hand-digit-recognition-using-ann-and-mnist-c859d4e55ee" },
];

const NAV = ["about", "leetcode", "skills", "experience", "projects", "articles"];

/* ---------- HOOKS & HELPERS ---------- */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setSeen(true), io.disconnect()),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, seen] = useInView(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ end, prefix = "", suffix = "", sep }) {
  const [ref, seen] = useInView(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1600, 1);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, end]);
  return <span ref={ref}>{prefix}{sep ? n.toLocaleString() : n}{suffix}</span>;
}

function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const id = setTimeout(
      () => {
        if (!del) {
          setTxt(w.slice(0, txt.length + 1));
          if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setTxt(w.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) { setDel(false); setI((i + 1) % words.length); }
        }
      },
      del ? 28 : 65
    );
    return () => clearTimeout(id);
  }, [txt, del, i, words]);
  return (
    <span>
      {txt}
      <span className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}

const SectionTitle = ({ n, children }) => (
  <Reveal>
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-sm text-blue-400">0{n}.</span>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
    </div>
  </Reveal>
);

/* ---------- ENHANCED SECTIONS ---------- */
const glassCard = "bg-white/[0.03] backdrop-blur-xl border border-white/10";

function Spotlight({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={`group relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{ background: "radial-gradient(380px circle at var(--x) var(--y), rgba(129,140,248,.18), transparent 60%)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function SkillsSection() {
  const [tab, setTab] = useState("All");
  const icons = { Languages: "</>", Backend: "⚙️", Frontend: "🎨", "Databases & Tools": "🗄️" };
  const tabs = ["All", ...data.skills.map((s) => s.title)];
  const shown = tab === "All" ? data.skills : data.skills.filter((s) => s.title === tab);
  const all = data.skills.flatMap((s) => s.items);
  const loop = [...all, ...all];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle n={1}>Technical Skills</SectionTitle>

      <Reveal>
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-mono border transition ${
                tab === t
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-[0_0_20px_rgba(99,102,241,.45)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <div key={tab} className={`grid gap-6 ${shown.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
        {shown.map((g, gi) => (
          <Spotlight key={g.title} className={`rounded-2xl ${glassCard} hover:border-white/25 transition pop`}>
            <div className="p-7">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-sm font-mono">{icons[g.title]}</span>
                  <h3 className={`font-mono text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${g.color} bg-clip-text text-transparent`}>{g.title}</h3>
                </div>
                <span className="text-xs font-mono text-slate-500">{g.items.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((t, i) => (
                  <span
                    key={t}
                    style={{ animationDelay: `${gi * 80 + i * 60}ms` }}
                    className="pop px-4 py-2 rounded-xl text-sm bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/10 hover:-translate-y-1 hover:shadow-[0_8px_25px_-8px_rgba(99,102,241,.7)] transition duration-200 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Spotlight>
        ))}
      </div>

      {/* Tech marquee */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee flex w-max gap-4">
          {loop.map((t, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-400 whitespace-nowrap">
              <span className="text-purple-400 mr-2">◆</span>{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle n={2}>Experience</SectionTitle>
      <div className="relative pl-8 md:pl-14 space-y-10">
        <div className="absolute left-2 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
        {data.experience.map((exp, idx) => {
          const isOpen = open === idx;
          return (
            <Reveal key={idx} delay={idx * 120}>
              <div className="relative">
                <span className="absolute -left-[2.45rem] md:-left-[3.95rem] top-7 w-5 h-5 rounded-full bg-[#05070f] border-2 border-blue-400 grid place-items-center shadow-[0_0_18px_rgba(59,130,246,.8)]">
                  {exp.current && <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />}
                </span>

                <Spotlight className={`rounded-2xl ${glassCard} transition ${isOpen ? "border-blue-400/40" : "hover:border-white/25"}`}>
                  <div className="p-6 md:p-8">
                    <button onClick={() => setOpen(isOpen ? -1 : idx)} className="w-full text-left flex items-start gap-4">
                      <div className="hidden sm:grid w-14 h-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-black shadow-lg">
                        {exp.company[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono">● Current</span>
                          )}
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono">{exp.duration}</span>
                          <span className="text-slate-500 text-xs font-mono">{exp.period} · {exp.location}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-snug">{exp.role}</h3>
                        <p className="text-blue-400 font-mono text-sm mt-1">@ {exp.company}</p>
                      </div>
                      <span className={`mt-1 text-slate-400 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>⌄</span>
                    </button>

                    {/* Key metrics */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {exp.metrics.map((m) => (
                        <div key={m.l} className="p-3 md:p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                          <div className="text-base md:text-2xl font-black font-mono bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">{m.v}</div>
                          <div className="text-[10px] md:text-[11px] text-slate-400 font-mono uppercase tracking-wider mt-1">{m.l}</div>
                        </div>
                      ))}
                    </div>

                    {/* Expandable details */}
                    <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <ul className="space-y-3.5 text-slate-300 text-sm leading-relaxed">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-1 w-5 h-5 shrink-0 grid place-items-center rounded-md bg-purple-500/15 text-purple-300 text-[10px]">✦</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                      {exp.stack.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-200">{t}</span>
                      ))}
                    </div>
                  </div>
                </Spotlight>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ArticlesSection() {
  const meta = {
    "Design Patterns": { icon: "🧩", grad: "from-purple-500 to-pink-500" },
    SOLID: { icon: "🏛️", grad: "from-blue-500 to-indigo-500" },
    JavaScript: { icon: "⚡", grad: "from-amber-400 to-orange-500" },
    Algorithms: { icon: "📊", grad: "from-emerald-500 to-teal-400" },
    "Computer Vision": { icon: "🎨", grad: "from-rose-500 to-orange-400" },
    "Machine Learning": { icon: "🧠", grad: "from-cyan-500 to-blue-500" },
  };
  const [feat, ...rest] = data.articles;
  const fm = meta[feat.tag];
  return (
    <section id="articles" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle n={4}>Writing on Medium</SectionTitle>

      <Reveal>
        <a href={feat.url} target="_blank" rel="noreferrer" className={`group block relative overflow-hidden rounded-3xl ${glassCard} hover:border-white/30 transition mb-6`}>
          <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br ${fm.grad} opacity-20 blur-[80px] group-hover:opacity-35 transition`} />
          <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center">
            <div className={`w-24 h-24 shrink-0 grid place-items-center rounded-3xl bg-gradient-to-br ${fm.grad} text-5xl shadow-xl group-hover:rotate-6 transition`}>{fm.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">Latest</span>
                <span className="text-slate-400">{feat.tag}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500">{feat.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-blue-300 transition">{feat.title}</h3>
              <span className="inline-block mt-4 font-mono text-sm text-blue-400">Read on Medium ↗</span>
            </div>
          </div>
        </a>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((a, i) => {
          const m = meta[a.tag];
          return (
            <Reveal key={a.url} delay={(i % 3) * 100} className="h-full">
              <a href={a.url} target="_blank" rel="noreferrer" className={`group h-full flex flex-col overflow-hidden rounded-2xl ${glassCard} hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_20px_45px_-18px_rgba(99,102,241,.55)] transition duration-300`}>
                <div className={`h-20 relative bg-gradient-to-br ${m.grad} grid place-items-center`}>
                  <span className="text-4xl group-hover:scale-125 transition duration-300">{m.icon}</span>
                  <span className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#05070f]/60 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">{a.tag}</span>
                    <span className="text-slate-500">{a.date}</span>
                  </div>
                  <h3 className="font-bold text-white leading-snug group-hover:text-blue-300 transition flex-1">{a.title}</h3>
                  <span className="mt-4 font-mono text-xs text-blue-400">Read article ↗</span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-10 text-center">
          <a href={data.personal.medium} target="_blank" rel="noreferrer" className={`inline-block px-6 py-3 rounded-xl ${glassCard} text-slate-200 hover:bg-white/10 hover:-translate-y-0.5 transition font-mono text-sm`}>
            View all {data.articles.length} articles on Medium →
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- AUTO-LOAD TAILWIND (no setup needed) ---------- */
function useTailwind() {
  const [ready, setReady] = useState(typeof window !== "undefined" && !!window.tailwind);
  useEffect(() => {
    document.body.style.background = "#05070f";
    if (window.tailwind) { setReady(true); return; }
    let s = document.querySelector("script[data-tw]");
    if (!s) {
      s = document.createElement("script");
      s.src = "https://cdn.tailwindcss.com";
      s.dataset.tw = "1";
      document.head.appendChild(s);
    }
    const done = () => setTimeout(() => setReady(true), 150);
    s.addEventListener("load", done);
    return () => s.removeEventListener("load", done);
  }, []);
  return ready;
}

/* ---------- APP ---------- */
function App() {
  const { personal, stats, projects } = data;
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);
  const ready = useTailwind();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      let cur = "about";
      NAV.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!ready) return <div style={{ minHeight: "100vh", background: "#05070f" }} />;

  const glass = "bg-white/[0.03] backdrop-blur-xl border border-white/10";

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white scroll-smooth">
      <style>{`
        html{scroll-behavior:smooth}
        @keyframes floaty{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-50px) scale(1.15)}}
        @keyframes gradmove{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        @keyframes flame{0%,100%{transform:scale(1) rotate(-3deg)}50%{transform:scale(1.18) rotate(3deg)}}
        @keyframes pop{from{opacity:0;transform:scale(.85) translateY(10px)}to{opacity:1;transform:none}}
        @keyframes marquee{to{transform:translateX(-50%)}}
        .pop{animation:pop .5s cubic-bezier(.2,.8,.2,1) both}
        .marquee{animation:marquee 35s linear infinite}
        .marquee:hover{animation-play-state:paused}
        .blob{animation:floaty 14s ease-in-out infinite}
        .gradtext{background-size:200% auto;animation:gradmove 5s linear infinite}
        .flame{display:inline-block;animation:flame 1.4s ease-in-out infinite}
        .grid-bg{background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse at top,#000 30%,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at top,#000 30%,transparent 75%)}
      `}</style>

      {/* Ambient background */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="blob absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-blue-600/25 blur-[110px]" />
        <div className="blob absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-purple-600/20 blur-[120px]" style={{ animationDelay: "-5s" }} />
        <div className="blob absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-pink-600/15 blur-[120px]" style={{ animationDelay: "-9s" }} />
      </div>

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" style={{ width: `${progress}%` }} />

      {/* NAV */}
      <nav className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-5xl rounded-2xl ${glass} bg-slate-900/60 px-5 py-3`}>
        <div className="flex items-center justify-between">
          <a href="#about" className="font-mono font-bold text-white">
            &lt;Shalini<span className="text-blue-400">.Dev /&gt;</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-sm">
            {NAV.map((id) => (
              <a key={id} href={`#${id}`} className={`px-3 py-1.5 rounded-lg capitalize transition ${active === id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}>
                {id === "leetcode" ? "LeetCode" : id}
              </a>
            ))}
            <a href={`mailto:${personal.email}`} className="ml-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(99,102,241,.6)] transition font-mono text-xs">
              Contact
            </a>
          </div>
          <button onClick={() => setMenu(!menu)} className="md:hidden text-slate-300 text-xl" aria-label="menu">{menu ? "✕" : "☰"}</button>
        </div>
        {menu && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1 text-sm">
            {NAV.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="px-3 py-2 rounded-lg capitalize text-slate-300 hover:bg-white/5">{id}</a>
            ))}
            <a href={`mailto:${personal.email}`} className="px-3 py-2 rounded-lg text-blue-400">Contact</a>
          </div>
        )}
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section id="about" className="pt-44 pb-20 px-6 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-7">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
              Hi, I'm{" "}
              <span className="gradtext bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 via-50% bg-clip-text text-transparent">{personal.name}</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono text-slate-300 h-8"><Typewriter words={personal.roles} /></p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{personal.summary}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`mailto:${personal.email}`} className="px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,.55)] transition">Get In Touch</a>
              {[["GitHub", personal.github], ["LinkedIn", personal.linkedin], ["Medium", personal.medium]].map(([l, u]) => (
                <a key={l} href={u} target="_blank" rel="noreferrer" className={`px-5 py-3.5 rounded-xl ${glass} text-slate-300 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 transition`}>{l}</a>
              ))}
              <a href={personal.leetcode} target="_blank" rel="noreferrer" className="px-5 py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 hover:-translate-y-0.5 transition font-mono">
                LeetCode <span className="flame">🔥</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className={`group p-6 rounded-2xl ${glass} hover:border-blue-400/40 hover:-translate-y-1 transition duration-300`}>
                  <div className="text-3xl md:text-4xl font-black font-mono bg-gradient-to-br from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} sep={s.sep} />
                  </div>
                  <div className="text-slate-400 text-xs font-mono mt-2 uppercase tracking-wider">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LEETCODE */}
        <section id="leetcode" className="py-16 px-6 max-w-6xl mx-auto">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-amber-400/60 via-orange-500/20 to-purple-500/40">
              <div className="rounded-3xl bg-[#0a0d1a] p-8 md:p-12 relative">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-500/20 blur-[90px]" />
                <div className="relative flex flex-col lg:flex-row gap-10 lg:items-center justify-between">
                  <div className="space-y-4 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" /> Active Daily Streak
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold">Competitive Programming <span className="text-amber-400">&</span> Problem Solving</h3>
                    <p className="text-slate-400">Unbroken daily coding consistency over 4+ consecutive years — data structures, graph theory, dynamic programming, and system design algorithms.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-mono text-center">
                    <div className="p-6 rounded-2xl bg-white/[0.04] border border-amber-400/30">
                      <div className="text-4xl mb-1 flame">🔥</div>
                      <div className="text-3xl font-black text-amber-400">1,500+</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">Day Streak</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.04] border border-blue-400/30">
                      <div className="text-4xl mb-1">🏆</div>
                      <div className="text-3xl font-black text-blue-400">Top 0.03%</div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-widest mt-1">Rank #1,600</div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs font-mono text-slate-400">
                  <div className="flex flex-wrap gap-x-5 gap-y-1">
                    <span><b className="text-slate-100">2,070+</b> Problems</span>
                    <span><b className="text-slate-100">70+</b> Badges</span>
                    <span><b className="text-slate-100">5.5M+</b> Developers Outranked</span>
                  </div>
                  <a href={personal.leetcode} target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">Verify on LeetCode →</a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SKILLS */}
        <SkillsSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <SectionTitle n={3}>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 120} className="h-full">
                <div className={`group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl ${glass} hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,.5)] transition duration-300`}>
                  <div className={`h-1.5 bg-gradient-to-r ${p.grad}`} />
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-200">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-sm font-mono">
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:bg-white/15 transition">Code →</a>}
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={`px-4 py-2 rounded-lg bg-gradient-to-r ${p.grad} text-white font-semibold hover:opacity-90 transition`}>Live Demo ↗</a>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ARTICLES */}
        <ArticlesSection />

        {/* CTA */}
        <section className="py-24 px-6 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Let's build something <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">scalable</span>.</h2>
            <p className="text-slate-400 mb-8">Have a role, project, or architecture problem in mind? My inbox is open.</p>
            <a href={`mailto:${personal.email}`} className="inline-block px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_35px_rgba(99,102,241,.6)] transition">{personal.email}</a>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/5 text-center text-xs text-slate-500 font-mono">
        © 2026 Shalini Choudhary · Built for scale & backend clarity.
      </footer>
    </div>
  );
}

export default App;
