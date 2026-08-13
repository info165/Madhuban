import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Mail, MapPin, Building2, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';
import { DemoFormState } from '../types';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<DemoFormState>({
    fullName: '',
    email: '',
    phone: '',
    schoolName: '',
    city: '',
    designation: 'Principal / Director',
    studentCount: '500 - 1000',
    interestedSubjects: ['Mathematics', 'Hindi', 'Science'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const designations = [
    'Principal / Director',
    'Academic Coordinator / HOD',
    'School Trustee / Management',
    'Subject Teacher',
    'EdTech Administrator'
  ];

  const subjectsList = ['Mathematics', 'Hindi Course A/B', 'Science & EVS', 'English Language', 'Social Sciences'];

  const toggleSubject = (subj: string) => {
    setFormState((prev) => {
      const exists = prev.interestedSubjects.includes(subj);
      return {
        ...prev,
        interestedSubjects: exists
          ? prev.interestedSubjects.filter((s) => s !== subj)
          : [...prev.interestedSubjects, subj]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info & Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Partner With Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Schedule an On-Site or Virtual School Demo
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Experience how Madhuban Educational Books and Classmap Personalised Learning can elevate your school's academic performance and teacher satisfaction.
              </p>
            </div>

            {/* What you get in the demo kit */}
            <div className="space-y-3 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                What's included in the School Demo Kit:
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Complimentary physical textbook samples for review</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>14-day full trial access to Classmap Teacher & Student Apps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Customized learning gap analysis report for your target grade</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>On-site or virtual workshop session for subject teachers</span>
                </li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg text-amber-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-200">National School Helpline</span>
                  <a href="tel:+9118002001970" className="text-amber-400 hover:underline">1800-200-1970 (Toll Free)</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-200">Email Inquiry</span>
                  <a href="mailto:schools@madhubanbooks.com" className="text-indigo-400 hover:underline">schools@madhubanbooks.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-slate-200">Madhuban Educational Books HQ</span>
                  <span>E-28, Sector 8, Noida, Uttar Pradesh 201301</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Request Form */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Demo Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-amber-400">{formState.fullName}</strong>. Our academic consultant for <strong className="text-white">{formState.city || 'your city'}</strong> will contact you within 24 hours to schedule the presentation and dispatch your sample books.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-5 py-2.5 rounded-xl border border-slate-700 cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white">School Representative Inquiry</h3>
                  <span className="text-xs text-amber-400 font-medium">* All fields required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Sharma"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="principal@school.edu.in"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">School Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Modern Public School"
                      value={formState.schoolName}
                      onChange={(e) => setFormState({ ...formState, schoolName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi, Jaipur, Pune"
                      value={formState.city}
                      onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Designation *</label>
                    <select
                      value={formState.designation}
                      onChange={(e) => setFormState({ ...formState, designation: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      {designations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Interested Subjects for Evaluation</label>
                  <div className="flex flex-wrap gap-2">
                    {subjectsList.map((s) => {
                      const isChecked = formState.interestedSubjects.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleSubject(s)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition border ${
                            isChecked
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {isChecked ? '✓ ' : '+ '}{s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Requirements / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Specific grades, board requirements (CBSE/ICSE), or estimated student count..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Request School Demo & Free Sample Kit</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
