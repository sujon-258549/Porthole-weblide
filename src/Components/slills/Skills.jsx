import React from 'react'; // Add this line
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiReactjsLine } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { motion } from 'framer-motion';
import './skills.css';

const Skills = () => {
    const skills = [

        { icon: <RiReactjsLine />, title: 'React' },
        { icon: <FaHtml5 />, title: 'HTML' },
        { icon: <FaCss3Alt />, title: 'CSS' },
        { icon: <FaBootstrap />, title: 'Bootstrap' },
        { icon: <FaJsSquare />, title: 'JavaScript' },
        { icon: <FaNodeJs />, title: 'Node.js' },
        { icon: <DiMongodb />, title: 'MongoDB' },
        { icon: <IoLogoFirebase />, title: 'Firebase' },
        { icon: <FaGithub />, title: 'GitHub' },

    ];

    return (
        <section className='bg-[#1F232D] pb-10 md:pb-20'>

            <h1 className="text-2xl md:text-4xl md:w-96 mx-auto  lg:text-5xl  font-bold text-center font-frank text-[#01ecff]">Services</h1>
            <img className='mx-auto pt-5 pb-5 md:pb-16' src="https://sujob258549.github.io/silverhok/img/icon.png" alt="" />
            <div className='w-[90%] mx-auto flex justify-center flex-wrap gap-5'>


                {skills.map((skill, index) => (
                    <div key={index} className="py-5 text-center w-[170px] h-[170px] border-[#129896] rounded-md border-[2px]">
                        <motion.button
                            whileHover={{
                                scale: [1, 1.5, 1.5, 1, 1],
                                rotate: [0, 90, 180, 270, 360, 0, 90, 180, 270, 360],
                                borderRadius: ["20%", "50%", "50%", "20%", "20%"],
                            }}

                            transition={{
                                duration: .4, // 1 second duration
                            }}
                        >
                            {React.cloneElement(skill.icon, {
                                style: { boxShadow: "1px 1px 10px #fcc" },
                                className: 'shadow-2xl text-8xl border-2 rounded-full p-2 border-[#21A2A4] text-[#21A2A4]'
                            })}
                        </motion.button>
                        <h3 className='text-xl font-bold pt-2 text-white'>{skill.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
