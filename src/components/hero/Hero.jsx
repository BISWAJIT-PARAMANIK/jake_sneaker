import React from "react";
import css from "./Hero.module.css";
import Heroimg2 from "../../assets/big1.png";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className={css.container}>
      {/*left*/}
      <div className={css.h_sides}>
        <span className={css.text1}>basketball sneaker </span>
        <div className={css.text2}>
          <span>Trendy Collection </span>
          <span>
            What are some real-life sneaker business names? Nike. Skechers USA.
            New Balance Athletics. Merrell. Vans.
          </span>
        </div>
      </div>
      {/* middle side hero image */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
          transition={transition}
        ></motion.div>
        {/* hero img */}
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={Heroimg2}
          alt="hero-image"
          width={600}
          height={400}
        />
        {/* cart animation */}
        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
          className={css.cart2}
        >
          <FiShoppingBag />
          <div className={css.signup}>
            <span> Best Singnup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5M</span>
          <span>Monthly Traffice</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
