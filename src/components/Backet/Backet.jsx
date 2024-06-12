import { useContext } from "react";
import { AppContext } from "../../provider/provider";
import EmptyBacket from "../EmptyBacket/EmptyBacket";
import FullBacket from "../FullBacket/FullBacket";
import s from "./Backet.module.scss";

export default function Backet() {
  const { cartCount, setCartCount, itemCounts, setItemCounts } =
    useContext(AppContext);

  return (
    <div className={s.container}>
      {/* {cartCount > 0 ? <FullBacket /> : <EmptyBacket />} */}
      {/* <EmptyBacket /> */}
      <FullBacket />
    </div>
  );
}
