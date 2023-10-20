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
    color,
    imageUrl,
    subtitle,
    title,
    description,
}) => {
    return (
        <div className="xl:w-1/3 md:w-1/2">
            <div
                className="border-[4px] border-black h-full w-full bg-[#ffe7b9] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-6 py-8 rounded-2xl"
                style={{
                    background: `${color}`,
                }}
            >
                <Image
                    className="border-[4px] border-black rounded-xl w-full object-cover object-center "
                    src={imageUrl}
                    width={500}
                    height={320}
                    alt="content"
                />
                <h3 className="text-black text-base my-3">
                    {subtitle}
                </h3>
                <h2 className="text-[28px] text-black font-medium mb-2">
                    {title}
                </h2>
                <p className="leading-relaxed text-base text-[20px] mb-4">{description}</p>
                <button className="bg-white rounded-lg px-5 py-2 border-black border-[3px] text-[20px]">
                    Check Karein !
                </button>
            </div>
        </div>
    );
};

const featureItems = [
    {
        color: '#ffd79a',
        imageUrl: 'https://dummyimage.com/720x400',
        subtitle: 'SUBTITLE',
        title: 'Chichen Itza',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
        color: '#c2d3ff',
        imageUrl: 'https://dummyimage.com/721x401',
        subtitle: 'SUBTITLE',
        title: 'Colosseum Roma',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
        color: '#eeffd3',
        imageUrl: 'https://dummyimage.com/722x402',
        subtitle: 'SUBTITLE',
        title: 'Great Giza',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
];

const Feature: React.FC = () => {
    return (
        <section className="relative bg-orange-500 border-4 border-black rounded-t-[10rem]" id='feature-section'>
            <div className="container mx-auto"
            >
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
