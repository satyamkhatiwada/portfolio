"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-4 max-md:p-3"
      id="#profile"
    >
      <div className="flex flex-col gap-7 max-md:gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/sat1.jpeg"
            alt="Satyam Khatiwada"
            width={400}
            height={400}
            objectFit="none"
            className="rounded-[25px]"
          />
        </BackgroundGradient>

        <PersonalStatement />
        
        {/* <Booking /> */}
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg">
      <div className="flex items-center gap-2 font-medium">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Kathmandu, Nepal
      </div>
    </div>
  );
}

function Booking() {
  const email = ""; // Replace with the email you want to copy
  const phoneNum = "";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert("Phone bumber copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex px-4 gap-3">
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyNumber}
      >
        <FaRegCopy /> Copy Number
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyEmail}
      >
        <FaRegCopy /> Copy Email
      </button>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-semibold">Satyam Khatiwada</h1>
      </div>
      <Location />
      <div className="space-y-1.5">
        <p className="text-spotify-gray text-sm">
          QA Engineer • Automation Specialist • Cybersecurity Starter
        </p>
      </div>
      <h4 className="text-sm">
        <span>
          I&apos;m a QA Engineer with 2+ years of experience, starting as an{" "}
          <span className="text-spotify-green">intern</span> and 
          quickly growing into a{" "}  
          <span className="text-spotify-green">mid-level </span>
          role by consistently delivering results and taking 
          ownership. I&apos;ve led multiple projects, worked directly with stakeholders, and 
          supported clients to make sure releases go out smoothly.
          
          <br />
          <br />
          
          I like working smart and adapting quickly. I use automation, AI, and{" "}
          <span className="text-spotify-green">modern 
          tools</span> to reduce repetitive work and improve efficiency. I also have a strong interest 
          in cybersecurity and believe security should always be a core part of building reliable 
          software. I enjoy fast-paced environments, learning from feedback, and continuously 
          improving my craft.
        </span>
      </h4>
    </div>
  );
}
