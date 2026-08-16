import { SubjectSeries, StakeholderBenefit, Testimonial, FAQItem, PathwayStep } from '../types';

export const SUBJECT_SERIES: SubjectSeries[] = [
  {
    id: 'gunjan',
    name: 'Gunjan Hindi Mala',
    subject: 'Hindi Course A/B',
    grades: 'Grades 1 - 8',
    description: 'India\'s premier Hindi learning series enriched with AI pronunciation analysis, grammar practice, and adaptive vocabulary builders.',
    tag: 'Flagship Hindi Series',
    color: 'from-amber-600 to-red-600',
    features: ['Adaptive Shabd-Gyan practice', 'Audio-assisted kavita recitations', 'Grammar diagnostics by Classmap'],
    sampleChapters: ['Ch 1: Hamare Rashtriya Prateek', 'Ch 4: Samay Ka Mahatva', 'Ch 8: Vigyan ke Chamatkar']
  },
  {
    id: 'mathmate',
    name: 'Madhubun Mathmate',
    subject: 'Mathematics',
    grades: 'Grades 1 - 8',
    description: 'Conceptual step-by-step math foundation boosted with Classmap\'s real-time step error correction and practice engines.',
    tag: 'STEM & Math Practice',
    color: 'from-blue-600 to-indigo-600',
    features: ['Step-by-step problem solver', 'Dynamic drill generation', 'Visual math manipulatives'],
    sampleChapters: ['Fractions & Decimals', 'Practical Geometry', 'Data Handling & Graphs']
  },
  {
    id: 'livingscience',
    name: 'Living Science & Tech',
    subject: 'Science & EVS',
    grades: 'Grades 3 - 8',
    description: 'Inquiry-based science learning aligned with NCF 2023, augmented with Classmap 3D simulations and adaptive concept check quizzes.',
    tag: 'Inquiry Science',
    color: 'from-emerald-600 to-teal-600',
    features: ['Interactive 3D model explore', 'Hypothesis test drills', 'Adaptive revision modules'],
    sampleChapters: ['Nutrition in Plants', 'Light, Shadows & Reflections', 'Motion & Measurement']
  },
  {
    id: 'englishtreasure',
    name: 'English Treasure & Grammar',
    subject: 'English Language',
    grades: 'Grades 1 - 8',
    description: 'Comprehensive English language arts combining Madhubun literature selections with automated speech and grammar proficiency analytics.',
    tag: 'Language & Literacy',
    color: 'from-purple-600 to-pink-600',
    features: ['Phonics & Pronunciation score', 'Automated essay Feedback', 'Interactive reading logs'],
    sampleChapters: ['The Secret Garden', 'Mastering Tenses & Modals', 'Creative Writing Workshop']
  },
  {
    id: 'socialstudies',
    name: 'Explore Social Studies',
    subject: 'Social Sciences',
    grades: 'Grades 6 - 8',
    description: 'History, Civics, and Geography brought to life with interactive historical timelines and map-based adaptive challenges.',
    tag: 'Social Sciences',
    color: 'from-orange-600 to-amber-700',
    features: ['Interactive historical maps', 'Concept connector webs', 'Civic awareness scenarios'],
    sampleChapters: ['Our Past & Civilizations', 'Globe & Maps Mastery', 'Indian Constitution in Action']
  }
];

export const STAKEHOLDER_BENEFITS: StakeholderBenefit[] = [
  {
    id: 'students',
    title: 'For Students',
    subtitle: 'Learn at Your Own Pace with Zero Stress',
    icon: 'Sparkles',
    stat: { value: '94%', label: 'Students report increased confidence in difficult topics' },
    points: [
      {
        title: 'Personalised Learning Paths',
        description: 'Classmap identifies exact learning gaps and delivers Madhubun explanation modules tailored to each student\'s current grasp.'
      },
      {
        title: 'Bite-Sized Gamified Practice',
        description: 'Earn mastery badges, complete daily concept quests, and enjoy interactive video & audio explanations.'
      },
      {
        title: 'Instant Friendly Hints',
        description: 'When stuck on a problem, get step-by-step guidance rather than just the final answer.'
      }
    ]
  },
  {
    id: 'teachers',
    title: 'For Teachers',
    subtitle: 'Automate Routine Work & Empower Every Classroom',
    icon: 'Users',
    stat: { value: '6+ Hours', label: 'Saved per week on grading and differentiation' },
    points: [
      {
        title: 'Auto-Graded Assignments',
        description: 'Instant evaluation of homework and class tests with detailed breakdown by Bloom\'s taxonomy level.'
      },
      {
        title: 'One-Click Remediation Worksheets',
        description: 'Automatically generate customized worksheets targeting weak areas for specific student clusters.'
      },
      {
        title: 'NCF 2023 Aligned Lesson Plans',
        description: 'Access complete digital teaching kits, interactive board slides, and mapped chapter resources.'
      }
    ]
  },
  {
    id: 'schools',
    title: 'For School Leaders',
    subtitle: 'Data-Driven Academic Excellence Across Grades',
    icon: 'Building2',
    stat: { value: '38%', label: 'Average improvement in annual board & summative scores' },
    points: [
      {
        title: 'School-Wide Analytics Dashboard',
        description: 'Monitor learning progress, curriculum completion, and outcome benchmarks across all sections.'
      },
      {
        title: 'CBSE / ICSE & NEP 2020 Compliance',
        description: 'Fully mapped to competency-based education standards and national curriculum frameworks.'
      },
      {
        title: 'Seamless Publisher Integration',
        description: 'Physical Madhubun textbooks and Classmap digital apps work in perfect harmony for blended learning.'
      }
    ]
  }
];

