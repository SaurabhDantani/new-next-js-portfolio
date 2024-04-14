"use client"
import { useEffect } from "react";
import NavbarComponent from "@/components/nav-bar/Navbar";
import {NextUIProvider} from "@nextui-org/react";
import { BackgroundBoxesDemo } from "@/components/header/Index.background-boxes";
import Demox from "@/components/Demox";
import About from "@/pages/About";
import Intro from "@/pages/Intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {

  return (
    <main className="bg-blue-200 dark:bg-gray-900 w-full h-full">
      <NextUIProvider>      
        <NavbarComponent />
        {/* <div className="mb-32"> */}
          <Intro />
        {/* </div> */}
          <SectionDivider />
        <div className="mt-0">
          <About />
        </div>

    </NextUIProvider>
    </main>
  );
}
