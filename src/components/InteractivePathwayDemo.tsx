import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertCircle, RefreshCw, Smartphone, Award, Sparkles, ChevronRight } from 'lucide-react';
import { MadhubunLogo } from './BrandLogos';

interface BookOption {
  id: string;
  title: string;
  grade: string;
  chapters: {
    id: string;
    title: string;
    subtopics: string[];
    sampleQuestion: {
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      gapTopic: string;
      adaptiveWorksheet: string;
    };
  }[];
}

const BOOKS: BookOption[] = [
  {
    id: 'mathmate',
    title: 'Madhubun Mathmate',
    grade: 'Class 6',
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 4: Fractions & Decimals',
        subtopics: ['Equivalent Fractions', 'Adding Unlike Fractions', 'Decimal Expansion'],
        sampleQuestion: {
          question: 'Which of the following is equivalent to 3/5 with a denominator of 25?',
          options: ['12/25', '15/25', '18/25', '20/25'],
          correctIndex: 1,
          explanation: 'Multiply both numerator and denominator by 5: (3 × 5) / (5 × 5) = 15/25.',
          gapTopic: 'Multiplying Numerator & Denominator for Equivalent Fractions',
          adaptiveWorksheet: 'Worksheet #4B: 5 Step-by-Step Practice Problems on Equivalent Numerators'
        }
      },
      {
        id: 'c2',
        title: 'Chapter 7: Basic Algebra & Equations',
        subtopics: ['Variable Terms', 'Simple Equations', 'Word Problems'],
        sampleQuestion: {
          question: 'If 2x + 5 = 15, what is the value of x?',
          options: ['x = 3', 'x = 5', 'x = 7', 'x = 10'],
          correctIndex: 1,
          explanation: 'Subtract 5 from both sides: 2x = 10. Then divide by 2: x = 5.',
          gapTopic: 'Two-Step Equation Solving Techniques',
          adaptiveWorksheet: 'Worksheet #7A: Balancing Linear Equations with Interactive Hints'
        }
      }
    ]
  },
  {
    id: 'gunjan',
    title: 'Gunjan Hindi Pathmala',
    grade: 'Class 7',
    chapters: [
      {
        id: 'g1',
        title: 'अध्याय 2: भाषा और व्याकरण',
        subtopics: ['संज्ञा के भेद', 'सर्वनाम प्रयोग', 'विशेषण पद'],
        sampleQuestion: {
          question: "'ईमानदारी' शब्द में कौन सी संज्ञा है?",
          options: ['व्यक्तिवाचक संज्ञा', 'जातिवाचक संज्ञा', 'भाववाचक संज्ञा', 'द्रव्यवाचक संज्ञा'],
          correctIndex: 2,
          explanation: "'ईमानदारी' किसी गुण या भाव को प्रकट करती है, इसलिए यह भाववाचक संज्ञा है।",
          gapTopic: 'भाववाचक संज्ञा एवं जातिवाचक संज्ञा में अंतर',
          adaptiveWorksheet: 'कार्यपत्रिका #2C: संज्ञा भेदों के 10 रोचक उदाहरण'
        }
      }
    ]
  },
  {
    id: 'science',
    title: 'Living Science',
    grade: 'Class 8',
    chapters: [
      {
        id: 's1',
        title: 'Chapter 3: Synthetic Fibres & Plastics',
        subtopics: ['Polymers', 'Thermoplastics', 'Environmental Impact'],
        sampleQuestion: {
          question: 'Which synthetic fibre is known as artificial silk?',
          options: ['Nylon', 'Rayon', 'Polyester', 'Acrylic'],
          correctIndex: 1,
          explanation: 'Rayon is obtained from wood pulp and resembles silk in appearance and texture.',
          gapTopic: 'Differentiating Polymer Types & Properties',
          adaptiveWorksheet: 'Worksheet #3A: Synthetic Fibres Classification & Uses Quiz'
        }
      }
    ]
  }
];

