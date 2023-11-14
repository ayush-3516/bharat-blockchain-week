import React from 'react';

const pricingDetails = [
    { label: '12 to 18', price: '$50 a day' },
    { label: '19 to 25', price: '$70 a day' },
    { label: '26 to 2', price: '$100 a day' },
    { label: 'Entire Blockchain Week', price: '$1000' },
    { label: 'Entire Month', price: '$3000' },
    // Add more pricing details as needed
];

const Promote = () => {
    return (
        <section className="text-gray-400 bg-[#030303] body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
                </div>
                <div className="lg:w-3/4 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 tracking-wider font-medium text-white text-[18px] bg-orange-500 rounded-l-lg">Plan</th>
                                <th className="px-4 py-3 tracking-wider font-medium text-white text-[18px] bg-orange-500 rounded-r-lg">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingDetails.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3 text-gray-200">{item.label}</td>
                                    <td className="px-4 py-3 text-lg text-gray-200">{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Promote;
