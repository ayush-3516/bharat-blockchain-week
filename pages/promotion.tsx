import React from 'react';
import Layout from 'components/Layout';
import Head from 'next/head';
import DynamicPricingCardWithCalendar from 'components/DynamicPricingCard';

type Props = {};

const Promotion = (props: Props) => {
    const priceData = [
        {
            title: 'Ad Running Pricing',
            priceRanges: [
                { type: 'Top Banner', price: 50 },
                { type: 'In-between Banners', price: 70 },
                { type: 'Other', price: 100 },
            ],
        },
    ];

    return (
        <Layout>
            <Head>
                <title>Promote Your Ad, so India can see it</title>
                <meta name="description" content="bharatblockchainweek.xyz" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
            </Head>
            <section className="text-gray-400 bg-[#020204] body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {priceData.map((data, index) => (
                            <DynamicPricingCardWithCalendar key={index} title={data.title} priceRanges={data.priceRanges} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Promotion;
