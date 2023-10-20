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
            className={`absolute top-0 left-0 h-screen w-screen bg-orange-100 transform ${open ? '-translate-x-0' : '-translate-x-full'
                } transition-transform z-50 duration-300 ease-in-out filter drop-shadow-md`}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-black h-20">
                {/* Logo container */}
                <Link href="/">
                    <a style={{ width: '100%', height: '100%', position: 'relative', padding: '10px' }}>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={105} height={60}
                        />
                    </a>
                </Link>
            </div>
            <div className="flex flex-col ml-4 space-y-4">
                <Link href="/travel">
                    <a
                        className="text-xl font-normal mt-6"
                        onClick={() => setTimeout(() => setOpen(!open), 100)}
                    >
                        Travel
                    </a>
                </Link>
                <Link href='/createEvent'>
                    <a
                        className="text-xl font-normal"
                    >
                        Organise a Side Event
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
                    >
                        <Image src="/logo.png" width={147} height={84} alt="" />
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
                        className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0 hidden' : 'w-full'
                            }`}
                    />
                    <span
                        className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''
                            }`}
                    />
                </div>
                <div className="hidden flex text-white items-center md:flex">
                    <NavLink to="/agenda">Travel</NavLink>
                    <div className="flex items-center mt-4 md:mt-0">
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
