import { useState } from "react";
import styles from "./Reviews.module.scss";
import { reviews } from "./../../constants/reviews";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.quote}>
        <img src="images/quote.svg" alt="Quote icon" />
      </div>
      <div className={styles.slider}>
        <div className={styles.img_container} onClick={handlePrev}>
          <img
            className={styles.img}
            src="images/arrow-left.svg"
            width="45px"
            alt="Previous"
          />
        </div>
        <div className={styles.reviews}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className={styles.review}
              style={{
                display: index === currentReview ? "block" : "none",
              }}
            >
              <p className={styles.text}>{review.text}</p>
              <div className={styles.stars_container}>
                {review.stars.map((src, idx) => (
                  <img
                    className={styles.stars_img}
                    key={idx}
                    src={src}
                    alt={`Star ${idx + 1}`}
                  />
                ))}
              </div>
              <span className={styles.name}>{review.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.img_container} onClick={handleNext}>
          <img
            className={styles.img}
            src="images/arrow-right.svg"
            width="45px"
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
}
