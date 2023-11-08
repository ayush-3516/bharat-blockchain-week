import React from 'react';

interface PricingProps {
    title: string;
    price: string;
    features: string[];
    selected: boolean;
    onSelect: () => void;
}

const PricingCard: React.FC<PricingProps> = ({ title, price, features, selected, onSelect }) => {
    const cardClassName = `p-4 xl:w-1/4 md:w-1/2 w-full transition-all ${selected ? 'border-2 border-orange-500' : 'border-2 border-gray-700'}`;

    return (
        <div className="p-4 xl:w-1/2 md:w-1/2 w-full" onClick={onSelect}>
            <div className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${selected ? 'border-2 border-orange-500' : 'border-2 border-gray-700'}`}>
                <h2 className="text-sm tracking-widest text-gray-400 mb-1 font-medium">{title}</h2>
                <h1
                    className={`text-5xl ${selected ? 'text-orange-500' : 'text-white'} pb-4 mb-4 border-b ${selected ? 'border-orange-500' : 'border-gray-800'} leading-none`}
                >
                    {price}
                </h1>
                {features.map((feature, index) => (
                    <p key={index} className="flex items-center text-gray-400 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                        </span>
                        {feature}
                    </p>
                ))}
                <button
                    className={`flex items-center mt-auto ${selected ? 'text-orange-500 bg-white' : 'text-white bg-gray-800'} border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded`}
                >
                    {selected ? 'Selected' : 'Select'}
                </button>
                <p className="text-xs text-gray-400 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
    );
};

export default PricingCard;
