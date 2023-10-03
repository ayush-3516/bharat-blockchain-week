import React from 'react'

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-[#090F15] body-font overflow-hidden pb-6">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex  font-medium items-center text-white w-40 h-10 mb-4 md:mb-0">
                        logo
                    </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className=" font-medium text-white tracking-widest mb-3">BUILT BY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">Abhay</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Ayush Chaudhari</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Ashutosh Yadav</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className=" font-medium text-white tracking-widest mb-3">POWERED BY WEB3 EVENTS</h2>
                        <nav className="list-none flex items-center gap-x-4 mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">
                                    <i className="fab fa-discord"></i>
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className=" font-medium text-white tracking-widest mb-3">CONTACT US</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-400 hover:text-white">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-white">Second Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-[#090F15] bg-opacity-75">
                <div className="container mx-auto py-4 px-32 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-400 text-center sm:text-left">© 2024 Web3 Events Pvt Ltd.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer