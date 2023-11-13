import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import React from 'react';

const Checkout = () => {
    const router = useRouter();
    const { price } = router.query;
    const calculatedPrice = price ? parseFloat(price as string) : 0;

    return (
        <Layout>
            <div className='text-white'>
                <h1>Your Checkout Page</h1>
                <p>Calculated Price: ${calculatedPrice}</p>
                {/* Add the rest of your checkout page content here */}
            </div>
        </Layout>
    );
};

export default Checkout;
