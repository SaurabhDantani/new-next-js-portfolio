"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./AboutComponent";
import saurabh from '../../../public/vercel.svg'

const content = [
  {
    title: "About me",
    description:(
      <div>
      <p className="break-normal mb-2">Greetings! I`m Saurabh Dantani,</p>
        <p className="justify-normal">
          fervent Full Stack Developer dedicated to crafting robust and innovative solutions. 
          With a deep expertise in a spectrum of full stack technologies including Node.js, React.js,Postgresql,MongoDB,
          I thrive on turning ideas into exceptional, scalable software.             
        </p>
        <p className="text-lg m-2 text-yellow-500">My mission?</p>
        <p>To not just meet, but exceed expectations, delivering unparalleled value with every project.</p>
        <p className="text-lg mt-2">Let`s collaborate and bring your vision to life, one line of code at a time.</p>
      </div>
    ),
    content: (
      <div className="h-full w-full p-20  bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image src={saurabh} 
        className="rounded-full overflow-hidden"
        alt="not found"
         />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={saurabh}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
      <StickyScroll content={content} />
    );
}
