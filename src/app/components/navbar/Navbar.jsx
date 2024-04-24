"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [navbarOpen, setnavbarOpen] = useState(false);

  const navigation = [
    {
      label: "Home",
      href: "/",
      color: "#ff4656",
    },
    {
      label: "Agents",
      href: "/agents",
      color: "#ff4656",
    },
    {
      label: "Maps",
      href: "/maps",
      color: "#ff4656",
    },
    {
      label: "Buddies",
      href: "/buddies",
      color: "#ff4656",
    },
    {
      label: "Bundles",
      href: "/bundles",
      color: "#ff4656",
    },
    {
      label: "Weapons",
      href: "/weapons/list",
      color: "#ff4656",
    },
    {
      label: "Banner",
      href: "/banner",
      color: "#ff4656",
    },
    {
      label: "About Me",
      href: "/about",
      color: "",
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#0A141ECC] top-0 left-0 right-0 z-10 bg-[#0A141ECC] bg-opacity-100">
      <div className="flex container lg:py:4 flex-wrap items-center justify-between mx-auto px-5 py-5">
        <Link className="text-2xl md:text=5xl font-semibold" href={"/"}>
          Syahmi Mokhtar
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setnavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setnavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x- mt-2">
            {navigation.map((link, index) => (
              <li key={index}>
                <Navlinks href={link.href} title={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>

       {navbarOpen ? <MenuOverlay links={navigation} /> : null}
    </nav>
  );
};

export default Navbar;
