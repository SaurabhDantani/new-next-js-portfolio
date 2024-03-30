"use client";

import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export function IndexTypeEffect() {
  const words = [
    {
      text: "Welcome",
      className: "text-red-800 dark:text-black break-normal",
    },
    {
      text: "to",
    },
    {
      text: "my ",
    },
    {
      text: "portfolio",
    },
    {
      text: "website.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words2 = [
    {
      text: "Hello !",
      className: "text-yellow-500 dark:text-yello-500 break-normal",
    },
    {
      text: "I'am Saurabh Dantani",
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
