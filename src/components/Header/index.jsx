//@flow
import React, { type Node } from "react";

//icons
import Logo from "../Icons/Logo";
import Avatar from "../Icons/Avatar";

const Header = (): Node => {
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
