"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface Symptom {
  id: string;
  title: string;
  area: string;
  description: string;
  signs: string[];
  recommended: string;
}

const SYMPTOMS: Symptom[] = [
  {
    id: "lombar",
    title: "Dor Lombar & Coluna Travada",
    area: "Região Lombar / L1-L5",
    description: "Desconforto agudo ou constante na base das costas, dificuldade para levantar da cama ou sentar por períodos prolongados.",
    signs: ["Sensação de peso e rigidez matinal", "Pontadas ao se curvar ou tossir", "Músculos paravertebrais contraídos"],
    recommended: "Ajuste vertebral e liberação miofascial lombar",
  },
  {
    id: "cervical",
    title: "Cervicalgia & Torcicolo",
    area: "Região Cervical / C1-C7",
    description: "Tensão acumulada no pescoço, redução na rotação da cabeça e desconforto postural comum em quem trabalha no computador.",
    signs: ["Dores irradiando para o trapézio", "Estalos frequentes e sensação de areia", "Dor de cabeça tensional no fim do dia"],
    recommended: "Alinhamento cervical suave e massoterapia",
  },
  {
    id: "ciatico",
    title: "Inflamação do Nervo Ciático",
    area: "Lombossacra & Glúteo",
    description: "Dor que se origina na coluna lombar e viaja pela nádega, descendo pela coxa até a perna ou pé com formigamento.",
    signs: ["Sensação de choque ou queimação", "Fraqueza na perna ao caminhar", "Dificuldade em encontrar posição para dormir"],
    recommended: "Descompressão radicular e técnicas desinflamatórias",
  },
  {
    id: "hernia",
    title: "Hérnia & Protrusão Discal",
    area: "Discos Intervertebrais",
    description: "Pressão mecânica anormal do disco sobre as raízes nervosas. Cuidado conservador seguro focado em evitar cirurgias.",
    signs: ["Dor que piora ao sentar", "Perda de força ou sensibilidade", "Crises recorrentes de travamento"],
    recommended: "Descompressão articular biomecânica progressiva",
  },
  {
    id: "postura",
    title: "Desvios Posturais & Ergonomia",
    area: "Alinhamento Global",
    description: "Hipercifose, escoliose compensatória e tensões decorrentes da rotina de trabalho sentado ou esforços repetitivos.",
    signs: ["Ombros caídos para frente", "Fadiga postural generalizada", "Dores constantes entre as escápulas"],
    recommended: "Reeducação biomecânica e equilíbrio neuromuscular",
  },
  {
    id: "estresse",
    title: "Tensão Muscular & Estresse",
    area: "Músculos Paravertebrais e Escapulares",
    description: "Nódulos de tensão (pontos-gatilho) provocados pelo estresse diário, ansiedade e sobrecarga física ou mental.",
    signs: ["Ombros duros como pedra", "Dor ao toque na musculatura", "Sono não reparador"],
    recommended: "Massoterapia clínica combinada com relaxamento miofascial",
  },
];

export function SymptomsSection() {
  const [activeSymptom, setActiveSymptom] = useState<Symptom>(SYMPTOMS[0]);

  const waLink = `https://wa.me/5549988974419?text=${encodeURIComponent(
    `Olá! Me identifiquei com o quadro de "${activeSymptom.title}". Gostaria de agendar uma consulta na Colunara Quiropraxia.`
  )}`;

  return (
    <section id="para-quem-e" className="py-24 bg-[#070b13] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Indicações Clínicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Identifique sua dor. Nós cuidamos da{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              causa raiz
            </span>
            .
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A Quiropraxia não mascara os sintomas com remédios. Ela atua diretamente no alinhamento articular e na liberação do sistema nervoso para cessar o ciclo da dor.
          </p>
        </div>

        {/* Interactive Grid: List on Left + Anatomical Deep Dive Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Symptoms List Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SYMPTOMS.map((symptom) => {
              const isSelected = activeSymptom.id === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => setActiveSymptom(symptom)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-slate-800/90 border-teal-500/50 shadow-lg shadow-teal-950/40 translate-x-1"
                      : "bg-slate-900/40 border-white/5 hover:bg-slate-850 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-teal-500 text-white"
                          : "bg-slate-800 text-slate-400 group-hover:text-white"
                      }`}
                    >
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {symptom.title}
                      </h4>
                      <p className="text-xs text-slate-500">{symptom.area}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-teal-400 translate-x-1 opacity-100"
                        : "text-slate-600 opacity-40 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Detail Showcase Card (Inspired by reference Nexium & LumiDent) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeSymptom.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-teal-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    Foco Biomecânico: {activeSymptom.area}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    {activeSymptom.title}
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-white/10 flex items-center gap-2 self-start sm:self-auto">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">Tratamento Seguro & Sem Cirurgia</span>
                </div>
              </div>

              <div className="py-6">
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {activeSymptom.description}
                </p>

                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Sinais Comuns Deste Desequilíbrio:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {activeSymptom.signs.map((sign, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-850/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200">{sign}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-500/20 mb-6">
                  <p className="text-xs font-semibold text-teal-400 uppercase tracking-wide">
                    Protocolo Recomendado na Colunara:
                  </p>
                  <p className="text-sm font-medium text-white mt-1">
                    {activeSymptom.recommended}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400">
                    Atendimento individual com a terapeuta <strong>Thaise</strong> em Joaçaba.
                  </div>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition shadow-lg shadow-teal-500/25 active:scale-95"
                  >
                    <span>Agendar para este sintoma</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
