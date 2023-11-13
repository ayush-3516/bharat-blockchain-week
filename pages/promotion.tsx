import Layout from 'components/Layout';
import Promote from 'components/Promote';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Promotion = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [price, setPrice] = useState(0);
    const router = useRouter(); // Initialize useRouter

    const handleStartDateChange = (newDate: Date) => {
        setStartDate(newDate);
        calculatePrice(newDate, endDate);
    };

    const handleEndDateChange = (newDate: Date) => {
        setEndDate(newDate);
        calculatePrice(startDate, newDate);
    };

    const handleCheckout = () => {
        router.push(`/checkout?price=${price}`);
    };

    const calculatePrice = (start: Date, end: Date) => {
        const daysDifference = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        const basePrice = 50; // base price per day

        // Pricing logic based on provided ranges for November 14th
        if (daysDifference >= 13 && daysDifference <= 18) {
            setPrice(daysDifference * basePrice);
        } else if (daysDifference >= 19 && daysDifference <= 25) {
            setPrice(daysDifference * 70);
        } else if (daysDifference >= 26 && daysDifference <= 32) {
            setPrice(daysDifference * 100);
        } else if (daysDifference >= 33 && daysDifference <= 37) {
            setPrice(daysDifference * 150);
        } else if (daysDifference >= 38 && daysDifference <= 43) {
            setPrice(daysDifference * 300);
        } else if (daysDifference >= 44 && daysDifference <= 51) {
            setPrice(daysDifference * 100);
        } else if (daysDifference >= 52 && daysDifference <= 58) {
            setPrice(daysDifference * 50);
        } else if (daysDifference >= 59 && daysDifference <= 60) {
            setPrice(1000); // Entire blockchain week
        } else if (daysDifference >= 61 && daysDifference <= 90) {
            setPrice(3000); // Entire month
        } else {
            // Handle other cases or default pricing
            setPrice(0);
        }
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
                            min={new Date().toISOString().split('T')[0]}
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
                            className=" rounded-md w-full px-3 py-2 text-gray-200 bg-[#252525]"
                            onChange={(e) => handleEndDateChange(new Date(e.target.value))}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <h2 className='text-[26px] text-gray-200'>Calculated Price: <span className="text-orange-500">${price}</span></h2>
                    <button className="flex ml-auto text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-lg py-2 px-6 focus:outline-none rounded-lg"
                        onClick={handleCheckout} // Call handleCheckout on button click
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Promotion;
