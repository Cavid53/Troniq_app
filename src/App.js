import "./App.css";
import AppNavbar from "./components/Navbar";
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
        <WriteOur/>
      </main>
    </div>
  );
}

export default App;
