import React from 'react'

function Skills() {
  return (
    <div>
           {/* Skill Area start */}
           <section id="skills" className="skill-area rel z-1">
            <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
                <div className="container">
                    <div className="row gap-100">
                        <div className="col-lg-5">
                            <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                                <div className="section-title mb-40">
                                    <span className="sub-title mb-15">My Skills</span>
                                    <h2>Let’s Explore Popular <span>Skills & Experience</span></h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis</p>
                                </div>
                                <a href="about.html" className="theme-btn">Learn More <i className="far fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="skill-items-wrap">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-2s">
                                            <img src="assets/images/skills/html.png" alt="Skill" />
                                            <h5>Html</h5>
                                            <span className="percent">90%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-3s">
                                            <img src="assets/images/skills/css.png" alt="Skill" />
                                            <h5>Css</h5>
                                            <span className="percent">88%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-4s">
                                            <img src="assets/images/skills/js.png" alt="Skill" />
                                            <h5>JavaScript</h5>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-5s">
                                            <img src="assets/images/skills/react.png" alt="Skill" />
                                            <h5>React js</h5>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-2s">
                                            <img src="assets/images/skills/skill5.png" alt="Skill" />
                                            <h5>Angular</h5>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-3s">
                                            <img src="assets/images/skills/node.png" alt="Skill" />
                                            <h5>Node js</h5>
                                            <span className="percent">80%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-4s">
                                            <img src="assets/images/skills/git.png" alt="Skill" />
                                            <h5>Git</h5>
                                            <span className="percent">90%</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                                        <div className="skill-item wow fadeInUp delay-0-5s">
                                            <img src="assets/images/skills/sql.png" alt="Skill" />
                                            <h5>MySql</h5>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
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
        {/* Skill Area end */}
    </div>
  )
}

export default Skills