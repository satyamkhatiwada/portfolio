"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Loader from "./components/ui/Loader";
import GithubContributions from "./components/sections/GithubContributions";
import QAStatus from "./components/sections/QAStatus";
import dynamic from 'next/dynamic';

// Lazy load components
const ProfileCard = lazy(() => import("./components/sections/ProfileCard"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const ProgrammingLanguages = lazy(
  () => import("./components/sections/ProgrammingLanguages")
);
const SpotifyAlbum = lazy(() => import("./components/sections/SpotifyAlbum"));
const ExperienceItem = lazy(
  () => import("./components/sections/ExperienceItems")
);
const OpenedProjects = lazy(
  () => import("./components/sections/OpenedProjects")
);

export interface ProjectsProps {
  onSetExperienceSection?: () => void;
}

export default function Home() {
  const [experienceSection, setExperienceSection] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function handleSetExperienceSection() {
    setExperienceSection((prev) => !prev);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

return (
    <>
      {loading ? (
        <Loader />
      ) : (
        /* 1. Changed grid-rows-8 to auto-rows-min to prevent content "pushing" */
<main className="w-screen max-w-[1600px] mx-auto pt-6 px-32 grid grid-cols-6 gap-4 max-lg:flex max-lg:flex-col max-md:px-2 mb-10">          <Suspense fallback={<Loader />}>
            <ProfileCard />
            
            {experienceSection ? (
              <OpenedProjects
                onSetExperienceSection={handleSetExperienceSection}
                className="max-md:hidden"
              />
            ) : (
              <>
                <ExperienceItem />
                <Projects onSetExperienceSection={handleSetExperienceSection} />
                <ProgrammingLanguages />
                {/* REMOVED THE SPOTIFY/RECOMMENDATION DIV FROM HERE */}
              </>
            )}

            {/* --- PASTE IT HERE (OUTSIDE THE LOGIC) --- */}
            <div className="col-span-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-start mt-2">
              <div className="md:col-span-4">
                {/* Pass the state so you can hide it via CSS if you really wanted to, 
                    but simpler to just render it here to keep it visible. */}
                <QAStatus isExploreMode={false} /> 
              </div>
              <div className="md:col-span-2">
                <SpotifyAlbum />
              </div>
            </div>
            {/* ----------------------------------------- */}
            
            
            {/* Spacer before footer */}
            <div className="col-span-6 mt-16 mb-8 text-center border-t border-white/5 pt-8" />       
            <OpenedProjects className="block md:hidden" />
            
            <Footer />
          </Suspense>
        </main>
      )}
    </>
  );
}