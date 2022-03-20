import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from "react-router-dom";

import {LogoutThunk} from '../../redux/thunk/ThunkPosts' // ОТПРАВКА НА САНКИ

function Navbar() {
   const Check = useSelector(store=> store.register)

   const dispatch = useDispatch() 
   const Navigate = useNavigate() 


   const logAut = () => {
      dispatch(LogoutThunk())
      Navigate('/')
   }


  return (
    <>
  {/* <!-- ======= Header ======= --> */}
  <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

          <div class="logo">
            {/*<img className="imglogo" src="/assets/img/logo-do-good.png"/>{" "}*/}

            <h1 class="text-light"><a href="index.html">Дари Добро</a></h1>
          </div>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="active" href="/">Главная</a></li>
              <li><a href="good">Добро</a></li>
              <li><a href="map">Карта</a></li>
                <li className="dropdown"><a href="#"><span>Личный кабинет</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                        {!Check.username && <li><a href="register">Регистрация</a></li>}
                        {!Check.username && <li><a href="login">Вход</a></li>}
                        {Check.username && <li><a href="profile">Профиль</a></li>}
                        {Check.username && <li onClick={logAut}><a href="#">Выход</a></li>}
                    </ul>
                </li>
             <li><a className="getstarted" href="#">Готов помочь</a></li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      {/* <!-- ======= End Header ======= --> */}
    </>
  );
}

export default Navbar;
