import React from "react";
import styles from "./Hero.module.scss";
import Navigation from "./Navigation";
import HeroSlider from "./HeroSlider";
const Hero = () => {
  return (
    <div className={styles.wrapBox}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.leftSide}>
            <Navigation/>
          </div>
          <div className={styles.rightSide}>
            <HeroSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
