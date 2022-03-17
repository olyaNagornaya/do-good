import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";

import Form from "./components/Form/Form";

function App() {
  return (
      <>
        <Navbar />
          <Routes>
              <Route path="/" element={ <MainPage />} />
              {/*<Route path="/good" element={ <ItemList/>} />*/}
              {/*<Route path="/good/:id" element={ <Item/>} />*/}
              <Route path="/addgood" element={ <Form/>} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
