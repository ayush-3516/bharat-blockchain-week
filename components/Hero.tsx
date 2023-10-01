import React from 'react';

type Props = {
    title: string;
    description: string;
    image: string;
    button1: string;
    button2: string;
}

const Hero = ({
    title, description, image, button1, button2
}: Props) => {
    // Split the title words
    const titleWords = title.split(' ');

    return (
        <div>
            <section className="text-gray-100 body-font bg-[#131313] hero">
                <div className="container mx-auto flex items-center justify-center flex-col">
                    <div className="text-center w-full bg-[#252525] drop-shadow-[0px_20px_0px_#a855f7] rounded-3xl" id='hero-container'>
                        <h1 className="title-font mb-4 font-semibold text-white">
                            {titleWords.length > 1 ? (
                                <span>
                                    <span className="mr-2 font-semibold text-purple-400">
                                        {titleWords[0]}
                                    </span>
                                    {titleWords.slice(1).join(' ')}
                                </span>
                            ) : (
                                title
                            )}
                        </h1>
                        <p className="leading-relaxed mb-8">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            {button1 && (
                                <button className="inline-flex text-white bg-gradient-to-br from-purple-500 to-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded-lg text-lg">
                                    {button1}
                                </button>
                            )}
                            {button2 && (
                                <button className="inline-flex text-gray-950 bg-gradient-to-br from-purple-50 to-purple-300 py-2 px-6 border-2 border-purple-500 focus:outline-none rounded-lg text-lg">
                                    {button2}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
