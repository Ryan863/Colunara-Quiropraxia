"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Car,
  Accessibility,
  Heart,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
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

export function Footer() {
  const currentYear = 2026;
  const waUrl = "https://wa.me/5549988974419?text=" + encodeURIComponent("Olá! Vim pelo rodapé do site da Colunara e gostaria de agendar uma consulta.");

  return (
    <footer className="bg-[#03050a] border-t border-white/10 text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Colunara Quiropraxia"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-wider">
                  COLUNARA
                </h3>
                <p className="text-xs text-teal-300 font-semibold tracking-wider">
                  QUIROPRAXIA & TERAPIAS
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic mb-4">
              &ldquo;Sua Coluna em Boas Mãos&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Clínica especializada no cuidado da coluna vertebral, dores musculares e reabilitação postural através da Quiropraxia e Massoterapia Clínica em Joaçaba - SC. Atendimento personalizado com a terapeuta Thaise.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4,8 no Google</span>
              <span className="text-slate-500">• 11 avaliações</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#para-quem-e" className="hover:text-teal-300 transition">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="hover:text-teal-300 transition">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#especialista" className="hover:text-teal-300 transition">
                  A Terapeuta (Thaise)
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-teal-300 transition">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-teal-300 transition">
                  Como Chegar
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tratamentos */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>• Ajustes Quiropráticos Biomecânicos</li>
              <li>• Massoterapia Clínica Profunda</li>
              <li>• Descompressão de Hérnia de Disco</li>
              <li>• Tratamento para Nervo Ciático</li>
              <li>• Correção Postural & Cervicalgias</li>
              <li>• Liberação Miofascial de Tensão</li>
            </ul>
          </div>

          {/* Column 4: Localização & Contato */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
              Contato & Localização
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>R. Frei Edgar, 290 - Sala 502, Centro - Joaçaba/SC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Aberto até as 21:00 (hora marcada)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition font-semibold text-white"
                >
                  (49) 98897-4419
                </a>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href="https://www.instagram.com/colunaraquiropraxia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition"
                >
                  @colunaraquiropraxia
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3 text-slate-400">
                <span className="flex items-center gap-1" title="Estacionamento próprio">
                  <Car className="w-3.5 h-3.5 text-teal-400" /> Estacionamento
                </span>
                <span className="flex items-center gap-1" title="Acessibilidade confirmada">
                  <Accessibility className="w-3.5 h-3.5 text-teal-400" /> Acessível PCD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer ético e legal */}
        <div className="pt-8 border-t border-white/5 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Aviso Legal & Ético:</strong> O conteúdo deste site é exclusivamente educativo e informativo. A quiropraxia e a massoterapia são abordagens de saúde que necessitam de exame físico individualizado. Casos que exijam intervenção cirúrgica de emergência são devidamente orientados e encaminhados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-500">
            <p>
              © {currentYear} Colunara Quiropraxia - Todos os direitos reservados. CNPJ e registro profissional regularizados.
            </p>
            <p className="flex items-center gap-1 text-[11px]">
              Desenvolvido com <Heart className="w-3 h-3 text-teal-400 fill-teal-400" /> para sua saúde e bem-estar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
