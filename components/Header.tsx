import React, { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return ( 
        <header className="text-gray-600 body-font">
            <div className="container bg-gradient-to-r from-purple-600 via-purple-800 to-purple-700 text-white text-center text-sm py-2">
                <a href="" className="underline underline-offset-2">
                    Register Now
                </a>
            </div>
            <div className="container mx-auto flex flex-wrap px-4 md:px-16 lg:px-32 py-4 bg-gradient-to-r from-purple-50 to-purple-100 shadow-md flex-col md:flex-row items-center">
                <div className="flex items-center w-full md:w-auto">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10 text-white p-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">bharatblockchainweek</span>
                    </a>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base relative justify-center w-full md:w-auto mt-4 md:mt-0">
                    <a className="mr-5 hover:text-gray-900">Speakers</a>
                    <a
                        className="mr-5 flex items-center cursor-pointer hover:text-gray-900"
                        onClick={toggleDropdown}
                    >
                        Agenda
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''
                                }`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                    {/* Dropdown content */}
                    {isDropdownOpen && (
                        <div className="absolute bg-purple-50 mt-2 top-[42px] left-0 z-50 py-2 w-full md:w-40 shadow-lg rounded-md">
                            <a
                                href="#day1"
                                className="block mx-2 p-2 px-3 rounded-md text-gray-800 hover:bg-purple-200"
                            >
                                Place 1 Mainstage
                            </a>
                            <a
                                href="#day2"
                                className="block mx-2 p-2 px-3 rounded-md text-gray-800 hover:bg-purple-200"
                            >
                                Place 2 Mainstage
                            </a>
                            <a
                                href="#day3"
                                className="block mx-2 p-2 px-3 rounded-md text-gray-800 hover:bg-purple-200"
                            >
                                Place 3 Mainstage
                            </a>
                            {/* Add more agenda items as needed */}
                        </div>
                    )}
                    <a className="mr-5 hover:text-gray-900">Partners</a>
                    <a className="mr-5 hover:text-gray-900">Travel</a>
                    <a className="mr-5 hover:text-gray-900">Side Events</a>
                </nav>
                <div className="flex items-center mt-4 md:mt-0">
                    <button className="inline-flex items-center bg-white text-purple-700 border-2 border-purple-700 py-2 px-5 focus:outline-none transition-all hover:bg-purple-800 hover:text-white rounded-lg text-base font-medium md:ml-4">
                        Exhibit
                    </button>
                    <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 text-white border-2 border-purple-700 py-2 px-5 focus:outline-none transition-all ml-2 rounded-lg text-base font-medium md:ml-4">
                        Tickets
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
