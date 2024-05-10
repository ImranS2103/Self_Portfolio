import React, { useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
    useEffect(() => {
        const toggleScrollTop = () => {
            if (window.pageYOffset > 200) { // Show button after scrolling 200px
                document.querySelector('.scroll-top').classList.add('show');
            } else {
                document.querySelector('.scroll-top').classList.remove('show');
            }
        };

        window.addEventListener('scroll', toggleScrollTop);

        return () => window.removeEventListener('scroll', toggleScrollTop);
    }, []);
    return (
        <div className="home-one">
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
                                    <div className="logo"><AnchorLink href="#home"><img src="assets/images/logos/log.png" alt="Logo" title="Logo" /></AnchorLink></div>
                                </div>

                                <div className="nav-outer clearfix mx-auto">
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-lg">
                                        <div className="navbar-header">
                                            <div className="mobile-logo my-15">
                                                <a href="About.jsx">
                                                    <img src="assets/images/logos/log.png" alt="Logo" title="Logo" />
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
                                                <li><AnchorLink href="#home">Home</AnchorLink></li>
                                                <li><AnchorLink href="#about">About</AnchorLink></li>
                                                <li><AnchorLink href="#resume">Resume</AnchorLink></li>
                                                <li><AnchorLink href="#services">Services</AnchorLink></li>
                                                <li><AnchorLink href="#skills">Skills</AnchorLink></li>
                                                <li><AnchorLink href="#portfolio">Projects</AnchorLink></li>
                                                <li><AnchorLink href="#contact">Contacts</AnchorLink></li>
                                            </ul>
                                        </div>

                                    </nav>
                                    {/* Main Menu End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                </header>
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

                                        <AnchorLink href="#contact" className="theme-btn">Hire Me <i className="far fa-angle-right"></i></AnchorLink>

                                        <a href="/assets/Imran-React.pdf" download className="read-more">Download Resume <i className="far fa-angle-right"></i></a>
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
                                    <img src="assets/images/hero/ios.png" alt="Author" />
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
            <div className="social-style-one">
                <a href="https://www.linkedin.com/in/imran-shaikh-04016023b/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/ImranS2103"><i className="fab fa-github"></i></a>
                <a href="https://join.skype.com/invite/vxcB22yjxs2F"><i className="fab fa-skype"></i></a>
                <a href="https://www.instagram.com/mr.imran_21?igsh=MWx1c2d3ZXJoOGJ6ZA=="><i className="fab fa-instagram"></i></a>
            </div>
            <button className="scroll-top scroll-to-target" data-target="html"><span className="fas fa-angle-double-up"></span></button>
        </div>
    )
}

export default Home
