import React from "react";
import Link from "next/link";
import Image from "next/image";
import config from "../../../config";
import logo from "@/app/icon.png";

interface HeaderLink {
  src: string;
  text: string;
}

const links: HeaderLink[] = [
  { src: "#review", text: "Reviews" },
  { src: "/About", text: "About" },
  { src: "#pricing", text: "Pricing" },
];

function Header() {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800">
      <nav className="container flex items-center justify-between px-6 py-6 mx-auto">
        {/* Logo & Product name */}
        <div className="flex lg:flex-1 items-center">
          <Link
            className="flex items-center gap-2"
            href="/"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8 h-8"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-extrabold text-lg text-white hover:text-orange-500 transition-colors">
              {config.appName}
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden lg:flex lg:gap-10">
          {links.map((link) => (
            <Link
              href={link.src}
              key={link.src}
              className="text-gray-300 hover:text-white transition-colors text-md font-semibold"
              title={link.text}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="flex justify-end lg:flex-1">
          <Link href="/login">
            <button className="py-2 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
