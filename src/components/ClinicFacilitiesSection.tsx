"use client";

import React from "react";
import Image from "next/image";
import {
  Car,
  Accessibility,
  Clock,
  Building,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function ClinicFacilitiesSection() {
  return (
    <section className="py-24 bg-[#070b13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-3 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Espaço e consultório da Colunara Quiropraxia Sala 502 Joaçaba"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur border border-white/10 text-white">
                  <p className="font-bold text-sm">Consultório 502 • Centro de Joaçaba</p>
                  <p className="text-xs text-slate-300">Estrutura ergonômica planejada para o seu relaxamento e alívio da dor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Facilities & Accessibility Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>Conforto & Estrutura</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Acessibilidade total, estacionamento e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                tranquilidade para você
              </span>
              .
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Ir ao quiropraxista quando se está com dor não pode ser um sacrifício. Por isso, a <strong>Colunara Quiropraxia</strong> foi instalada em um edifício de alto padrão no centro de Joaçaba com total infraestrutura para seu bem-estar.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 flex flex-col gap-2">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 w-fit">
                  <Car className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Estacionamento no Local</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Vagas convenientes para você estacionar com tranquilidade, sem estresse de procurar vaga na rua antes da sua consulta.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 flex flex-col gap-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Acesso para Cadeirantes</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Acessibilidade total confirmada: rampas sem obstáculos, elevadores amplos e corredores adaptados para mobilidade reduzida.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 flex flex-col gap-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Aberto até as 21:00</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Horário noturno estendido para quem precisa ser atendido após o expediente comercial, com hora marcada.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 flex flex-col gap-2">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Privacidade na Sala 502</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Espaço silencioso, climatizado e exclusivamente dedicado ao seu tratamento individual e recuperação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
