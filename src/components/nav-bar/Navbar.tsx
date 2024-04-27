import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import Link from "next/link";

export default function App() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuItems = [
    "intro",
    "about",
    "skills"
 ];

 const toggleMenu = () => {
  debugger
    setIsMenuOpen(!isMenuOpen);
 };

 return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={toggleMenu} // Toggle menu when clicking the toggle button
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`hidden sm:flex gap-4 ${isMenuOpen ? "hidden" : ""}`} justify="center"> {/* Hide NavbarContent when isMenuOpen is true */}
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={`#${item}`} aria-current="page">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
            <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu onClick={()=>{toggleMenu()}}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <NavbarMenuItem onClick={() => {
              toggleMenu(); // Close the menu
            }}>
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
