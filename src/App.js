import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBarPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
