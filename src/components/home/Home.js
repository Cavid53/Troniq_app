import React from "react";
import AppNavbar from "../home/Navbar";
import Services from "../home/Services";
import Slider from "../home/Slider";
import WriteOur from "../home/WriteOur";
import AppFooter from "../home/Footer";

const Home = () => {
  return (
    <div>
      <header className="App-header"></header>
      <main>
        <Slider />
        <WriteOur />
        <Services />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
};

export default Home;