export const InteractivePathwayDemo: React.FC<{ onDownloadClick: () => void }> = ({ onDownloadClick }) => {
  const [selectedBook, setSelectedBook] = useState<BookOption>(BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState(BOOKS[0].chapters[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleBookChange = (book: BookOption) => {
    setSelectedBook(book);
    setSelectedChapter(book.chapters[0]);
    setSelectedOption(null);
    setSubmitted(false);
  };

  const handleChapterChange = (ch: typeof selectedBook.chapters[0]) => {
    setSelectedChapter(ch);
    setSelectedOption(null);
    setSubmitted(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
  };

  const isCorrect = selectedOption === selectedChapter.sampleQuestion.correctIndex;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Try The Demo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preview The ClassMap Adaptive Experience
          </h2>
          <p className="text-slate-600 text-base">
            Select your Madhubun textbook below to test how the diagnostic engine identifies learning gaps and generates personalized adaptive worksheets in real time.
          </p>
        </div>

        {/* Demo Frame */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6 max-w-4xl mx-auto">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <MadhubunLogo size="sm" className="bg-white p-1 rounded" />
              <div>
                <span className="text-xs text-orange-400 font-bold tracking-wider uppercase block">Madhubun Book Companion</span>
                <span className="text-sm font-semibold text-slate-200">Interactive Chapter Practice</span>
              </div>
            </div>

            {/* Book Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {BOOKS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleBookChange(b)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedBook.id === b.id
                      ? 'bg-orange-500 text-white shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {b.title} ({b.grade})
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Selector */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Select Chapter:</span>
            {selectedBook.chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleChapterChange(ch)}
                className={`px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedChapter.id === ch.id
                    ? 'bg-orange-950/80 text-orange-300 border border-orange-500/50'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                {ch.title}
              </button>
            ))}
          </div>

          {/* Question Box */}
          <div className="p-5 sm:p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-orange-400 font-mono bg-orange-950/60 px-2.5 py-1 rounded border border-orange-800/40">
                Diagnostic Question
              </span>
              <span className="text-xs text-slate-400">
                Sub-topics: {selectedChapter.subtopics.join(' • ')}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {selectedChapter.sampleQuestion.question}
            </h4>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {selectedChapter.sampleQuestion.options.map((opt, idx) => {
                let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

                if (selectedOption === idx) {
                  btnStyle = 'bg-orange-950/80 border-orange-500 text-orange-200 font-semibold';
                }

                if (submitted) {
                  if (idx === selectedChapter.sampleQuestion.correctIndex) {
                    btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-200 font-bold';
                  } else if (selectedOption === idx) {
                    btnStyle = 'bg-rose-950/90 border-rose-500 text-rose-200 font-semibold';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={submitted}
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {submitted && idx === selectedChapter.sampleQuestion.correctIndex && (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Submit */}
            {!submitted ? (
              <div className="pt-2 flex justify-end">
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmit}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Submit Answer & Get Instant Diagnosis
                </button>
              </div>
            ) : (
              /* Diagnostic Result Card */
              <div className="pt-4 border-t border-slate-800 space-y-4 animate-fadeIn">
                
                {/* Result Alert */}
                <div className={`p-4 rounded-xl border ${
                  isCorrect
                    ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
                } flex items-start gap-3 text-xs sm:text-sm`}>
                  {isCorrect ? (
                    <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <strong className="block text-sm font-bold">
                      {isCorrect ? 'Great Job! Correct Answer!' : 'Good Effort! Let’s Fix This Learning Gap.'}
                    </strong>
                    <p className="text-slate-300 text-xs mt-1">
                      {selectedChapter.sampleQuestion.explanation}
                    </p>
                  </div>
                </div>

                {/* Adaptive Worksheet Generated */}
                <div className="p-4 rounded-xl bg-orange-950/40 border border-orange-500/40 text-orange-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>System Generated Adaptive Worksheet</span>
                    </span>
                    <span className="text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded font-mono">Retest Mode</span>
                  </div>

                  <p className="text-xs text-slate-200 font-medium">
                    <strong className="text-orange-300">Target Gap:</strong> {selectedChapter.sampleQuestion.gapTopic}
                  </p>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>{selectedChapter.sampleQuestion.adaptiveWorksheet}</span>
                    <a
                      href="https://classmap-student.web.app/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] cursor-pointer flex items-center gap-1 inline-flex"
                    >
                      <span>Open in App</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Reset button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedOption(null);
                      setSubmitted(false);
                    }}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Try Another Question</span>
                  </button>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Download Banner */}
          <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">Ready for full chapter access?</span> Download the ClassMap app to access all chapters and personalized adaptive worksheets.
            </div>
            <a
              href="https://classmap-student.web.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs hover:from-orange-600 hover:to-amber-600 transition-all cursor-pointer shrink-0 flex items-center gap-2 inline-flex"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download ClassMap App</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
