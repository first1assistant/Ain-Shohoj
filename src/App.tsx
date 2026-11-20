import { useEffect, useState } from 'react';
import { Language, LegalAnalysisResult, SpecialtyKey } from './types';
import { DEMO_SCENARIOS } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveDemo } from './components/LiveDemo';
import { HowItWorksAndFeatures } from './components/HowItWorksAndFeatures';
import { ForLawyersSection } from './components/ForLawyersSection';
import { BusinessAndRoadmap } from './components/BusinessAndRoadmap';
import { TrustEmergencyFooter } from './components/TrustEmergencyFooter';

export default function App() {
  const [language, setLanguage] = useState<Language>('bn');
  const [query, setQuery] = useState<string>(DEMO_SCENARIOS[0].promptText.bn);
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(DEMO_SCENARIOS[0].id);
  const [liveResult, setLiveResult] = useState<LegalAnalysisResult | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyKey>('all');

  useEffect(() => {
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  }, [language]);

  const handleLanguageChange = (nextLang: Language) => {
    setLanguage(nextLang);
    if (activeScenarioId) {
      const scenario = DEMO_SCENARIOS.find((s) => s.id === activeScenarioId);
      if (scenario) {
        setQuery(scenario.promptText[nextLang]);
      }
    }
  };

  const handleSelectScenario = (scenarioId: string) => {
    const scenario = DEMO_SCENARIOS.find((s) => s.id === scenarioId);
    if (!scenario) return;
    setActiveScenarioId(scenarioId);
    setLiveResult(null);
    setQuery(scenario.promptText[language]);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (activeScenarioId) {
      const scenario = DEMO_SCENARIOS.find((s) => s.id === activeScenarioId);
      if (scenario && value !== scenario.promptText[language]) {
        setActiveScenarioId(null);
      }
    }
  };

  const handleSelectTopicFromHero = (scenarioId?: string, customPrompt?: string) => {
    if (scenarioId) {
      handleSelectScenario(scenarioId);
    } else if (customPrompt) {
      setActiveScenarioId(null);
      setLiveResult(null);
      setQuery(customPrompt);
    }
    const demoEl = document.getElementById('demo');
    demoEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFindLawyer = (specialty: SpecialtyKey) => {
    setSelectedSpecialty(specialty);
    const lawyerEl = document.getElementById('find-lawyer');
    lawyerEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9EE] text-[#12284C]">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />

      <main className="flex-1">
        <Hero language={language} onSelectTopicScenario={handleSelectTopicFromHero} />

        <LiveDemo
          language={language}
          query={query}
          onQueryChange={handleQueryChange}
          activeScenarioId={activeScenarioId}
          onSelectScenario={handleSelectScenario}
          liveResult={liveResult}
          onLiveResult={setLiveResult}
          onFindLawyer={handleFindLawyer}
        />

        <HowItWorksAndFeatures language={language} />

        <ForLawyersSection
          language={language}
          selectedSpecialty={selectedSpecialty}
          onSelectSpecialty={setSelectedSpecialty}
        />

        <BusinessAndRoadmap language={language} />
      </main>

      <TrustEmergencyFooter language={language} />
    </div>
  );
}
