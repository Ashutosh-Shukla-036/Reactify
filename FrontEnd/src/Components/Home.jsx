import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyCheckAlt, FaUsers, FaHistory, FaChartLine } from 'react-icons/fa';

export const HomePage = () => {
    return (
        <main className="bg-gradient-to-r from-[#fdfbfb] to-[#ebedee] min-h-screen text-gray-800">
            {/* Introductory Section */}
            <section className="py-12 text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-black">
                    Welcome to PaymentApp
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    PaymentApp is a secure and efficient way to manage your finances. From sending money to tracking transactions, we offer everything you need to keep your finances in check.
                </p>
                <div className="mt-6">
                    <Link 
                        to="/signup" 
                        className="bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] px-6 py-2 rounded-md text-black font-semibold hover:from-[#a1c4fd] hover:to-[#c2e9fb] transition duration-300 hover:text-white">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Core Features</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4">
                    {/* Feature 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <FaMoneyCheckAlt className="text-4xl text-[#8ec5fc] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Balance Check</h3>
                        <p className="text-gray-600">
                            Instantly check your account balance with real-time updates and keep track of your finances.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <FaUsers className="text-4xl text-[#8ec5fc] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Money Transfer</h3>
                        <p className="text-gray-600">
                            Transfer money securely to other users with just a few clicks, anytime, anywhere.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <FaHistory className="text-4xl text-[#8ec5fc] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
                        <p className="text-gray-600">
                            View your complete transaction history with detailed records for better financial planning.
                        </p>
                    </div>
                    {/* Feature 4 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <FaChartLine className="text-4xl text-[#8ec5fc] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Insights & Reports</h3>
                        <p className="text-gray-600">
                            Gain insights into your spending habits with detailed reports and analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
                <div className="space-x-4">
                    <Link 
                        to="/signup" 
                        className="bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] px-6 py-3 rounded-md text-black font-semibold hover:from-[#a1c4fd] hover:to-[#c2e9fb] transition duration-300 hover:text-white">
                        Sign Up Now
                    </Link>
                    <Link 
                        to="/login" 
                        className="bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] px-6 py-3 rounded-md text-black font-semibold hover:from-[#c2e9fb] hover:to-[#a1c4fd] transition duration-300 hover:text-white">
                        Login
                    </Link>
                </div>
            </section>
        </main>
    );
};
