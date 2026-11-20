export type Language = 'bn' | 'en';

export type SpecialtyKey = 'all' | 'tenant' | 'cyber' | 'land' | 'family' | 'consumer';

export interface RelevantLaw {
  lawName: string;
  section: string;
  explanation: string;
}

export interface LegalAnalysisResult {
  summary: string;
  relevantLaws: RelevantLaw[];
  documentsToPrepare: string[];
  nextSteps: string[];
  suggestedSpecialty: string;
  uncertaintyNote?: string;
}

export interface DemoScenario {
  id: string;
  specialty: Exclude<SpecialtyKey, 'all'>;
  label: Record<Language, string>;
  promptText: Record<Language, string>;
  result: Record<Language, LegalAnalysisResult>;
}

export interface DemoLawyer {
  id: string;
  name: Record<Language, string>;
  enrollmentTitle: Record<Language, string>;
  court: Record<Language, string>;
  city: Record<Language, string>;
  specialtyKey: Exclude<SpecialtyKey, 'all'>;
  specialtyLabel: Record<Language, string>;
  languages: Record<Language, string>;
}

export interface LawSearchEntry {
  id: string;
  actName: Record<Language, string>;
  section: Record<Language, string>;
  topic: Record<Language, string>;
  summary: Record<Language, string>;
}

export interface DraftingTemplate {
  id: 'notice' | 'application' | 'affidavit';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  body: Record<Language, string>;
}
