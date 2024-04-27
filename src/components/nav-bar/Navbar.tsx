import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,  Button } from "@nextui-org/react";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import Link from "next/link";
import { useEffect, useState } from 'react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "intro",
    "about",
    "skills"
  ];
  const [targetComponentId, setTargetComponentId] = useState(null);

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
        {menuItems.map((item, index) => ( // Added index parameter
          <NavbarItem key={index}> {/* Added key prop */}
            <Link href={`#${item}`} aria-current="page">
              {item}
            </Link>
          </NavbarItem>
        ))}

      </NavbarContent>

      {/* theme switch */}
      <NavbarContent justify="end">
        <NavbarItem>
            <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* for mobile view */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <div key={index}> {/* Added key prop */}
            <NavbarMenuItem>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={`#${item}`}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
