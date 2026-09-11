import { RiHeartFill, RiHome4Fill, RiInformationLine } from "@remixicon/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="links">
      <NavLink to="/" className='link' end>
        <RiHome4Fill className="icon" size={18} />
        Home
      </NavLink>
      <NavLink to="/favorites" className='link'>
        <RiHeartFill className="icon" size={18} />
        Favorites
      </NavLink>
      <NavLink to="/about" className='link'>
        <RiInformationLine className="icon" color="#573BC5" size={18} />
        About
      </NavLink>
    </div>
  );
};

export default Links;
