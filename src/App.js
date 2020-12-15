import "./App.css";
import AppNavbar from "./components/Navbar";
import Services from "./components/Services";
import Slider from "./components/Slider";
import WriteOur from "./components/WriteOur";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
      </header>
      <main>
        <Slider></Slider>
        <WriteOur />
        <Services/>
      </main>
    </div>
  );
}

export default App;
