import s from "./About.module.scss";

export default function About() {
  return (
    <div className={s.container}>
      <div className={s.arrows}>
        <a href="#">
          <img className={s.logo} src="images/main-logo.png" />
        </a>
        <p className={s.text}>
          Выгодный магазин новейшей техники. Мы любим своих клиентов!
        </p>
        <div className={s.arrow}>
          <a className={s.arrow_link} href="#">
            <img className={s.arrow_img} src="images/facebook.svg" alt="" />
          </a>
          <a className={s.arrow_link} href="#">
            <img className={s.arrow_img} src="images/instagram.svg" alt="" />
          </a>
          <a className={s.arrow_link} href="#">
            <img className={s.arrow_img} src="images/twitter.svg" alt="" />
          </a>
          <a className={s.arrow_link} href="#">
            <img className={s.arrow_img} src="images/linked.svg" alt="" />
          </a>
          <a className={s.arrow_link} href="#">
            <img className={s.arrow_img} src="images/youtube.svg" alt="" />
          </a>
        </div>
      </div>
      <div className={s.search}>
        <h2 className={s.heading}>БЫСТРЫЙ ПОИСК</h2>
        <nav className={s.search_nav}>
          <a className={s.search_item} href="#home">
            ДОМОЙ
          </a>
          <a className={s.search_item} href="#service">
            СЕРВИС
          </a>
          <a className={s.search_item} href="#mobile">
            ТОВАРЫ
          </a>
          <a className={s.search_item} href="#news">
            БЛОГ
          </a>
        </nav>
      </div>
      <div className={s.contacts}>
        <h2 className={s.heading}>КОНТАКТЫ</h2>
        <p className={`${s.text} ${s.desc}`}>
          Есть вопросы? Пишите нам на почту.
        </p>
        <a
          href="mailto:MiniStore@gmail.com"
          className={`${s.search_item} ${s.link}`}
        >
          MiniStore@gmail.com
        </a>
        <p className={`${s.text} ${s.desc}`}>
          Или можете позвонить:{" "}
          <a className={`${s.search_item} ${s.link}`} href="tel:+79179306638">
            +79179306638
          </a>
        </p>
      </div>
    </div>
  );
}
