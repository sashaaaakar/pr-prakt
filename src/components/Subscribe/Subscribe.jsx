import { useState } from "react";
import styles from "./Subscribe.module.scss";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный email");
    } else {
      setError("");
      // Здесь вы можете добавить логику для отправки email
      alert("Почта успешно отправлена!");
      setEmail("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={styles.container}>
      <div className={styles.subs_container}>
        <div className={styles.subs_description}>
          <h2 className={styles.heading}>ПОДПИШИСЬ СЕЙЧАС</h2>
          <div className={styles.text}>
            Мы будем отправлять тебе самые свежие новости.
          </div>
        </div>
        <div className={styles.input_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Твой email"
            value={email}
            onChange={handleChange}
          />
          <button className={styles.send} onClick={handleSubmit}>
            ОТПРАВИТЬ
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </div>
    </div>
  );
}
