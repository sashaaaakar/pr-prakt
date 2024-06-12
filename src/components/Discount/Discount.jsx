import { handleBacketClick } from "../../functions/backet";
import styles from "./Discount.module.scss";

export default function Discount() {
  return (
    <div id="discount" className={styles.container}>
      <div className={styles.discount}>
        <span className={styles.perc}>15% на все телефоны</span>
        <div className={styles.heading}>СКИДКА В ЧЕСТЬ ПРАЗДНИКА</div>
        <button className={styles.buy}>
          <a href="#mobile" className={styles.buy_arrow}>
            КУПИТЬ
          </a>
        </button>
      </div>
      <img className={styles.img} src="images/single-image1.png" />
    </div>
  );
}
