import React, { useEffect, useState } from 'react';
import Demox from "@/components/Demox";
import { StickyScrollRevealDemo } from "@/components/about/AboutIndex";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { IndexBackgroundGradient } from '@/components/mobile-about/IndexLampSection';

export default function About() {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
    // Function to check if the device is a mobile device
    function checkMobileDevice() {
      const mobileViewportWidth = 768; // You can adjust this value based on your needs
      return window.innerWidth <= mobileViewportWidth;
    }

    // Set the initial state based on the current viewport width
    setIsMobile(checkMobileDevice());

    // Add a resize event listener to update the state when the window size changes
    window.addEventListener('resize', () => {
      setIsMobile(checkMobileDevice());
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(checkMobileDevice());
      });
    };
 }, []);

 return (
   <div id="about">
     {!isMobile && (
       <Card>
         <CardBody className="items-center">
           <div className="">
             <StickyScrollRevealDemo />
           </div>
         </CardBody>
       </Card>
     )}
     {isMobile && (
       <div className="md:hidden lg:hidden p-2">
         <IndexBackgroundGradient />
       </div>
     )}
   </div>
 );
}