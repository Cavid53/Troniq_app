import "./App.css";
import AppNavbar from "./components/Navbar";
import Slider from "./components/Slider";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar/>
        <Slider></Slider>
      </header>
    </div>
  );
}

export default App;
