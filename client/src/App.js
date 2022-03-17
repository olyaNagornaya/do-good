import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Form from "./components/Form/Form";
import Itemlist from './components/Itemlist';

function App() {
  return (
      <>
        <Navbar />
          <Routes>
              <Route path="/" element={ <MainPage />} />
              <Route path="/good" element={ <Itemlist />} />
              <Route path="/addgood" element={ <Form/>} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
