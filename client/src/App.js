import "./App.css";

import MainPage from "./pages/MainPage";
import { MapPage } from "./pages/MapPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Registation from "./components/Register/Registation";
import Login from "./components/Register/Login";
import Profile from "./components/Register/Profile";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import ProtectedAutf from "./components/ProtectedAutf";

import Post from "./components/Post/Post";

import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";

function App() {
  // const Check = useSelector(store=> store.register)

  {
    /* {Check.username && <Route path='/profile' element={<Profile/>}></Route> } */
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedAutf>
              <Profile />
            </ProtectedAutf>
          }
        />
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/register" element={<Registation />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/good" element={<ItemList />} />
        <Route path="/good/:id" element={<Post />} />
        <Route path="/addgood" element={<Form />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
