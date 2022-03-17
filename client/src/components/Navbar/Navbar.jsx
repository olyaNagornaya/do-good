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

            <h1 class="text-light"><a href="index.html">Do good</a></h1>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="active" href="/">Home</a></li>
              <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="about.html">About</a></li>
                  <li><a href="team.html">Team</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/map">Map</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>

              <li><a class="getstarted" href="about.html">Get Started</a></li>
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
