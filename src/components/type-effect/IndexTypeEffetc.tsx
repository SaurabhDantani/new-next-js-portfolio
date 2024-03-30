"use client";

import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function IndexTypeEffect() {
  const words = [
    {
      text: "Welcome",
      className: "text-red-800 dark:text-black break-normal md:text-4xl text-xl text-white relative z-20",
    },
    {
      text: "to ",
      className: "text-yellow-500 dark:text-yello-500 break-normal md:text-4xl text-xl text-white relative z-20",
    },
    {
      text: "my ",
      className: "text-yellow-500 dark:text-yello-500 break-normal md:text-4xl text-xl text-white relative z-20",
    },
    {
      text: "portfolio ",
      className: "text-yellow-500 dark:text-yello-500 break-normal md:text-4xl text-xl text-white relative z-20",
    },
    {
      text: "website.",
      className: "text-blue-500 dark:text-blue-500 md:text-4xl text-xl text-white relative z-20",
    },
  ];

  const words2 = [
    {
      text: "Hello !",
      className: "text-yellow-500 dark:text-yello-500 break-normal md:text-4xl text-xl text-white relative z-20",
    },
    {
      text: "I'am Saurabh Dantani",
      className: "text-yellow-500 dark:text-yello-500 break-normal md:text-4xl text-xl text-white relative z-20",
    },  
  ];
  const [delay,setDelay] = useState(false)
  const handleDelay = ()=>{
    setTimeout(()=>{
      setDelay(true)
    },6000)
  }
  useEffect(()=>{
    handleDelay()    
  },[])
  return (
    <div className="flex flex-col items-center justify-center  ">    
      <TypewriterEffectSmooth words={words2} className="mb-0" />
      {delay?(
        <TypewriterEffectSmooth words={words} />
      ):(        
        null
      )}
    </div>
  );
}
