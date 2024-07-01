import { useContext } from "react";
import { CreatAuthContext } from "./Authprovider";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const { logineWithGoogle } = useContext(CreatAuthContext);
    const navigate = useNavigate()

    const handleLoginGoogle = () => {
        logineWithGoogle()
            .then((res) => {
                console.log(res);
                // Handle successful login (e.g., redirect, show a message, etc.)
                navigate('/')
            })
            .catch((error) => {
                console.error(error);
                // Handle errors (e.g., show an error message)
            });
    };

    return (
        <div className="container mx-auto">
            <div className="absolute top-[20%] md:top-[50%] left-[25%] md:left-[40%]">
                <button
                    onClick={handleLoginGoogle}
                    type="button"
                    className="inline-flex ml-4 items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                >
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
