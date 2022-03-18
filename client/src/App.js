import './App.css';

import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Post from "./components/Post/Post"

import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
      <>
        <Navbar />
          <Routes>
              <Route path="/" element={ <MainPage />} />
              <Route path="/good" element={ <ItemList/>} />
              <Route path="/good/:id" element={ <Post/>} />
              <Route path="/addgood" element={ <Form/>} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
