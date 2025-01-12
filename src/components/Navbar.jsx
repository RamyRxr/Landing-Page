/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/users/React.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <header className="relative lg:flex items-center top-2 left-0 w-full px-5 py-3 bg-transparent flex justify-between z-50">

            <a href="#" className="relative lg:flex items-center text-2xl font-semibold text-cyan-500 no-underline px-5">
                <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
                Ramy
                <span className="absolute inset-0 bg-[#00120f] transform scale-0 translate-y-12 opacity-0 transition-all duration-500 rounded"></span>
            </a>

            <nav className="hidden lg:flex space-x-4">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="relative text-xl font-bold text-[#175f8f] no-underline px-5 transition duration-500 hover:text-cyan-500 group"
                    >
                        {item.label}
                        <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                    </a>
                ))}
            </nav>

            <div className="hidden lg:flex space-x-6">
                
                <a href="#" className="relative py-2 px-3 border rounded-md text-cyan-500 overflow-hidden group hover:text-white">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10 font-bold">Log in</span>
                </a>

                <a href="#" className="relative py-2 px-3 rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-800 overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                    <span className="relative z-10 font-bold">Create Account</span>
                </a>
            </div>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleNavbar} className="text-cyan-500">
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed top-5 right-5 w-80 bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center z-20 transition-transform duration-500 transform translate-x-0">
                    
                    <button onClick={toggleNavbar} className="absolute top-3 right-3 text-cyan-500">
                        <X />
                    </button>

                    <ul className="space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group"
                                >
                                    {item.label}
                                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 space-y-4 w-full flex flex-col items-center">

                        <a href="#" className="relative py-2 px-3 w-full text-center border rounded-md text-cyan-500 overflow-hidden group hover:text-white">
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                            <span className="relative z-10">CV</span>
                        </a>

                        <a
                            href="#"
                            className="relative py-2 px-3 w-full text-center rounded-md text-white bg-gradient-to-r from-purple-500 to-purple-800 overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 transform -translate-x-full transition-all duration-300 group-hover:translate-x-0"></span>
                            <span className="relative z-10">Create an account</span>
                        </a>

                    </div>

                </div>
            )}
        </header>
    );
};

export default Navbar;
