import React, { useState } from 'react';
import { X, Smartphone, Globe, CheckCircle2, ArrowRight, Download, QrCode } from 'lucide-react';
import { MadhubunLogo, ClassMapLogo } from './BrandLogos';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [sentSms, setSentSms] = useState(false);

  if (!isOpen) return null;

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) return;
    setSentSms(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-orange-100 relative space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MadhubunLogo size="sm" />
            <span className="text-slate-300">•</span>
            <ClassMapLogo size="sm" />
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900">
            Download ClassMap App
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm">
            Access your Madhubun textbook's interactive chapters, diagnostic tests, and adaptive worksheets on your device.
          </p>
        </div>

        {/* Store Options Buttons */}
        <div className="space-y-3">
          
          {/* Android Play Store / Web App direct redirect */}
          <a
            href="https://classmap-student.web.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold p-4 rounded-2xl transition-all flex items-center justify-between cursor-pointer group shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Student App</span>
                <span className="text-sm font-bold text-white">Open ClassMap Dashboard</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Web App Direct Launch */}
          <a
            href="https://classmap-student.web.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-50 hover:bg-orange-100 text-orange-900 border border-orange-200 font-bold p-4 rounded-2xl transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-200 text-orange-700 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-orange-700 uppercase font-bold tracking-wider">Browser Access</span>
                <span className="text-sm font-bold text-orange-900">Continue on Web Portal</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* SMS Link Request Form */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <QrCode className="w-4 h-4 text-orange-500" />
            <span>Get App Link on SMS / Phone</span>
          </div>

          {!sentSms ? (
            <form onSubmit={handleSendSms} className="flex gap-2">
              <input
                type="tel"
                required
                maxLength={10}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                placeholder="Enter 10-digit Mobile No."
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-xl text-xs cursor-pointer shadow-xs"
              >
                Send Link
              </button>
            </form>
          ) : (
            <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>App download link sent to +91 {mobileNumber}!</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
