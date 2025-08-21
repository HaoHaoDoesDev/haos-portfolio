"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNav,
  NavbarLogo,
} from "@/components/resizeable-navbar";
import { useRouter } from "next/navigation";
import routes from "@/config/routes";

import { useState } from "react";

export default function NavbarLinks() {
  const router = useRouter();

  const navItems = [
    { name: "ABOUT", link: routes.about_me_page.page },
    { name: "SKILLS", link: routes.skills_page.page },
    { name: "PROJECTS", link: routes.projects_page.page },
    { name: "CONTACT", link: routes.contact_page.page }, 
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems
          items={navItems.map((item) => ({
            ...item,
            onClick: () => router.push(item.link),
          }))}
        />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => {
                router.push(item.link);
                setIsMobileMenuOpen(false);
              }}
              className="relative text-neutral-600 dark:text-neutral-300 block w-full text-left py-2 px-4"
            >
              {item.name}
            </button>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
