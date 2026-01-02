import { GrLinkNext } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import ProfessionalSnapshot from "./ProfessionalSnapshot";
import CertificationsSection from "./CertificationsSection";

export default function Projects({ onSetExperienceSection }: any) {
  return (
    /* Fixed the 'h-full' issue. By using 'max-h-screen', we prevent 
       this column from pushing your 'Recommendations' and 'Spotify' 
       widgets down.
    */
    <div className="max-md:hidden col-span-2 row-span-6 col-start-5 flex flex-col gap-4 h-full max-h-[calc(100vh-3px)]" id="projects">
      
      {/* 1. BUTTONS HEADER - Forced to stay at the top */}
      <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 shadow-xl shrink-0 z-10">
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center text-[12px] font-bold bg-spotify-green hover:bg-[#1ed760] py-2.5 rounded-full gap-2 text-black transition-all">
            Snapshot <FaArrowDown />
          </button>

          <button
            onClick={onSetExperienceSection}
            className="flex-1 flex items-center justify-center text-[12px] font-bold border border-[#727272] hover:border-white text-white py-2.5 rounded-full gap-2 transition-all"
          >
            Projects <GrLinkNext />
          </button>
        </div>
      </div>

      {/* 2. MAIN CARD - Uses flex-1 and overflow-hidden to contain the scroll */}
      <div className="flex-1 bg-[#121212] border border-white/5 rounded-2xl p-5 flex flex-col shadow-2xl overflow-hidden min-h-0">
        
        {/* Professional Snapshot - shrink-0 prevents it from being squished */}
        <div className="shrink-0 mb-6">
          <ProfessionalSnapshot />
        </div>

        <div className="h-[1px] w-full bg-white/5 shrink-0 mb-6" />

        {/* 3. SCROLL AREA CONTAINER */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 shrink-0">
            Verified Credentials
          </h2>
          
          {/* This is the magic div. 
              'flex-1' takes up all REMAINING space.
              'overflow-y-auto' creates the scroll.
              'min-h-0' stops it from expanding the whole grid.
          */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 min-h-0">
             <CertificationsSection />
          </div>
        </div>
      </div>
    </div>
  );
}