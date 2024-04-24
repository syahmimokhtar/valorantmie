import React from "react";
import Navlinks from "./Navlinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Navlinks href={link.href} title={link.label} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
