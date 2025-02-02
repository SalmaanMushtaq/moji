"use client"; // Required for using hooks

import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-orange-500 font-bold" : "text-gray-700";

  return (
    <>
      <Link
        href="/"
        className={`ps-4 text-2xl font-semibold flex gap-4 items-center ${isActive(
          "/"
        )}`}
      >
        <BaggageClaim size={30} /> MOJI
      </Link>
      <nav>
        <ul className="flex space-x-6 gap-2 text-lg">
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/electronics" className={isActive("/electronics")}>
              Electronics
            </Link>
          </li>
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/men" className={isActive("/men")}>
              Men
            </Link>
          </li>
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/women" className={isActive("/women")}>
              Women
            </Link>
          </li>
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/jewelery" className={isActive("/jewelery")}>
              Jewelery
            </Link>
          </li>
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li className="hover:shadow-sm rounded-sm hover:shadow-orange-400 px-2 py-1">
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex justify-center items-center gap-4">
        <img
          className="inline-block size-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </section>
    </>
  );
}
