import s from "./MoreGoods.module.scss";
import { goods } from "./../../constants/goods";

export default function MoreGoods() {
  return (
    <div className={s.container}>
      <h2 className={s.heading}>БОЛЬШЕ ТОВАРОВ В НАШЕМ INSTAGRAM</h2>
      <div className={s.images}>
        {goods.map((item, index) => (
          <div key={index} className={s.imageContainer}>
            <img className={s.img} src={item} alt={`item-${index}`} />
            <a href="https://www.instagram.com">
              <img
                className={s.inst_img}
                src="images/instagram.svg"
                alt="instagram icon"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
