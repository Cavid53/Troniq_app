import "./App.css";
import AppNavbar from "./components/home/Navbar";
import Services from "./components/home/Services";
import Slider from "./components/home/Slider";
import WriteOur from "./components/home/WriteOur";
import AppFooter from "./components/home/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      <main>
        <Slider></Slider>
        <WriteOur />
        <Services />
      </main>
      <footer>
       <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
