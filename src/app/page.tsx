"use client"
import Image from "next/image";
import ThemeSwitch from "../components/theme/ThemeSwitch";
import NavbarComponent from "@/components/nav-bar/Navbar";
import {NextUIProvider} from "@nextui-org/react";
import { BackgroundBoxesDemo } from "@/components/header/Index.background-boxes";

export default function Home() {
  return (
    <main className="bg-blue-200 dark:bg-gray-900 w-full h-full">
      <NextUIProvider>      
        <NavbarComponent />
        <BackgroundBoxesDemo />
    </NextUIProvider>
    </main>
  );
}
