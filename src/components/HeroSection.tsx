"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Star,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Car,
  Accessibility,
  Activity,
} from "lucide-react";

const PAIN_POINTS = [
  { id: "lombar", label: "Dor Lombar & Coluna Travada", message: "Olá! Sinto fortes dores na lombar / coluna travada e gostaria de agendar uma consulta na Colunara." },
  { id: "cervical", label: "Cervical & Torcicolo", message: "Olá! Sofro com dores na cervical e pescoço rígido. Como a quiropraxia pode me ajudar?" },
  { id: "ciatico", label: "Nervo Ciático", message: "Olá! Tenho dores irradiando para as pernas (nervo ciático) e gostaria de uma avaliação na Colunara." },
  { id: "hernia", label: "Hérnia de Disco / Postura", message: "Olá! Tenho diagnóstico ou suspeita de hérnia de disco e busco tratamento com quiropraxia." },
  { id: "tensao", label: "Tensão & Dores de Cabeça", message: "Olá! Sinto muita tensão nos ombros e cefaleia tensional. Quero agendar com a Thaise." },
];

export function HeroSection() {
  const [selectedPain, setSelectedPain] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const spineDesktopRef = useRef<HTMLDivElement>(null);
  const spineMobileRef = useRef<HTMLDivElement>(null);

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
      if (spineDesktopRef.current) {
        gsap.to(spineDesktopRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (spineMobileRef.current) {
        gsap.to(spineMobileRef.current, {
          yPercent: 14,
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
    const msg = customMsg || "Olá! Gostaria de agendar uma avaliação na Colunara Quiropraxia com a Thaise.";
    return base + encodeURIComponent(msg);
  };

  return (
    <div ref={heroRef} className="relative bg-[#050814] overflow-hidden">
      {/* Imagem Vertical da Coluna para Mobile (Mesclada ao fundo com suave fade) */}
      <div
        ref={spineMobileRef}
        className="lg:hidden absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, rgba(0,0,0,0.5) 55%, transparent 80%), linear-gradient(to bottom, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 30%, black 20%, rgba(0,0,0,0.5) 55%, transparent 80%), linear-gradient(to bottom, black 30%, transparent 95%)",
        }}
      >
        <Image
          src="/images/spine-mobile.png"
          alt="Coluna Vertebral Iluminada Biomecânica Mobile"
          fill
          priority
          className="object-cover object-top opacity-30 sm:opacity-40"
        />
      </div>

      <AuroraBackground className="pt-32 pb-20 md:pt-36 md:pb-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Bloco de Título, Subtítulo e CTAs com Framer Motion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-start text-left relative z-20"
            >
              {/* Top Rating Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#080D1A]/90 border border-teal-500/30 backdrop-blur-md shadow-lg shadow-black/40 mb-6">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Nota <strong className="text-white">4,8</strong> no Google (11 avaliações)
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-xs text-teal-300 font-medium hidden sm:inline">
                  Especialistas em Coluna Vertebral
                </span>
              </div>

              {/* H1 Heading com realce biomecânico laranja/âmbar */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Viva sem dores na coluna.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#F97316] to-[#FBBF24]">
                  Recupere sua mobilidade
                </span>{" "}
                e qualidade de vida.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
                Tratamento clínico com Quiropraxia e Massoterapia especializada no centro de Joaçaba. Diagnóstico biomecânico preciso, atendimento humanizado com a terapeuta Thaise e alívio perceptível desde a primeira sessão.
              </p>

              {/* Interactive Pain Filter / Quick context selection */}
              <div className="w-full mb-8 p-4 rounded-2xl bg-[#080D1A]/70 border border-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-3">
                  <Activity className="w-3.5 h-3.5 text-orange-400" />
                  <span>O que você está sentindo hoje? (Selecione para agilizar):</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PAIN_POINTS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPain(selectedPain === item.id ? null : item.id)}
                      className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                        selectedPain === item.id
                          ? "bg-gradient-to-r from-[#FF7A00] to-[#F97316] text-white border-orange-400 shadow-md shadow-orange-500/30 scale-105"
                          : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <a
                  href={
                    selectedPain
                      ? getWaLink(PAIN_POINTS.find((p) => p.id === selectedPain)?.message)
                      : getWaLink()
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-whatsapp-cta"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#FF7A00] via-[#F97316] to-[#EA580C] hover:opacity-95 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Agendar Consulta no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#tratamentos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur transition-all"
                >
                  <span>Conhecer os Tratamentos</span>
                </a>
              </div>

              {/* Micro-selos de Confiança */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 pt-4 border-t border-white/10 w-full">
                <div className="flex items-center gap-1.5 font-medium">
                  <Car className="w-4 h-4 text-teal-400" />
                  <span>Estacionamento no local</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Accessibility className="w-4 h-4 text-teal-400" />
                  <span>Acessibilidade total</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Profissionais graduados</span>
                </div>
              </div>
            </motion.div>

            {/* Imagem Horizontal da Coluna para Desktop (PC) - Mesclagem sem moldura com máscara CSS e Parallax GSAP */}
            <div className="hidden lg:block lg:col-span-5 relative w-full h-[580px]">
              <div
                ref={spineDesktopRef}
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 90% 85% at 55% 50%, black 45%, rgba(0,0,0,0.85) 65%, transparent 95%), linear-gradient(to left, black 65%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 90% 85% at 55% 50%, black 45%, rgba(0,0,0,0.85) 65%, transparent 95%), linear-gradient(to left, black 65%, transparent 100%)",
                }}
              >
                {/* Glow biomecânico âmbar/laranja de fundo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

                <Image
                  src="/images/spine-desktop.png"
                  alt="Coluna Vertebral Iluminada Biomecânica"
                  fill
                  priority
                  className="object-contain object-center scale-110 drop-shadow-[0_0_35px_rgba(255,122,0,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
