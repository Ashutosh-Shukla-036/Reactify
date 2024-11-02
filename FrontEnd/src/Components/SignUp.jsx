import { useState } from "react";
import { signup } from "../API_Calls/SignUpAPI";
import { useNavigate, Link } from "react-router-dom"; 
import { HiOutlineUserCircle, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true);
        try {
            await signup(username, password);
            navigate("/login"); 
        } catch (error) {
            setUsername("");
            setPassword("");
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-md max-w-md mx-auto shadow-lg hover:bg-gradient-to-r hover:from-[#fdfbfb] hover:to-[#ebedee] transition duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-black">Sign Up</h2>
            
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Username Field */}
            <div className="mb-6 relative">
                <label className="block text-gray-800 font-semibold">Username*</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineUserCircle className="text-gray-400 h-5 w-5" />
                    </span>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>
    
            {/* Password Field */}
            <div className="mb-6 relative">
                <label className="block text-gray-800 font-semibold">Password*</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineLockClosed className="text-gray-400 h-5 w-5" />
                    </span>
                    <input
                        type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <span
                        onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                        {showPassword ? (
                            <AiFillEye className="text-gray-400 h-5 w-5" /> // Show eye icon
                        ) : (
                            <AiFillEyeInvisible className="text-gray-400 h-5 w-5" /> // Hide eye icon
                        )}
                    </span>
                </div>
            </div>
    
            <button
                type="submit"
                disabled={isLoading} 
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-3 rounded-md hover:from-blue-600 hover:to-pink-600 transition duration-200 font-semibold"
            >
                {isLoading ? "Signing Up..." : "Sign Up"}
            </button>

            <p className="text-center mt-4">Already registered? <Link to="/login" className="text-blue-500 underline">Click here to Login</Link></p>
        </form>
    );    
}