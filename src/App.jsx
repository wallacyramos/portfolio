import React from "react";
import { motion } from "framer-motion";

import banner from "./assets/banner.png";

import primecutLogin from "./assets/projects/primecut-login.png";

import {
  Mail,
  Code2,
  Rocket,
  User,
  ExternalLink,
  Database,
  Globe,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function App() {

  const whatsapp = "https://wa.me/5511960303909";

  const technologies = [
    "PHP",
    "SQLite",
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Railway",
    "Vercel",
  ];

  const projects = [
    {
      title: "Prime Cut Barber",
      description:
        "Sistema completo para barbearias desenvolvido em PHP com autenticação, agendamento, gestão de barbeiros e deploy em nuvem utilizando Railway e GitHub.",
      stack: "PHP • SQLite • JavaScript • HTML • CSS • Railway",
      status: "Online",
      image: primecutLogin,
      github: "https://github.com/wallacyramos/primecut",
      demo: "https://primecut-production.up.railway.app/login.php",
    },

    {
      title: "Portfólio Profissional",
      description:
        "Portfólio moderno desenvolvido em React com visual premium, deploy na Vercel e integração com projetos reais.",
      stack: "React • Vite • Tailwind • Vercel",
      status: "Online",
      image: banner,
      github: "https://github.com/wallacyramos/portfolio",
      demo: "https://portfolio-blue-pi-58.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070711] text-white overflow-hidden scroll-smooth">

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">

          <a href="#" className="text-xl font-black tracking-tight">
            Wallacy<span className="text-purple-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

            <a href="#sobre" className="hover:text-purple-400 transition">
              Sobre
            </a>

            <a href="#tecnologias" className="hover:text-purple-400 transition">
              Tecnologias
            </a>

            <a href="#projetos" className="hover:text-purple-400 transition">
              Projetos
            </a>

            <a href="#contato" className="hover:text-purple-400 transition">
              Contato
            </a>

          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm font-semibold transition"
          >
            Fale comigo
          </a>

        </div>

      </nav>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 hover:bg-green-700 p-4 shadow-2xl shadow-green-900/40 transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <Phone size={26} />
      </a>

      <div className="w-full border-b border-purple-500/20 pt-[72px]">

        <img
          src={banner}
          alt="Banner Wallacy Ramos"
          className="w-full h-auto object-cover"
        />

      </div>

      <section className="relative min-h-screen flex items-center px-6 py-16 md:px-20">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6d28d9,transparent_35%),radial-gradient(circle_at_bottom_left,#312e81,transparent_30%)]"></div>

        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 mb-6">

              <Code2 size={18} />
              Desenvolvedor Web

            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Wallacy <span className="text-purple-500">Ramos</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8 leading-relaxed">
              Desenvolvedor focado em PHP, sistemas web, banco de dados e deploy de aplicações.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#projetos"
                className="rounded-2xl bg-purple-600 hover:bg-purple-700 px-6 py-4 text-base flex items-center transition hover:scale-105"
              >
                <Rocket className="mr-2" size={20} />
                Ver projetos
              </a>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-purple-400/50 text-white bg-white/5 hover:bg-white/10 px-6 py-4 text-base flex items-center transition hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                WhatsApp
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      <section
        id="projetos"
        className="px-6 md:px-20 py-20 max-w-7xl mx-auto scroll-mt-24"
      >

        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Projetos em <span className="text-purple-500">destaque</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/60 hover:-translate-y-2 transition duration-300"
            >

              <div className="p-8">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-contain rounded-2xl border border-purple-400/20 mb-6 bg-black/40 p-4 group-hover:scale-[1.02] transition duration-300"
                />

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-purple-300 mb-2">
                  {project.stack}
                </p>

                <p className="text-sm text-zinc-500 mb-5">
                  {project.status}
                </p>

                <div className="flex gap-3 flex-wrap">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 items-center transition"
                  >
                    Ver online
                    <ExternalLink className="ml-2" size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-xl border border-purple-400/40 bg-white/5 text-white hover:bg-white/10 px-4 py-2 items-center transition"
                  >
                    GitHub
                    <Code2 className="ml-2" size={16} />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <footer className="px-6 py-8 text-center text-zinc-500 border-t border-white/10">
        © 2026 Wallacy Ramos. Desenvolvido com dedicação.
      </footer>

    </main>
  );
}