export const PATHWAY_SIMULATIONS: Record<string, Record<string, PathwayStep[]>> = {
  Mathematics: {
    'Needs Foundational Support': [
      {
        stepNumber: 1,
        title: 'Diagnostic Concept Check',
        type: 'diagnostic',
        description: 'Classmap mini-quiz evaluates pre-requisite knowledge on Place Values & Basic Fractions.',
        madhubunResource: 'Madhubun Mathmate Ch 2 Primer',
        classmapTech: 'AI Knowledge Graph Mapping',
        timeEstimate: '5 mins'
      },
      {
        stepNumber: 2,
        title: 'Visual Concept Builder',
        type: 'content',
        description: 'Interactive visual fraction strips and bite-sized video explaining equivalent fractions.',
        madhubunResource: 'Mathmate Animated Concept Video 2.1',
        classmapTech: 'Interactive Math Manipulatives',
        timeEstimate: '10 mins'
      },
      {
        stepNumber: 3,
        title: 'Guided Practice Exercises',
        type: 'practice',
        description: 'Low-stakes practice questions with real-time hints and immediate corrective feedback.',
        madhubunResource: 'Textbook Practice 2A (Foundational)',
        classmapTech: 'Adaptive Difficulty Engine',
        timeEstimate: '12 mins'
      },
      {
        stepNumber: 4,
        title: 'Remedial Reinforcement',
        type: 'remediation',
        description: 'Personalised mini-drill targeting common error patterns identified in step 3.',
        madhubunResource: 'Madhubun Skill-Builder Worksheet M-2',
        classmapTech: 'Targeted Remediation Generator',
        timeEstimate: '8 mins'
      },
      {
        stepNumber: 5,
        title: 'Mastery Badge Unlocked',
        type: 'mastery',
        description: 'Student demonstrates 85%+ mastery and moves forward to addition of fractions.',
        madhubunResource: 'Mastery Certificate & Badge',
        classmapTech: 'Real-time Progress Tracker',
        timeEstimate: 'Completed'
      }
    ],
    'Grade-Level Master': [
      {
        stepNumber: 1,
        title: 'Chapter Readiness Quiz',
        type: 'diagnostic',
        description: 'Confirms strong grasp of fundamental fraction operations.',
        madhubunResource: 'Mathmate Ch 3 Warmup',
        classmapTech: 'Rapid Diagnostic Engine',
        timeEstimate: '4 mins'
      },
      {
        stepNumber: 2,
        title: 'Core Concept & Word Problems',
        type: 'content',
        description: 'Standard textbook chapter review mixed with interactive problem solving.',
        madhubunResource: 'Madhubun Mathmate Ch 3 Exercises',
        classmapTech: 'Dynamic Problem Resolver',
        timeEstimate: '15 mins'
      },
      {
        stepNumber: 3,
        title: 'Speed & Accuracy Challenge',
        type: 'practice',
        description: 'Timed adaptive drill to build computational fluency.',
        madhubunResource: 'Mathmate Practice Set 3B',
        classmapTech: 'Fluency Tracker',
        timeEstimate: '10 mins'
      },
      {
        stepNumber: 4,
        title: 'Competency Check',
        type: 'mastery',
        description: 'Passing summative assessment ready for teacher review.',
        madhubunResource: 'Competency Test Paper 3',
        classmapTech: 'Automated Score Analytics',
        timeEstimate: 'Completed'
      }
    ],
    'Advanced Learner': [
      {
        stepNumber: 1,
        title: 'Fast-Track Diagnostic',
        type: 'diagnostic',
        description: 'Direct diagnostic testing higher-order thinking (HOTS) questions.',
        madhubunResource: 'Mathmate HOTS Diagnostic',
        classmapTech: 'Bloom\'s Level Tester',
        timeEstimate: '5 mins'
      },
      {
        stepNumber: 2,
        title: 'Real-World Math Application',
        type: 'content',
        description: 'Case-study based math problems (e.g., budgeting, spatial design).',
        madhubunResource: 'Madhubun STEM Project Cards',
        classmapTech: 'Scenario Simulator',
        timeEstimate: '15 mins'
      },
      {
        stepNumber: 3,
        title: 'Olympiad & Extension Challenge',
        type: 'practice',
        description: 'Advanced problem sets with multi-step logical reasoning.',
        madhubunResource: 'Madhubun Math Olympiad Companion',
        classmapTech: 'Enrichment Recommender',
        timeEstimate: '15 mins'
      },
      {
        stepNumber: 4,
        title: 'Excellence Certification',
        type: 'mastery',
        description: 'Paces ahead into next grade concepts seamlessly.',
        madhubunResource: 'Advanced Mastery Badge',
        classmapTech: 'Gifted Student Pathway',
        timeEstimate: 'Completed'
      }
    ]
  },
  Hindi: {
    'Needs Foundational Support': [
      {
        stepNumber: 1,
        title: 'Vyakaran & Vartani Assessment',
        type: 'diagnostic',
        description: 'Identify exact spelling and grammar rules requiring reinforcement.',
        madhubunResource: 'Gunjan Hindi Mala Ch 1 Diagnostic',
        classmapTech: 'Hindi Phonetic & Spelling Engine',
        timeEstimate: '5 mins'
      },
      {
        stepNumber: 2,
        title: 'Audio Kavita & Shabd-Arth',
        type: 'content',
        description: 'Listen to clear poem recitations with interactive word meanings.',
        madhubunResource: 'Gunjan Audio Reader',
        classmapTech: 'Speech & Pronunciation Guide',
        timeEstimate: '10 mins'
      },
      {
        stepNumber: 3,
        title: 'Targeted Grammar Practice',
        type: 'practice',
        description: 'Fill in the blanks and sentence construction with AI feedback.',
        madhubunResource: 'Madhubun Vyakaran Latika Ex 1',
        classmapTech: 'NLP Grammar Evaluator',
        timeEstimate: '10 mins'
      },
      {
        stepNumber: 4,
        title: 'Chapter Mastery',
        type: 'mastery',
        description: 'Confident reading and comprehension achieved.',
        madhubunResource: 'Gunjan Assessment Sheet',
        classmapTech: 'Hindi Competency Report',
        timeEstimate: 'Completed'
      }
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The synergy between Madhubun\'s time-tested textbooks and Classmap\'s adaptive technology has completely transformed our classrooms. Teachers save hours on homework creation, and students actually enjoy practicing math and Hindi at home.',
    author: 'Sunita Sharma',
    role: 'Academic Director',
    school: 'Delhi Public School, Dwarka',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    quote: 'As a Math teacher, identifying learning gaps across 40 students used to take weeks. With Classmap analyzing Madhubun exercises in real-time, I get an instant diagnostic breakdown and personalized remedial sheets with one click.',
    author: 'Rajesh Nair',
    role: 'Head of Mathematics',
    school: 'St. Xavier’s Senior Secondary School',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    quote: 'Our students love the interactive audio stories from Gunjan Hindi Mala and the step-by-step problem hints in Science. Parents are delighted because learning is now self-driven and tailored to their child\'s pace.',
    author: 'Ananya Roy',
    role: 'Principal',
    school: 'Modern High School for Girls',
    location: 'Kolkata',
    avatar: 'https://images.unsplash.com/photo-1580894732413-8025a947702f?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is the Madhubun x Classmap partnership?',
    answer: 'Madhubun Educational Books, one of India’s most trusted K-12 educational publishers, has partnered with Classmap, a leading AI-powered personalised learning platform. Together, they combine physical Madhubun textbooks with Classmap’s adaptive learning software to deliver personalized learning pathways, diagnostic assessments, and automated teacher workflows.'
  },
  {
    id: 'faq-2',
    category: 'Curriculum',
    question: 'Is this solution aligned with NEP 2020 and NCF 2023?',
    answer: 'Yes! All Madhubun digital content and Classmap assessment engines are mapped directly to competency-based learning standards outlined in NEP 2020 and the National Curriculum Framework (NCF 2023) for CBSE, ICSE, and major State Boards.'
  },
  {
    id: 'faq-3',
    category: 'Technology',
    question: 'Do students need expensive devices or high-speed internet?',
    answer: 'Classmap is built to be lightweight and accessible. It runs seamlessly on any standard Web browser, Android tablet, smartphone, or desktop computer. Content can also be cached for offline usage in low-connectivity areas.'
  },
  {
    id: 'faq-4',
    category: 'Implementation',
    question: 'How can our school get started or request a demo kit?',
    answer: 'School leaders, principals, and coordinators can request an on-site or virtual demo by filling out the form on this page. Our team provides complete teacher training, digital board setup, and student account onboarding.'
  },
  {
    id: 'faq-5',
    category: 'Technology',
    question: 'How does the Personalised Learning engine work?',
    answer: 'As students complete exercises from Madhubun textbooks or Classmap quizzes, the platform analyzes response speed, error types, and conceptual depth. It automatically adjusts question difficulty and recommends specific Madhubun explanation modules or remedial practice sets.'
  }
];
