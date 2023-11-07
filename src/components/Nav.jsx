import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="absolute w-full z-10 padding-x py-8">
      <nav className="flex justify-between items-center  max-w-[1440px] my-0 mx-auto">
        <a href="/">
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

        <div className="lg:hidden">
          <img
            src={hamburger}
            width={"24px"}
            height={"24px"}
            alt="hamburger-icon"
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
