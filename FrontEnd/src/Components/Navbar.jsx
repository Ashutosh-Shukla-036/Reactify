import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { userAtom } from '../Atoms/userAtom';
import { useRecoilState } from 'recoil';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useRecoilState(userAtom);

    const handleLogout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }, [setUser]);

    const MenuItemLink = ({ to, children }) => (
        <li className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb]">
            <Link to={to} className="text-black hover:text-white">{children}</Link>
        </li>
    );

    return (
        <nav className="bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] p-4 flex items-center justify-evenly shadow-lg">
            {/* Logo and App Name */}
            <div className="flex items-center gap-3">
                <FaReact className="text-black h-auto w-7 animate-spin" />
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc]">
                    <Link to="/">PaymentApp</Link>
                </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4">
                <ul className="flex space-x-4">
                    {user ? (
                        <>
                            <MenuItemLink to="/profile">Profile</MenuItemLink>
                            <MenuItemLink to="/balance">Balance</MenuItemLink>
                            <MenuItemLink to="/transfer">Transfer</MenuItemLink>
                            <MenuItemLink to="/transactions"> History</MenuItemLink>
                            <button 
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb] hover:text-white"
                            > Logout </button>
                        </>
                    ) : (
                        <>
                            <MenuItemLink to="/signup">Register</MenuItemLink>
                            <MenuItemLink to="/login">Login</MenuItemLink>
                        </>
                    )}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black focus:outline-none"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] shadow-lg z-10">
                    <ul className="flex flex-col space-y-2 p-4">
                        <MenuItemLink to="/">Home</MenuItemLink>
                        {user ? (
                            <>
                                <MenuItemLink to="/profile">Profile</MenuItemLink>
                                <MenuItemLink to="/balance">Balance</MenuItemLink>
                                <MenuItemLink to="/transfer">Transfer</MenuItemLink>
                                <MenuItemLink to="/transactions">History</MenuItemLink>
                                <button 
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-md transition-all duration-300 text-center bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] hover:bg-gradient-to-r hover:from-[#a1c4fd] hover:to-[#c2e9fb] hover:text-white"
                                > Logout </button>
                            </>
                        ) : (
                            <>
                                <MenuItemLink to="/signup">Register</MenuItemLink>
                                <MenuItemLink to="/login">Login</MenuItemLink>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};
