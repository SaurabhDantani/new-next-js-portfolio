"use client";
import React, { useEffect, useState } from "react";
import { Boxes } from "./background-boxes";
import { cn } from "@/utils/cn";
import { IndexTypeEffect } from "../type-effect/IndexTypeEffetc";
import { Avatar } from "@nextui-org/react";

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
      {showAvatar && <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />}
      <IndexTypeEffect />
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
