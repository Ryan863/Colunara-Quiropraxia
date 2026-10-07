"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Accessibility, Car, Star } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Vim pelo site da Colunara Quiropraxia e gostaria de agendar uma consulta com a Thaise.");

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/50 py-2.5 px-4 sm:px-6"
            : "bg-slate-900/40 backdrop-blur-md border-white/10 py-3.5 px-4 sm:px-6"
        } flex items-center justify-between`}
      >
        {/* Brand & Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-lg shadow-purple-950/20 group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Logo Colunara Quiropraxia"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-wider font-sans">
                COLUNARA
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> 4.8
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-teal-300 font-medium tracking-wide">
              <span>QUIROPRAXIA</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 hidden sm:inline">Joaçaba - SC</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#para-quem-e"
            className="hover:text-teal-400 transition-colors"
          >
            Para Quem É
          </a>
          <a
            href="#tratamentos"
            className="hover:text-teal-400 transition-colors"
          >
            Tratamentos
          </a>
          <a
            href="#especialista"
            className="hover:text-teal-400 transition-colors"
          >
            A Especialista
          </a>
          <a
            href="#depoimentos"
            className="hover:text-teal-400 transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="hover:text-teal-400 transition-colors"
          >
            Localização
          </a>
        </nav>

        {/* Right action / Micro-badges */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-3 text-xs text-slate-400 border-r border-white/10 pr-4">
            <span className="flex items-center gap-1 text-slate-300" title="Estacionamento no local">
              <Car className="w-3.5 h-3.5 text-teal-400" /> Estacionamento
            </span>
            <span className="flex items-center gap-1 text-slate-300" title="Acesso para cadeirantes confirmado">
              <Accessibility className="w-3.5 h-3.5 text-teal-400" /> Acessível
            </span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-button"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 hover:opacity-95 shadow-lg shadow-teal-500/25 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Avaliação</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-emerald-500 text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-slate-950/95 border border-white/15 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-200">
            <a
              href="#para-quem-e"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-400 transition"
            >
              Para Quem É
            </a>
            <a
              href="#tratamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-400 transition"
            >
              Tratamentos
            </a>
            <a
              href="#especialista"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-400 transition"
            >
              A Especialista (Thaise)
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-400 transition"
            >
              Depoimentos (Google 4,8 ★)
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-teal-400 transition"
            >
              Localização (Centro de Joaçaba)
            </a>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-teal-400" /> Estacionamento no local
              </span>
              <span className="flex items-center gap-1.5">
                <Accessibility className="w-4 h-4 text-teal-400" /> Acessível
              </span>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
