import styles from "./BacketHeader.module.scss";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../provider/provider";
import { useNavigate } from "react-router-dom";

export default function BacketHeader() {
  const { isOpen, setIsOpen, cartCount } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBacketClick = () => {
    navigate("/backet");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAnchorClick = (event) => {
    const offset = 100; // Высота вашего заголовка
    const targetId = event.target.getAttribute("href")?.substring(1);
    if (targetId) {
      event.preventDefault(); // Предотвращаем стандартное поведение якоря
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header>
        <div className={styles.logo}>
          <a href="#">
            <img src="images/main-logo.png" alt="Логотип" />
          </a>
        </div>
        <div className={styles["nav-container"]}>
          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <a onClick={handleHomeClick} href="/" className={styles.active}>
              ДОМОЙ
            </a>
            <div className={styles.icons}>
              <a href="#">
                <img src="images/search-icon.png" alt="Поиск" />
              </a>
              <a href="#">
                <img
                  src="images/user-icon.png"
                  alt="Личный кабинет"
                  className={styles.user_icon}
                />
              </a>
              <div
                className="styles.backet_container"
                onClick={handleBacketClick}
              >
                <a href="#">
                  <img
                    src="images/cart-outline-black.svg"
                    alt="Корзина"
                    className={styles.backet}
                  />
                  {cartCount > 0 && (
                    <span className={styles.cart_count}>{cartCount}</span>
                  )}
                </a>
              </div>
            </div>
          </nav>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span
            className={`${styles.menuIcon} ${
              isOpen
                ? styles.closeIcon1 + " " + styles.bodyPosition
                : styles.first
            }`}
          ></span>
          <span
            className={`${styles.menuIcon} ${
              isOpen ? styles.closeIcon2 : styles.second
            }`}
          ></span>
          <span
            className={`${styles.menuIcon} ${
              isOpen ? styles.closeIcon3 : styles.third
            }`}
          ></span>
        </button>
      </header>
    </>
  );
}
