// CertificationsSection.tsx
import React from 'react';

const certifications = [
  { title: "n8n Advanced Automation", issuer: "n8n.io", date: "2025", color: "bg-orange-500" },
  { title: "Certified QA Engineer", issuer: "ISTQB", date: "2024", color: "bg-blue-500" },
  { title: "Cybersecurity Fundamentals", issuer: "Google", date: "2024", color: "bg-red-500" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon", date: "2023", color: "bg-yellow-500" },
  { title: "Postman API Fundamentals", issuer: "Postman", date: "2023", color: "bg-orange-600" },
  { title: "Mobile App Testing", issuer: "Appium", date: "2023", color: "bg-green-500" },
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-3">
      {certifications.map((cert, i) => (
        <div key={i} className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:bg-white/[0.06] transition-all">
          <div className="flex flex-col gap-1">
            <h3 className="text-[13px] font-bold text-white group-hover:text-spotify-green">{cert.title}</h3>
            <p className="text-[10px] text-gray-500 uppercase">{cert.issuer} • {cert.date}</p>
          </div>
          <div className={`h-1.5 w-1.5 rounded-full ${cert.color}`} />
        </div>
      ))}
    </div>
  );
}