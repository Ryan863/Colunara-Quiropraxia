"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  Activity,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Layers,
  Zap,
} from "lucide-react";

export function TreatmentsSection() {
  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Gostaria de entender melhor os tratamentos de Quiropraxia e Massoterapia na Colunara e agendar um horário.");

  return (
    <section id="tratamentos" className="py-24 bg-[#05080f] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Procedimentos Especializados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Metodologia integrada para a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                saúde da sua coluna
              </span>
              .
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Aliamos a precisão científica dos ajustes articulares ao acolhimento terapêutico da massoterapia para tratar dores crônicas e agudas com segurança máxima.
            </p>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-semibold text-sm transition shadow-lg shrink-0 self-start md:self-end"
          >
            <span>Consultar Tratamento Ideal</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </a>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {/* Card 1: Quiropraxia Clínica (Large Featured Card) */}
          <BentoCard
            className="md:col-span-2 relative overflow-hidden"
            badge="Tratamento Principal"
            title="Quiropraxia Clínica & Ajustes Manuais Biomecânicos"
            description="Técnica especializada na detecção e correção de subluxações vertebrais. Através de movimentos rápidos, específicos e indolores, restabelecemos o alinhamento das vértebras, aliviando a compressão dos nervos e devolvendo a mobilidade natural do corpo."
            icon={
              <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Activity className="w-6 h-6" />
              </div>
            }
            header={
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/images/spine-treatment.jpg"
                  alt="Ajuste de quiropraxia clínica na Colunara"
                  fill
                  className="object-cover group-hover/bento:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-white/10 text-xs font-medium text-emerald-300">
                  ✓ Alívio rápido e seguro
                </div>
              </div>
            }
            footer={
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Coluna Cervical, Torácica e Lombar</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Articulações Periféricas</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Sem uso de remédios</span>
              </div>
            }
          />

          {/* Card 2: Massoterapia Clínica */}
          <BentoCard
            className="md:col-span-1"
            badge="Terapia Manual"
            title="Massoterapia Clínica Especializada"
            description="Focada em desmanchar contraturas, nós de tensão e pontos-gatilho. Relaxa a musculatura profunda que sustenta a coluna e prepara o corpo para melhor absorção dos ajustes vertebrais."
            icon={
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <HeartHandshake className="w-6 h-6" />
              </div>
            }
            footer={
              <div className="text-xs text-slate-400">
                Indicado para estresse, sobrecarga postural e rigidez muscular crônica.
              </div>
            }
          />

          {/* Card 3: Avaliação Biomecânica Detalhada */}
          <BentoCard
            className="md:col-span-1"
            badge="Etapa Inicial"
            title="Avaliação & Diagnóstico Postural"
            description="Nenhuma intervenção é feita sem antes entender seu histórico, rotina e realizar testes de amplitude de movimento e palpação vertebral minuciosa."
            icon={
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
            }
            footer={
              <div className="text-xs text-slate-400">
                Segurança máxima e plano individualizado para cada paciente.
              </div>
            }
          />

          {/* Card 4: Liberação Miofascial & Descompressão */}
          <BentoCard
            className="md:col-span-1"
            badge="Mobilidade"
            title="Liberação Miofascial & Tecidos Moles"
            description="Manipulação cuidadosa das fáscias musculares para restaurar a circulação, liberar aderências e devolver a flexibilidade aos movimentos cotidianos."
            icon={
              <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Layers className="w-6 h-6" />
              </div>
            }
            footer={
              <div className="text-xs text-slate-400">
                Ideal para praticantes de atividade física e dores crônicas.
              </div>
            }
          />

          {/* Card 5: Manutenção & Prevenção Contínua */}
          <BentoCard
            className="md:col-span-1"
            badge="Cuidado Contínuo"
            title="Manutenção Preventiva da Coluna"
            description="Assim como cuidamos da saúde bucal, a coluna vertebral necessita de manutenção preventiva para evitar novas crises e garantir longevidade ativa."
            icon={
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Zap className="w-6 h-6" />
              </div>
            }
            footer={
              <div className="text-xs text-slate-400">
                Preserve sua postura e viva com disposição todos os dias.
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}
