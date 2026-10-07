import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SymptomsSection } from "@/components/SymptomsSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClinicFacilitiesSection } from "@/components/ClinicFacilitiesSection";
import { LocationSection } from "@/components/LocationSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060910] text-slate-100 flex flex-col relative">
      {/* Fixed / Floating Navigation Header */}
      <Header />

      {/* Hero Section with AuroraBackground & Motion */}
      <HeroSection />

      {/* Section C: Para Quem É (Sintomas & Condições Tratadas) */}
      <SymptomsSection />

      {/* Section D: Tratamentos & Metodologia (Bento Grid) */}
      <TreatmentsSection />

      {/* Section E: A Especialista Thaise */}
      <SpecialistSection />

      {/* Section F: Depoimentos & Prova Social Google 4,8 ★ */}
      <TestimonialsSection />

      {/* Section G: Facilidades, Estacionamento & Acessibilidade */}
      <ClinicFacilitiesSection />

      {/* Section H: Localização & Como Chegar */}
      <LocationSection />

      {/* Section I: Perguntas Frequentes (FAQ) */}
      <FaqSection />

      {/* Section J: Rodapé Institucional */}
      <Footer />

      {/* Conversion Booster: Floating WhatsApp with Attention Badge */}
      <FloatingWhatsApp />
    </main>
  );
}
