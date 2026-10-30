"use client";

import React, { useState } from "react";
import NavButton from "./NavButton";
import { FaCode } from "react-icons/fa6";
import { ReactNode } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { LuFileText, LuNewspaper } from "react-icons/lu";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";
import { TypewriterEffect } from "./ui/type-writer-effect";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(): ReactNode {
  const [mobile, setMobile] = useState<boolean>(false);
  const pathname = usePathname();

  function handleMobile(): void {
    setMobile((prev) => !prev);
  }

  return (
    <nav>
      <div
        className={`flex flex-col bg-spotify-light-dark mx-2 mt-2 rounded-xl p-2 md:mx-8 md:mt-4 md:rounded-full lg:mx-32
         `}
      >
        <section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">
          {/*Mobile Mode*/}
          {mobile ? (
            <FaTimes className="text-4xl md:hidden" onClick={handleMobile} />
          ) : (
            <GiHamburgerMenu
              className="text-4xl md:hidden"
              onClick={handleMobile}
            />
          )}

          <Link href="/" className="flex gap-2 text-3xl font-bold items-center">
            <FaCode className="text-spotify-green w-[70px]" />
            {/* <h1 className="max-lg:hidden">Satyam Khatiwada</h1> */}
            <TypewriterEffect
              words={[
                { text: "Satyam", className: "text-4xl" },
                { text: "Khatiwada", className: "text-4xl" },
              ]}
              className="place-self-center max-lg:hidden text-white"
            />
          </Link>

          {/*Hidden on Mobile*/}
          <section className="hidden flex-row items-center gap-2 mx-2 md:flex lg:mx-4 lg:gap-4">
            <Link
              href="/blog"
              className="text-3xl hover:text-spotify-green transition-colors duration-200"
              aria-label="Blog"
            >
              <LuNewspaper />
            </Link>
            <PiLineVerticalThin className="text-spotify-gray text-4xl" />
            <SocialLinks />
            {pathname !== "/resume" && (
              <>
                <PiLineVerticalThin className="text-spotify-gray text-4xl" />
                <Link
                  href="/resume"
                  className="flex items-center gap-2 rounded-full bg-spotify-green px-4 py-2.5 font-semibold text-spotify-black transition-colors duration-200 hover:bg-spotify-dark-green"
                >
                  <LuFileText aria-hidden="true" />
                  <span>View CV</span>
                </Link>
              </>
            )}
          </section>
        </section>
        {mobile && <MobileNav handleMobile={handleMobile} />}
      </div>
    </nav>
  );
}
