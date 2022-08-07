import React from "react";
import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="flex justify-between items-center text-[24px] text-dark">
      <nav>
        <ul className="flex space-x-[80px] font-medium">
          <li
            onClick={() => navigate("/")}
            className={`cursor-pointer transition-all hover:border-b-8 border-b-blue ${
              location.pathname === "/" && "border-b-8"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={`cursor-pointer transition-all hover:border-b-8 border-b-blue ${
              location.pathname === "/about" && "border-b-8"
            }`}
          >
            About
          </li>
        </ul>
      </nav>
      <button
        onClick={() => navigate("/contact")}
        className="transition-all px-[20px] py-[10px] bg-pink border-[3px] text-dark shadow-square hover:shadow-none text-[20px] font-medium"
      >
        Contact
      </button>
    </header>
  );
};

export default Header;
