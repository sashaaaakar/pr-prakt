import s from "./FullBacket.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { mainData as initialMainData } from "../../constants/main-data";
import { AppContext } from "../../provider/provider";
import EmptyBacket from "../EmptyBacket/EmptyBacket";

export default function FullBacket() {
  const { cartCount, setCartCount, itemCounts, setItemCounts } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [mainData, setMainData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    // Фильтруем и обновляем mainData на основе itemCounts
    const updatedMainData = initialMainData
      .filter(
        (item) => itemCounts[item.id] !== undefined && itemCounts[item.id] > 0
      ) // Оставляем только те элементы, которые есть в itemCounts и count больше 0
      .map((item) => ({
        ...item,
        count: itemCounts[item.id] || 0,
      }));
    setMainData(updatedMainData);
  }, [itemCounts]);

  const handlePlus = (id) => {
    const updatedCounts = { ...itemCounts, [id]: (itemCounts[id] || 0) + 1 };
    setItemCounts(updatedCounts);
    setCartCount(cartCount + 1);
    localStorage.setItem("itemCounts", JSON.stringify(updatedCounts));
    localStorage.setItem("cartCount", JSON.stringify(cartCount + 1));
  };

  useEffect(() => {
    const data = mainData.map((item) => ({
      price: parseFloat(item.price.replace("$", "")),
      count: item.count,
    }));

    const cost = data.reduce((sum, current) => {
      return sum + current.price * current.count;
    }, 0);

    setTotalCost(cost);
  }, [mainData]);

  const handleMinus = (id) => {
    if (itemCounts[id] > 0) {
      const updatedCounts = { ...itemCounts, [id]: itemCounts[id] - 1 };
      if (updatedCounts[id] === 0) {
        delete updatedCounts[id]; // Удаляем товар из itemCounts, если count равен 0
      }
      setItemCounts(updatedCounts);
      setCartCount(cartCount - 1);
      localStorage.setItem("itemCounts", JSON.stringify(updatedCounts));
      localStorage.setItem("cartCount", JSON.stringify(cartCount - 1));
    }
  };

  const handleBuyClick = () => {
    alert("К сожалению, эта функция пока не доступна");
  };

  const handleClear = () => {
    setItemCounts({});
    setCartCount(0);
    setMainData([]);
    setTotalCost(0);
    localStorage.removeItem("itemCounts");
    localStorage.removeItem("cartCount");
  };

  return (
    <div>
      {cartCount === 0 ? (
        <EmptyBacket />
      ) : (
        <div className={s.container}>
          <div className={s.top}>
            <button onClick={handleClick}>
              <img
                className={s.arrow}
                src="images/backet-arrow.svg"
                alt="back arrow"
              />
              <span className={s.back}>Вернуться назад</span>
            </button>
            <div className={s.clear}>
              <h1 className={s.heading}>Корзина</h1>
              <button className={s.clear_button_container}>
                <span>
                  <img className={s.clear_icon} src="images/clear.svg" alt="" />
                </span>
                <span onClick={handleClear} className={s.clear_button}>
                  Очистить корзину
                </span>
              </button>
            </div>
          </div>
          <div className={s.about}>
            {/* Товары */}
            {mainData.map((good, index) => (
              <div key={index} className={s.goods}>
                <img className={s.goods_img} src={good.img} alt={good.name} />
                <div className={s.desc}>
                  <div className={s.desc_name}>{good.name}</div>
                  <div className={s.desc_price}>{good.price}</div>
                </div>
                <div className={s.counter}>
                  <button
                    onClick={() => handleMinus(good.id)}
                    className={s.counter_minus}
                  >
                    <img src="images/minus.svg" alt="minus" />
                  </button>
                  <span className={s.counter_num}>{good.count}</span>
                  <button
                    onClick={() => handlePlus(good.id)}
                    className={s.counter_plus}
                  >
                    <img src="images/plus.svg" alt="plus" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={s.total}>
            <h2 className={s.total_heading}>Итого</h2>
            {/* <div className={s.total_googs_container}>
              <hr className={s.hr} />
              <div className={s.total_goods}>Товары</div>
              <div className={s.total_sum}>711 руб</div>
            </div> */}
            <div>
              <hr className={s.hr} />
              <div className={s.total_buy_container}>
                <div className={s.total_buy}>К оплате</div>
                <div className={s.total_buy_sum}>${totalCost}</div>
              </div>
            </div>
            <button onClick={handleBuyClick} className={s.total_button}>
              Купить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
