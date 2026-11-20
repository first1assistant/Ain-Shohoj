import { useState } from 'react';
import { Menu, Scale, X } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/content';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#demo', label: UI_COPY.nav.demo[language] },
    { href: '#how-it-works', label: UI_COPY.nav.howItWorks[language] },
    { href: '#for-lawyers', label: UI_COPY.nav.forLawyers[language] },
    { href: '#roadmap', label: UI_COPY.nav.roadmap[language] },
    { href: '#emergency', label: UI_COPY.nav.emergency[language] },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9EE]/95 backdrop-blur-md border-b border-[#12284C]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#12284C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B] rounded-md"
        >
          <span className="w-9 h-9 rounded-xl bg-[#12284C] text-[#C9A24B] flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" strokeWidth={1.85} aria-hidden="true" />
          </span>
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
            {UI_COPY.brand[language]}
          </span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label={language === 'bn' ? 'প্রধান নেভিগেশন' : 'Primary Navigation'}
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#12284C]/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#12284C] underline-offset-4 hover:underline decoration-[#C9A24B] decoration-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            role="group"
            aria-label={language === 'bn' ? 'ভাষা নির্বাচন' : 'Language selector'}
            className="inline-flex items-center p-1 rounded-xl bg-[#12284C]/6 border border-[#12284C]/12"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('bn')}
              className={`min-h-[36px] px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#12284C] ${
                language === 'bn'
                  ? 'bg-[#12284C] text-[#FFF9EE]'
                  : 'text-[#12284C]/75 hover:text-[#12284C]'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`min-h-[36px] px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#12284C] ${
                language === 'en'
                  ? 'bg-[#12284C] text-[#FFF9EE]'
                  : 'text-[#12284C]/75 hover:text-[#12284C]'
              }`}
            >
              English
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={language === 'bn' ? 'মেনু খুলুন বা বন্ধ করুন' : 'Toggle navigation menu'}
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-[#12284C]/15 text-[#12284C] hover:bg-[#12284C]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.85} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.85} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <nav
          aria-label={language === 'bn' ? 'মোবাইল নেভিগেশন' : 'Mobile Navigation'}
          className="lg:hidden border-t border-[#12284C]/10 bg-[#FFF9EE] px-4 py-3 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center min-h-[44px] px-3 rounded-xl text-base font-medium text-[#12284C] hover:bg-[#12284C]/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
