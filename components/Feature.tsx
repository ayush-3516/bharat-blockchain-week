import React from 'react';

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
                <img
                    className="h-48 border-[4px] border-black rounded-xl w-full object-cover object-center mb-6"
                    src={imageUrl}
                    alt="content"
                />
                <h3 className="text-black text-base">
                    {subtitle}
                </h3>
                <h2 className="text-[32px] text-black font-medium mb-2">
                    {title}
                </h2>
                <p className="leading-relaxed text-base text-[20px] mb-4">{description}</p>
                <button className="bg-white rounded-lg px-6 py-2 border-black border-[3px] text-[20px]">
                    Check Karein
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
        title: 'Great Pyramid of Giza',
        description:
            'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
];

const Feature: React.FC = () => {
    return (
        <section className="relative bg-orange-500 border-4 border-black rounded-t-[10rem]">
            <div className="mx-auto px-[18%]"
                style={{
                    transform: "translateY(-25%)",
                }}
            >
                <div className="flex items-center justify-center space-x-3">
                    {featureItems.map((item, index) => (
                        <FeatureItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
