import React from 'react';
import AboutImage from '../../images/about.webp'
import AboutImg from '../../images//welcome.webp'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    const element = <FontAwesomeIcon className="text-warning ms-2" icon={faLongArrowAltRight} />
    return (
        <div>
            <div className="section-banner">
                <div className="overlay">
                    <h2>About Us</h2>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            <img src={AboutImage} className="img-fluid rounded" alt="" />
                        </div>
                        <div className="mt-4">
                            <h4 className="about-heading">Objectives</h4>
                            <p>When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope.</p>
                            <div className="d-flex align-items-center">
                                <a href="/" className="text-decoration-none text-warning fw-bold">Lern More</a>
                                {element}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 blog-right">
                        <h3>Post Catagories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div>
                            <span>Business Article</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Data Science</span>
                            <span>13</span>
                        </div>
                        <div>
                            <span>Term and Policies</span>
                            <span>21</span>
                        </div>
                        <div>
                            <span>Business FAQ</span>
                            <span>21</span>
                        </div>
                        <div>
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-7">
                        <div>
                            <img src={AboutImg} className="img-fluid rounded" alt="" />
                        </div>
                        <div className="mt-4">
                            <h4 className="about-heading">Eligibility</h4>
                            <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were. Subdue whales void god which living don't midst lesser yieldi over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                            <div className="d-flex align-items-center">
                                <a href="/" className="text-decoration-none text-warning fw-bold">Lern More</a>
                                {element}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-5"></div> */}
                </div>
            </div>

        </div>
    );
};

export default About;