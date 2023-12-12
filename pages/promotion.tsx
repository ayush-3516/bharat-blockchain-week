import Layout from 'components/Layout';
import Promote from 'components/Promote';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const Promotion = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight

    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [price, setPrice] = useState(0);
    const router = useRouter();

    const handleStartDateChange = (newDate: Date) => {
        if (isValidDate(newDate)) {
            setStartDate(newDate);
            calculatePrice(newDate, endDate);
        } else {
            // Show toast for invalid date
            toast.error('Invalid date. Please select a valid date.');
        }
    };

    const handleEndDateChange = (newDate: Date) => {
        const maxEndDate = new Date('2023-12-15');
        maxEndDate.setHours(0, 0, 0, 0); // Set time to midnight

        if (isValidDate(newDate)) {
            if (newDate <= maxEndDate) {
                setEndDate(newDate);
                calculatePrice(startDate, newDate);
            } else {
                setEndDate(maxEndDate);
                calculatePrice(startDate, maxEndDate);
            }
        } else {
            // Show toast for invalid date
            toast.error('Invalid date. Please select a valid date.');
        }
    };

    const handleCheckout = () => {
        router.push(`/checkout?price=${price}`);
    };

    const calculatePrice = (start: Date, end: Date) => {
        const oneDay = 1000 * 60 * 60 * 24;
        const daysDifference = Math.ceil((end.getTime() - start.getTime()) / oneDay);
        const basePrice1 = 100;
        const basePrice2 = 50;

        let totalCost = 0;

        for (let day = 1; day <= daysDifference; day++) {
            const currentDate = new Date(start.getTime() + (day - 1) * oneDay);
            currentDate.setHours(0, 0, 0, 0); // Set time to midnight

            if (currentDate >= new Date('2023-11-30') && currentDate < new Date('2023-12-11')) {
                totalCost += basePrice1;
            } else if (currentDate >= new Date('2023-12-11') && currentDate <= new Date('2023-12-15')) {
                totalCost += basePrice2;
            }
        }

        setPrice(totalCost);
    };

    const isValidDate = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to midnight
        return !isNaN(date.getTime()) && date >= today;
    };


    return (
        <Layout>
            <Promote />
            <div className='container bg-[#131313] rounded-2xl mx-auto'>
                <div className="flex items-center justify-between">
                    <div className='w-1/2 space-y-4'>
                        <h1 className='text-[20px] text-gray-200'>Choose a Start Date:</h1>
                        <input
                            type="date"
                            value={startDate.toISOString().split('T')[0]}
                            min={today.toISOString().split('T')[0]} // Set minimum allowed date to today
                            max={'2023-12-15'} // Set maximum allowed date
                            className=" rounded-md w-full px-3 py-2 text-gray-200 bg-[#252525]"
                            onChange={(e) => handleStartDateChange(new Date(e.target.value))}
                        />
                    </div>
                    <div className='w-1/2 pl-4 space-y-4'>
                        <h1 className='text-[20px] text-gray-200'>Choose an End Date:</h1>
                        <input
                            type="date"
                            value={endDate.toISOString().split('T')[0]}
                            min={startDate.toISOString().split('T')[0]}
                            max={'2023-12-15'} // Set maximum allowed date
                            className=" rounded-md w-full px-3 py-2 text-gray-200 bg-[#252525]"
                            onChange={(e) => handleEndDateChange(new Date(e.target.value))}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <h2 className='text-[26px] text-gray-200'>Calculated Price: <span className="text-orange-500">${price}</span></h2>
                    <button className="flex ml-auto text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-lg py-2 px-6 focus:outline-none rounded-lg"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Promotion;
