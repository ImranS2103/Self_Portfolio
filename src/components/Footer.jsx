import React from 'react'

function Footer() {
  return (
    <div>
             {/* footer area start */}
             <footer className="main-footer rel z-1">
            <div className="footer-top-wrap bgc-black pt-100 pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-12">
                            <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/images/logos/log.png" alt="Logo" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                                <h6 className="footer-title">Quick Link</h6>
                                <ul>
                                    <li><a href="services.html">Service</a></li>
                                    <li><a href="projects.html">Projects</a></li>
                                    <li><a href="services.html#pricing">Pricing</a></li>
                                    <li><a href="about.html#faqs">Faqs</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                                <form action="#">
                                    <label for="email-address"><i className="far fa-envelope"></i></label>
                                    <input id="email-address" type="email" placeholder="Email Address" required />
                                    <button>Sign Up <i className="far fa-angle-right"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5">
                            <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                                <h6 className="footer-title">Address</h6>
                                <ul>
                                    <li><i className="far fa-map-marker-alt"></i> Morage Wasti, VS Road, Shrirampur</li>
                                    <li><i className="far fa-envelope"></i> <a href="https://webtend.site/cdn-cgi/l/email-protection#85f6f0f5f5eaf7f1c5e2e8e4ece9abe6eae8"><span className="__cf_email__" data-cfemail="50232520203f222410373d31393c7e333f3d">mr.imran2103@gmail.com</span></a></li>
                                    <li><i className="far fa-phone"></i> <a href="callto:+880(123)45688">+91 8830541314</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom pt-20 pb-5 rpt-25">
                <div className="container">
                   <div className="row">
                       <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>Copyright @2024, <a href="index.html"><img src="assets/images/logos/log.png" alt="Logo" style={{ width: '100px', height: '35px' }} /></a> All Rights Reserved</p>
                            </div>
                       </div>
                       <div className="col-lg-6 text-lg-end">
                           <ul className="footer-bottom-nav">
                               <li><a href="https://www.linkedin.com/in/imran-shaikh-04016023b/">LinkedIn</a></li>
                               <li><a href="https://github.com/ImranS2103">Github</a></li>
                               <li><a href="https://join.skype.com/invite/vxcB22yjxs2F">Skype</a></li>
                               <li><a href="#">Instagram</a></li>
                           </ul>
                       </div>
                   </div>
                   {/* Scroll Top Button */}
                    <button className="scroll-top scroll-to-target" data-target="html"><span className="fas fa-angle-double-up"></span></button>
                </div>
                <div className="bg-lines">
                   <span></span><span></span>
                   <span></span><span></span>
                   <span></span><span></span>
                   <span></span><span></span>
                   <span></span><span></span>
                </div>
            </div>
        </footer>
        {/* footer area end */}
    </div>
  )
}

export default Footer