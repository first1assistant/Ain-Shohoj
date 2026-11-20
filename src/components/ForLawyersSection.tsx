import { useState } from 'react';
import { Briefcase, Check, Copy, FileText, MapPin, NotebookPen, Search } from 'lucide-react';
import { Language, SpecialtyKey } from '../types';
import {
  DEMO_LAWYERS,
  DRAFTING_TEMPLATES,
  LAW_SEARCH_SAMPLES,
  SPECIALTY_FILTERS,
  UI_COPY,
} from '../data/content';

interface ForLawyersSectionProps {
  language: Language;
  selectedSpecialty: SpecialtyKey;
  onSelectSpecialty: (specialty: SpecialtyKey) => void;
}

export function ForLawyersSection({
  language,
  selectedSpecialty,
  onSelectSpecialty,
}: ForLawyersSectionProps) {
  const [proTab, setProTab] = useState<'search' | 'templates' | 'notes'>('search');
  const [lawQuery, setLawQuery] = useState('');
  const [selectedTemplateId, setSelectedTemplateId] = useState<'notice' | 'application' | 'affidavit'>('notice');
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [requestedLawyers, setRequestedLawyers] = useState<Record<string, boolean>>({});

  const filteredLaws = LAW_SEARCH_SAMPLES.filter((entry) => {
    const q = lawQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      entry.actName.bn.toLowerCase().includes(q) ||
      entry.actName.en.toLowerCase().includes(q) ||
      entry.topic.bn.toLowerCase().includes(q) ||
      entry.topic.en.toLowerCase().includes(q) ||
      entry.summary.bn.toLowerCase().includes(q) ||
      entry.summary.en.toLowerCase().includes(q)
    );
  });

  const activeTemplate =
    DRAFTING_TEMPLATES.find((t) => t.id === selectedTemplateId) ?? DRAFTING_TEMPLATES[0];

  const filteredLawyers =
    selectedSpecialty === 'all'
      ? DEMO_LAWYERS
      : DEMO_LAWYERS.filter((l) => l.specialtyKey === selectedSpecialty);

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(activeTemplate.body[language]);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 1800);
    } catch {
      setCopiedTemplate(false);
    }
  };

  const handleRequestConsult = (lawyerId: string) => {
    setRequestedLawyers((prev) => ({ ...prev, [lawyerId]: true }));
  };

  return (
    <section id="for-lawyers" className="py-14 sm:py-20 bg-[#12284C] text-[#FFF9EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Part A: Ain Shohoj Pro Interactive Workbench */}
        <div>
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-semibold text-[#C9A24B] tracking-wide mb-2">
              {UI_COPY.forLawyers.badge[language]}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFF9EE] text-balance tracking-[0.01em]">
              {UI_COPY.forLawyers.title[language]}
            </h2>
            <p className="text-base sm:text-lg text-[#FFF9EE]/80 mt-2.5 leading-relaxed">
              {UI_COPY.forLawyers.subtitle[language]}
            </p>
          </div>

          <div className="rounded-3xl bg-[#1D3B6B]/60 border border-[#FFF9EE]/15 p-5 sm:p-8">
            {/* Segmented Tool Tabs */}
            <div
              role="tablist"
              aria-label={language === 'bn' ? 'আইন সহজ প্রো টুলস' : 'Ain Shohoj Pro Tools'}
              className="flex flex-wrap gap-2 pb-6 border-b border-[#FFF9EE]/12"
            >
              <button
                type="button"
                role="tab"
                aria-selected={proTab === 'search'}
                onClick={() => setProTab('search')}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${
                  proTab === 'search'
                    ? 'bg-[#C9A24B] text-[#12284C]'
                    : 'bg-[#12284C]/60 text-[#FFF9EE]/85 hover:bg-[#12284C]'
                }`}
              >
                <Search className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                <span>{UI_COPY.forLawyers.tabs.search[language]}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={proTab === 'templates'}
                onClick={() => setProTab('templates')}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${
                  proTab === 'templates'
                    ? 'bg-[#C9A24B] text-[#12284C]'
                    : 'bg-[#12284C]/60 text-[#FFF9EE]/85 hover:bg-[#12284C]'
                }`}
              >
                <FileText className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                <span>{UI_COPY.forLawyers.tabs.templates[language]}</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={proTab === 'notes'}
                onClick={() => setProTab('notes')}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${
                  proTab === 'notes'
                    ? 'bg-[#C9A24B] text-[#12284C]'
                    : 'bg-[#12284C]/60 text-[#FFF9EE]/85 hover:bg-[#12284C]'
                }`}
              >
                <NotebookPen className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                <span>{UI_COPY.forLawyers.tabs.notes[language]}</span>
              </button>
            </div>

            {/* Tab Panel 1: Fast Law Search */}
            {proTab === 'search' && (
              <div className="pt-6 space-y-5">
                <div className="relative">
                  <Search
                    className="w-5 h-5 text-[#FFF9EE]/50 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    strokeWidth={1.85}
                  />
                  <input
                    type="text"
                    value={lawQuery}
                    onChange={(e) => setLawQuery(e.target.value)}
                    placeholder={UI_COPY.forLawyers.searchPlaceholder[language]}
                    aria-label={UI_COPY.forLawyers.searchPlaceholder[language]}
                    className="w-full min-h-[48px] pl-12 pr-4 rounded-2xl bg-[#12284C] border border-[#FFF9EE]/20 text-[#FFF9EE] placeholder:text-[#FFF9EE]/45 focus:outline-none focus:border-[#C9A24B]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredLaws.map((law) => (
                    <div
                      key={law.id}
                      className="rounded-2xl bg-[#12284C]/80 border border-[#FFF9EE]/12 p-5"
                    >
                      <div className="flex items-center justify-between gap-2 text-xs text-[#C9A24B] font-semibold mb-1.5">
                        <span>{law.topic[language]}</span>
                        <span aria-hidden="true">·</span>
                        <span>{law.section[language]}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-[#FFF9EE]">
                        {law.actName[language]}
                      </h3>
                      <p className="text-sm sm:text-base text-[#FFF9EE]/75 mt-2 leading-relaxed">
                        {law.summary[language]}
                      </p>
                    </div>
                  ))}
                  {filteredLaws.length === 0 && (
                    <p className="text-[#FFF9EE]/75 text-base col-span-full py-4">
                      {language === 'bn'
                        ? 'এই শব্দে কোনো নমুনা ধারা পাওয়া যায়নি। অন্য শব্দ লিখে দেখুন।'
                        : 'No matching sample entries found. Try another keyword.'}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tab Panel 2: Drafting Templates */}
            {proTab === 'templates' && (
              <div className="pt-6 space-y-5">
                <div className="flex flex-wrap gap-2.5">
                  {DRAFTING_TEMPLATES.map((tpl) => (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => setSelectedTemplateId(tpl.id)}
                      className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                        selectedTemplateId === tpl.id
                          ? 'bg-[#FFF9EE] text-[#12284C] border-[#FFF9EE]'
                          : 'bg-[#12284C]/60 text-[#FFF9EE]/85 border-[#FFF9EE]/20 hover:border-[#C9A24B]'
                      }`}
                    >
                      {tpl.title[language]}
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl bg-[#12284C] border border-[#FFF9EE]/15 p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#FFF9EE]/12">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#FFF9EE]">
                        {activeTemplate.title[language]}
                      </h3>
                      <p className="text-sm text-[#FFF9EE]/70 mt-0.5">
                        {activeTemplate.subtitle[language]}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyTemplate}
                      className="min-h-[42px] px-4 py-2 rounded-xl bg-[#C9A24B] text-[#12284C] font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#b8913d] transition-colors whitespace-nowrap shrink-0"
                    >
                      {copiedTemplate ? (
                        <>
                          <Check className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />
                          <span>{language === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                          <span>{language === 'bn' ? 'খসড়া কপি করুন' : 'Copy Draft'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="whitespace-pre-wrap font-sans text-sm sm:text-base text-[#FFF9EE]/90 leading-relaxed">
                    {activeTemplate.body[language]}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab Panel 3: Case Notes */}
            {proTab === 'notes' && (
              <div className="pt-6">
                <div className="rounded-2xl bg-[#12284C] border border-[#FFF9EE]/15 p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#FFF9EE]">
                      {UI_COPY.forLawyers.notesExample.title[language]}
                    </h3>
                    <p className="text-sm sm:text-base text-[#C9A24B] font-medium mt-1">
                      {UI_COPY.forLawyers.notesExample.matter[language]}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2 border-t border-[#FFF9EE]/10">
                    {UI_COPY.forLawyers.notesExample.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#FFF9EE]/85">
                        <Check
                          className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span>{item[language]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Part B: Find a Lawyer Directory (4 Demo Lawyers) */}
        <div id="find-lawyer" className="pt-10 border-t border-[#FFF9EE]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold text-[#C9A24B] mb-1.5">
                {UI_COPY.forLawyers.demoDataLabel[language]}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFF9EE]">
                {UI_COPY.forLawyers.directoryTitle[language]}
              </h3>
            </div>

            {/* Specialty Filter Controls */}
            <div className="flex flex-wrap gap-2">
              {SPECIALTY_FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => onSelectSpecialty(filter.key)}
                  className={`min-h-[42px] px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    selectedSpecialty === filter.key
                      ? 'bg-[#C9A24B] text-[#12284C]'
                      : 'bg-[#1D3B6B]/70 text-[#FFF9EE]/85 hover:bg-[#1D3B6B]'
                  }`}
                >
                  {filter.label[language]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredLawyers.map((lawyer) => {
              const isRequested = Boolean(requestedLawyers[lawyer.id]);
              return (
                <div
                  key={lawyer.id}
                  className="rounded-3xl bg-white text-[#12284C] p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold text-[#12284C]/65">
                          {UI_COPY.forLawyers.demoDataLabel[language]} · {lawyer.city[language]}
                        </p>
                        <h4 className="font-display text-xl font-bold text-[#12284C] mt-0.5">
                          {lawyer.name[language]}
                        </h4>
                        <p className="text-sm text-[#12284C]/75 mt-0.5">
                          {lawyer.enrollmentTitle[language]}
                        </p>
                      </div>
                      <span className="w-10 h-10 rounded-xl bg-[#FFF9EE] border border-[#12284C]/10 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-[#12284C]" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </div>

                    <div className="pt-3 border-t border-[#12284C]/10 space-y-1.5 text-sm text-[#12284C]/80">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#12284C]/60 shrink-0" strokeWidth={1.85} />
                        <span>{lawyer.court[language]}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#12284C]">
                          {language === 'bn' ? 'বিশেষজ্ঞতা: ' : 'Focus: '}
                        </span>
                        <span>{lawyer.specialtyLabel[language]}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#12284C]">
                          {language === 'bn' ? 'ভাষা: ' : 'Languages: '}
                        </span>
                        <span>{lawyer.languages[language]}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRequestConsult(lawyer.id)}
                    className={`min-h-[46px] w-full px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 ${
                      isRequested
                        ? 'bg-[#FFF9EE] border border-[#12284C]/25 text-[#12284C]'
                        : 'bg-[#C9A24B] text-[#12284C] hover:bg-[#b8913d]'
                    }`}
                  >
                    {isRequested && <Check className="w-4 h-4" strokeWidth={2.2} aria-hidden="true" />}
                    <span>
                      {isRequested
                        ? UI_COPY.forLawyers.requestedConsult[language]
                        : UI_COPY.forLawyers.requestConsult[language]}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
