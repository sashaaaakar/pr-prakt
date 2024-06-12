import React, { useState, useContext } from "react";
import styles from "./Slider.module.scss";
import Slide from "./Slide/Slide";
import LeftArrow from "./LeftArrow/LeftArrow";
import RightArrow from "./RightArrow/RightArrow";

const Slider = () => {
  return (
    <div id="home" className={styles.wrapper}>
      <LeftArrow />
      <div className={styles.container}>
        <Slide />
      </div>
      <RightArrow />
    </div>
  );
};

export default Slider;
