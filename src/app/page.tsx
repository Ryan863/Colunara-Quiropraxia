"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Car,
  Accessibility,
  MessageCircle,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

// Áreas de Cuidado (Círculos e Destaques - Seção 2)
const CARE_AREAS = [
  {
    id: "hernia",
    number: "01",
    title: "Hérnia de Disco",
    subtitle: "Descompressão & Alívio Radicular",
    description:
      "Técnicas manuais suaves para redução da pressão sobre as raízes nervosas e restauração do espaço articular intervertebral.",
    image: "/images/spine-treatment.jpg",
  },
  {
    id: "ciatico",
    number: "02",
    title: "Nervo Ciático",
    subtitle: "Desinflamação & Mobilidade",
    description:
      "Tratamento da causa lombar e glútea para cessar as pontadas, formigamentos e dores que irradiam para as pernas.",
    image: "/images/spine-desktop.png",
  },
  {
    id: "cervical",
    number: "03",
    title: "Cervicalgia & Torcicolo",
    subtitle: "Alinhamento & Amplitude",
    description:
      "Restauração do movimento natural do pescoço, dissipando tensões nos ombros e crises de cefaleia tensional.",
    image: "/images/thaise.jpg",
  },
  {
    id: "postura",
    number: "04",
    title: "Contraturas & Postura",
    subtitle: "Equilíbrio & Massoterapia",
    description:
      "Liberação profunda dos nós musculares paravertebrais associada à reeducação biomecânica das sobrecargas diárias.",
    image: "/images/clinic-interior.jpg",
  },
];

