"use client"; // Required for using hooks

import { useState } from "react";
import { BaggageClaim, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-orange-500 font-bold" : "text-gray-700";

  return (
    <>
      {/* Logo */}
      <Link
        href="/"
        className={`text-2xl font-semibold flex gap-2 items-center ${isActive(
          "/"
        )}">`}
      >
        <BaggageClaim size={30} className="text-orange-500" /> MOJI
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={30} className="text-orange-500 hover:text-red-500" />
        ) : (
          <Menu size={30} className="text-orange-500" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <NavLink href="/electronics" isActive={isActive} label="Electronics" />
        <NavLink href="/men" isActive={isActive} label="Men" />
        <NavLink href="/women" isActive={isActive} label="Women" />
        <NavLink href="/jewelery" isActive={isActive} label="Jewelery" />
        <NavLink href="/about" isActive={isActive} label="About" />
        <NavLink href="/contact" isActive={isActive} label="Contact" />
      </nav>

      {/* Profile Picture */}
      <section className="hidden md:flex justify-center items-center">
        <img
          className="size-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User"
        />
      </section>

      {/* Mobile Navigation Menu (Dropdown) */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 w-full bg-gray-100 border-t-2 shadow-lg md:hidden 
      transition-transform duration-300 ease-in-out transform ${
        isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
      } origin-top`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <NavLink
              href="/electronics"
              isActive={isActive}
              label="Electronics"
            />
            <NavLink href="/men" isActive={isActive} label="Men" />
            <NavLink href="/women" isActive={isActive} label="Women" />
            <NavLink href="/jewelery" isActive={isActive} label="Jewelery" />
            <NavLink href="/about" isActive={isActive} label="About" />
            <NavLink href="/contact" isActive={isActive} label="Contact" />
          </ul>
        </div>
      )}
    </>
  );
}

// Reusable NavLink Component
function NavLink({
  href,
  isActive,
  label,
}: {
  href: string;
  isActive: (path: string) => string;
  label: string;
}) {
  return (
    <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
      <Link href={href} className={isActive(href)}>
        {label}
      </Link>
    </li>
  );
}
