import "./App.css";
import React, { useState } from "react";
import {motion}   from "framer-motion";
import { Button } from "./components/ui/button";
const projects = [
  {
    title: "Chat App",
    description:
      "A simple, responsive chat interface focused on smooth communication with a bot and a clean user experience",
    tech: ["React", "Tailwind.css"],
    image: "./chatappimage.png",
    liveUrl: "https://chatbushrohh.netlify.app",
    githubUrl: "https://github.com/Bushrohh/chatapp",
  },
  {
    title: "Accordion Template",
    description:
      "A flexible and reusable accordion component designed for modern web apps. It helps structure content, improve scannability, and deliver a smooth user experience",
    image: "./accordion.png",
    tech: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Bushrohh/accordion",
  },
  {
    title: "Tech Career Paths",
    description:
      "A clean and responsive app designed to help new techies explore career paths, access learning resources, and navigate their journey into tech with clarity and structure.",
    tech: ["nextJS", "TailwindCSS", "Framer-motion", "shadCn"],
    image: "./techpathimage.png",
    liveUrl: "https://techpathss.netlify.app",
    githubUrl: "https://github.com/Bushrohh/tech-path",
  },
];

const skills = [
  {
    title: "Frontend Development",
    items: ["React", "JavaScript (ES6+)", "APIs", "nextJS"],
  },
  {
    title: "UX Designs",
    items: ["Design systems", "Accessibility basics", "UX thinking"],
  },
  {
    title: "Styling & Layout",
    items: ["Tailwind CSS", "CSS Grid", "Flexbox", "Responsive design"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Deployment"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function App() {
  const year = new Date().getFullYear();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 ">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden relative h-7 w-5 focus:outline-none focus:ring-0 outline-none border-none"
          >
            <div>
            <span
              className={`absolute left-2.5 h-0.5 w-5 bg-slate-900 transition ${
                openMenu ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute left-2.5 h-0.5 w-5 bg-slate-900 transition ${
                openMenu ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`absolute left-2.5 h-0.5 w-5 bg-slate-900 transition ${
                openMenu ? "-rotate-45 top-3" : "top-5"
              }`}
            />
            </div>
          </button>
          {openMenu && (
            <div className="md:hidden absolute top-full left-0 w-1/4 bg-white px-6 py-4 shadow-md z-40 border-b-4 focus:border-none focus:ring-0 outline-none">
              <a href="#home" className="block py-2">
                Home
              </a>
              <a href="#projects" className="block py-2">
                Projects
              </a>
              <a href="#about" className="block py-2">
                About
              </a>
              <a href="#contact" className="block py-2">
                Contact
              </a>
              <a
                href="/bushroh-resume.pdf"
                className="block py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          )}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold tracking-tight"
          >
            <span className=" text-black">
              Sekere Bushroh.
            </span>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            animate="show"
            className="hidden gap-8 text-sm font-medium text-slate-600 md:flex focus:border-none focus:ring-0 outline-none"
          >
            {[
              { label: "Home", href: "#home" },
              { label: "Projects", href: "#projects" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
              { label: "Resume", href: "./bushroh-resume.pdf" },
            ].map((item) => (
              <motion.li key={item.label} variants={fadeInUp}>
                <a
                  href={item.href}
                  className="hover:text-purple-600"
                  target={item.label === "resume" ? "_blank" : undefined}
                  rel={
                    item.label === "resume" ? "noopener noreferrer" : undefined
                  }
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2, duration: 0.4 }}
            className="hidden md:block"
          >
            
              <Button
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-50"
              >
              <a href="#contact">
                Let's talk
                </a>
              </Button>
          </motion.div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <motion.section
          id="home"
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid min-h-[80vh] items-center gap-12 py-12 md:grid-cols-2 md:py-20"
        >
          {/* Left */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="inline rounded-full bg-purple-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-grey-500">
              Frontend Developer · UI Focused
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Building{" "}
              <span className="bg-linear-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                clean and bold
              </span>{" "}
              web experiences.
            </h1>

            <p className="max-w-xl text-base text-slate-600 sm:text-lg">
              I design and develop modern interfaces with Javascript, React,
              nextJS and a strong focus on clarity, performance, and visual
              impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="shadow-none !bg-purple-600 text-white"
                variant="default">
                  View my work
                </Button>
              </a>
              
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                <a href="#contact">
                  Contact me
                  </a>
                </Button>
              
            </div>

            <div className="flex gap-6 pt-4 text-sm text-slate-500">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Experience
                </p>
                <p className="text-lg font-semibold text-slate-800">1 year</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Focus
                </p>
                <p className="text-lg font-semibold text-slate-800">
                  Frontend and UI
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="pointer-events-none absolute inset-0 -left-10 -right-10 -z-10 rounded-[32px] bg-purple-400/20 blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-3xl bg-white p-4 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-4 h-5 flex-1 rounded-md bg-slate-100" />
              </div>

              <div className="space-y-4 p-4">
                <div className="h-40 rounded-2xl bg-linear-to-br from-slate-900 via-purple-700 to-purple-400 p-4 text-xs text-slate-100">
                  <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wide text-slate-300">
                    <span>src/App.jsx</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5">
                      code snippet
                    </span>
                  </div>
                  <pre className="font-mono text-[11px] leading-relaxed">
                    {`const Hero = () => (
  <section className="clean-and-bold">
    <h1>Building clean & bold web experiences.</h1>
  </section>
);`}
                  </pre>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Clean and Bold Landing Pages
                  </h2>
                  <p className="text-sm text-slate-600">
                    Responsive landing page with strong typography, clear
                    messaging, and clean UI.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      HTML
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      CSS
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      Javascript
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      React
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      NextJS
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      TailwindCSS
                    </span>
                  </div>
                  <div className="flex items-center justify-center pt-3 text-sm ">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-200 bg-purple-400 text-purple-700 hover:bg-slate-50"
                      >
                        <a href="https://github.com/bushrohh">
                        GitHub Profile
                        </a>
                      </Button>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 border-y border-slate-100 py-16 md:grid-cols-[0.9fr,1.1fr]"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-linear-to-br from-purple-500 via-purple-700 to-slate-900 shadow-xl shadow-purple-500/30">
              <img
                src="./profileimage.png"
                alt="Profile Image"
                className="absolute bottom-2 top-2 "
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_55%)]" />
              <div className="absolute bottom-2 left-4 right-4 rounded-2xl bg-white/10 p-2 text-xs text-slate-100 backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-wide text-slate-300">
                  Currently focused on
                </p>
                <p className="text-sm font-medium">Creating Clean Websites</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                About me
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-purple-700" />
            </div>

            <p className="text-sm text-slate-600 sm:text-base">
              I am Bushroh, a frontend developer who blends clean structure with
              bold visuals. I care about spacing, hierarchy, interactions, and
              how everything feels.
            </p>

            <p className="text-sm text-slate-600 sm:text-base">
              I build fast, accessible, and visually expressive experiences
              using React and modern CSS. I enjoy turning ideas into polished,
              production-ready interfaces.
            </p>

            <div className="pt-2">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Core stack
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {["React", "JavaScript", "Tailwind CSS", "NextJS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-purple-50 px-3 py-1 font-medium text-purple-700"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="mb-10 space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Featured projects
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
              Clean layouts, clear structure, and bold visual accents.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 md:grid-cols-[1.4fr,1.1fr]"
              >
                <div className="h-full rounded-2xl bg-linear-to-br from-slate-900 via-purple-700 to-purple-500 p-4">
                  <div className="h-full rounded-xl bg-slate-900/40 p-4 text-[11px] text-slate-100">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      UI preview
                    </p>
                    <img src={project.image} alt="" />
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-3 py-1 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-200 text-slate-800 hover:bg-slate-50"
                      >
                        <a href={project.liveUrl}>
                        View live
                        </a>
                      </Button>
                    
                    
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-slate-200 text-slate-800 hover:bg-slate-50"
                      ><a href={project.githubUrl}>
                        GitHub
                        </a>
                      </Button>
                    
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 rounded-3xl bg-slate-50 px-6 py-12"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Skills and tools
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Tools and practices I use to ship polished frontend experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col gap-2 rounded-2xl bg-white p-4 text-sm shadow-sm shadow-slate-900/5 ring-1 ring-slate-100"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {group.title}
                </h3>
                <ul className="space-y-1 text-xs text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="my-16 rounded-3xl bg-linear-to-r from-purple-600 to-purple-700 px-6 py-12 text-center text-white"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let's build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-purple-100 sm:text-base">
            I am open to collaborations, freelance work, and frontend roles.
          </p>

          <div className="mt-6 flex justify-center">
            <a href="mailto:sekerebushroh@gmail.com">
              <Button className="bg-white text-purple-700 shadow-lg shadow-purple-900/30 hover:bg-purple-50">
                Email me
              </Button>
            </a>
          </div>

          <p className="mt-3 text-xs text-purple-100">
            Or email me directly at{" "}
            <span className="font-medium">sekerebushroh@gmail.com</span>
          </p>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Sekere Bushroh — Frontend Developer</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/bushrohh"
              className="hover:text-purple-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sekerebushroh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="hover:text-purple-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
