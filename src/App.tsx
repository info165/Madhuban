import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnershipPillars } from './components/PartnershipPillars';
import { ChildBenefits } from './components/ChildBenefits';
import { LearningSteps } from './components/LearningSteps';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { DownloadAppModal } from './components/DownloadAppModal';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => setIsDownloadModalOpen(true);
  const handleScrollToSteps = () => scrollToId('how-it-works');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-maroon-100 selection:text-maroon-900">

        <Navbar onDownloadClick={handleOpenDownload} />

        <main>
          {/* 1. First impression: what this is and the one action that matters */}
          <Hero onDownloadClick={handleOpenDownload} onExploreSteps={handleScrollToSteps} />

          {/* 2. Trust: why a book publisher + an adaptive-learning company, together */}
          <PartnershipPillars />

          {/* 3. What's in it for the student holding the phone right now */}
          <ChildBenefits />

          {/* 4. How the loop actually works */}
          <LearningSteps />

          {/* 5. Objection handling */}
          <FAQSection />
        </main>

        <Footer onDownloadClick={handleOpenDownload} />

        <DownloadAppModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
      </div>
    </MotionConfig>
  );
}

export default App;
