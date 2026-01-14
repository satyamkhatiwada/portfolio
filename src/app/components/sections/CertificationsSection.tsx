// CertificationsSection.tsx
import React from 'react';

const certifications = [
  { title: "Advanced PowerBI Training", issuer: "Qniverse", date: "2025", color: "bg-orange-500", url: "https://qniverse.co.uk/coe-p-25-1001/" },
  { title: "n8n Course Level 1", issuer: "n8n", date: "2025", color: "bg-blue-500", url: "https://community.n8n.io/badges/104/completed-n8n-course-level-1?username=satyamkhatiwada" },
  { title: "Data Analytics with Python", issuer: "freeCodeCamp", date: "2025", color: "bg-red-500", url: "https://www.freecodecamp.org/certification/satyamkhatiwada/data-analysis-with-python-v7" },
  { title: "Machine Learning with Python", issuer: "freeCodeCamp", date: "2025", color: "bg-yellow-500", url: "https://www.freecodecamp.org/certification/satyamkhatiwada/machine-learning-with-python-v7" },
  { title: "AWS Academy Machine Learning", issuer: "Amazon Web Services", date: "2022", color: "bg-orange-600" },
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", date: "2022", color: "bg-green-500" },
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-3">
      {certifications.map((cert, i) => (
        <a 
          key={i} 
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-[13px] font-bold text-white group-hover:text-spotify-green transition-colors">
              {cert.title}
            </h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
              {cert.issuer} • {cert.date}
            </p>
          </div>

          <div className="flex items-center gap-3">
             {/* Simple "Verify" indicator that appears on hover */}
            <span className="text-[9px] text-spotify-green opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest">
              Verify
            </span>
            <div className={`h-1.5 w-1.5 rounded-full ${cert.color} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
          </div>
        </a>
      ))}
    </div>
  );
}