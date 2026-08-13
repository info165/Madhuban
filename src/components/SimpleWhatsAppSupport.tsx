import React from 'react';
import { MessageSquare, HelpCircle, ShieldCheck } from 'lucide-react';

export const SimpleWhatsAppSupport: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Open clean WhatsApp chat window directly
    window.open('https://wa.me/?text=Hello%20Madhuban%20ClassMap%20Support', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 bg-orange-50/50 border-t border-orange-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Support Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Need Quick Support?</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Having issues Scanning or Downloading?
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              If you have any difficulty opening the QR code link or downloading the ClassMap app for your Madhuban textbook, chat with our technical support team.
            </p>
          </div>

          {/* Simple WhatsApp Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </button>
            <div className="mt-2 flex items-center justify-center gap-1 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Support Assistance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
