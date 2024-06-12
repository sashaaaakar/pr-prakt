import s from "./EmptyBacket.module.scss";
import { useNavigate } from "react-router-dom";

export default function EmptyBacket() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={s.container}>
      <h1 className={s.heading}>Корзина</h1>
      <div className={s.backet_container}>
        <img
          className={s.img}
          src="https://yastatic.net/s3/lavka-web/public/assets/images/EmptyCartBag.svg"
          alt="pocket"
        />
        <h2 className={s.head_desc}>В вашей корзине пока пусто</h2>
        <div className={s.desc}>Тут появятся товары, которые вы закажете</div>
        <button onClick={handleClick} className={s.button}>
          Вернуться на главную страницу
        </button>
      </div>
    </div>
  );
}
