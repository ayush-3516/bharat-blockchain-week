import React from 'react';
import Image from 'next/image';
import HeroBg from './HeroBg';
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    image: string;
    button1: string;
    button2: string;
}

const Hero = ({
    title, description, button1, button2
}: Props) => {
    // Split the title words
    const titleWords = title.split(' ');

    return (
        <section className="text-gray-100 body-font hero">
            <HeroBg />
            <div className="container mx-auto flex items-center justify-center flex-col">
                <div className="text-center w-full bg-[#fff] border-t-[12px] border-t-[#ff4e00] border-l-[5px] border-l-[#06038D] border-r-[5px] border-r-[#06038D] drop-shadow-[0px_20px_0px_#138808] rounded-3xl relative" id='hero-container'>
                    <h1 className="title-font text-6xl mb-4 font-semibold text-black">
                        {titleWords.length > 1 ? (
                            <span>
                                <span className="mr-2 font-semibold text-[#ff4e00]">
                                    {titleWords[0]}
                                </span>
                                {titleWords.slice(1).join(' ')}
                            </span>
                        ) : (
                            title
                        )}
                    </h1>
                    <p className="leading-relaxed text-black mb-8">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-4 relative z-50 items-center justify-center">
                        {button1 && (
                            <Link href="/" className='z-50'>
                                <a className="inline-flex text-white bg-[#06038D] border-2 border-[#06038d] py-2 px-6 focus:outline-none rounded-lg text-lg">
                                    {button1}
                                </a>
                            </Link>
                        )}
                        {button2 && (
                            <Link href="/createEvent" className='z-50'>
                                <a className="inline-flex text-[#06038d] cursor-pointer font-semibold bg-[#06038D10] py-2 px-6 border-2 border-[#06038D] focus:outline-none rounded-lg text-lg">
                                    {button2}
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="monument">
                        <Image width={1000} height={600} src="/monument.png" alt="monument" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
