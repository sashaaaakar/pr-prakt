import { useContext, useState } from "react";
import { handleNext } from "../../../functions/slider";
import { AppContext } from "../../../provider/provider";
import styles from "./RightArrow.module.scss";

export default function RightArrow() {
  const { setSlideIndex, slideIndex } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => handleNext(setSlideIndex)}
      className={styles.arrow__container}
    >
      <img
        className={styles.arrow}
        src={
          isHovered || slideIndex === 1
            ? "images/hover-arrow-right.svg"
            : "images/arrow-right.svg"
        }
        alt="Стрелка направо"
        width="150px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onClick={handleClick}
      />
    </div>
  );
}
