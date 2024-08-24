import React from "react";
import { Link } from "react-scroll";

// Define the interface for NavbarProps directly here
interface NavbarProps {
  sections: { id: string; element: React.ReactNode }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => (
  <nav className="flex justify-center fixed w-lvw font-matemasie">
    <ul className="flex p-4 box-border bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
      {sections.map((section) => (
        <li
          key={section.id}
          className="mx-3.5 cursor-pointer hover:border-b-2 hover:border-r-2"
        >
          <Link to={section.id} smooth={true} duration={500}>
            {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
