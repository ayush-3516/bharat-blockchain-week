import React from 'react';
import Image from 'next/image';

type FeatureItemProps = {
    color: string;
    imageUrl: string;
    subtitle: string;
    title: string;
    description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
    imageUrl,
    subtitle,
    title,
    description,
}) => {
    return (
        <div className="xl:w-1/3 md:w-1/2" id='card'>
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
                        <h2 className="text-[18px] font-medium mb-1">
                            {title}
                        </h2>
                        <p className="leading-relaxed text-base font-light text-[16px]">{description}</p>
                        {/* <button className="bg-white rounded-lg px-5 py-2 border-[3px] text-[20px]">
                    Check Karein !
                </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const featureItems = [
    {
        color: '#ffd79a',
        imageUrl: '/feature1.png',
        subtitle: 'SUBTITLE',
        title: 'Chichen Itza',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
        color: '#c2d3ff',
        imageUrl: '/feature2.png',
        subtitle: 'SUBTITLE',
        title: 'Colosseum Roma',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
        color: '#eeffd3',
        imageUrl: '/feature3.png',
        subtitle: 'SUBTITLE',
        title: 'Great Giza',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
];

const Feature: React.FC = () => {
    return (
        <section className="relative overflow-hidden" id='feature-section'>
            <div className="absolute top-8 -left-10" id='square1'>
                <Image src='/square.svg' alt='square' width={600} height={600} />
            </div>
            <div className="absolute -bottom-20 -right-44" id='square2'>
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
