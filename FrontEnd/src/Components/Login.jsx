import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../API_Calls/LoginAPI";
import { useRecoilState } from 'recoil';
import { userAtom } from "../Atoms/userAtom";
import { HiOutlineUserCircle, HiOutlineLockClosed } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();
    const [, setUser] = useRecoilState(userAtom);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            await login(username, password, setUser);
            navigate('/dashboard');
        } catch (error) {
            setUsername("");
            setPassword("");
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-md max-w-md mx-auto shadow-lg hover:bg-gradient-to-r hover:from-[#fdfbfb] hover:to-[#ebedee] dark:hover:bg-gradient-to-r dark:hover:from-gray-700 dark:hover:to-gray-600 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">Login</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Username Field */}
            <div className="mb-6 relative">
                <label className="block text-gray-800 dark:text-white font-semibold">Username*</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineUserCircle className="text-gray-400 h-5 w-5 dark:text-black" />
                    </span>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
            </div>

            {/* Password Field with Eye Icon */}
            <div className="mb-6 relative">
                <label className="block text-gray-800 dark:text-white font-semibold">Password*</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineLockClosed className="text-gray-400 h-5 w-5 dark:text-black" />
                    </span>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 pl-10 pr-10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        required
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)} 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                        {showPassword ? (
                            <AiFillEye className="text-gray-400 h-5 w-5 dark:text-black" /> 
                        ) : (
                            <AiFillEyeInvisible className="text-gray-400 h-5 w-5 dark:text-black" /> 
                        )}
                    </span>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-3 rounded-md font-semibold transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-pink-600 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white'}`}
            >
                {isLoading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center mt-4 text-gray-700 dark:text-gray-300">Not registered yet? <Link to="/signup" className="text-blue-500 underline dark:text-blue-400">Click here to Register</Link></p>
        </form>
    );
};
