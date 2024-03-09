import React, { Fragment, useState } from "react";
import Button, { Type } from "../button/Button";
import { Header } from "../header/Header";
import HamburgerMenu from "./HamburgerMenu";
import { _scrollTo } from "./utils";
import { Divider } from "../divider/Divider";

export const MenuOptions = ({ closeMenu, isHamburgerMenu }) => {
  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      _scrollTo(id, 70);
      {
        closeMenu && closeMenu();
      }
    }
  };

  return (
    <Fragment>
      <Button
        type={Type.Ghost}
        text="Usługi"
        onClick={() => handleScrollToId("uslugi")}
      />
      <Button
        type={Type.Ghost}
        text="O nas"
        onClick={() => handleScrollToId("o_nas")}
      />
      <Button
        type={Type.Ghost}
        text="Klienci"
        onClick={() => handleScrollToId("testymonia")}
      />
      <Button
        type={Type.Primary}
        text="Umów wizytę!"
        onClick={() => handleScrollToId("kontakt")}
      />
    </Fragment>
  );
};

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Header />
        <div className={`navbar__buttons`}>
          <MenuOptions />
        </div>
        <HamburgerMenu options={<MenuOptions />}></HamburgerMenu>
      </div>
      <Divider></Divider>
    </nav>
  );
}
