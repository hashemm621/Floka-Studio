import React, { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import logo from "../assets/brandlogo1.png";
import RoundMenuIcon from "../customAnimation/AnimatedDot";
import MenuIcon from "../customAnimation/MenuIcon";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Portfolio", href: "#", hasDropdown: true },
    { name: "Blog", href: "#", hasDropdown: true },
  ];

  return (
    <>
      <nav className="w-full px-4 bg-[#F4F4F4]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-19">
            {/* Logo */}
            <a href="#" className="shrink-0">
              <img
                className="h-11.75 w-auto lg:max-h-6"
                src={logo}
                alt="Floka Logo"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex w-3/4  items-center justify-between">
              <div className="hidden lg:flex w-3/4  items-center justify-between">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-[#575757] not-first-of-type:not-only:transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex gap-1 items-center justify-center ml-2">
                <a
                  href="info@floka.com"
                  className="text-lg font-medium text-[#575757] not-first-of-type:not-only:transition-colors">
                  info@floka.com
                </a>
                <span className="text-gray-400"> | </span>
                <RoundMenuIcon />
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="flex items-center lg:hidden">
              <MenuIcon onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile/Tablet Sidebar Drawer --- */}

      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}></div>

      {/* 2. Drawer Content */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-full md:max-w-87.5 shadow-2xl flex flex-col`}>
        {/* Drawer Header */}
        <div className="p-6 flex justify-between items-start">
          <img
            className="h-10 w-auto"
            src={logo}
            alt="Floka Logo"
          />

          {/* Custom Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <div className="relative h-5 w-5 flex items-center justify-center">
              <motion.span
                animate={{
                  rotate: isHovered ? 0 : 45,
                  y: isHovered ? 0 : 0,
                }}
                className="absolute h-0.5 w-6 bg-black block"
              />
             
              <motion.span
                animate={{
                  rotate: isHovered ? 0 : -45,
                  opacity: isHovered ? 1 : 1,
                }}
                className="absolute h-0.5 w-6 bg-black block"
              />
            </div>
          </button>
        </div>

        {/* Search Input  */}
        <div className="px-6 mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="KEYWORDS..."
              className="w-full font-funnel bg-gray-50 border-none py-3 px-4 text-sm focus:ring-1 focus:ring-gray-200 outline-none"
            />
            <Search
              className="absolute right-3 top-3 text-gray-400"
              size={18}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6">
          <div className="flex flex-col border-t border-gray-100">
            {navLinks.map(link => (
              <div
                key={link.name}
                className="flex justify-between items-center py-4 border-b border-gray-100 group">
                <span className="text-[15px] font-bold uppercase tracking-tight text-gray-900 cursor-pointer">
                  {link.name}
                </span>
                {link.hasDropdown && (
                  <button className="bg-gray-50 p-1.5 rounded">
                    <ChevronDown
                      size={16}
                      className="text-gray-500"
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
