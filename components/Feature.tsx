import React from 'react';
import Image from 'next/image';

type FeatureItemProps = {
    color: string;
    imageUrl: string;
    subtitle: string;
    title: string;
    description: string;
    websiteUrl: string;
    location: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
    imageUrl,
    subtitle,
    title,
    description,
    websiteUrl,
    location
}) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 relative z-10" id='card'>
            <div
                className="h-full w-full bg-[#1d1d1d] text-[#CACACA] p-4 space-y-2 rounded-2xl"
            >
                <Image
                    className="border-[4px] rounded-xl w-full object-cover object-center"
                    src={imageUrl}
                    width={500}
                    height={320}
                    alt="content"
                />
                <div className='py-1'>
                    <span className="bg-[#020204] rounded-full px-8 py-2 text-[14px]">
                        {subtitle}
                    </span>
                    <div className="my-4">
                        <div className="flex items-center justify-between py-2">
                            <h2 className="text-[18px] font-medium mb-1">
                                {title}
                            </h2>
                            <a href={`${websiteUrl}`} target='_blank' rel='noreferrer' className="inline-flex items-center mt-6">
                                <i className="fas fa-external-link-alt text-orange-400"></i>
                            </a>
                        </div>
                        <p className="leading-relaxed text-base font-light text-[16px]">{description}</p>
                    </div>
                    <div className="text-white flex items-start space-x-2 min-h-[50px] justify-start">
                        <i className="fas fa-map-marker-alt text-xs pt-[2%]"></i>
                        <span className='text-base mb-0'>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const featureItems = [
    {
        color: '#ffd79a',
        imageUrl: '/ethindia.jpeg',
        subtitle: '8th - 10th December, 2023',
        title: 'Eth India',
        description:
            'Empowering the Indian Ethereum Community, Hackathons, Fellowships, Grants, and more',
        websiteUrl: 'https://ethindia.co/',
        location: 'KTPO, Bengaluru, India'
    },
    {
        color: '#c2d3ff',
        imageUrl: '/ibw.jpeg',
        subtitle: '6th-7th December, 2023',
        title: "IBW'2023",
        description:
            '2 Day headline event anchoring India Blockchain Week (IBW), crafted by Hashed Emergent',
        websiteUrl: 'https://indiablockchainweek.com/',
        location: 'Sheraton Grand Whitefield, Bengaluru, India'
    },
    {
        color: '#eeffd3',
        imageUrl: '/web3carnival.jpeg',
        subtitle: '4th - 10th December, 2023',
        title: 'Web3 Carnival',
        description:
            "Get Ready to Experience the Future at #Web3Carnival - India's Mega #Web3 Event!",
        websiteUrl: 'https://www.web3carnival.world/',
        location: 'Palm Meadows Resort, Bengaluru, India'
    },
];

const Feature: React.FC = () => {
    return (
        <section className="relative overflow-hidden" id='feature-section'>
            <div className="absolute top-8 -left-10 z-0" id='square1'>
                <Image src='/square.svg' alt='square' width={600} height={600} />
            </div>
            <div className="absolute -bottom-20 -right-44 z-0" id='square2'>
                <Image src='/square.svg' alt='square' width={550} height={550} />
            </div>
            <div className="container mx-auto">
                <h1 className="text-[40px] font-medium title-font text-white mb-12 text-center">Event Highlights</h1>
                <div className="flex items-center justify-center gap-4" id='feature'>
                    {featureItems.map((item, index) => (
                        <FeatureItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
