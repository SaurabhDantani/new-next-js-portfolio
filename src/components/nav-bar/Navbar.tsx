import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,  Button} from "@nextui-org/react";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import Link from "next/link";
import {useEffect,useState} from 'react'
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const [targetComponentId, setTargetComponentId] = useState(null);

  // Function to handle link clicks and smooth scroll
  const handleLinkClick = (id:any) => {
    setTargetComponentId(id);
    setIsMenuOpen(false); // Close menu after link click (optional)
  };

  // Effect to scroll to the target component when the ID changes
  useEffect(() => {
    if (targetComponentId) {
      const targetElement = document.getElementById(targetComponentId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setTargetComponentId(null); // Reset after scrolling
    }
  }, [targetComponentId]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#intro" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link href="#about" aria-current="page">
            About me
          </Link>
        </NavbarItem>

      </NavbarContent>

      {/* theme switch */}
      <NavbarContent justify="end">
        <NavbarItem>
            <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"

            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
