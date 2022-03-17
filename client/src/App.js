import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
