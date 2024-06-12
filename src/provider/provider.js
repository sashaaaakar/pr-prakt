import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLeftActive, setIsLeftActive] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);
  const [cartCount, setCartCount] = useState(() => {
    // Инициализировать значение из localStorage
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount !== null ? JSON.parse(savedCartCount) : 0;
  });
  const [itemCounts, setItemCounts] = useState(() => {
    const savedItemCounts = localStorage.getItem("itemCounts");
    return savedItemCounts !== null ? JSON.parse(savedItemCounts) : 0;
  });

  useEffect(() => {
    // Сохранить значение в localStorage при изменении cartCount
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartCount]);

  useEffect(() => {
    // Сохранить значение в localStorage при изменении cartCount
    localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
  }, [itemCounts]);

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        slideIndex,
        setSlideIndex,
        isLeftActive,
        setIsLeftActive,
        isRightActive,
        setIsRightActive,
        cartCount,
        setCartCount,
        itemCounts,
        setItemCounts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
