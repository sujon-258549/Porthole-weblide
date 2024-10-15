
import './contact2.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Swal from 'sweetalert2';

const Contact2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const date = new Date();
    const onSubmit = (data) => {
        const alldata = { ...data, date }; 
        console.log(alldata)
        axios.post('https://portfolio-pied-eight-66.vercel.app/contactus', alldata)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your contact information is saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error("There was an error submitting the form!", error);
            });
    };

    return (
        <div>
            <h1 data-aos="fade-right" data-aos-delay="500" className="text-[#01ecff] text-2xl md:text-4xl md:w-96 mx-auto  lg:text-5xl  font-bold text-center  mt-10 md:mt-16">Contact us</h1>
            <img data-aos="fade-left" data-aos-delay="500" className='mx-auto pt-5 pb-5 md:pb-16' src="https://sujob258549.github.io/silverhok/img/icon.png" alt="" />
            <section className=" rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
                <div className="container px-6 py-6 lg:py-12 mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6 text-center lg:text-left">
                            <h1 className="text-2xl font-bold text-gray-800 capitalize dark:text-white lg:text-5xl">
                                <span className="text-[#01ECFF]"> Contact us</span> for <br /> more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2 justify-center lg:justify-start">
                                    <FaLocationDot className='text-3xl text-[#01ECFF]'></FaLocationDot>
                                    <span className="mx-2  truncate w-72 dark:text-gray-400">
                                        Rangpur Sadar , Bangladesh
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2 justify-center lg:justify-start">
                                    <FaPhoneAlt className='text-3xl text-[#01ECFF]'></FaPhoneAlt>
                                    <span className="mx-2  truncate w-72 dark:text-gray-400"><a href="tel:01790876529">01790876529</a>, <a href="tel:01516532597">01516532597</a></span>
                                </p>

                                <p className="flex items-start -mx-2 justify-center lg:justify-start">
                                    <MdEmail className='text-3xl text-[#01ECFF]'></MdEmail>
                                    <span className="mx-2  truncate w-72 dark:text-gray-400"><a href="mailto:sujon258549@gmail.com">sujon258549@gmail.com</a></span>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mt-0 lg:mx-6">
                            <div className='main-form'>
                                <div className="main-card">
                                    <h4 className="title">Contact form.....</h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="name" className='flex justify-start text-white'>Name</label>
                                        <label className="field">
                                            <input
                                                {...register('name', { required: true })}
                                                placeholder="Enter Your Full name"
                                                className="input-field"
                                            />
                                            {errors.name && <span className="text-red-500">This field is required</span>}
                                        </label>

                                        <label htmlFor="email" className='flex pt-5 justify-start text-white'>Email</label>
                                        <label className="field">
                                            <input
                                                type="email"
                                                {...register('email', { required: true })}
                                                placeholder="Enter Your Email address"
                                                className="input-field"
                                            />
                                            {errors.email && <span className="text-red-500">This field is required</span>}
                                        </label>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 text-left dark:text-gray-200">Message</label>
                                            <textarea
                                                {...register('message', { required: true })}
                                                className="field w-full pb-16 text-white"
                                                placeholder="Message"
                                            ></textarea>
                                            {errors.message && <span className="text-red-500">This field is required</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn"
                                        >
                                            Send...
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact2;
