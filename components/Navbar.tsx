import React, { useState } from 'react';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return (
        <a href={to} className="mx-4">
            {children}
        </a>
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
                <a className="text-xl font-semibold" href="/">
                    LOGO
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a
                    className="text-xl font-medium my-4"
                    href="/speakers"
                    onClick={() => setTimeout(() => setOpen(!open), 100)}
                >
                    Speakers
                </a>
                <a
                    className="text-xl font-normal my-4"
                    href="/agenda"
                    onClick={() => setTimeout(() => setOpen(!open), 100)}
                >
                    Agenda
                </a>
                <a
                    className="text-xl font-normal my-4"
                    href="/partners"
                    onClick={() => setTimeout(() => setOpen(!open), 100)}
                >
                    Partners
                </a>
                <a
                    className="text-xl font-normal my-4"
                    href="/travel"
                    onClick={() => setTimeout(() => setOpen(!open), 100)}
                >
                    Travel
                </a>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">
                    LOGO
                </a>
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
                <div className="hidden flex items-center md:flex">
                    <NavLink to="/speakers">speakers</NavLink>
                    <NavLink to="/agenda">agenda</NavLink>
                    <NavLink to="/partners">partners</NavLink>
                    <NavLink to="/agenda">travel</NavLink>
                    <div className="flex items-center mt-4 md:mt-0">
                        <button className="inline-flex items-center bg-white text-purple-700 border-2 border-purple-700 py-2 px-5 focus:outline-none transition-all hover:bg-purple-800 hover:text-white rounded-lg text-base font-medium md:ml-4">
                            Exhibit
                        </button>
                        <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 text-white border-2 border-purple-700 py-2 px-5 focus:outline-none transition-all ml-2 rounded-lg text-base font-medium md:ml-4">
                            Tickets
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
