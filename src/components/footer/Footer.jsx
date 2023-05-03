import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo1.svg";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  UsersIcon,
  LinkIcon,
  LoginIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="a logo" />
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span> Contact us</span>

            <span className={css.pngLine}>
              <span>
                <LocationMarkerIcon className={css.icon} />
              </span>

              <span> purulia,tunturi,723212,west bengal</span>
            </span>

            <span className={css.pngLine}>
              <span>
                <PhoneIcon className={css.icon} />
              </span>
              <a href="tel:7992484529"></a>91+7992484529
            </span>

            <span className={css.pngLine}>
              <span>
                <InboxIcon className={css.icon} />
              </span>
              <a href="mailto:srkfanbiswajit@gmail.com">
                {" "}
                srkfanbiswajit@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>

            <span className={css.pngLine}>
              <span>
                <LoginIcon className={css.icon} />
              </span>
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>

            <span className={css.pngLine}>
              <span>
                <UsersIcon className={css.icon} />
              </span>
              <span>
                <a href="/about">About us</a>
              </span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>

            <span className={css.pngLine}>
              <span>
                <LinkIcon className={css.icon} />
              </span>
              <span>Safety Privacy$ terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>CopyRight &#169;2023 by sneaker shoe,inc</span>
        <span> All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
