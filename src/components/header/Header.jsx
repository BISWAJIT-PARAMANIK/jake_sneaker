import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo1.svg";
import { HiShoppingBag } from "react-icons/hi";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [showMenu, setshowMenu] = useState(true);
  const togglemenu = () => {
    setshowMenu(!showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="shoes" />
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={togglemenu}>
          <GoThreeBars />
        </div>

        <ul
          className={css.menu_ul}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li> Collection</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" className={css.search} placeholder="Search" />
        <HiShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
