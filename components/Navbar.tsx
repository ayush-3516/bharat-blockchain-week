import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

// Logo component
function Logo() {
    return (
        <Link href="/">
            <a className='flex items-center overflow-hidden justify-center'>
                <Image src="/logo.png" width={147} height={84} alt="" />
            </a>
        </Link>
    );
}

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return (
        <Link href={to}>
            <a>{children}</a>
        </Link>
    );
}

export default function Navbar() {

    const handlePopup = () => {
        toast('Coming Soon!', {
            position: 'top-center',
            icon: '✅',
        });
    }

    return (
        <nav className="flex filter drop-shadow-md bg-[#000] px-4 max-h-28 py-4 items-center sticky-navbar">
            <div className="w-3/12 flex items-center">
                <Logo />
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div className="flex text-white items-center md:flex">
                    <div className="flex md:mt-0">
                        <button onClick={handlePopup}>
                            <span className="inline-flex items-center bg-[#242424] text-white shadow-2xl py-[5px] px-4 focus:outline-none transition-all ml-2 rounded-lg text-base font-normal md:ml-4">
                                Magic Map 🗺️
                            </span>
                        </button>
                        <NavLink to='/createEvent'>
                            <span className="inline-flex items-center text-center bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white shadow-2xl py-[5px] px-4 focus:outline-none transition-all ml-2 rounded-lg text-base font-normal md:ml-4">
                                Organise a Side Event
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
