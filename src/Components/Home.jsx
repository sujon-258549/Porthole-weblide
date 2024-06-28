import { useState } from "react";
import htmlimg from '../assets/importent img/download-removebg-preview.png'
import css from '../assets/importent img/css3.png'
import boodstrap from '../assets/importent img/boodstrap.png'
import tailwind from '../assets/importent img/tailwind css.png'
import reactJs from '../assets/importent img/react js.png'
import nodeJs from '../assets/importent img/node11.png'
import mongobd from '../assets/importent img/mongodb.png'
import js from '../assets/importent img/js.png'
import ProgressBar from "@ramonak/react-progress-bar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const now = 60;
    return (
        <div>
            {/* Navber  */}
            <section>
                <nav x-data="{ isOpen: false }" className="relative bg-slate-300 shadow dark:bg-gray-500">
                    <div className="container px-6 py-4 mx-auto">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex items-center justify-between">
                            <img className="w-32" src="https://i.ibb.co/5YxcrMh/fainal.png" alt="" />

                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                        {!isOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                            <div x-cloak className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                    <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Join Slack</a>
                                    <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Browse Topics</a>
                                    <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Random Item</a>
                                    <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</a>
                                </div>

                                {/* <div className="flex items-center mt-4 lg:mt-0">
                                    <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                        </div>

                                        <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>

            </section>
            {/* banner section */}
            <section>
                <section class="pt-20 md:pt-40">
                    <div class="container mx-auto px-8 lg:flex lg:justify-between">
                        <div class="text-center lg:text-left lg:w-1/2">
                            <h1 class="text-4xl font-frank lg:text-5xl xl:text-6xl font-bold leading-none">Hi I,am Sujon Mia</h1>
                            <p class="text-xl lg:text-2xl mt-6 font-light">I am a highly skilled frontend web developer designing, developing, and maintaining the front-end of web applications. Achieved measurable success in design dynamic, complex and
                                interactive user experience. Highly experienced and proficient in React JS.
                            </p>
                            <p class="mt-8 md:mt-12"><button class=" inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                href="#">
                                Contact us
                            </button>
                            </p>
                        </div>
                        <img src="https://i.ibb.co/wNty5Dd/sujon-removebg-preview.png" alt="" />
                    </div>
                </section>
            </section>
            {/* job section */}
            <section>

                <div className="container relative z-40 mx-auto mt-12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center font-frank py-7 md:py-2">Skill Section</h1>
                    <div className="divider pb-8 md:pb-16 divider-neutral"></div>
                    <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={htmlimg} className="block  w-24  mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    Html
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={css} className="block mx-auto w-16  " alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">

                                    CSS
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={js} className="block mx-auto w-40" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    Java Script
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={boodstrap} className="block w-24   mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    Boodstrap
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center mt-8">
                                <img src={tailwind} className="block w-24   mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    Tailwind CSS
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={reactJs} className="block  w-24  mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    React Js
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2 py-10 items-center text-center border lg:w-1/4">
                            <div className="flex-col items-center mt-10 justify-center">
                                <img src={nodeJs} className="block w-24   mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    Node Js
                                </p>
                            </div>
                        </a>
                        <a href="#" className="block w-1/2  py-10 text-center border lg:w-1/4">
                            <div className="flex-col items-center justify-center">
                                <img src={mongobd} className="block  w-24  mx-auto" alt="lifestyle icon" />
                                <p className="pt-4 text-sm font-medium capitalize font-body  lg:text-lg md:text-base md:pt-6">
                                    MongoDB
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
            {/* sclill progress */}
            <section className="container mx-auto my-8 md:my-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 items-center px-5 md:px-0">
                    <div>
                        <img src="https://i.ibb.co/JBNhKZW/domain-india-com-Mastering-MERN-Stack.webp" alt="" />
                    </div>
                    <div>
                        <section className="container mx-auto">
                            {/* html */}
                            <div className="">
                                <h2>Html</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={90}
                                />
                            </div>
                            {/* css */}
                            <div className="mt-3">
                                <h2>CSS</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #6366F1, #8B5CF6, #C2C3BD)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={85}
                                />
                            </div>
                            {/* Java script */}
                            <div className="mt-3">
                                <h2>Java Script</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #EACB32, #8B5CF6, #1FC451)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={70}
                                />
                            </div>
                            {/* Boodstrap */}
                            <div className="mt-3">
                                <h2>Boodstrap</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={80}
                                />
                            </div>
                            {/* tailwind */}
                            <div className="mt-3">
                                <h2>Tailwind CSS</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={90}
                                />
                            </div>
                            {/* react js */}
                            <div className="mt-3">
                                <h2>React Js</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #6366F1, #77AE64, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={85}
                                />
                            </div>
                            {/* node js */}
                            <div className="mt-3">
                                <h2>Node Js</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #feb204, #77AE64, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={60}
                                />
                            </div>
                            {/* mongo db */}
                            <div className="mt-3">
                                <h2>MongoDB</h2>
                                <ProgressBar
                                    className="w-full text-[11px]"
                                    animateOnRender={true}
                                    transitionTimingFunction="linear"
                                    bgColor="linear-gradient(to right, #4FAA41, #8B5CF6, #EC4899)"
                                    dir="auto"
                                    height="12px"
                                    labelColor='#fff'
                                    initCompletedOnAnimation={10}
                                    completed={65}
                                />
                            </div>
                        </section>
                    </div>
                </div>

                {/* footer  */}
                <section className="bg-[#1B1B1B] mt-10 md:mt-20 ">
                    <div className="text-center py-6">
                        <footer className="flex flex-col space-y-10 justify-center m-10">

                            <img className="w-32 mx-auto" src="https://i.ibb.co/5YxcrMh/fainal.png" alt="" />
                            <div className="flex justify-center space-x-5">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                                </a>
                                <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                                </a>
                            </div>

                            <p className="text-center font-medium text-white">&copy; 2022 Company Ltd. All rights reserved.</p>
                        </footer>

                    </div>
                </section>

            </section>

        </div>
    );
};

export default Home;