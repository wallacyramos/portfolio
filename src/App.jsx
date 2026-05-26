import React from "react";
import { motion } from "framer-motion";
import banner from "./assets/banner.png";

import {
  Mail,
  Code2,
  Rocket,
  User,
  ExternalLink,
  Database,
  Globe,
  Laptop,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function App() {
  const whatsapp = "https://wa.me/5511960303909";

  const technologies = ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git & GitHub"];

  const projects = [
    {
      title: "Prime Cut",
      description: "Sistema web com cadastro, login, agendamento, planos e área administrativa.",
      stack: "PHP • MySQL • JavaScript • HTML • CSS",
      status: "Projeto em desenvolvimento",
      link: "https://github.com/wallacyramos",
    },
    {
      title: "Portfólio Pessoal",
      description: "Site desenvolvido para apresentar projetos, tecnologias e evolução como desenvolvedor.",
      stack: "React • Tailwind • Vercel",
      status: "Online",
      link: "https://portfolio-blue-pi-58.vercel.app/",
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
            <a href="#sobre" className="hover:text-purple-400 transition">Sobre</a>
            <a href="#tecnologias" className="hover:text-purple-400 transition">Tecnologias</a>
            <a href="#projetos" className="hover:text-purple-400 transition">Projetos</a>
            <a href="#contato" className="hover:text-purple-400 transition">Contato</a>
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
        <img src={banner} alt="Banner Wallacy Ramos" className="w-full h-auto object-cover" />
      </div>

      <section className="relative min-h-screen flex items-center px-6 py-16 md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6d28d9,transparent_35%),radial-gradient(circle_at_bottom_left,#312e81,transparent_30%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 mb-6">
              <Code2 size={18} /> Desenvolvedor Web
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Wallacy <span className="text-purple-500">Ramos</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8 leading-relaxed">
              Desenvolvedor focado em PHP, sistemas web, banco de dados e deploy de aplicações.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="rounded-2xl bg-purple-600 hover:bg-purple-700 px-6 py-4 text-base flex items-center transition hover:scale-105">
                <Rocket className="mr-2" size={20} /> Ver projetos
              </a>

              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-purple-400/50 text-white bg-white/5 hover:bg-white/10 px-6 py-4 text-base flex items-center transition hover:scale-105">
                <Phone className="mr-2" size={20} /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="rounded-[2rem] bg-zinc-950/80 border border-purple-400/30 shadow-2xl shadow-purple-900/30 p-6 backdrop-blur hover:shadow-purple-700/40 transition">
              <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>

              <pre className="text-sm md:text-base text-zinc-300 leading-7 overflow-hidden">
                <code>{`<?php
class Developer {
  public $nome = "Wallacy Ramos";
  public $foco = "Sistemas Web";

  public function criarSolucoes() {
    return "Código limpo, funcional e eficiente";
  }
}`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="px-6 md:px-20 py-20 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 hover:-translate-y-2 transition duration-300">
            <User className="text-purple-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-3">Sobre mim</h3>
            <p className="text-zinc-300 leading-relaxed">
              Sou apaixonado por tecnologia e estou evoluindo como desenvolvedor web, criando projetos reais e aprendendo boas práticas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 hover:-translate-y-2 transition duration-300">
            <Database className="text-purple-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-3">Back-end</h3>
            <p className="text-zinc-300 leading-relaxed">
              Desenvolvimento com PHP e MySQL, criando sistemas completos e funcionais.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/50 hover:-translate-y-2 transition duration-300">
            <Globe className="text-purple-400 mb-4" size={36} />
            <h3 className="text-2xl font-bold mb-3">Web</h3>
            <p className="text-zinc-300 leading-relaxed">
              Interfaces modernas com HTML, CSS, JavaScript e foco em UX.
            </p>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="px-6 md:px-20 py-20 bg-white/[0.03] scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Tecnologias <span className="text-purple-500">que utilizo</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-6 py-4 rounded-2xl bg-zinc-900 border border-purple-400/20 text-zinc-200 hover:border-purple-400/60 hover:-translate-y-1 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="px-6 md:px-20 py-20 max-w-7xl mx-auto scroll-mt-24">
        <h2 className="text-4xl md:text-5xl font-black mb-10">
          Projetos em <span className="text-purple-500">destaque</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/60 hover:-translate-y-2 transition duration-300">
              <div className="p-8">
                <div className="h-44 rounded-2xl bg-gradient-to-br from-purple-700/50 to-zinc-900 border border-purple-400/20 mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-purple-900/30 transition">
                  <Laptop size={60} className="text-purple-200" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-300 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-purple-300 mb-2">{project.stack}</p>
                <p className="text-sm text-zinc-500 mb-5">{project.status}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl border border-purple-400/40 bg-white/5 text-white hover:bg-white/10 px-4 py-2 items-center"
                >
                  Ver projeto <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-6 md:px-20 py-20 bg-gradient-to-r from-purple-950/40 to-zinc-950 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Vamos criar algo juntos?</h2>
          <p className="text-zinc-300 text-lg mb-8">Estou sempre aprendendo, evoluindo e desenvolvendo projetos.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:wallacyfigueiredoo@gmail.com" className="rounded-2xl bg-purple-600 hover:bg-purple-700 px-6 py-4 text-base flex items-center transition hover:scale-105">
              <Mail className="mr-2" size={20} /> Email
            </a>

            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-green-600 hover:bg-green-700 px-6 py-4 text-base flex items-center transition hover:scale-105">
              <Phone className="mr-2" size={20} /> WhatsApp
            </a>

            <a href="https://github.com/wallacyramos" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-purple-400/50 text-white bg-white/5 hover:bg-white/10 px-6 py-4 text-base flex items-center transition hover:scale-105">
              <Code2 className="mr-2" size={20} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <a
        href="#"
        className="fixed bottom-24 right-6 z-50 rounded-full bg-purple-600/80 hover:bg-purple-700 p-4 shadow-2xl shadow-purple-900/40 transition hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUpRight size={24} />
      </a>

      <footer className="px-6 py-8 text-center text-zinc-500 border-t border-white/10">
        © 2026 Wallacy Ramos. Desenvolvido com dedicação.
      </footer>
    </main>
  );
}