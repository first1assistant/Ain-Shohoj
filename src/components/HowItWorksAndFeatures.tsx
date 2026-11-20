import { BookMarked, CheckSquare, Compass, FileText, Languages, Scale, ShieldCheck, UserCheck } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/content';

interface HowItWorksAndFeaturesProps {
  language: Language;
}

export function HowItWorksAndFeatures({ language }: HowItWorksAndFeaturesProps) {
  const stepIcons = [FileText, Scale, Compass];
  const featureIcons = [Languages, BookMarked, CheckSquare, UserCheck, ShieldCheck];

  return (
    <>
      {/* Section 3: How It Works */}
      <section id="how-it-works" className="py-14 sm:py-20 bg-white border-y border-[#12284C]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
              {UI_COPY.howItWorks.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#12284C]/75 mt-2.5 leading-relaxed">
              {UI_COPY.howItWorks.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {UI_COPY.howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <div
                  key={step.numEn}
                  className="rounded-3xl bg-[#FFF9EE] border border-[#12284C]/12 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-2xl font-extrabold text-[#C9A24B] tabular-nums">
                        {language === 'bn' ? step.num : step.numEn}
                      </span>
                      <span className="w-11 h-11 rounded-2xl bg-white border border-[#12284C]/10 text-[#12284C] flex items-center justify-center">
                        <Icon className="w-5 h-5" strokeWidth={1.85} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C] mb-2.5">
                      {step.title[language]}
                    </h3>
                    <p className="text-base text-[#12284C]/80 leading-relaxed">
                      {step.desc[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Features */}
      <section id="features" className="py-14 sm:py-20 bg-[#FFF9EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
              {UI_COPY.features.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#12284C]/75 mt-2.5 leading-relaxed">
              {UI_COPY.features.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {UI_COPY.features.items.map((item, idx) => {
              const Icon = featureIcons[idx];
              const colSpan = item.wide ? 'md:col-span-3' : 'md:col-span-2';
              return (
                <div
                  key={item.title.en}
                  className={`${colSpan} rounded-3xl bg-white border border-[#12284C]/12 p-6 sm:p-7 flex flex-col gap-4`}
                >
                  <span className="w-11 h-11 rounded-2xl bg-[#FFF9EE] border border-[#12284C]/12 text-[#12284C] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#12284C] mb-2">
                      {item.title[language]}
                    </h3>
                    <p className="text-base text-[#12284C]/80 leading-relaxed">
                      {item.desc[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
