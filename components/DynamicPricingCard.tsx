import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface DynamicPricingWithCalendarProps {
    title: string;
    priceRanges: { type: string; price: number }[];
}

const DynamicPricingCardWithCalendar: React.FC<DynamicPricingWithCalendarProps> = ({ title, priceRanges }) => {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const [selectedType, setSelectedType] = useState('');

    const handleSelectDate = (ranges: { selection: { startDate: Date; endDate: Date } }) => {
        setDateRange(ranges.selection);
    };

    const getPriceForType = () => {
        const selectedPriceRange = priceRanges.find((range) => range.type === selectedType);
        if (selectedPriceRange) {
            const days = Math.floor((dateRange.endDate - dateRange.startDate) / (1000 * 60 * 60 * 24));
            return days * selectedPriceRange.price;
        }
        return 0; // Default price if no type is selected
    };

    return (
        <div className="p-4 mx-auto w-full border-2 border-gray-700">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest text-gray-400 mb-1 font-medium">{title}</h2>
                <div className="mb-4">
                    {priceRanges.map((range) => (
                        <button
                            key={range.type}
                            className={`px-3 py-1 mx-1 text-sm ${selectedType === range.type ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white'} focus:outline-none rounded`}
                            onClick={() => setSelectedType(range.type)}
                        >
                            {range.type}
                        </button>
                    ))}
                </div>
                <DateRange
                    onChange={handleSelectDate}
                    moveRangeOnFirstSelection={false}
                    ranges={[dateRange]}
                    className='w-full'
                />
                <h1 className={`text-5xl ${selectedType ? 'text-orange-500' : 'text-white'} pb-4 mb-4 border-b ${selectedType ? 'border-orange-500' : 'border-gray-800'} leading-none`}>
                    ${getPriceForType()}
                </h1>
                <p className="text-xs text-gray-400 mt-3">Select a type and date range to view the pricing.</p>
            </div>
        </div>
    );
};

export default DynamicPricingCardWithCalendar;
