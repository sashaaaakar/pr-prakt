import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import styles from "./App.module.scss";
import About from "./components/About/About";
import Backet from "./components/Backet/Backet";
import BacketHeader from "./components/BacketHeader/BacketHeader";
import Clock from "./components/Clock/Clock";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mobile from "./components/Mobile/Mobile";
import MoreGoods from "./components/MoreGoods/MoreGoods";
import News from "./components/News/News";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";
import Subscribe from "./components/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <Mobile />
      <Clock />
      <Discount />
      <News />
      <Reviews />
      <Subscribe />
      <MoreGoods />
      <About />
      <Footer />
    </>
  );
};

const BacketWrapper = () => {
  return (
    <>
      <BacketHeader />
      <Backet />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backet" element={<BacketWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
