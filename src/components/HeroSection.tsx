"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  Star,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Car,
  Accessibility,
  Activity,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";

const PAIN_POINTS = [
  {
    id: "lombar",
    label: "Dor Lombar & Coluna Travada",
    message: "Olá, Thaise! Sinto fortes dores na lombar / coluna travada e gostaria de agendar uma consulta na Colunara.",
  },
  {
    id: "cervical",
    label: "Cervical & Torcicolo",
    message: "Olá, Thaise! Sofro com dores na cervical e pescoço rígido. Como a quiropraxia pode me ajudar?",
  },
  {
    id: "ciatico",
    label: "Nervo Ciático",
    message: "Olá, Thaise! Tenho dores irradiando para as pernas (nervo ciático) e gostaria de uma avaliação na Colunara.",
  },
  {
    id: "hernia",
    label: "Hérnia de Disco / Postura",
    message: "Olá, Thaise! Tenho diagnóstico ou suspeita de hérnia de disco e busco tratamento conservador com quiropraxia.",
  },
  {
    id: "tensao",
    label: "Tensão & Dores de Cabeça",
    message: "Olá, Thaise! Sinto muita tensão nos ombros e cefaleia tensional. Quero agendar um horário na clínica.",
  },
];

export function HeroSection() {
  const [selectedPain, setSelectedPain] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const spineBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      if (spineBgRef.current) {
        gsap.to(spineBgRef.current, {
          yPercent: 12,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  const getWaLink = (customMsg?: string) => {
    const base = "https://wa.me/5549988974419?text=";
    const msg =
      customMsg ||
      "Olá, Thaise! Gostaria de agendar uma avaliação na Colunara Quiropraxia.";
    return base + encodeURIComponent(msg);
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#050814] overflow-hidden flex flex-col justify-between pt-28 pb-12 sm:pb-16"
    >
      {/* =========================================================================
          CAMADA VISUAL CENTRAL (Z-INDEX 0 / 1) - IMERSÃO MONUMENTAL
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Ponto de luz monumental âmbar/alaranjado atrás da coluna vertebral */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[850px] h-[350px] sm:h-[650px] lg:h-[850px] bg-gradient-to-tr from-[#FF7A00]/25 via-[#F97316]/15 to-transparent rounded-full blur-[140px] animate-pulse-glow" />

        {/* Halo ciano sutil de contraste clínico nas extremidades */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-700/10 rounded-full blur-[120px]" />

        {/* Elemento de Imagem Parallax com Máscara Radial e Linear Suave */}
        <div
          ref={spineBgRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            maskImage:
              "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, rgba(0,0,0,0.85) 55%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 50% 50%, black 30%, rgba(0,0,0,0.85) 55%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        >
          {/* Versão Desktop (Horizontal, centralizada em escala monumental) */}
          <div className="hidden md:block relative w-full h-full max-w-[1400px]">
            <Image
              src="/images/spine-desktop.png"
              alt="Corpo humano anatômico com coluna vertebral iluminada - Colunara Quiropraxia"
              fill
              priority
              quality={95}
              className="object-contain object-center scale-105 lg:scale-115 drop-shadow-[0_0_50px_rgba(255,122,0,0.35)]"
            />
          </div>

          {/* Versão Mobile (Vertical de corpo inteiro, integrada de forma fluida) */}
          <div className="block md:hidden relative w-full h-full">
            <Image
              src="/images/spine-mobile.png"
              alt="Coluna vertebral iluminada biomecânica mobile"
              fill
              priority
              quality={90}
              className="object-cover object-top opacity-55 scale-105 drop-shadow-[0_0_35px_rgba(255,122,0,0.3)]"
            />
          </div>
        </div>

        {/* Vinheta escura protetora sobreposta para legibilidade cristalina */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/40 to-[#050814]/75 z-1" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#050814]/30 to-[#050814]/85 z-1" />
      </div>

      {/* =========================================================================
          CAMADA DE CONTEÚDO PRINCIPAL (Z-INDEX 10) - TIPOGRAFIA E INTERAÇÕES
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge Superior: Avaliação Google 4.8★ & Especialidade */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080D1A]/80 border border-white/10 backdrop-blur-md shadow-xl shadow-black/50 mb-6 hover:border-amber-400/40 transition-colors"
          >
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Nota <strong className="text-white">4,8</strong> no Google (11 avaliações públicas)
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-xs text-orange-400 font-medium hidden sm:inline">
              Especializados em Coluna Vertebral
            </span>
          </motion.div>

          {/* Título Principal com contraste perfeito e gradiente biomecânico */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            Viva sem dores na coluna.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#F97316] to-[#FBBF24] drop-shadow-none">
              Recupere a sua mobilidade
            </span>{" "}
            e qualidade de vida.
          </motion.h1>

          {/* Subtítulo informativo */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed max-w-2xl mx-auto mb-8 font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          >
            Tratamento clínico com Quiropraxia e Massoterapia especializada no centro de Joaçaba. Diagnóstico biomecânico preciso, atendimento humanizado com a terapeuta Thaise e alívio perceptível desde a primeira sessão.
          </motion.p>

          {/* Seletor Interativo de Sintomas (Cards translúcidos em glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl mb-8 p-3 sm:p-4 rounded-3xl bg-[#080D1A]/75 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-3">
              <Activity className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>O que você está sentindo hoje? (Selecione para agilizar seu atendimento):</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {PAIN_POINTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedPain(selectedPain === item.id ? null : item.id)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-300 font-medium ${
                    selectedPain === item.id
                      ? "bg-gradient-to-r from-[#FF7A00] to-[#F97316] text-white border-orange-400 shadow-lg shadow-orange-500/35 scale-105"
                      : "bg-[#0B1224]/80 text-slate-300 border-white/10 hover:border-orange-500/40 hover:text-white hover:bg-[#0E172F]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grupo de Ação / CTAs Principais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href={
                selectedPain
                  ? getWaLink(PAIN_POINTS.find((p) => p.id === selectedPain)?.message)
                  : getWaLink()
              }
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-whatsapp-cta"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#FF7A00] via-[#F97316] to-[#EA580C] hover:opacity-95 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 active:scale-[0.98] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar Consulta no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-[#0B1224]/80 hover:bg-[#111C38] border border-white/10 backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:text-white"
            >
              <span>Conhecer os Tratamentos</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          DOCK / CARTÕES FLUTUANTES INFERIORES (ESTILO DA REFERÊNCIA)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-3 rounded-3xl bg-[#080D1A]/80 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/80">
          
          {/* Card 1: Localização & Sala */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#0B1224]/60 border border-white/5 hover:border-white/15 transition-colors">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Sala 502 • Joaçaba</p>
              <p className="text-[11px] text-slate-400 truncate">R. Frei Edgar, 290</p>
            </div>
          </div>

          {/* Card 2: Horário Estendido */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#0B1224]/60 border border-white/5 hover:border-white/15 transition-colors">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Até as 21:00</p>
              <p className="text-[11px] text-slate-400">Hora marcada</p>
            </div>
          </div>

          {/* Card 3: Estacionamento no local */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#0B1224]/60 border border-white/5 hover:border-white/15 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Estacionamento</p>
              <p className="text-[11px] text-slate-400">Vagas no local</p>
            </div>
          </div>

          {/* Card 4: Acessibilidade Total */}
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#0B1224]/60 border border-white/5 hover:border-white/15 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Accessibility className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Acessibilidade Total</p>
              <p className="text-[11px] text-slate-400">Rampas & elevador</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
