'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { ImpactStats } from './ImpactStats';
import { ClientWork } from './ClientWork';
import { Projects } from './Projects';
import { Education } from './Education';
import { Journey } from './Journey';
import { ReghanEmpire } from './ReghanEmpire';
import { FuturePlans } from './FuturePlans';
import { MissionVision } from './MissionVision';
import { ResumeSection } from './ResumeSection';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const PortfolioExperience: React.FC = () => {
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('Digital Marketing & Lead Gen');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-obsidian text-titanium-light relative font-sans selection:bg-gold/30 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onHireMeClick={scrollToContact} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onHireMeClick={scrollToContact}
          onWorkTogetherClick={scrollToContact}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Dedicated Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Skills & Capabilities Section */}
        <Skills />

        {/* 5. Verified Experience (SHA Innovative Technologies) */}
        <Experience />

        {/* 6. Verified Impact Stats (10+ Leads, 5 Clients, 40% Reach Increase) */}
        <ImpactStats />

        {/* 7. Client Work & Video Portfolio */}
        <ClientWork />

        {/* 8. Engineering Pipeline / Projects in Progress */}
        <Projects />

        {/* 9. Academic Qualification */}
        <Education />

        {/* 10. Journey & Evolution */}
        <Journey />

        {/* 11. Reghan Empire — Long-Term Entrepreneurial Vision */}
        <ReghanEmpire />

        {/* 12. Strategic Roadmap */}
        <FuturePlans />

        {/* 13. Mission & Vision */}
        <MissionVision />

        {/* 14. Official Resume / CV Download */}
        <ResumeSection />

        {/* 15. Direct Contact Section */}
        <Contact initialInquiryType={selectedInquiryType} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
