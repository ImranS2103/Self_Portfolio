import React from 'react'

function Projects() {
    return (
        <div>
            {/* Projects Area start */}
            <section id="portfolio" className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">Latest Works</span>
                                <h2>Explore My Popular <span>Projects</span></h2>
                            </div>
                        </div>
                    </div>
                
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6 order-lg-2">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <img src="assets/images/projects/project2.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 ms-auto">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Front End Development</span>
                                <h2><a href="">E-Learning Platform</a></h2>
                                <p>Create responsive designs for mobile applications, built wireframes, and developed prototypes for web
                                    development projects.</p>
                                <a href="" className="details-btn"><i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <img src="assets/images/projects/project4.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Front End Development</span>
                                <h2><a href="">Social Foundatation Website</a></h2>
                                <p>Designed and implemented the frontend using Angular, integrated with a RESTful API built with Laravel
                                    on the backend. Incorporated features like user profiles, event scheduling, donation tracking, and real
                                    time messaging using WebSockets</p>
                                <a href="" className="details-btn"><i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center pb-25">
                        <div className="col-lg-6 order-lg-2">
                            <div className="project-image wow fadeInLeft delay-0-2s">
                                <img src="assets/images/projects/project3.jpg" alt="Project" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 ms-auto">
                            <div className="project-content wow fadeInRight delay-0-2s">
                                <span className="sub-title">Front End Development</span>
                                <h2><a href="">Document Printing</a></h2>
                                <p> Coordinate with the web development team to design UI for client websites using HTML, JavaScript, and
                                    React</p>
                                <a href="" className="details-btn"><i className="far fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-btn text-center wow fadeInUp delay-0-2s">
                        <a href="https://github.com/ImranS2103" className="theme-btn">View More Projects <i className="far fa-angle-right"></i></a>
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
            {/* Projects Area end */}
        </div>
    )
}

export default Projects