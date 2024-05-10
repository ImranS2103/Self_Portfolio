import React, { useState } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jxmo89n', 'template_eytyesy', e.target, '1v2d-_uvRng_Gn0OY')
          .then((result) => {
            console.log(result.text);
            // Show success message
            setShowSuccess(true);
            // Clear form fields
            setName('');
            setEmail('');
            setPhoneNumber('');
            setSubject('');
            setMessage('');
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
        });
   }
  return (
    <div>
        {showSuccess && (
                 <div className="alert alert-success" role="alert" style={{ width: '50%', margin: '0 auto', textAlign: 'center', backgroundColor: '#C9F31D' }}>
                    Thanks htmlFor reaching me !
                 </div>
                )}
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
                            <form id="contactForm" className="contactForm" name="contactForm" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="ABC" required data-error="Please enter your Name" />
                                            <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="support@gmail.com" required data-error="Please enter your Email" />
                                            <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Phone Number</label>
                                            <input type="text" id="phone_number" name="phone_number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+91 **********" required data-error="Please enter your Phone Number" />
                                            <label htmlFor="phone_number" className="for-icon"><i className="far fa-phone"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)}  placeholder="Subject" required data-error="Please enter your Subject" />
                                            <label htmlFor="subject" className="for-icon"><i className="far fa-text"></i></label>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}   rows="4" placeholder="write message" required data-error="Please enter your Message"></textarea>
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