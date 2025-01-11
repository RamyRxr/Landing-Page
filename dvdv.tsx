// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
    return (
        <header className="fixed top-2 left-0 w-full p-5 bg-transparent flex justify-between items-center z-50">
            <a href="#" className="relative text-2xl font-semibold text-cyan-500 no-underline px-5">
                Ramy
                <span className="absolute inset-0 bg-[#00120f] transform scale-0 translate-y-12 opacity-0 transition-all duration-500 rounded"></span>
            </a>
            
            <nav className="flex space-x-4">
                <a href="#" className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group">
                    Home
                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100" ></span>
                </a>

                <a  href="#" className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group">
                    About
                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                </a>

                <a href="#" className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group" >
                    Services
                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                </a>

                <a href="#"  className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group" >
                    Contact
                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                </a>

                <a href="#" className="relative text-lg font-medium text-[#bef] no-underline px-5 transition duration-500 hover:text-cyan-500 group" >
                    Help
                    <span className="absolute top-2 left-0 w-full h-full border-b-2 border-blue-700 rounded-full transform scale-0 translate-y-12 opacity-0 transition-all duration-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100"></span>
                </a>

            </nav>
        </header>
    );
};

export default Navbar;
