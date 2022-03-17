import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyProductCard from "./components/MyProductCard/MyProductCard";

function App() {
  return (
      <>
        <Navbar />
          <MyProductCard/>
        <MainPage />
          <Footer />
      </>
  );
}

export default App;
