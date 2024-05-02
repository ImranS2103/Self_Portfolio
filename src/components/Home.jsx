import React from 'react';

function Home() {
    return (
        <body className="home-one">
            <div className="page-wrapper">

                {/* Preloader */}
                {/* <div className="preloader"></div> */}

                {/* main header */}
                <header className="main-header menu-absolute">
                    {/*Header-Upper*/}
                    <div className="header-upper">
                        <div className="container container-1620 clearfix">

                            <div className="header-inner rel d-flex align-items-center">
                                <div className="logo-outer">
                                    <div className="logo"><a href="index.html"><img src="assets/images/logos/log.png" alt="Logo" title="Logo" /></a></div>
                                </div>

                                <div className="nav-outer clearfix mx-auto">
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-lg">
                                        <div className="navbar-header">
                                            <div className="mobile-logo my-15">
                                                <a href="About.jsx">
                                                    <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
                                                </a>
                                            </div>

                                            {/* Toggle Button */}
                                            <button type="button" className="navbar-toggle me-4" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                        </div>

                                        <div className="navbar-collapse collapse clearfix">
                                            <ul className="navigation onepage clearfix">
                                                <li><a href="#home">Home</a></li>
                                                <li><a href="#about">about</a></li>
                                                <li><a href="#resume">Resume</a></li>
                                                <li><a href="#services">services</a></li>
                                                <li><a href="#skills">skills</a></li>
                                                <li><a href="#portfolio">projects</a></li>
                                                {/* <li><a href="#blog">blog</a></li> */}
                                                <li><a href="#contact">Contact</a></li>
                                            </ul>
                                        </div>

                                    </nav>
                                    {/* Main Menu End*/}
                                </div>

                                {/* Menu Button */}
                                <div className="menu-btns">
                                    {/* menu sidbar */}
                                    <div className="menu-sidebar">
                                        <button>
                                            <img src="assets/images/shape/sidebar-tottler.svg" alt="Toggler" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </header>


                {/*Form Back Drop*/}
                <div className="form-back-drop"></div>

                {/* Hidden Sidebar */}
                <section className="hidden-bar">
                    <div className="inner-box text-center">
                        <div className="cross-icon"><span className="fa fa-times"></span></div>
                        <div className="title">
                            <h4>Get Appointment</h4>
                        </div>

                        {/*Appointment Form*/}
                        <div className="appointment-form">
                            <form method="post" action="https://webtend.site/html/noxfolio_pre/contact.html">
                                <div className="form-group">
                                    <input type="text" name="text" value="" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" value="" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" rows="5"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="theme-btn">Submit now</button>
                                </div>
                            </form>
                        </div>

                        {/*Social Icons*/}
                        <div className="social-style-one">
                            <a href="https://www.linkedin.com/in/imran-shaikh-04016023b/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/ImranS2103"><i className="fab fa-github"></i></a>
                            <a href="https://join.skype.com/invite/vxcB22yjxs2F"><i className="fab fa-skype"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </section>
                {/*End Hidden Sidebar */}


                {/* Hero Section Start */}
                <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
                    <div className="container container-1620">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-7">
                                <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                                    <span className="h2">Hello, I’m </span>
                                    <h1><b>Imran Shaikh</b> Web Developer</h1>
                                    <p>Experienced in building robust web applications,Website UI's and Web Designes</p>
                                    <div className="hero-btns">
                                        <a href="contact.html" className="theme-btn">Hire Me <i className="far fa-angle-right"></i></a>
                                        <a href="/Imran_React.pdf" download className="read-more">Download Resume <i className="far fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-5 order-lg-3">
                                <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
                                    <div className="counter-item counter-text-wrap">
                                        <span className="count-text plus" data-speed="3000" data-stop="10">0</span>
                                        <span className="counter-title">Months Of Experience</span>
                                    </div>
                                    <div className="counter-item counter-text-wrap">
                                        <span className="count-text plus" data-speed="3000" data-stop="8">0</span>
                                        <span className="counter-title">Project Complete</span>
                                    </div>
                                    <div className="counter-item counter-text-wrap">
                                        <span className="count-text percent" data-speed="3000" data-stop="99">0</span>
                                        <span className="counter-title">Client Satisfactions</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="author-image-part wow fadeIn delay-0-3s">
                                    <div className="bg-circle"></div>
                                    <img src="assets/images/hero/imran.png" alt="Author" />
                                    <div className="progress-shape">
                                        <img src="assets/images/hero/progress-shape.png" alt="Progress" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-lines">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </section>
                {/* Hero Section End */}
            </div>
        </body>
    )
}

export default Home
