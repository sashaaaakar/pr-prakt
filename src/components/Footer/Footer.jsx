import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={s.container}>
      <hr className={s.hr} />
      <div className={s.wrapper}>
        <div className={s.support}>
          <p className={s.support_text}>При поддержке:</p>
          <img className={s.support_img} src="images/dhl.png" alt="" />
          <img className={s.support_img} src="images/shippingcard.png" alt="" />
        </div>
        <div className={s.money}>
          <p className={s.money_text}>Способы оплаты:</p>
          <img className={s.money_img} src="images/visa.jpg" alt="" />
          <img className={s.money_img} src="images/mastercard.jpg" alt="" />
          <img className={s.money_img} src="images/paypal.jpg" alt="" />
        </div>
        <div className={s.copy}>
          <span>© Сайт MiniStore принадлежит Козловой А.А</span>
          <span className={s.copy_item}>Копирование запрещено</span>
        </div>
      </div>
    </div>
  );
}
