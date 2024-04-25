import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./component/Navbar";
import ProductAll from "./components/ProductAll";
import Login from "./componnets/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return <div></div>;
}
