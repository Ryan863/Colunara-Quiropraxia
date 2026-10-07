"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Star,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Car,
  Accessibility,
  Activity,
  CheckCircle2,
  Sparkles,
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

  const getWaLink = (customMsg?: string) => {
    const base = "https://wa.me/5549988974419?text=";
    const msg = customMsg || "Olá! Gostaria de agendar uma avaliação na Colunara Quiropraxia com a Thaise.";
    return base + encodeURIComponent(msg);
  };

  return (
    <AuroraBackground className="pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/30 backdrop-blur-md shadow-lg shadow-teal-950/30 mb-6"
            >
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
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Viva sem dores na coluna.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200">
                Recupere sua mobilidade
              </span>{" "}
              e qualidade de vida.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Tratamento clínico com Quiropraxia e Massoterapia especializada no centro de Joaçaba. Diagnóstico biomecânico preciso, atendimento humanizado com a terapeuta Thaise e alívio perceptível desde a primeira sessão.
            </motion.p>

            {/* Interactive Pain Filter / Quick context selection */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="w-full mb-8 p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                <span>O que você está sentindo hoje? (Selecione para agilizar):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PAIN_POINTS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedPain(selectedPain === item.id ? null : item.id)}
                    className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                      selectedPain === item.id
                        ? "bg-teal-500 text-white border-teal-400 shadow-md shadow-teal-500/30 scale-105"
                        : "bg-slate-800/80 text-slate-300 border-white/10 hover:border-teal-500/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8"
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
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 hover:opacity-95 shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all active:scale-[0.98]"
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
            </motion.div>

            {/* Micro-selos de Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 pt-4 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <Car className="w-4 h-4 text-emerald-400" />
                <span>Estacionamento no local</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Accessibility className="w-4 h-4 text-emerald-400" />
                <span>Acessibilidade total</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Profissionais graduados</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composition inspired by Nexium & LumiDent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Orb */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Main Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/95 shadow-2xl backdrop-blur-xl p-3 sm:p-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden group">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Clínica Colunara Quiropraxia em Joaçaba"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Floating pill badge on image */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/15 backdrop-blur text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Ambiente Clínico Acolhedor</span>
                </div>

                {/* Floating quote / highlight inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border border-teal-400/40">
                      <Image
                        src="/images/thaise.jpg"
                        alt="Terapeuta Thaise"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Thaise</p>
                      <p className="text-[11px] text-teal-300">Quiropraxista & Terapeuta</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.8
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    &ldquo;Cada coluna tem uma história. Nosso compromisso é identificar a causa raiz para devolver sua liberdade de movimento.&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Quick Metric Pills */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-white">100%</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">Personalizado</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-teal-300">Até 21h</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">Horário Flexível</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-white/5 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-emerald-400">Sala 502</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">Centro Joaçaba</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
