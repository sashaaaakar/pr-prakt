import { useContext, useState, useEffect } from "react";
import { slides } from "../../../constants/slider";
import { AppContext } from "../../../provider/provider";
import styles from "./Slide.module.scss";

export default function Slide() {
  const { slideIndex } = useContext(AppContext);
  const [currentSlide, setCurrentSlide] = useState(slideIndex);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (slideIndex > currentSlide) {
      setAnimationClass(styles["slide-enter"]);
    } else {
      setAnimationClass(styles["slide-exit"]);
    }
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setAnimationClass("");
    }, 500); // Длительность анимации
  }, [slideIndex]);

  return (
    <>
      {slides.map((item, idx) => {
        if (slideIndex === idx) {
          return (
            <div
              className={`${styles.slider} ${styles.slide} ${animationClass}`}
            >
              <span className={`${styles.text} ${styles.mobile}`}>
                {item.text}
              </span>
              <img
                src={item.img}
                className={`${styles.img} ${styles.mobile}`}
                alt="Изображение"
              />
            </div>
          );
        }
      })}
    </>
  );
}
