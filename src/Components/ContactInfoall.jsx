import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ContactInfoall = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/contactuser')
            .then(data => {
                setAdmins(data?.data)
            })

    }, [])
    console.log(admins);
    return (
        <div className="container mx-auto">
             <Link to={'/'} className="bg-green-500 btn text-xl text-white py-1 px-2 rounded-md mt-5 mb-10">Home</Link>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">time</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                       {
                        admins.map(admindata=>(
                            <tr key={admindata._id}>
                            <td className="py-4 px-6 border-b border-gray-200">{admindata.data.name}</td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate">{admindata.data.email}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{admindata.date}</td>
                            <td className="py-4 px-6 border-b border-gray-200">{admindata.data.message}</td>
                            <td className="py-4 px-6 border-b border-gray-200">
                                <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Details</span>
                            </td>
                        </tr>
                        ))
                       }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ContactInfoall;