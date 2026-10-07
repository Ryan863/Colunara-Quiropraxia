"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    question: "O ajuste quiroprático dói? O que é aquele estalo?",
    answer:
      "Não dói! Os ajustes são feitos com movimentos específicos, rápidos e suaves. O som do 'estalo' não é osso batendo em osso ou quebrando, mas sim a liberação de bolhas de gás (cavitação) do líquido sinovial dentro da articulação ao recuperar o alinhamento. A maioria esmagadora dos pacientes relata alívio imediato e sensação de leveza.",
    tag: "Segurança & Conforto",
  },
  {
    question: "Quantas sessões são necessárias para sentir melhora?",
    answer:
      "Muitos pacientes relatam alívio substancial já na primeira ou segunda sessão. No entanto, o plano total depende da cronicidade do problema (se a dor começou há dias ou há anos), do histórico postural e dos hábitos diários. Na avaliação inicial, a Thaise traça uma previsão realista e honesta para o seu caso.",
    tag: "Resultados",
  },
  {
    question: "Tenho hérnia de disco ou bico de papagaio. Posso fazer quiropraxia?",
    answer:
      "Sim, e é altamente indicado! A quiropraxia é um dos tratamentos conservadores mais eficazes para descomprimir as raízes nervosas e reduzir a pressão sobre os discos lesionados. Ajustes cuidadosos restauram a mecânica vertebral, prevenindo cirurgias invasivas.",
    tag: "Condições Específicas",
  },
  {
    question: "Preciso levar exames de imagem (Raio-X ou Ressonância)?",
    answer:
      "Se você já tiver exames de imagem recentes da coluna, traga-os na sua consulta! Eles enriquecem o diagnóstico. Se não tiver, não se preocupe: a avaliação física, postural e ortopédica completa é realizada no consultório antes de qualquer ajuste, e caso haja necessidade médica, solicitaremos exames complementares.",
    tag: "Primeira Consulta",
  },
  {
    question: "Qual a diferença entre Quiropraxia e Massoterapia?",
    answer:
      "A Quiropraxia foca principalmente no alinhamento das articulações da coluna e na descompressão do sistema nervoso. Já a Massoterapia atua no tecido muscular, desmanchando nós de tensão, contraturas e contrabalanceando o estresse. Na Colunara, combinamos ambas as abordagens para você ter alívio tanto articular quanto muscular.",
    tag: "Metodologia",
  },
  {
    question: "Como funciona a primeira sessão com a terapeuta Thaise?",
    answer:
      "O atendimento começa com uma anamnese aprofundada para entender sua queixa principal e histórico. Em seguida, realizamos a avaliação biomecânica com testes de mobilidade. Estando tudo seguro e indicado, os ajustes e terapias manuais são realizados na mesma sessão com total cuidado e respeito ao seu ritmo.",
    tag: "Atendimento",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Tenho uma dúvida sobre a quiropraxia que não encontrei no site, poderiam me ajudar?");

  return (
    <section className="py-24 bg-[#070b13] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas Frequentes sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              o Tratamento
            </span>
            .
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Transparência e segurança em cada detalhe. Entenda como a Quiropraxia restaura seu corpo sem mistérios.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/90 border-teal-500/40 shadow-lg shadow-teal-950/20"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-teal-300 border border-white/5">
                      {faq.tag}
                    </span>
                    <h3 className="font-bold text-white text-base sm:text-lg">{faq.question}</h3>
                  </div>
                  <div
                    className={`p-2 rounded-xl bg-white/5 text-teal-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-teal-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-900/80 to-purple-950/40 border border-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-base">Ainda tem alguma dúvida específica?</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              Converse diretamente com a equipe da clínica pelo WhatsApp sem compromisso.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wide transition shadow-lg shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