// Valores e Abordagem Clínica (Grid Linhas Finas - Seção 3)
const VALUES = [
  {
    number: "I",
    title: "Diagnóstico Biomecânico",
    subtitle: "Investigação da Causa Raiz",
    description:
      "Nenhum ajuste é realizado sem antes compreender sua rotina, histórico e avaliar detalhadamente a mobilidade de cada segmento da coluna.",
  },
  {
    number: "II",
    title: "A Terapeuta Thaise",
    subtitle: "Acolhimento & Segurança",
    description:
      "Atendimento estritamente humanizado e privativo na Sala 502. Respeito ao ritmo do seu corpo com manobras precisas, suaves e indolores.",
  },
  {
    number: "III",
    title: "Massoterapia Clínica",
    subtitle: "Descompressão Muscular Profunda",
    description:
      "Combinação sinérgica entre os ajustes articulares da quiropraxia e a terapia manual dos tecidos moles para um relaxamento duradouro.",
  },
  {
    number: "IV",
    title: "Saúde sem Medicamentos",
    subtitle: "Cuidado Conservador e Eficaz",
    description:
      "Restauramos a capacidade inata de autorregulação e cura do corpo, eliminando a dependência de analgésicos e anti-inflamatórios.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waUrl =
    "https://wa.me/5549988974419?text=" +
    encodeURIComponent(
      "Olá, Thaise! Gostaria de agendar uma avaliação na Colunara Quiropraxia."
    );

  return (
    <main className="min-h-screen bg-[#0E0E11] text-[#E6E2DC] selection:bg-[#C4A482]/30 selection:text-white font-sans overflow-x-hidden">
      {/* =========================================================================
          1. PRIMEIRA DOBRA: NAVBAR ULTRAFINA & HERO SECTION (100vh LIMPO)
          ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Navbar Transparente e Ultrafina */}
        <header className="relative z-30 w-full px-6 sm:px-12 lg:px-16 pt-8 pb-4 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <span
              style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
              className="text-2xl sm:text-3xl tracking-[0.2em] font-light text-[#F2EFEB] uppercase group-hover:text-[#C4A482] transition-colors duration-500"
            >
              Colunara
            </span>
          </a>

          {/* Links Simples Centrais / Direita */}
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-light text-[#A8A49E]">
            <a href="#cuidados" className="hover:text-[#F2EFEB] transition-colors duration-300">
              Tratamentos
            </a>
            <a href="#abordagem" className="hover:text-[#F2EFEB] transition-colors duration-300">
              A Clínica
            </a>
            <a href="#localizacao" className="hover:text-[#F2EFEB] transition-colors duration-300">
              Localização
            </a>
          </nav>

          {/* Botão Discreto de Agendamento */}
          <div className="hidden md:flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.18em] px-6 py-2.5 rounded-full border border-[#C4A482]/40 text-[#D4B996] hover:bg-[#C4A482] hover:text-[#0E0E11] transition-all duration-500"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E6E2DC] hover:text-[#C4A482] transition"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 z-40 bg-[#0E0E11]/95 backdrop-blur-xl border-b border-white/5 p-6 animate-in fade-in duration-300">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-widest text-[#A8A49E]">
              <a
                href="#cuidados"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C4A482]"
              >
                Tratamentos
              </a>
              <a
                href="#abordagem"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C4A482]"
              >
                A Clínica
              </a>
              <a
                href="#localizacao"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C4A482]"
              >
                Localização
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 text-center py-3 rounded-full bg-[#C4A482] text-[#0E0E11] font-medium tracking-wider"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        )}

        {/* Visual de Fundo: Imagem da Coluna Vertebral com Iluminação Suave e Fade Sutil */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Luz quente suave de fundo atrás da coluna vertebral */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] bg-[#C4A482]/12 rounded-full blur-[160px] animate-pulse-glow" />

          {/* Desktop Imagem Horizontal */}
          <div
            className="hidden md:block absolute inset-0 w-full h-full"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 65% at 50% 50%, black 35%, rgba(0,0,0,0.6) 60%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 65% at 50% 50%, black 35%, rgba(0,0,0,0.6) 60%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          >
            <Image
              src="/images/spine-desktop.png"
              alt="Coluna vertebral iluminada com precisão biomecânica"
              fill
              priority
              quality={95}
              className="object-cover object-center opacity-45 scale-100"
            />
          </div>

          {/* Mobile Imagem Vertical */}
          <div
            className="block md:hidden absolute inset-0 w-full h-full"
            style={{
              maskImage:
                "radial-gradient(ellipse 75% 70% at 50% 45%, black 30%, transparent 85%), linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 70% at 50% 45%, black 30%, transparent 85%), linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
          >
            <Image
              src="/images/spine-mobile.png"
              alt="Coluna vertebral iluminada mobile"
              fill
              priority
              quality={90}
              className="object-cover object-center opacity-35"
            />
          </div>

          {/* Película de vinheta e café escuro (#0E0E11) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-[#0E0E11]/30 to-[#0E0E11]/70" />
        </div>

        {/* Tipografia Central/Lateral (Estilo Serenity com respiro absoluto) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full my-auto flex flex-col items-center sm:items-end text-center sm:text-right">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl flex flex-col items-center sm:items-end"
          >
            {/* Título Refinado Serif */}
            <h1
              style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
              className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F2EFEB] leading-[1.08] tracking-tight mb-5"
            >
              Recupere o equilíbrio e a{" "}
              <span className="italic font-normal text-[#D4B996]">liberdade</span> do seu corpo.
            </h1>

            {/* Subtítulo em Fonte Leve */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A8A49E] font-light max-w-lg mb-8 leading-relaxed">
              Quiropraxia clínica e saúde postural no centro de Joaçaba. Diagnóstico minucioso e cuidado manual individualizado.
            </p>

            {/* Um Único Botão Pílula Sóbrio */}
            <div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-single-cta"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#C4A482] text-[#0E0E11] font-medium text-xs sm:text-sm tracking-[0.16em] uppercase hover:bg-[#D4B996] shadow-lg shadow-black/40 transition-all duration-500 active:scale-95"
              >
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Indicador Sutil de Scroll na Base */}
        <div className="relative z-10 w-full pb-8 flex flex-col items-center justify-center text-[#78746E]">
          <a
            href="#cuidados"
            className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] hover:text-[#C4A482] transition-colors duration-300"
          >
            <span>Descobrir</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* =========================================================================
          2. SEÇÃO 2: TRATAMENTOS & QUEIXAS (INSPIRADO NOS CÍRCULOS DA REFERÊNCIA)
          ========================================================================= */}
      <section id="cuidados" className="py-28 sm:py-36 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {/* Cabeçalho Minimalista da Seção */}
          <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C4A482] font-medium mb-3 block">
              Áreas de Cuidado
            </span>
            <h2
              style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
              className="text-3xl sm:text-5xl font-light text-[#F2EFEB] tracking-tight leading-tight"
            >
              Cuidado integral planejado para cessar a dor e restaurar o seu bem-estar.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#8E8A83] font-light leading-relaxed">
              Abordagem clínica focada nas causas mecânicas dos desconfortos posturais crônicos e agudos.
            </p>
          </div>

          {/* Grade de Círculos / Destaques da Referência */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 items-start">
            {CARE_AREAS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Moldura Circular Sofisticada com Foto & Linha Fina */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden p-1 border border-[#C4A482]/25 group-hover:border-[#C4A482] transition-colors duration-700 mb-6">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0E0E11]/40 group-hover:bg-[#0E0E11]/10 transition-colors duration-500" />
                    
                    {/* Número discreto dentro do círculo */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs uppercase tracking-widest text-[#F2EFEB] px-3 py-1 rounded-full bg-[#0E0E11]/80 backdrop-blur-sm border border-white/10">
                        {item.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Textos Curtos e Refinados */}
                <h3
                  style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                  className="text-xl sm:text-2xl font-light text-[#F2EFEB] mb-1 group-hover:text-[#D4B996] transition-colors"
                >
                  {item.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[#C4A482] mb-3 font-normal">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#8E8A83] font-light leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Botão de Encerramento da Seção */}
          <div className="mt-20 text-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full border border-white/10 text-[#C4A482] hover:border-[#C4A482] hover:text-[#F2EFEB] transition-all duration-300"
            >
              <span>Consultar Avaliação para o Seu Caso</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SEÇÃO 3: ABORDAGEM CLÍNICA & A ESPECIALISTA (GRID LINHAS FINAS)
          ========================================================================= */}
      <section id="abordagem" className="py-28 sm:py-36 relative border-t border-white/5 bg-[#121216]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Lado Esquerdo: Título Editorial "Our Values" */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#C4A482] font-medium mb-3 block">
                  Filosofia de Cuidado
                </span>
                <h2
                  style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F2EFEB] leading-[1.08] tracking-tight mb-6"
                >
                  A Arte e a Ciência do <span className="italic font-normal text-[#D4B996]">Ajuste</span>.
                </h2>
                <p className="text-xs sm:text-sm text-[#8E8A83] font-light leading-relaxed mb-8">
                  A Colunara Quiropraxia une os pilares da anatomia biomecânica à precisão do toque terapêutico no centro de Joaçaba, promovendo alívio consciente sem fármacos ou cirurgias.
                </p>
              </div>

              {/* Card sutil da especialista Thaise */}
              <div className="p-6 rounded-2xl border border-white/5 bg-[#0E0E11]/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C4A482]/40">
                    <Image
                      src="/images/thaise.jpg"
                      alt="Thaise - Quiropraxista e Terapeuta"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4
                      style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                      className="text-lg font-normal text-[#F2EFEB]"
                    >
                      Thaise
                    </h4>
                    <p className="text-[11px] uppercase tracking-wider text-[#C4A482]">
                      Quiropraxista & Terapeuta
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#8E8A83] italic font-light">
                  &ldquo;Cuidar da coluna é devolver às pessoas a leveza de viver sem medo do próprio movimento.&rdquo;
                </p>
              </div>
            </div>

            {/* Lado Direito: Grid Estruturado com Linhas Sutis (border-white/10) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 border-t sm:border-l border-white/10">
              {VALUES.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  className="p-8 sm:p-10 border-b sm:border-r border-white/10 flex flex-col justify-between min-h-[220px] hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs tracking-widest text-[#C4A482] mb-6">
                    <span>VALOR {val.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4A482]/40" />
                  </div>
                  <div>
                    <h3
                      style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                      className="text-2xl font-light text-[#F2EFEB] mb-1"
                    >
                      {val.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-[#A88B68] mb-3">
                      {val.subtitle}
                    </p>
                    <p className="text-xs text-[#8E8A83] font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SEÇÃO 4: ESTRUTURA, AVALIAÇÕES E AGENDAMENTO (EDITORIAL NARRATIVE)
          ========================================================================= */}
      <section id="localizacao" className="py-28 sm:py-36 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Lado Esquerdo: Narrativa e Depoimento Google 4.8★ */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C4A482] font-medium mb-3 block">
                Experiência & Acolhimento
              </span>

              <h2
                style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F2EFEB] leading-[1.08] tracking-tight mb-8"
              >
                Sua jornada de <span className="italic font-normal text-[#D4B996]">alívio</span> começa aqui...
              </h2>

              {/* Cartão Minimalista com Avaliação Google 4.8★ */}
              <div className="w-full p-8 rounded-3xl border border-white/10 bg-[#121216]/60 backdrop-blur-md mb-8">
                <div className="flex items-center gap-2 mb-4 text-[#D4B996]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4B996] text-[#D4B996]" />
                  ))}
                  <span className="text-xs font-medium text-[#F2EFEB] ml-2">
                    4,8 estrelas no Google (11 avaliações públicas)
                  </span>
                </div>
                <blockquote
                  style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
                  className="text-lg sm:text-xl font-light italic text-[#E6E2DC] leading-relaxed mb-4"
                >
                  &ldquo;Cheguei com a lombar completamente travada e saí da primeira sessão sentindo uma leveza que há anos não experimentava. O consultório é silencioso, acolhedor e a Thaise tem uma delicadeza ímpar.&rdquo;
                </blockquote>
                <p className="text-xs uppercase tracking-widest text-[#8E8A83]">
                  Mariana S. • Paciente verificada em Joaçaba
                </p>
              </div>

              {/* Botão de Encerramento para WhatsApp Direto */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#C4A482] text-[#0E0E11] font-medium text-xs uppercase tracking-[0.18em] hover:bg-[#D4B996] transition-all duration-300 shadow-xl shadow-black/60 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Horário no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Lado Direito: Comodidades Práticas & Detalhes da Clínica */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden border border-white/10 mb-2">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Consultório Colunara Quiropraxia Sala 502 Joaçaba"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 text-xs text-[#D4B996] uppercase tracking-widest">
                  Sala 502 • Edifício Comercial
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-white/5 bg-[#121216]/50">
                  <div className="flex items-center gap-2.5 text-[#C4A482] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">Localização Central</span>
                  </div>
                  <p className="text-xs text-[#E6E2DC] leading-snug">
                    R. Frei Edgar, 290 - Sala 502
                  </p>
                  <p className="text-[11px] text-[#8E8A83]">Centro, Joaçaba - SC (89600-000)</p>
                </div>

                <div className="p-5 rounded-2xl border border-white/5 bg-[#121216]/50">
                  <div className="flex items-center gap-2.5 text-[#C4A482] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">Atendimento Estendido</span>
                  </div>
                  <p className="text-xs text-[#E6E2DC] leading-snug">
                    Aberto até as 21:00
                  </p>
                  <p className="text-[11px] text-[#8E8A83]">Com horário previamente agendado</p>
                </div>

                <div className="p-5 rounded-2xl border border-white/5 bg-[#121216]/50">
                  <div className="flex items-center gap-2.5 text-[#C4A482] mb-1">
                    <Car className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">Estacionamento</span>
                  </div>
                  <p className="text-xs text-[#E6E2DC] leading-snug">
                    Vagas próprias no local
                  </p>
                  <p className="text-[11px] text-[#8E8A83]">Conveniência e tranquilidade</p>
                </div>

                <div className="p-5 rounded-2xl border border-white/5 bg-[#121216]/50">
                  <div className="flex items-center gap-2.5 text-[#C4A482] mb-1">
                    <Accessibility className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">Acessibilidade Total</span>
                  </div>
                  <p className="text-xs text-[#E6E2DC] leading-snug">
                    Elevadores & rampas
                  </p>
                  <p className="text-[11px] text-[#8E8A83]">Acesso para cadeirantes confirmado</p>
                </div>
              </div>

              {/* Botão de Rota GPS */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.+Frei+Edgar,+290+-+Centro,+Joa%C3%A7aba+-+SC,+89600-000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl border border-white/10 hover:border-[#C4A482]/40 text-center text-xs tracking-widest uppercase text-[#A8A49E] hover:text-[#F2EFEB] transition-colors"
              >
                Abrir Rota no Google Maps (GPS)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          RODAPÉ MINIMALISTA
          ========================================================================= */}
      <footer className="py-12 border-t border-white/5 bg-[#0A0A0D] text-[#78746E] text-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              style={{ fontFamily: 'var(--font-serif), "Cormorant Garamond", Georgia, serif' }}
              className="text-lg font-light text-[#F2EFEB] tracking-[0.2em] uppercase"
            >
              Colunara
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-[11px] text-[#8E8A83]">Sua coluna em boas mãos. Joaçaba - SC</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <a
              href="https://www.instagram.com/colunaraquiropraxia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A482] transition"
            >
              @colunaraquiropraxia
            </a>
            <span>(49) 98897-4419</span>
          </div>

          <div className="text-[10px] text-[#55524E]">
            © 2026 Colunara Quiropraxia. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
