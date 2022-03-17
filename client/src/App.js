import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Registation from './components/Register/Registation';
import Login from './components/Register/Login';
import Profile from './components/Register/Profile';
import { useEffect } from 'react';



function App() {
   
// useEffect(() => {
//  // ДЛЯ ЗАПРОСА СЕССИИ ЮЗЕРА НА БЕК ЗАПРОС , ПОЛУЧАЕМ КУКИ ЮЗЕРА И ДИСПАТЧИМ В РЕДАКС 

 
// }, [])





  return (
      <>
        <Navbar />
   <Routes>
   <Route path='/' element={<MainPage/>}></Route> 
   <Route path='/register' element={<Registation/>}></Route> 
   <Route path='/login' element={<Login/>}></Route> 
   <Route path='/profile' element={<Profile/>}></Route> 
   </Routes>
   <Footer />
      </>
  );
}

export default App;
