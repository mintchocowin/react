import "./App.css";
import { Routes, Route } from "reacti-router-dom";
import ProductAll from "./components/ProductAll";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";

function App() {
  const [autheneticate, setAuthenticate] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login />}
          setAuthenticate={setAuthenticate}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
