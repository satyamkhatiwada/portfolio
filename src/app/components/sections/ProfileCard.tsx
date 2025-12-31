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
            src="/luan_real.jpg"
            alt="Satyam Khatiwada"
            width={400}
            height={400}
            objectFit="none"
            className="rounded-[25px]"
          />
        </BackgroundGradient>

        <PersonalStatement />
        {/* <Location /> */}
        {/* <Booking /> */}
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg px-4">
      <div className="flex items-center gap-2 font-medium">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Tempe, AZ
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
        <p className="text-spotify-gray text-sm">
          QA Engineer • Automation Specialist • Cybersecurity Starter
        </p>
      </div>
      <h4 className="text-sm">
        I&apos;m currently working as a AI/ML Engineer Intern at{" "}
        <a
          href="https://scai.engineering.asu.edu/"
          className="text-spotify-green underline"
        >
          ASU SCAI
        </a>{" "}
        , researching on LLM ability to perform real-life business negotitation
        tasks.
        <br />
        <br />
        <span>
          I am a results-driven QA Engineer with 2+ years of experience at Qniverse Pvt. Ltd., where I rapidly grew from intern to a mid-level role by consistently delivering quality and taking ownership beyond my responsibilities. I have successfully led and managed multiple projects, conducted weekly stakeholder meetings, delivered UAT training sessions, and provided direct client support to ensure smooth releases and high satisfaction.
<br/>
What sets me apart is my ability to work smart and adapt fast — I actively leverage AI, automation tools such as n8n, Make.com, Power Automate, and Python to streamline processes, improve efficiency, and reduce manual effort. I am a proactive problem-solver, a collaborative team player, and a humble learner who values feedback and continuous improvement. I thrive in fast-paced environments and take pride in leading projects end-to-end while maintaining strong quality standards.
          {/* I hope to create better{" "}
          <span className="text-spotify-green">interactive software</span> that
          helps people cultivate and share ideas, expressing what brings them
          joy in meaningful ways.
        </span>
        <br />
        <br />
        <span>
          To that end, I take a generalist’s approach, driven by a deep care for
          both <span className="text-spotify-green">systems</span>, the
          foundational layers of our digital world, and{" "}
          <span className="text-spotify-green"> interaction design </span>,
          which shapes how we live with and relate to computers around us. */}
        </span>
      </h4>
    </div>
  );
}
