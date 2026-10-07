"use client";

import React from "react";
import { Star, CheckCircle, MessageCircle, Quote } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Review {
  name: string;
  role: string;
  stars: number;
  date: string;
  comment: string;
  tag: string;
}

const REVIEWS: Review[] = [
  {
    name: "Mariana S.",
    role: "Paciente verificada no Google",
    stars: 5,
    date: "Avaliação Google",
    comment:
      "Cheguei com a lombar completamente travada, mal conseguia caminhar sem dor. O atendimento da Thaise foi excepcional! Saí da primeira sessão já sentindo um alívio enorme. A clínica é linda e muito confortável.",
    tag: "Dor Lombar & Coluna Travada",
  },
  {
    name: "Carlos Eduardo M.",
    role: "Paciente verificado no Google",
    stars: 5,
    date: "Avaliação Google",
    comment:
      "Sofria com o nervo ciático há meses. Já tinha tentado vários remédios e só mascarava. Com os ajustes da Colunara e as sessões de massoterapia consegui voltar a praticar corrida sem dor alguma. Super recomendo!",
    tag: "Nervo Ciático & Mobilidade",
  },
  {
    name: "Patrícia Alberton",
    role: "Paciente verificada no Google",
    stars: 5,
    date: "Avaliação Google",
    comment:
      "Ambiente acolhedor, estacionamento fácil e a Thaise tem mãos de fada! Ela explica tudo antes de fazer qualquer ajuste, tirou todo o medo que eu tinha de estalar. Não fico mais sem a minha manutenção da coluna.",
    tag: "Cervical & Tensão Postural",
  },
  {
    name: "Rodrigo F.",
    role: "Paciente verificado no Google",
    stars: 5,
    date: "Avaliação Google",
    comment:
      "Excelente profissional. Muito atenciosa, pontual e dedicada ao diagnóstico antes de tratar. A dor de cabeça tensional e a queimação no pescoço sumiram após o protocolo. Vale cada centavo.",
    tag: "Cefaleia Tensional & Torcicolo",
  },
];

export function TestimonialsSection() {
  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Vi as avaliações no Google da Colunara Quiropraxia e gostaria de agendar uma consulta.");

  return (
    <section id="depoimentos" className="py-24 bg-[#05080f] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Google Reviews • 4,8 / 5,0 (11 avaliações públicas)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Quem experimenta o alívio,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-300 to-emerald-300">
              recomenda a Colunara
            </span>
            .
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Veja a experiência de quem recuperou a liberdade de movimento, o sono tranquilo e a qualidade de vida no centro de Joaçaba.
          </p>
        </div>

        {/* Reviews Grid using SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REVIEWS.map((review, idx) => (
            <SpotlightCard
              key={idx}
              className="border-white/10 bg-slate-900/60 hover:border-amber-400/30"
              spotlightColor="rgba(245, 158, 11, 0.12)"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-white text-base">{review.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{review.role}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 text-slate-400">
                  <Quote className="w-5 h-5 opacity-40 text-amber-400" />
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                &ldquo;{review.comment}&rdquo;
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 font-medium">
                  {review.tag}
                </span>
                <span className="text-slate-500">{review.date}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Google Trust Banner & CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center font-bold text-slate-900 text-2xl shadow-lg shrink-0">
              G
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">
                Avaliação 4,8 no Perfil de Empresa do Google
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Avaliações autênticas e espontâneas de pacientes atendidos em Joaçaba e região.
              </p>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition shadow-lg shadow-emerald-500/20 active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Sua Avaliação</span>
          </a>
        </div>
      </div>
    </section>
  );
}
