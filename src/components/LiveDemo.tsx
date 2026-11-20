import { FormEvent, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckSquare,
  FileCheck2,
  Loader2,
  Scale,
  Search,
  Square,
  UserSearch,
} from 'lucide-react';
import { Language, LegalAnalysisResult, SpecialtyKey } from '../types';
import { DEMO_SCENARIOS, UI_COPY } from '../data/content';

interface LiveDemoProps {
  language: Language;
  query: string;
  onQueryChange: (value: string) => void;
  activeScenarioId: string | null;
  onSelectScenario: (scenarioId: string) => void;
  liveResult: LegalAnalysisResult | null;
  onLiveResult: (result: LegalAnalysisResult | null) => void;
  onFindLawyer: (specialty: SpecialtyKey) => void;
}

export function LiveDemo({
  language,
  query,
  onQueryChange,
  activeScenarioId,
  onSelectScenario,
  liveResult,
  onLiveResult,
  onFindLawyer,
}: LiveDemoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  const activeScenario = activeScenarioId
    ? DEMO_SCENARIOS.find((s) => s.id === activeScenarioId) ?? null
    : null;

  const displayedResult: LegalAnalysisResult | null = activeScenario
    ? activeScenario.result[language]
    : liveResult;

  const isSampleResult = Boolean(activeScenario);

  const handleToggleDoc = (index: number) => {
    setCheckedDocs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleScenarioClick = (scenarioId: string) => {
    setErrorMsg(null);
    setCheckedDocs({});
    onSelectScenario(scenarioId);
  };

  const handleClear = () => {
    onQueryChange('');
    onLiveResult(null);
    setErrorMsg(null);
    setCheckedDocs({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();

    if (trimmed.length < 5) {
      setErrorMsg(
        language === 'bn'
          ? 'অনুগ্রহ করে আপনার সমস্যাটি অন্তত কয়েকটি শব্দে লিখুন অথবা নিচের ডেমো উদাহরণগুলোর একটি বেছে নিন।'
          : 'Please describe your issue in a few words or pick one of the instant demo scenarios below.'
      );
      return;
    }

    // If text exactly matches one of the pre-written scenario prompts, show that instant result seamlessly
    const matchingScenario = DEMO_SCENARIOS.find(
      (s) => s.promptText.bn === trimmed || s.promptText.en === trimmed
    );
    if (matchingScenario) {
      handleScenarioClick(matchingScenario.id);
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setCheckedDocs({});
    onLiveResult(null);

    try {
      const response = await fetch('/api/analyze-legal-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: trimmed, language }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data?.error ||
            (language === 'bn'
              ? 'তথ্য আনা সম্ভব হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।'
              : 'Unable to retrieve legal information right now. Please try again.')
        );
      }

      onLiveResult(data.result as LegalAnalysisResult);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : language === 'bn'
            ? 'সার্ভারের সাথে সংযোগে সমস্যা হয়েছে।'
            : 'Connection error while checking legal information.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resolveSpecialty = (raw?: string): SpecialtyKey => {
    const val = (raw || '').toLowerCase();
    if (val.includes('tenant') || val.includes('rent')) return 'tenant';
    if (val.includes('cyber')) return 'cyber';
    if (val.includes('land') || val.includes('property')) return 'land';
    if (val.includes('family') || val.includes('consumer')) return 'family';
    return 'all';
  };

  return (
    <section id="demo" className="py-14 sm:py-20 bg-[#FFF9EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#12284C] text-balance">
            {UI_COPY.demo.sectionTitle[language]}
          </h2>
          <p className="text-base sm:text-lg text-[#12284C]/80 mt-2.5 leading-relaxed">
            {UI_COPY.demo.sectionSubtitle[language]}
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-3xl bg-white border border-[#12284C]/12 p-5 sm:p-8 shadow-[0_12px_32px_-16px_rgba(18,40,76,0.1)]">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="legal-issue-input"
              className="block font-display text-lg sm:text-xl font-bold text-[#12284C] mb-3"
            >
              {UI_COPY.demo.inputLabel[language]}
            </label>

            <textarea
              id="legal-issue-input"
              rows={4}
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={UI_COPY.demo.placeholder[language]}
              className="w-full rounded-2xl bg-[#FFF9EE]/60 border border-[#12284C]/20 p-4 sm:p-5 text-base sm:text-lg text-[#12284C] placeholder:text-[#12284C]/45 focus:outline-none focus:border-[#12284C] focus:ring-2 focus:ring-[#C9A24B]/50 transition-colors resize-y min-h-[132px]"
            />

            {/* Instant Demo Scenarios */}
            <div className="mt-5">
              <p className="text-sm font-semibold text-[#12284C]/75 mb-2.5">
                {UI_COPY.demo.scenariosLabel[language]}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {DEMO_SCENARIOS.map((scenario) => {
                  const isActive = activeScenarioId === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => handleScenarioClick(scenario.id)}
                      className={`min-h-[44px] px-4 py-2 rounded-xl text-sm sm:text-[15px] font-semibold border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#12284C] ${
                        isActive
                          ? 'bg-[#12284C] text-[#FFF9EE] border-[#12284C]'
                          : 'bg-[#FFF9EE] text-[#12284C] border-[#12284C]/20 hover:border-[#C9A24B] hover:bg-[#C9A24B]/15'
                      }`}
                    >
                      {scenario.label[language]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit & Clear Row */}
            <div className="mt-6 pt-5 border-t border-[#12284C]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-[#12284C]/65">
                {UI_COPY.safety.items[3].desc[language]}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {(query || displayedResult) && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="min-h-[46px] px-5 py-2.5 rounded-xl border border-[#12284C]/20 text-[#12284C] font-semibold text-base hover:bg-[#12284C]/5 transition-colors whitespace-nowrap shrink-0"
                  >
                    {UI_COPY.demo.clearButton[language]}
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="min-h-[46px] px-7 py-2.5 rounded-xl bg-[#C9A24B] text-[#12284C] font-bold text-base inline-flex items-center justify-center gap-2 hover:bg-[#b8913d] disabled:opacity-60 transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12284C]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>{UI_COPY.demo.checkingButton[language]}</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                      <span>{UI_COPY.demo.checkButton[language]}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Error Alert */}
          {errorMsg && (
            <div
              role="alert"
              className="mt-6 rounded-2xl bg-[#FFF9EE] border border-[#12284C]/25 p-4 flex items-start gap-3 text-[#12284C]"
            >
              <AlertCircle className="w-5 h-5 text-[#12284C] shrink-0 mt-0.5" strokeWidth={1.85} />
              <p className="text-sm sm:text-base font-medium">{errorMsg}</p>
            </div>
          )}
        </div>

        {/* Structured Result Display */}
        {displayedResult && (
          <div className="mt-8 space-y-6" aria-live="polite">
            {/* Mandatory Disclaimer Banner Above Every Result */}
            <div
              role="note"
              className="rounded-2xl bg-[#12284C] text-[#FFF9EE] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex items-start sm:items-center gap-3">
                <Scale className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5 sm:mt-0" strokeWidth={1.85} />
                <p className="text-sm sm:text-base font-semibold">
                  {UI_COPY.disclaimerBanner[language]}
                </p>
              </div>
              <span className="text-xs sm:text-sm text-[#C9A24B] font-medium whitespace-nowrap shrink-0">
                {isSampleResult
                  ? UI_COPY.demo.sampleModeBadge[language]
                  : UI_COPY.demo.liveModeBadge[language]}
              </span>
            </div>

            {/* Result Body Card */}
            <div className="rounded-3xl bg-white border border-[#12284C]/12 p-5 sm:p-8 space-y-8 shadow-[0_10px_28px_-14px_rgba(18,40,76,0.08)]">
              {/* (a) Short Plain-Language Summary */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C] mb-2.5">
                  {UI_COPY.demo.resultLabels.summary[language]}
                </h3>
                <p className="text-base sm:text-lg text-[#12284C]/85 leading-relaxed">
                  {displayedResult.summary}
                </p>
              </div>

              {/* (b) Relevant Laws Cards */}
              <div className="pt-6 border-t border-[#12284C]/10">
                <div className="flex items-center gap-2.5 mb-4">
                  <BookOpen className="w-5 h-5 text-[#12284C]" strokeWidth={1.85} aria-hidden="true" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C]">
                    {UI_COPY.demo.resultLabels.relevantLaws[language]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayedResult.relevantLaws.map((law, idx) => (
                    <div
                      key={`${law.lawName}-${idx}`}
                      className="rounded-2xl bg-[#FFF9EE] border border-[#12284C]/12 p-5 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-[#12284C]">
                          {law.lawName}
                        </h4>
                        <p className="text-sm font-semibold text-[#12284C]/80 mt-1">
                          {UI_COPY.demo.resultLabels.sectionPrefix[language]} {law.section}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base text-[#12284C]/75 mt-3 leading-relaxed">
                        {law.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* (c) Documents to Prepare Checklist & (d) Next Steps */}
              <div className="pt-6 border-t border-[#12284C]/10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Checklist */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <FileCheck2 className="w-5 h-5 text-[#12284C]" strokeWidth={1.85} aria-hidden="true" />
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C]">
                      {UI_COPY.demo.resultLabels.documents[language]}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {displayedResult.documentsToPrepare.map((doc, idx) => {
                      const checked = Boolean(checkedDocs[idx]);
                      return (
                        <li key={idx}>
                          <button
                            type="button"
                            onClick={() => handleToggleDoc(idx)}
                            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#FFF9EE]/70 border border-[#12284C]/10 hover:border-[#C9A24B] flex items-start gap-3 text-left transition-colors"
                          >
                            {checked ? (
                              <CheckSquare
                                className="w-5 h-5 text-[#12284C] shrink-0 mt-0.5"
                                strokeWidth={2}
                              />
                            ) : (
                              <Square
                                className="w-5 h-5 text-[#12284C]/45 shrink-0 mt-0.5"
                                strokeWidth={1.85}
                              />
                            )}
                            <span
                              className={`text-sm sm:text-base leading-snug ${
                                checked ? 'line-through text-[#12284C]/55' : 'text-[#12284C]/90'
                              }`}
                            >
                              {doc}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Numbered Next Steps */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#12284C] mb-4">
                    {UI_COPY.demo.resultLabels.nextSteps[language]}
                  </h3>

                  <ol className="space-y-3">
                    {displayedResult.nextSteps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3.5 p-3 rounded-xl bg-[#FFF9EE]/50 border border-[#12284C]/8"
                      >
                        <span className="w-7 h-7 rounded-lg bg-[#12284C] text-[#FFF9EE] text-sm font-bold flex items-center justify-center shrink-0 tabular-nums mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-sm sm:text-base text-[#12284C]/90 leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Optional Uncertainty Note */}
              {displayedResult.uncertaintyNote && (
                <div className="rounded-2xl bg-[#FFF9EE] border border-[#C9A24B]/60 p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#12284C] shrink-0 mt-0.5" strokeWidth={1.85} />
                  <div>
                    <div className="font-semibold text-sm text-[#12284C]">
                      {UI_COPY.demo.resultLabels.uncertaintyTitle[language]}
                    </div>
                    <p className="text-sm sm:text-base text-[#12284C]/80 mt-0.5 leading-relaxed">
                      {displayedResult.uncertaintyNote}
                    </p>
                  </div>
                </div>
              )}

              {/* (e) Find a Lawyer Button */}
              <div className="pt-6 border-t border-[#12284C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm sm:text-base text-[#12284C]/75">
                  {language === 'bn'
                    ? 'আপনার কাগজপত্র যাচাই করতে বা আনুষ্ঠানিক পদক্ষেপ নিতে আইনজীবীর সাথে কথা বলুন।'
                    : 'Ready to verify your documents or take formal legal steps?'}
                </p>
                <button
                  type="button"
                  onClick={() => onFindLawyer(resolveSpecialty(displayedResult.suggestedSpecialty))}
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-[#12284C] text-[#FFF9EE] font-bold text-base inline-flex items-center justify-center gap-2 hover:bg-[#1D3B6B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24B]"
                >
                  <UserSearch className="w-5 h-5 text-[#C9A24B]" strokeWidth={1.85} aria-hidden="true" />
                  <span>{UI_COPY.demo.resultLabels.findLawyer[language]}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
