import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Registation from './components/Register/Registation';
import Login from './components/Register/Login';
import Profile from './components/Register/Profile';



function App() {
  return (
      <>
        <Navbar />
   <Routes>
   <Route path='/register' element={<Registation/>}></Route> 
   <Route path='/login' element={<Login/>}></Route> 
   <Route path='/profile' element={<Profile/>}></Route> 
   </Routes>
        <MainPage />
          <Footer />
      </>
  );
}

export default App;
