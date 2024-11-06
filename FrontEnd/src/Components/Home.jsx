import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyCheckAlt, FaUsers, FaHistory, FaChartLine } from 'react-icons/fa';

export const HomePage = () => {
    return (
        <main className="bg-gray-100 min-h-screen text-gray-800 dark:bg-gray-900 dark:text-white">
            {/* Introductory Section */}
            <section className="py-16 text-center px-6 animate-fade-in">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-bounce">
                    Welcome to Reactify
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                    Reactify is a secure and efficient way to manage your finances in a simulated environment. From sending mock money to tracking transactions, we offer everything you need to practice and explore financial tech solutions.
                </p>
                <div className="mt-8">
                    <Link 
                        to="/signup" 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 px-8 py-3 rounded-md text-white font-semibold hover:shadow-lg transition duration-300 transform hover:scale-105 dark:from-blue-600 dark:to-purple-700 dark:hover:bg-blue-500 dark:hover:text-white">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* About Reactify Section */}
            <section className="py-12 px-6 bg-gray-50 text-center rounded-lg shadow-md mx-auto max-w-4xl mt-8 animate-fade-in dark:bg-gray-800 dark:text-white">
                <h2 className="text-3xl font-bold mb-4">About Reactify</h2>
                <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
                    Reactify is named to highlight its use of <span className="font-semibold">React</span> and modern JavaScript frameworks, making it a project focused on interactive and responsive web experiences. While not a real financial platform, Reactify provides a sandbox for learning and experimenting with core concepts like secure transactions, data handling, and UI/UX practices in a financial setting.
                </p>
                <h3 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h3>
                <ul className="list-disc list-inside mx-auto max-w-lg text-left text-gray-700 dark:text-gray-300">
                    <li><strong>React:</strong> Provides the front-end framework for interactive, component-based UI development.</li>
                    <li><strong>Node.js & Express:</strong> Powers the back end, handling server requests and data processing.</li>
                    <li><strong>Recoil:</strong> Manages global state for a smooth user experience.</li>
                    <li><strong>Tailwind CSS:</strong> Adds styling and responsive design elements.</li>
                    <li><strong>Mock APIs:</strong> Simulate real-world functionality without handling actual financial data.</li>
                </ul>
            </section>

            {/* Features Section */}
            <section className="py-12 animate-fade-in">
                <h2 className="text-3xl font-bold text-center mb-10">Core Features</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
                    {/* Feature 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in dark:bg-gray-700 dark:text-white dark:hover:scale-105 dark:hover:shadow-xl">
                        <FaMoneyCheckAlt className="text-5xl text-blue-400 mb-4 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold mb-2">Balance Check</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Instantly check your account balance with real-time updates and keep track of your finances.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in dark:bg-gray-700 dark:text-white dark:hover:scale-105 dark:hover:shadow-xl">
                        <FaUsers className="text-5xl text-blue-400 mb-4 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold mb-2">Money Transfer</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Transfer money securely to other users with just a few clicks, anytime, anywhere.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in dark:bg-gray-700 dark:text-white dark:hover:scale-105 dark:hover:shadow-xl">
                        <FaHistory className="text-5xl text-blue-400 mb-4 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            View your complete transaction history with detailed records for better financial planning.
                        </p>
                    </div>
                    {/* Feature 4 */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in dark:bg-gray-700 dark:text-white dark:hover:scale-105 dark:hover:shadow-xl">
                        <FaChartLine className="text-5xl text-blue-400 mb-4 dark:text-blue-400" />
                        <h3 className="text-xl font-semibold mb-2">Insights & Reports</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Gain insights into your spending habits with detailed reports and analytics.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-100 text-center animate-fade-in dark:bg-gray-800 dark:text-white">
                <h2 className="text-3xl font-bold mb-8">Ready to Take Control of Your Finances?</h2>
                <div className="space-x-4">
                    <Link 
                        to="/signup" 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 px-8 py-3 rounded-md text-white font-semibold hover:shadow-lg transition duration-300 transform hover:scale-105 dark:from-blue-600 dark:to-purple-700 dark:hover:bg-blue-500 dark:hover:text-white">
                        Sign Up Now
                    </Link>
                    <Link 
                        to="/login" 
                        className="bg-gradient-to-r from-purple-500 to-blue-400 px-8 py-3 rounded-md text-white font-semibold hover:shadow-lg transition duration-300 transform hover:scale-105 dark:from-purple-600 dark:to-blue-500 dark:hover:bg-purple-500 dark:hover:text-white">
                        Login
                    </Link>
                </div>
            </section>
        </main>
    );
};
