import { ArrowDown, ArrowUpRight, BookOpen, Home, ShieldAlert, Users, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_COPY } from '../data/content';

interface HeroProps {
  language: Language;
  onSelectTopicScenario: (scenarioId?: string, customPrompt?: string) => void;
}

export function Hero({ language, onSelectTopicScenario }: HeroProps) {
  const topicIcons = {
    tenant: Home,
    cyber: ShieldAlert,
    land: BookOpen,
    family: Users,
    consumer: ShoppingBag,
  };

  return (
    <section
      id="top"
      className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#12284C]/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Primary Statement & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm sm:text-base font-semibold text-[#12284C]/75 tracking-wide mb-3">
              {UI_COPY.tagline[language]}
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#12284C] leading-[1.12] tracking-tight text-balance mb-5">
              {UI_COPY.hero.headline[language]}
            </h1>

            <p className="text-lg sm:text-xl text-[#12284C]/85 leading-relaxed max-w-2xl mb-8">
              {UI_COPY.hero.subline[language]}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#demo"
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#C9A24B] text-[#12284C] font-bold text-base sm:text-lg shadow-sm hover:bg-[#b8913d] active:scale-[0.99] transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12284C]"
              >
                <span>{UI_COPY.hero.primaryCta[language]}</span>
                <ArrowDown className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href="#for-lawyers"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#12284C]/20 text-[#12284C] font-semibold text-base sm:text-lg hover:bg-[#12284C] hover:text-[#FFF9EE] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12284C]"
              >
                <span>{UI_COPY.hero.secondaryCta[language]}</span>
                <ArrowUpRight className="w-5 h-5" strokeWidth={1.85} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Year-1 Core Topics Selector Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-3xl bg-white border border-[#12284C]/12 p-6 sm:p-7 shadow-[0_10px_30px_-14px_rgba(18,40,76,0.1)] flex flex-col justify-between">
              <div className="mb-4 pb-4 border-b border-[#12284C]/10">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#12284C]">
                  {UI_COPY.hero.topicsCardTitle[language]}
                </h2>
                <p className="text-sm text-[#12284C]/70 mt-1">
                  {UI_COPY.hero.topicsCardSubtitle[language]}
                </p>
              </div>

              <div className="divide-y divide-[#12284C]/8">
                {UI_COPY.hero.topics.map((topic) => {
                  const Icon = topicIcons[topic.key];
                  return (
                    <button
                      key={topic.key}
                      type="button"
                      onClick={() =>
                        onSelectTopicScenario(
                          'scenarioId' in topic ? topic.scenarioId : undefined,
                          'samplePrompt' in topic && topic.samplePrompt
                            ? topic.samplePrompt[language]
                            : undefined
                        )
                      }
                      className="w-full min-h-[54px] py-3 px-2 -mx-2 rounded-xl flex items-center justify-between gap-3 text-left hover:bg-[#FFF9EE] transition-colors group focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className="w-10 h-10 rounded-xl bg-[#FFF9EE] border border-[#12284C]/10 text-[#12284C] flex items-center justify-center shrink-0 group-hover:bg-[#C9A24B]/20 transition-colors">
                          <Icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <div className="font-semibold text-base text-[#12284C] truncate">
                            {topic.title[language]}
                          </div>
                          <div className="text-sm text-[#12284C]/65 truncate">
                            {topic.desc[language]}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#12284C]/45 group-hover:text-[#12284C] shrink-0 transition-colors"
                        strokeWidth={1.85}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
