import { Link, NavLink } from "react-router-dom";


export default function MainComponent() {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero">
                <div className="hero-container" data-aos="fade-up">
                    <h1>Welcome to Serenity</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            {/*<!-- End Hero -->*/}

            <main id="main">

                {/*<!-- ======= About Section ======= -->*/}
                <section id="about" class="about">
                    <div class="container">

                        <div class="row justify-content-end">
                            <div class="col-lg-11">
                                <div class="row justify-content-end py-3">

                                    {/*<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">*/}
                                        {/*<div class="count-box py-5">*/}
                                        {/*    <i class="bi bi-emoji-smile" />*/}
                                        {/*    <span data-purecounter-start="0" data-purecounter-end="65" class="purecounter">0</span>*/}
                                        {/*    <p>Happy Clients</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                    {/*<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">*/}
                                    {/*    <div class="count-box py-5">*/}
                                    {/*        <i class="bi bi-journal-richtext"/>*/}
                                    {/*        <span data-purecounter-start="0" data-purecounter-end="85" class="purecounter">0</span>*/}
                                    {/*        <p>Projects</p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">*/}
                                    {/*    <div class="count-box pb-5 pt-0 pt-lg-5">*/}
                                    {/*        <i class="bi bi-clock"/>*/}
                                    {/*        <span data-purecounter-start="0" data-purecounter-end="27" class="purecounter">0</span>*/}
                                    {/*        <p>Years of experience</p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    {/*<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">*/}
                                    {/*    <div class="count-box pb-5 pt-0 pt-lg-5">*/}
                                    {/*        <i class="bi bi-award"/>*/}
                                    {/*        <span data-purecounter-start="0" data-purecounter-end="22" class="purecounter">0</span>*/}
                                    {/*        <p>Awards</p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-lg-6 video-box align-self-baseline position-relative">
                                <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
                            </div>

                            <div class="col-lg-6 pt-3 pt-lg-0 content">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i class="bx bx-check-double"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i class="bx bx-check-double"/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i class="bx bx-check-double"/> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
                                    <li><i class="bx bx-check-double"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
                {/*<!-- End About Section -->*/}

                {/* <!-- ======= Cta Section ======= -->*/}
                <section id="cta" className="cta">
                    <div className="container" data-aos="fade-in">

                        <div className="text-center">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a className="cta-btn" href="#">Call To Action</a>
                        </div>

                    </div>
                </section>
                {/*<!-- End Cta Section -->*/}

                {/*<!-- ======= Services Section ======= -->*/}
                <section id="services" className="services ">
                    <div className="container">

                        <div className="section-title pt-5" data-aos="fade-up">
                            <h2>Our Services</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon-box" data-aos="fade-up">
                                    {/*<div className="icon"><i className="bi bi-briefcase" style="color: #ff689b;"/></div>*/}
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box" data-aos="fade-up">
                                    {/*<div className="icon"><i className="bi bi-book" style="color: #e9bf06;"/></div>*/}
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bi bi-card-checklist" style="color: #3fcdc7;"/></div>*/}
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bi bi-binoculars" style="color:#41cf2e;"/></div>*/}
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bi bi-globe" style="color: #d6ff22;"/></div>*/}
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    {/*<div className="icon"><i className="bi bi-clock" style="color: #4680ff;"/></div>*/}
                                    <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*<!-- End Services Section -->*/}

            </main>
            {/*<!-- End #main -->*/}
        </>
    )
}