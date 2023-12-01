import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className=" w-full z-20 padding-x py-8 fixed top-0 bg-white-400/[0.5] shadow-xl">
      <nav className="flex justify-between items-center  max-w-[1440px] my-0 mx-auto">
        <a href="#home">
          <img
            src={headerLogo}
            alt="Header Logo"
            width={"140px"}
            height={"28px"}
          />
        </a>

        <ul className="flex justify-center items-center gap-16 text-slate-500 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden cursor-pointer relative">
          <div
            className="flex gap-2 items-center"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            Browse {isMobileMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
          </div>

          {isMobileMenuOpen && (
            <ul className="absolute right-0 border-2 top-10 w-[140px] rounded-md text-center bg-white">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="p-2 hover:text-coral-red border-b-2 hover:underline hover:underline-offset-[4px]"
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
