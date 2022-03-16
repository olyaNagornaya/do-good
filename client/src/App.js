import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Navbar />
        <MainPage />
          <Footer />
      </>
  );
}

export default App;
