import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./components/ProductAll";
import Login from "./components/Login";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";

function App() {
  
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
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
