"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface FloatingWhatsAppProps {
  phone?: string;
  defaultMessage?: string;
}

export function FloatingWhatsApp({
  phone = "5549988974419",
  defaultMessage = "Olá, Thaise! Gostaria de tirar dúvidas sobre a Quiropraxia e agendar uma avaliação na Colunara.",
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Atendimento WhatsApp Colunara Quiropraxia"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Interactive Tooltip Card when opened */}
      {isOpen && (
        <div className="w-80 p-4 rounded-2xl bg-slate-900/95 border border-teal-500/30 shadow-2xl backdrop-blur-xl text-white mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                CQ
              </div>
              <div>
                <p className="font-semibold text-sm">Colunara Quiropraxia</p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Atendimento até 21h</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            Olá! Está com dores na coluna, pescoço ou tensão muscular? Fale diretamente com nossa equipe para agendar sua sessão com a terapeuta Thaise.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-card-cta"
            className="mt-3.5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs tracking-wide transition shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Iniciar Conversa no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-slate-200 text-xs font-medium backdrop-blur shadow-lg hover:border-emerald-500/60 transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Agendamento Rápido</span>
          </button>
        )}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-600/30 transition-transform active:scale-95 duration-200"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300" />
          </span>
          <MessageCircle className="w-6 h-6 sm:mr-2 stroke-[2.2]" />
          <span className="hidden sm:inline font-semibold text-sm tracking-wide">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
}
