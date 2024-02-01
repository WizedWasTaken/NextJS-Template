import React from "react";
import Link from "next/link";
import { NavLinksProps } from "@/lib/definitions";

const NavLinks: React.FC<NavLinksProps> = ({ isShown }) => {
  return (
    <div className="w-full">
      <ul className="space-y-2">
        <li>
          <Link href="/projects">
            <p
              className={`hover:text-indigo-300 ${
                isShown ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500 ease-in-out`}
            >
              Galleri
            </p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p
              className={`hover:text-indigo-300 ${
                isShown ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500 ease-in-out`}
            >
              Om Os
            </p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p
              className={`hover:text-indigo-300 ${
                isShown ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-500 ease-in-out`}
            >
              Kontakt Os
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
