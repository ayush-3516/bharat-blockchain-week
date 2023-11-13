import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 max-h-28 py-4 items-center sticky-navbar">
            <div className="w-3/12 flex items-center">
                <Logo />
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div className="flex text-white items-center md:flex">
                    <div className="flex md:mt-0">
                        <NavLink to='/createEvent'>
                            <span className="inline-flex items-center bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white shadow-2xl py-2 px-5 focus:outline-none transition-all ml-2 rounded-lg text-base font-medium md:ml-4">
                                Organise a Side Event
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
