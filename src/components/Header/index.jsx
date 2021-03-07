//@flow
import React from "react";

//icons
import Logo from "../Icons/Logo";
import Avatar from "../Icons/Avatar";

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <div className="Header__profile">
        <Avatar />
        <div className="Header__profile__name">Darrel</div>
      </div>
    </div>
  );
};

export default Header;
