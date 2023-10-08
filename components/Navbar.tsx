import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return (
        <Link href={to}>
            <a className="mx-4">{children}</a>
        </Link>
    );
}

interface MobileNavProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({ open, setOpen }: MobileNavProps) {
    return (
        <div
            className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'
                } transition-transform z-50 duration-300 ease-in-out filter drop-shadow-md`}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                {/* Logo container */}
                <Link href="/">
                    <a>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={10}
                            height={10}
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/travel">
                    <a
                        className="text-xl font-normal my-4"
                        onClick={() => setTimeout(() => setOpen(!open), 100)}
                    >
                        Travel
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex filter drop-shadow-md bg-black px-4 max-h-28 py-4 items-center" 
            style={{
                zIndex: 100,
                position: "sticky",
                top: "0px",
            }}
        >
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className='flex items-center overflow-hidden justify-center'
                        style={{
                            maxWidth: '140px !important',
                        }}
                    >
                        <img src="/logo.png" alt="" />
                    </a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div
                    className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    {/* Hamburger button */}
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''
                            }`}
                    />
                </div>
                <div className="hidden flex text-white items-center md:flex">
                    <NavLink to="/agenda">Travel</NavLink>
                    <div className="flex items-center mt-4 md:mt-0">
                        <button className="inline-flex items-center bg-gradient-to-br from-orange-500 to-[#ff4e00] text-white shadow-2xl py-2 px-5 focus:outline-none transition-all ml-2 rounded-lg text-base font-medium md:ml-4">
                            Organise a Side Event
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
