export interface SubjectSeries {
  id: string;
  name: string;
  subject: string;
  grades: string;
  description: string;
  tag: string;
  color: string;
  features: string[];
  sampleChapters: string[];
}

export interface PathwayStep {
  stepNumber: number;
  title: string;
  type: 'diagnostic' | 'content' | 'practice' | 'remediation' | 'mastery';
  description: string;
  madhubanResource: string;
  classmapTech: string;
  timeEstimate: string;
}

export interface StakeholderBenefit {
  id: 'students' | 'teachers' | 'schools';
  title: string;
  subtitle: string;
  icon: string;
  points: {
    title: string;
    description: string;
  }[];
  stat: {
    value: string;
    label: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  school: string;
  location: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Technology' | 'Implementation';
}

export interface DemoFormState {
  fullName: string;
  email: string;
  phone: string;
  schoolName: string;
  city: string;
  designation: string;
  studentCount: string;
  interestedSubjects: string[];
  message: string;
}
