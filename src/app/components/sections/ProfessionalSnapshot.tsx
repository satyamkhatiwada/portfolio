import React, { useState } from 'react';
import { FiCopy, FiCheck, FiMail, FiPhone, FiBookOpen } from 'react-icons/fi';

export default function ProfessionalSnapshot() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* 1. STATUS BAR (Full Width) */}
      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex items-center justify-between group hover:bg-white/[0.05] transition-colors">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spotify-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-spotify-green"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-spotify-green">Live Status</span>
        </div>
        <span className="text-xs font-semibold text-white">Available for Freelance & Remote Roles</span>
      </div>

      {/* 2. CONTACT ROW (Side-by-Side Split) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Email Button */}
        <button 
          onClick={() => handleCopy("satyam@example.com", "email")}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${
            copiedLabel === "email" 
              ? "bg-spotify-green/10 border-spotify-green/50 text-white" 
              : "bg-white/[0.03] border-white/5 text-gray-400 hover:bg-white/[0.08] hover:text-white"
          }`}
        >
          {copiedLabel === "email" ? <FiCheck className="text-spotify-green" /> : <FiMail />}
          <span className="text-[11px] font-bold uppercase tracking-wide">
            {copiedLabel === "email" ? "Copied!" : "Copy Email"}
          </span>
        </button>

        {/* WhatsApp Button */}
        <button 
          onClick={() => handleCopy("+977 98XXXXXXXX", "wa")}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${
            copiedLabel === "wa" 
              ? "bg-spotify-green/10 border-spotify-green/50 text-white" 
              : "bg-white/[0.03] border-white/5 text-gray-400 hover:bg-white/[0.08] hover:text-white"
          }`}
        >
          {copiedLabel === "wa" ? <FiCheck className="text-spotify-green" /> : <FiPhone />}
          <span className="text-[11px] font-bold uppercase tracking-wide">
            {copiedLabel === "wa" ? "Copied!" : "WhatsApp"}
          </span>
        </button>
      </div>

      {/* 3. TUTORING BANNER (Full Width) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1db954]/10 to-transparent border border-[#1db954]/20 rounded-xl p-3 flex items-center gap-4">
        <div className="p-2 bg-spotify-green/20 rounded-lg text-spotify-green shrink-0">
          <FiBookOpen size={16} />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-spotify-green mb-0.5">Mentorship</p>
          <p className="text-[11px] text-gray-300 italic leading-tight">
            &quot;Accepting students for <span className="text-white font-medium">QA Automation</span> &amp; <span className="text-white font-medium">n8n Logic</span> training.&quot;
          </p>  
        </div>
      </div>
    </div>
  );
}