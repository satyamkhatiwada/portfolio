import React from 'react';

export default function QAStatus({ isExploreMode }: { isExploreMode: boolean }) {
  return (
    /* We match Luan's row-span-2 and fix the height to 152px */
<div className="col-span-4 row-span-1 bg-[#121212] rounded-xl border border-white/5 flex flex-col h-[152px] overflow-hidden">
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white tracking-tight">Recommendations</h2>
        <a href="https://linkedin.com" target="_blank" className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">LinkedIn →</a>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6 pb-4 space-y-3 custom-scrollbar">
        <div className="border-l-2 border-[#1db954] pl-4">
          <p className="text-sm text-gray-300 italic leading-snug line-clamp-2">"I’ve had the pleasure of working with Satyam, and I can confidently say he is an excellent QA professional. He consistently demonstrates strong technical skills, attention to detail, and a structured approach to planning and execution. Beyond his technical expertise, Satyam stands out for his positive attitude and collaborative spirit, which make him a great team player. His performance has always been reliable and impactful, and I truly value the dedication he brings to his work.

I highly recommend Satyam to any team looking for a skilled, dependable, and positive-minded QA professional."</p>
          <p className="text-[10px] mt-1 font-bold text-[#1db954] uppercase">Uttsah Sharma • CEO • Qniverse</p>
        </div>
        <div className="border-l-2 border-blue-400 pl-4">
          <p className="text-sm text-gray-300 italic leading-snug line-clamp-2">"I have had the pleasure of working with Satyam during his time as a QA Engineer at Qniverse. As the People & Culture Manager, I was truly impressed by his positive attitude, sharp mind, and unwavering dedication. He consistently stood out as one of the brightest performers, delivering quality work with focus and professionalism.

Satyam’s collaborative nature and commitment to excellence made him a valued member of our team. I am confident he will bring the same level of brilliance and dedication to any organization he joins, and I highly recommend him."</p>
          <p className="text-[10px] mt-1 font-bold text-blue-400 uppercase">Rupa Aryal • Head of People • Qniverse</p>
        </div>
      </div>
    </div>
  );
}