"use client";
import React from "react";
import { BackgroundGradient } from "./ComponentLampSection";
import { IconAppWindow } from "@tabler/icons-react";
import vercel from '../../../public/vercel.svg'
import Image from "next/image";

export function IndexBackgroundGradient() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={vercel}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Greetings! I`m Saurabh Dantani,
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          fervent Full Stack Developer dedicated to crafting robust and
          innovative solutions. With a deep expertise in a spectrum of full
          stack technologies including Node.js, React.js,Postgresql,MongoDB, I
          thrive on turning ideas into exceptional, scalable software.
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            My mission?
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            To not just meet, but exceed expectations, delivering unparalleled value with every project.
            {/* <span></span> */}
            Let`s collaborate and bring your vision to life, one line of code at a time.
        </p>
        
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
