"use client";

import React from "react";
import { motion } from "framer-motion";
import './divider.css'
// import {Divider} from "@nextui-org/react";

export default function SectionDivider() {
  return (
    <>
      <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] dark:bg-gray-900">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>
      </div>
    </>
  )
}
