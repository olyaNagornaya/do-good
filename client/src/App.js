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
import { useSelector } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import ProtectedAutf from './components/ProtectedAutf';



function App() {
   // const Check = useSelector(store=> store.register)


   {/* {Check.username && <Route path='/profile' element={<Profile/>}></Route> } */}



  return (
      <>
   <Navbar />
   <Routes>
   <Route path='/profile' element={
   // <ProtectedAutf>
      <Profile/>
   // </ProtectedAutf>
   }/> 
   <Route path='/' element={<MainPage/>}></Route> 
   <Route path='/register' element={<Registation/>}></Route>    
   <Route path='/login' element={<Login/>}></Route> 
   </Routes>
   <Footer />
      </>
  );
}

export default App;
