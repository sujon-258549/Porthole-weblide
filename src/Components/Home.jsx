

import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import 'aos/dist/aos.css';

// tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaExternalLinkAlt, FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


// modal
import Modal from 'react-modal';
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from 'react'
import { CreatAuthContext } from './Authprovider'

// css
import './style.css'
import Banner from './banner/Banner'
import Skills from './slills/Skills'
import Servises from "./ServisesSection/Servises";
import Contact2 from "./Contact2";
import { MdEmail } from "react-icons/md";
import Allskills from "./slills/Allskills";




// Custom styles for the modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};


const Home = () => {
    const { user, signout } = useContext(CreatAuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [checkeed, setchecked] = useState('light')
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', checkeed);
    }, [checkeed])

    const handelchange = e => {
        const data = e.target.checked;
        if (data) {
            setchecked("dark")
            console.log('aquea');
        }
        else {
            setchecked('light')
            console.log('light');
        }
    }




    //  modal

    let subtitle;
    const [modalIsOpen, setIsOpens] = useState(false);

    // Open the modal
    function openModal() {
        setIsOpens(true);
    }

    // After the modal has opened
    function afterOpenModal() {
        // References are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    // Close the modal
    function closeModal() {
        setIsOpens(false);
    }

    // user get
    const [a, setA] = useState([]);
    const [admin, setAdmin] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/contactuser')
            .then(data => {
                setA(data?.data)
            })
        const filterUser = a.filter(item => {
            item.data.email === "sujon258549@gmail.com" && item.data.status === "admin"
        })
        setAdmin(filterUser)
    }, [])
    console.log(admin);





    console.log(user);
    const handelsingnout = () => {
        signout()
    }





    return (
        <div>
            {/* Navber  */}
            <section className='bg-[#333333] w-full fixed z-50'>
                <div className='w-[90%] mx-auto  px-6'>
                    <nav x-data="{ isOpen: false }" className="relative w-full">
                        <div className="  py-4 mx-auto">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="flex items-center justify-between">
                                    <div>


                                        <div class="contain">
                                            <div class="btn"><a href="#">Portfolio</a></div>
                                        </div>

                                    </div>

                                    {/* Mobile menu button */}
                                    <div className="flex lg:hidden">
                                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                            {!isOpen ? (
                                                <GiHamburgerMenu className="md:text-2xl"></GiHamburgerMenu>
                                            ) : (
                                                <RxCross2 className="md:text-2xl"></RxCross2>
                                            )}
                                        </button>
                                        <label className="swap swap-rotate ml-3">
                                            {/* this hidden checkbox controls the state */}
                                            {/* <input onChange={handelchange} type="checkbox" className="theme-controller" value="synthwave" /> */}


                                            <input onChange={handelchange} id="checkboxInput" type="checkbox" />
                                            <label class="toggleSwitch" value="synthwave" for="checkboxInput">
                                            </label>

                                            {/* sun icon */}
                                            <svg
                                                className="swap-off h-10 w-10 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                            </svg>

                                            {/* moon icon */}
                                            <svg
                                                className="swap-on h-10 w-10 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                            </svg>
                                        </label>
                                        {/* {
                                            user ? <button onClick={handelsingnout}

                                                className="inline-flex ml-4 items-center  justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                            >
                                                Sign Out
                                            </button> :
                                                <Link to={'/login'}

                                                    className="inline-flex ml-4 items-center  justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                                >
                                                    Sign In
                                                </Link>
                                        } */}
                                    </div>
                                </div>


                                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'group-hover:opacity-0 -translate-x-full'}`}>
                                    <div className="flex lg:pr-10   bg-[#333333] lg:bg-transparent flex-col lg:-mx-6 lg:flex-row lg:items-center pl-14  lg:pl-0 -ml-[4.5rem]">


                                        <button class="button mb-2 lg:mb-0">
                                            <div class="display">
                                                <div id="msg">
                                                    <Link to={'/'}>Home</Link>
                                                </div>
                                            </div>

                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button class="button mb-2 lg:mb-0">
                                            <div class="display">
                                                <div id="msg">
                                                    <a href="#skill" >Skill</a>
                                                </div>
                                            </div>

                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button class="button mb-2 lg:mb-0">
                                            <div class="display">
                                                <div id="msg">
                                                    <a href="#services" >Service's</a>
                                                </div>
                                            </div>

                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button class="button mb-2 lg:mb-0">
                                            <div class="display">
                                                <div id="msg">
                                                    <a href="#portfolio" >Portfolio</a>
                                                </div>
                                            </div>

                                            <span></span>
                                            <span></span>
                                        </button>
                                        <button class="button mb-2 lg:mb-0">
                                            <div class="display">
                                                <div id="msg">
                                                    <a href='#contact' >Contact</a>
                                                </div>
                                            </div>

                                            <span></span>
                                            <span></span>
                                        </button>




                                        {
                                            user && admin && <Link to={'/contactinfoall'} >Contact info all</Link>
                                        }
                                    </div>
                                    <div className="lg:block hidden">
                                        <div className="flex items-center">
                                            <label className="swap swap-rotate">
                                                {/* this hidden checkbox controls the state */}
                                                {/* <input onChange={handelchange} type="checkbox" className="theme-controller" value="synthwave" /> */}

                                                <input onChange={handelchange} id="checkboxInput" type="checkbox" />
                                                <label class="toggleSwitch" value="synthwave" for="checkboxInput">
                                                </label>

                                                {/* sun icon */}
                                                <svg
                                                    className="swap-off h-10 w-10 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                                </svg>

                                                {/* moon icon */}
                                                <svg
                                                    className="swap-on h-10 w-10 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                                </svg>
                                            </label>

                                            {/* {
                                            user ? <button onClick={handelsingnout}

                                                className="inline-flex ml-4 items-center  justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                            >
                                                Sign Out
                                            </button> :
                                                <Link to={'/login'}

                                                    className="inline-flex ml-4 items-center  justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                                                >
                                                    Sign in
                                                </Link>
                                        } */}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>

                </div>
            </section>
            {/* modal cod */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >

                <div >
                    <div className="flex justify-between">
                        <div></div>
                        <div> <button className="inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]" onClick={closeModal}>close</button></div>
                    </div>
                    <div className="">
                        <h1 className="text-xl font-semibold text-gray-800 capitalize dark:text-white lg:text-2xl">
                            <span className="text-[#16A34A]"> Contact us</span> for more info
                        </h1>

                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-2  truncate w-72 dark:text-gray-400">
                                    Rangpur Sadar, Rangpur
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="mx-2  truncate w-72 dark:text-gray-400"><a href="tel:01790876529">01790876529</a>, <a href="tel:01516532597">01516532597</a></span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="mx-2  truncate w-72 dark:text-gray-400"><a href="mailto:sujon258549@gmail.com">sujon258549@gmail.com</a></span>
                            </p>
                        </div>


                    </div>
                </div>

            </Modal>
            {/* banner section */}
            <section >
                <Banner></Banner>
            </section>
            {/* job section */}
            <section id="skill" >

                <Skills></Skills>


            </section>

            <section id="services" >

                <Servises></Servises>


            </section>
            {/* sclill progress */}
            <section className="bg-[#1F232D] py-8 md:py-16">

                {/* portfoleo section */}
                <section id="portfolio" className='w-[90%] mx-auto'>
                    <div className="">
                        <h1 className="text-2xl md:text-4xl md:w-96 text-[#01ecff] mx-auto  lg:text-5xl  font-bold text-center font-frank">Portfolio</h1>
                        <img className='mx-auto pt-5 pb-5 md:pb-16' src="https://sujob258549.github.io/silverhok/img/icon.png" alt="" />
                        <Tabs>
                            <div className="flex justify-center text-xl font-ebground text-white">
                                <TabList >
                                    <Tab>MERN Strack Project</Tab>
                                    <Tab>Frontend Project</Tab>
                                    <Tab>Web Design</Tab>
                                </TabList>
                            </div>

                            <section className="">
                                <div className="container px-6 py-10 mx-auto">
                                    <TabPanel>

                                        <div data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500" className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                            <a href="https://alternative-product-11.web.app/">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('https://cdn.corporatefinanceinstitute.com/assets/substitute-products.jpeg", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">Altranative product </h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>
                                            <a href="https://unmok-task.web.app">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/62/71/58/1000_F_462715816_YK9bEILfUhAxSFayaAXk8W8ZpO1OvAru.jpg", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">Product visit</h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>



                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500" className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                            <a href="https://prickly-feast123.surge.sh/Listed">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('data:image/jpeg;base64,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", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100" >
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">Book Project </h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>
                                            <a href="https://amuck-basinsujon.surge.sh">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('https://i.ibb.co/tHTmHxb/pexels-photo-958545.jpg", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">food webside</h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>



                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500" className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                            <a href="https://sujob258549.github.io/project1">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('https://sujob258549.github.io/project1/img/vat11.png", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">Dog Hospitality product </h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>
                                            <a href="https://sujob258549.github.io/silverhok/Home">
                                                <div className="relative overflow-hidden bg-cover object-cover rounded-lg cursor-pointer h-80 group" style={{ backgroundImage: "url('https://sujob258549.github.io/silverhok/img/abput2.png", boxShadow: '1px 1px 50px #01ECFF' }}>
                                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 group-hover:opacity-0 backdrop-blur-sm bg-gray-800/60 opacity-100">
                                                        <FaExternalLinkAlt className="text-4xl text-white text-center mx-auto"></FaExternalLinkAlt>
                                                        <h2 className="mt-4 text-center text-xl font-semibold text-white capitalize">Selver hoq webside</h2>
                                                        <p className="mt-2 text-center text-lg tracking-wider text-blue-400 uppercase">Visit This Website</p>

                                                    </div>
                                                </div>
                                            </a>



                                        </div>
                                    </TabPanel>
                                </div>
                            </section>

                        </Tabs>
                    </div>
                </section>

                <section>
                    <section id="contact" className="w-[90%] mx-auto">

                        <Contact2></Contact2>
                    </section>
                </section>

                {/* footer  */}
                <section className="bg-[#1B1B1B] mt-10 md:mt-20 ">
                    <div className="text-center py-6">
                        <footer className="flex flex-col space-y-10 justify-center m-10">

                            <img className="w-32 mx-auto" src="https://i.ibb.co/5YxcrMh/fainal.png" alt="" />
                            <div className='flex gap-2 justify-center'>
                                <a href="https://www.facebook.com/profile.php?id=100088142062918">
                                    <FaFacebookF className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></FaFacebookF>
                                </a>
                                <a href="https://github.com/sujob258549">
                                    <FaGithub className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></FaGithub>
                                </a>
                                <a href="https://www.linkedin.com/in/sujon25">
                                    <FaLinkedinIn className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></FaLinkedinIn>
                                </a>
                                {/* <a href="">
                                    <FaDiscord className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></FaDiscord>
                                </a> */}
                                <a href="mailto:sujon258549@gmail.com">
                                    <MdEmail className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></MdEmail>
                                </a>
                                <a href="tel:01790876529">
                                    <FaPhoneSquare className='text-[#01ECFF] border border-[#01ECFF] text-4xl font-bold rounded-full p-2'></FaPhoneSquare>
                                </a>
                            </div>

                            <p className="text-center font-medium text-white">&copy; 2024 Portfolio Webside. All rights reserved.</p>
                        </footer>

                    </div>
                </section>

            </section>
<Allskills></Allskills>
        </div>
    );
};

export default Home;