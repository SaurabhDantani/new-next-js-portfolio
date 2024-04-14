"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "./background-boxes";
import { cn } from "@/utils/cn";
import { IndexTypeEffect } from "../type-effect/IndexTypeEffetc";
import { Avatar } from "@nextui-org/react";
import profilePic from '../../../public/profile-pic.png'

export function BackgroundBoxesDemo() {
  const [showAvatar, setShowAvatar] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setShowAvatar(true);
    }, 3000);
  })

  return (
    <div id="demoComponent1" className="h-96 relative w-full overflow-hidden bg-slate-500 dark:bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
      <div className="absolute inset-0 w-full h-full bg-slate-500 dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {showAvatar && <Avatar size="lg" isBordered color="success" src={profilePic.src} />}
      <IndexTypeEffect />
    </div>
  );
}
