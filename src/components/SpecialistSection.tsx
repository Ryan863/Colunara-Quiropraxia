"use client";

import React from "react";
import Image from "next/image";
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function SpecialistSection() {
  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá, Thaise! Gostaria de agendar uma consulta de Quiropraxia na Colunara em Joaçaba.");

  return (
    <section id="especialista" className="py-24 bg-[#070b14] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait and credentials badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 p-3 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/thaise.jpg"
                  alt="Thaise - Quiropraxista e Terapeuta na Colunara Quiropraxia"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating quote card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Propósito Clínico</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-snug">
                    &ldquo;Minha missão é proporcionar alívio genuíno, restaurando o equilíbrio do seu corpo com respeito, acolhimento e técnicas seguras.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Trust badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 p-4 rounded-2xl bg-slate-900 border border-teal-500/40 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Atendimento</p>
                <p className="text-sm font-extrabold text-white">100% Individualizado</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Values */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Cuidado Humanizado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Sua coluna em boas mãos com a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                terapeuta Thaise
              </span>
              .
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Na <strong>Colunara Quiropraxia</strong>, cada atendimento é conduzido com calma, precisão biomecânica e total empatia. Acreditamos que o tratamento da coluna vai muito além do ajuste físico: é sobre compreender a rotina do paciente, suas limitações e construir um caminho seguro para uma vida sem dor.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Escuta Ativa & Diagnóstico</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tempo dedicado a entender seu histórico, dores recorrentes e hábitos de trabalho antes de qualquer procedimento.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Ajustes Seguros e Confortáveis</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Técnicas manuais suaves e adaptadas à sensibilidade e idade de cada pessoa, sem desconforto desnecessário.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Ambiente Tranquilo e Privativo</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consultório reservado na Sala 502, com climatização ideal, som suave e total privacidade durante a sessão.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="flex items-center gap-2.5 mb-1.5 text-white font-bold text-sm">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Atendimento até as 21:00</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Horários estendidos para atender sua rotina de trabalho sem correria nem prejuízo para sua saúde.
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-teal-500 hover:bg-teal-600 shadow-xl shadow-teal-500/25 transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Horário com a Thaise</span>
              </a>
              <span className="text-xs text-slate-400">
                Atendimento no Centro de Joaçaba - SC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
