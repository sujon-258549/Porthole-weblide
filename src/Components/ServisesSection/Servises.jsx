

import './services.css'
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiAdobeindesign, SiMongodb } from 'react-icons/si';
import { MdDeveloperMode } from 'react-icons/md';

const Servises = () => {
    return (
        <section className='bg-[#1F232D] py-10'>
            <div className='w-[90%] mx-auto'>

                <h1 className="text-2xl md:text-4xl md:w-96 mx-auto  lg:text-5xl  font-bold text-center font-frank text-[#01ecff]">Services</h1>
                <img className='mx-auto pt-5 pb-5 md:pb-16' src="https://sujob258549.github.io/silverhok/img/icon.png" alt="" />


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {/* disign */}
                    <div className="parent">
                        <div className="card">
                            <div className="logo">
                                <span className="circle circle1"></span>
                                <span className="circle circle2"></span>
                                <span className="circle circle3"></span>
                                <span className="circle circle4"></span>
                                <span className="circle circle5">
                                    <SiAdobeindesign></SiAdobeindesign>
                                </span>

                            </div>
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title">Web dising</span>
                                <span className="text">
                                    I am Hailey, a skilled web designer specializing in creating responsive websites and adding custom designs. I focus on making websites visually appealing and user-friendly, ensuring they work seamlessly across all devices. My expertise allows me to handle any design tasks, ensuring a perfect blend of functionality and aesthetics in each project.
                                </span>
                            </div>
                            <div className="bottom">

                                <div className="social-buttons-container">
                                    <a href="https://www.facebook.com/profile.php?id=100088142062918" className="social-button .social-button1">
                                        <FaFacebookF className='text-[#0f420f] '></FaFacebookF>

                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' className="social-button .social-button2">
                                        <FaLinkedin className='text-[#0f420f] '></FaLinkedin>
                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' className="social-button .social-button3">
                                        <FaGithub className='text-[#0f420f] '></FaGithub>
                                    </a>
                                </div>
                                <div className="view-more">
                                    <button className="view-more-button">View more</button>
                                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* development */}
                    <div className="parent">
                        <div className="card">
                            <div className="logo">
                                <span className="circle circle1"></span>
                                <span className="circle circle2"></span>
                                <span className="circle circle3"></span>
                                <span className="circle circle4"></span>
                                <span className="circle circle5">
                                <MdDeveloperMode></MdDeveloperMode>
                                </span>

                            </div>
                            <div className="glass"></div>
                            <div className="content">
                                <span className="title">Web development</span>
                                <span className="text">


                                    I am Hailey a, MERN stack developer skilled in creating dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. specializes in building responsive, user-friendly interfaces with React, while also handling server-side  management.applications that cater to modern web development needs.
                                </span>
                            </div>
                            <div class="bottom">

                                <div class="social-buttons-container">
                                    <a href="https://www.facebook.com/profile.php?id=100088142062918" class="social-button .social-button1">
                                        <FaFacebookF className='text-[#0f420f] '></FaFacebookF>

                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' class="social-button .social-button2">
                                        <FaLinkedin className='text-[#0f420f] '></FaLinkedin>
                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' class="social-button .social-button3">
                                        <FaGithub className='text-[#0f420f] '></FaGithub>
                                    </a>
                                </div>
                                <div class="view-more">
                                    <button class="view-more-button">View more</button>
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Databse manegment */}
                    <div class="parent">
                        <div class="card">
                            <div class="logo">
                                <span class="circle circle1"></span>
                                <span class="circle circle2"></span>
                                <span class="circle circle3"></span>
                                <span class="circle circle4"></span>
                                <span class="circle circle5">
                                <SiMongodb></SiMongodb>
                                </span>

                            </div>
                            <div class="glass"></div>
                            <div class="content">
                                <span class="title">Database Management </span>
                                <span class="text">
                                    I am Hailey a skilled  MongoDB specializing in . MongoDB is a NoSQL database designed to manage large volumes of unstructured data. Unlike traditional databases that use tables, MongoDB stores data in flexible, JSON-like documents. This design allows for easy scaling and fast performance in modern applications.
                                </span>
                            </div>
                            <div class="bottom">

                                <div class="social-buttons-container">
                                    <a href="https://www.facebook.com/profile.php?id=100088142062918" class="social-button .social-button1">
                                        <FaFacebookF className='text-[#0f420f] '></FaFacebookF>

                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' class="social-button .social-button2">
                                        <FaLinkedin className='text-[#0f420f] '></FaLinkedin>
                                    </a>
                                    <a href='https://www.linkedin.com/in/sujon25' class="social-button .social-button3">
                                        <FaGithub className='text-[#0f420f] '></FaGithub>
                                    </a>
                                </div>
                                <div class="view-more">
                                    <button class="view-more-button">View more</button>
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Servises;
