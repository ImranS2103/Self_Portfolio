import React from 'react'

function About() {
  return (
    <div>
           {/* About Area start */}
           <section id="about" className="about-area rel z-1">
            <div className="for-bgc-black py-130 rpy-100">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-7">
                            <div className="about-content-part rel z-2 rmb-55">
                                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                                    <span className="sub-title mb-15">About Me</span>
                                    <h2>Professional <span>Problem Solutions</span> For Digital Products</h2>
                                    <p>   Hi, I'm Imran Shaikh, a passionate Full Stack Web Developer based in Shrirampur. I have a keen interest in Development. With 1 years of experience, I've had the opportunity to work on various projects and develop a strong skill set in Html, Css, JS, React Js, Angular.</p>
                                </div>
                                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                                    <li>Web Development</li>
                                    <li>Product Design</li>
                                    <li>Branding & Design</li>
                                    <li>Digital Marketing</li>
                                </ul>
                                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                                    <div className="info-box-item">
                                        <i className="far fa-envelope"></i>
                                        <div className="content">
                                            <span>Email Us</span><br/>
                                            <a href="https://webtend.site/cdn-cgi/l/email-protection#1f6c6a6f6f706d6b5f78727e7673317c7072"><span className="__cf_email__" data-cfemail="a7d4d2d7d7c8d5d3e7c0cac6cecb89c4c8ca">mr.imran2103@gmail.com</span></a>
                                        </div>
                                    </div>
                                    <div className="info-box-item">
                                        <div className="content">
                                            <span>Make A Call</span><br/>
                                            <a href="callto:+000(123)45688">+91 8830541314</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                <img src="assets/images/about/abt.jpeg" alt="About Me" />
                                {/* <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                    <img src="assets/images/about/btn-image1.png" alt="Ima ge" />
                                    <h6>Experience Developer</h6>
                                    <i className="fas fa-arrow-right"></i>
                                </div> */}
                                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                                    <img src="assets/images/about/btn-image1.png" alt="Ima ge" />
                                    <h6>Experience Developer</h6>
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                                <div className="dot-shape">
                                    <img src="assets/images/shape/about-dot.png" alt="Shap e" />
                                </div>
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
        {/* About Area end */}
    </div>
  )
}

export default About