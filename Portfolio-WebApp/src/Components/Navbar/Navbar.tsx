import React from "react";
import { Link } from "react-scroll";

// Define the interface for NavbarProps directly here
interface NavbarProps {
  sections: { id: string; element: React.ReactNode }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => (
  <nav>
    <ul>
      {sections.map((section) => (
        <li key={section.id}>
          <Link to={section.id} smooth={true} duration={500}>
            {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
