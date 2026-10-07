"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Clock,
  Copy,
  Check,
  Building,
  Car,
  Accessibility,
} from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const addressText = "R. Frei Edgar, 290 - Sala 502 - Centro, Joaçaba - SC, 89600-000";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "R. Frei Edgar, 290, Sala 502, Joaçaba, SC, 89600-000"
  )}`;
  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Gostaria de confirmar o endereço e agendar um horário na Colunara Quiropraxia.");

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-24 bg-[#05080f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Central</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Fácil de chegar no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              coração de Joaçaba
            </span>
            .
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Consultório moderno e acessível, situado na Rua Frei Edgar, com estacionamento e conforto para pacientes de Joaçaba, Herval d&apos;Oeste e toda a região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact & Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-teal-400" />
                <span>Colunara Quiropraxia</span>
              </h3>

              {/* Detail Items */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400 font-medium">Endereço Físico</p>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      R. Frei Edgar, 290 - Sala 502
                    </p>
                    <p className="text-xs text-slate-300">Centro, Joaçaba - SC, 89600-000</p>
                    <p className="text-[11px] text-teal-400 font-mono mt-1">
                      Plus Code: RFFV+84 Joaçaba / Herval d&apos;Oeste - SC
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Horário de Atendimento</p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Aberto até as 21:00 (Segunda a Sexta)
                    </p>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">
                      Atendimento com horário previamente agendado
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">WhatsApp / Telefone</p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-emerald-400 transition mt-0.5 inline-block"
                    >
                      (49) 98897-4419
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Agendamento direto e esclarecimento de dúvidas</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Instagram Oficial</p>
                    <a
                      href="https://www.instagram.com/colunaraquiropraxia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-purple-300 hover:text-white transition mt-0.5 inline-block"
                    >
                      @colunaraquiropraxia
                    </a>
                    <p className="text-xs text-slate-400">Dicas posturais, rotina e novidades da clínica</p>
                  </div>
                </div>
              </div>

              {/* Accessibility badges */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-teal-400" /> Estacionamento
                </span>
                <span className="flex items-center gap-1.5">
                  <Accessibility className="w-4 h-4 text-teal-400" /> Acessibilidade PCD
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-route-trigger"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm transition shadow-lg shadow-teal-500/25 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (GPS)</span>
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Endereço</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View & Navigation Preview */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 relative flex flex-col min-h-[420px]">
            <iframe
              title="Localização Colunara Quiropraxia - Sala 502 Joaçaba SC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.844093952549!2d-51.5074!3d-27.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3975be92a35cb%3A0x9d4a8eef316b249!2sR.+Frei+Edgar%2C+290+-+Centro%2C+Joa%C3%A7aba+-+SC%2C+89600-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1pt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.9)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />

            {/* Overlay badge with location confirmation */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto p-3.5 rounded-2xl bg-slate-950/90 border border-white/15 backdrop-blur-md text-white shadow-xl max-w-sm pointer-events-none">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-bold text-xs">R. Frei Edgar, 290 • Sala 502</p>
              </div>
              <p className="text-[11px] text-slate-300">
                Edifício Comercial no Centro de Joaçaba, próximo a pontos estratégicos com fácil acesso de carro ou a pé.
              </p>
            </div>

            {/* Bottom floating button */}
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/95 hover:bg-slate-800 text-white border border-teal-500/40 shadow-xl backdrop-blur text-xs font-semibold transition"
              >
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
