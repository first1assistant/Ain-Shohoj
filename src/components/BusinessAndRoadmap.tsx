import { CalendarClock, Layers } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/content';

interface BusinessAndRoadmapProps {
  language: Language;
}

export function BusinessAndRoadmap({ language }: BusinessAndRoadmapProps) {
  return (
    <>
      {/* Section 6: Business Model */}
      <section id="business-model" className="py-14 sm:py-20 bg-white border-b border-[#12284C]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
                {UI_COPY.businessModel.title[language]}
              </h2>
              <p className="text-base sm:text-lg text-[#12284C]/75 mt-2.5 leading-relaxed">
                {UI_COPY.businessModel.subtitle[language]}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#12284C]/80 bg-[#FFF9EE] border border-[#12284C]/12 px-4 py-2.5 rounded-xl shrink-0">
              <Layers className="w-4 h-4 text-[#C9A24B]" strokeWidth={2} aria-hidden="true" />
              <span>{UI_COPY.businessModel.assumptionLabel[language]}</span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#12284C]/12 bg-[#FFF9EE]/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#12284C] text-[#FFF9EE]">
                    <th className="py-4 px-5 text-sm sm:text-base font-bold">
                      {UI_COPY.businessModel.headers.tier[language]}
                    </th>
                    <th className="py-4 px-5 text-sm sm:text-base font-bold">
                      {UI_COPY.businessModel.headers.audience[language]}
                    </th>
                    <th className="py-4 px-5 text-sm sm:text-base font-bold">
                      {UI_COPY.businessModel.headers.offering[language]}
                    </th>
                    <th className="py-4 px-5 text-sm sm:text-base font-bold">
                      {UI_COPY.businessModel.headers.pricing[language]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#12284C]/10 bg-white">
                  {UI_COPY.businessModel.rows.map((row) => (
                    <tr key={row.tier.en} className="hover:bg-[#FFF9EE]/60 transition-colors">
                      <td className="py-4 px-5 font-display text-base sm:text-lg font-bold text-[#12284C] whitespace-nowrap">
                        {row.tier[language]}
                      </td>
                      <td className="py-4 px-5 text-sm sm:text-base text-[#12284C]/80 whitespace-nowrap">
                        {row.audience[language]}
                      </td>
                      <td className="py-4 px-5 text-sm sm:text-base text-[#12284C]/80 min-w-[240px]">
                        {row.offering[language]}
                      </td>
                      <td className="py-4 px-5 text-sm sm:text-base font-semibold text-[#12284C] tabular-nums whitespace-nowrap">
                        {row.pricing[language]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: 3-Year Roadmap (Horizontal Timeline) */}
      <section id="roadmap" className="py-14 sm:py-20 bg-[#FFF9EE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
              {UI_COPY.roadmap.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#12284C]/75 mt-2.5 leading-relaxed">
              {UI_COPY.roadmap.subtitle[language]}
            </p>
          </div>

          <div className="relative">
            {/* Horizontal connecting line on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-8 right-8 h-px bg-[#12284C]/20"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {UI_COPY.roadmap.phases.map((phase, idx) => (
                <div
                  key={phase.year.en}
                  className="rounded-3xl bg-white border border-[#12284C]/12 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-[#12284C] text-[#C9A24B] font-display font-extrabold text-base flex items-center justify-center tabular-nums shrink-0 relative z-10">
                        {idx + 1}
                      </span>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#12284C]">
                        <CalendarClock className="w-4 h-4 text-[#C9A24B]" strokeWidth={2} aria-hidden="true" />
                        <span>{phase.year[language]}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#12284C] mb-2.5">
                      {phase.heading[language]}
                    </h3>
                    <p className="text-base text-[#12284C]/80 leading-relaxed">
                      {phase.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
