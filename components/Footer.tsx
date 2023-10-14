import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-white bg-black relative body-font overflow-hidden pb-6">
            <div className="px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-[280px] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div className='w-[150px]'>
                        <Link href="/" className="flex font-medium items-center text-white h-10 mb-4 md:mb-0">
                            <a className='flex items-center overflow-hidden justify-center'>
                                <Image src="/logo.png" width={420} height={240} alt="" />
                            </a>
                        </Link>
                    </div>
                </div>
                {/* links */}
                <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="font-medium text-white tracking-widest mb-3">BUILT BY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-white">Abhay</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-white">Ayush Chaudhari</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-white">Ashutosh Yadav</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex items-start md:justify-start text-center flex-col">
                        <h2 className="font-medium text-white tracking-widest mb-3">POWERED BY WEB3 EVENTS</h2>
                        <nav className="list-none flex items-center w-[48%] text-center justify-center gap-4 mb-10">
                            <a className="text-white hover:text-white">
                                <i className="fab fa-instagram text-[15px]"></i>
                            </a>
                            <a className="text-white hover:text-white">
                                {/* Use inline SVG */}
                                <Image src="/twitter.svg" width={14} height={14} alt="" />
                            </a>
                            <a className="text-white hover:text-white">
                                <i className="fab fa-telegram-plane text-[15px]"></i>
                            </a>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex items-start justify-start text-center md:text-left flex-col pl-12 w-full">
                        <h2 className="font-medium text-white tracking-widest mb-3">CONTACT US</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-white">First Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-white">Second Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
                {/* links end */}
            </div>
            <div className="bg-black text-center flex items-center justify-center">
                <p className="text-gray-50 text-center sm:text-left">© 2024 Web3 Events Pvt Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;
