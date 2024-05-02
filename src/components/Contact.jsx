import React from 'react'

function Contact() {
  return (
    <div>
           {/* Contact Area start */}
           <section id="contact" className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                            <div className="section-title mb-40">
                                <span className="sub-title mb-15">Get In Touch</span>
                                <h2>Let’s Talk For your <span>Next Projects</span></h2>
                            </div>
                            <ul className="list-style-two">
                                <li>10+ Month's Of Experience</li>
                                <li>Professional Web Developer</li>
                                <li>Responsive Design</li>
                                <li>Custom Design Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
                            <form id="contactForm" className="contactForm" name="contactForm" action="https://webtend.site/html/noxfolio_pre/assets/php/form-process.php" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="name">Full Name</label>
                                            <input type="text" id="name" name="name" className="form-control" value="" placeholder="ABC" required data-error="Please enter your Name" />
                                            <label for="name" className="for-icon"><i className="far fa-user"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">Email Address</label>
                                            <input type="email" id="email" name="email" className="form-control" value="" placeholder="support@gmail.com" required data-error="Please enter your Email" />
                                            <label for="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="phone_number">Phone Number</label>
                                            <input type="text" id="phone_number" name="phone_number" className="form-control" value="" placeholder="+91 **********" required data-error="Please enter your Phone Number" />
                                            <label for="phone_number" className="for-icon"><i className="far fa-phone"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" value="" placeholder="Subject" required data-error="Please enter your Subject" />
                                            <label for="subject" className="for-icon"><i className="far fa-text"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="message">Message</label>
                                            <textarea name="message" id="message" className="form-control" rows="4" placeholder="write message" required data-error="Please enter your Message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <button type="submit" className="theme-btn">Send Us Message <i className="far fa-angle-right"></i></button>
                                            <div id="msgSubmit" className="hidden"></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
        {/* Contact Area end */}
    </div>
  )
}

export default Contact