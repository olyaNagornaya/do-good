import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const handlerlogout = () => {

  };

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
              <li><a href="profile">Профиль</a></li>
              {/*<li><a href="blog.html">Blog</a></li>*/}
              {/*<li><a href="contact.html">Contact</a></li>*/}
              <li><a className="getstarted" href="register">Регистрация</a></li>
              <li><a class="getstarted" href="login">Вход</a></li>
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
