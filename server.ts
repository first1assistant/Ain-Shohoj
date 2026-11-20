import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

const SYSTEM_INSTRUCTION =
  "You explain Bangladeshi law in simple language for ordinary people. Never give legal advice, never predict case outcomes or percentages. Always name the relevant law; give a section only if confident, otherwise say 'check the section with a lawyer'. If unsure, say so and suggest a lawyer. Reply in the selected language.";

async function createServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/analyze-legal-issue', async (req, res) => {
    try {
      const body = req.body as { query?: string; language?: string };
      const query = typeof body?.query === 'string' ? body.query.trim() : '';
      const language = body?.language === 'en' ? 'en' : 'bn';

      if (!query || query.length < 5) {
        return res.status(400).json({
          error:
            language === 'bn'
              ? 'অনুগ্রহ করে আপনার সমস্যাটি অন্তত কয়েকটি শব্দে বিস্তারিত লিখুন।'
              : 'Please describe your issue in a few words so we can look up relevant legal information.',
        });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error:
            language === 'bn'
              ? 'লাইভ এআই বিশ্লেষণের জন্য সার্ভারের API Key কনফিগার করা নেই। অনুগ্রহ করে নিচের ডেমো উদাহরণগুলো ব্যবহার করে দেখুন।'
              : 'Server API key is not configured for live AI lookup. Please try the instant demo scenarios below.',
        });
      }

      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const targetLangInstruction =
        language === 'bn'
          ? 'Selected language: Bangla (বাংলা). Write ALL output text in natural, plain, easy-to-understand Bangla (বাংলা). For section numbers when unsure, write "ধারাটি আইনজীবীর সাথে যাচাই করুন".'
          : "Selected language: English. Write ALL output text in plain, clear English. For section numbers when unsure, write 'check the section with a lawyer'.";

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: `User situation in Bangladesh:\n${query}`,
        config: {
          systemInstruction: `${SYSTEM_INSTRUCTION}\n\n${targetLangInstruction}`,
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: {
                type: Type.STRING,
                description:
                  'A short plain-language summary of what the legal situation generally involves in Bangladesh (2-3 sentences).',
              },
              relevantLaws: {
                type: Type.ARRAY,
                description: 'List of 2 to 4 relevant Bangladeshi laws.',
                items: {
                  type: Type.OBJECT,
                  properties: {
                    lawName: {
                      type: Type.STRING,
                      description: 'Name of the Bangladeshi Act, Ordinance, or Code.',
                    },
                    section: {
                      type: Type.STRING,
                      description:
                        "Specific section number only if confident; otherwise say 'check the section with a lawyer' (or Bangla equivalent).",
                    },
                    explanation: {
                      type: Type.STRING,
                      description: 'One-sentence plain explanation of how this law relates.',
                    },
                  },
                  required: ['lawName', 'section', 'explanation'],
                },
              },
              documentsToPrepare: {
                type: Type.ARRAY,
                description: '3 to 5 practical documents or evidence items to gather.',
                items: { type: Type.STRING },
              },
              nextSteps: {
                type: Type.ARRAY,
                description: '3 to 5 clear, safe practical next steps.',
                items: { type: Type.STRING },
              },
              suggestedSpecialty: {
                type: Type.STRING,
                description:
                  'Short area of law label: one of "tenant", "cyber", "land", "family", "consumer", or "general".',
              },
              uncertaintyNote: {
                type: Type.STRING,
                description:
                  'If anything depends on specific facts or is uncertain, clearly say so and suggest consulting a verified lawyer.',
              },
            },
            required: [
              'summary',
              'relevantLaws',
              'documentsToPrepare',
              'nextSteps',
              'suggestedSpecialty',
            ],
          },
        },
      });

      const rawText = response.text?.trim();
      if (!rawText) {
        return res.status(502).json({
          error:
            language === 'bn'
              ? 'তথ্য তৈরি করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।'
              : 'No response returned. Please try again.',
        });
      }

      const parsed = JSON.parse(rawText);
      return res.json({ result: parsed });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unexpected server error';
      console.error('Legal analysis error:', message);
      return res.status(500).json({
        error: 'Unable to complete the legal information lookup right now. Please try again or use a demo scenario.',
      });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ain Shohoj server running on http://0.0.0.0:${PORT}`);
  });
}

createServer();
