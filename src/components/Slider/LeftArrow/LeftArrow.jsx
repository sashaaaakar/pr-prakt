import React, { useState, useContext, useEffect } from "react";
import styles from "./LeftArrow.module.scss";
import { handlePrev } from "../../../functions/slider";
import { AppContext } from "../../../provider/provider";

export default function LeftArrow() {
  const { setSlideIndex, slideIndex } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => handlePrev(setSlideIndex)}
      className={styles.arrow__container}
    >
      <img
        className={styles.arrow}
        src={
          isHovered || slideIndex === 0
            ? "images/hover-arrow-left.svg"
            : "images/arrow-left.svg"
        }
        alt="Стрелка налево"
        width="150px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onClick={handleClick}
      />
    </div>
  );
}
