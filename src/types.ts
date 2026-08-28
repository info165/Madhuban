export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Technology' | 'Implementation';
}
