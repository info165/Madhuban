import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChildBenefits } from './components/ChildBenefits';
import { LearningSteps } from './components/LearningSteps';
import { InteractivePathwayDemo } from './components/InteractivePathwayDemo';
import { Footer } from './components/Footer';
import { DownloadAppModal } from './components/DownloadAppModal';

export function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleScrollToSteps = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
      
      {/* Top Navbar */}
      <Navbar
        onDownloadClick={handleOpenDownload}
        onExploreSteps={handleScrollToSteps}
      />

      {/* Main Single Landing Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onDownloadClick={handleOpenDownload}
          onExploreSteps={handleScrollToSteps}
        />

        {/* Benefits Section: How Will Your Child Be Helped With This App? */}
        <ChildBenefits />

        {/* Steps Section: 4-Step Personalised Learning Process */}
        <LearningSteps
          onDownloadClick={handleOpenDownload}
        />

        {/* Live Interactive Demo Widget */}
        <InteractivePathwayDemo
          onDownloadClick={handleOpenDownload}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* App Store Download Modal */}
      <DownloadAppModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

    </div>
  );
}

export default App;
