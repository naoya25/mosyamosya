import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="fixed flex justify-between items-center p-5 w-[100vw] z-100 bg-white">
      <p className="text-[2em]">Nyogi</p>
      <p>
        <FontAwesomeIcon icon={faBars} className="h-[30px] w-[30px]" />
      </p>
    </header>
  );
};

export default Header;
