import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Ad = () => {
    const [showAd, setShowAd] = useState(true); // Set this to false to simulate no ads
    const router = useRouter();

    useEffect(() => {
        // Simulating ad analytics
        if (showAd) {
            // Implement your analytics tracking here
            console.log('Ad viewed');
        }
    }, [showAd]);

    const handleAdClick = () => {
        // Simulating ad click analytics
        if (showAd) {
            // Implement your analytics tracking here
            console.log('Ad clicked');
        }

        // Simulating redirection to a specific ad or promotion page
        if (!showAd) {
            // Replace 'YOUR_AD_URL' with the actual ad URL or promotion page URL
            router.push('/');
        } else {
            // Redirect to a promotion page if no ads are shown
            router.push('/promotion');
        }
    };

    if (showAd) {
        return (
            <div
                className='bg-[#1D1D1D] rounded-[20px] w-full h-full min-h-[220px] my-[3rem] flex flex-col items-center justify-center text-center cursor-pointer'
                onClick={handleAdClick}
                id='ad'
            >
                <h1 className='text-[#D0916D] text-[32px] tracking-widest mb-0'>
                    A.d.v.e.r.t.i.s.m.e.n.t
                </h1>
                <h1 className='text-[#D0916D20] text-[32px] tracking-widest -mt-9 '>
                    A.d.v.e.r.t.i.s.m.e.n.t
                </h1>
            </div>
        );
    } else {
        // If no ads are shown, you can redirect to a promotion page directly
        return (
            <div
                className='bg-[#1D1D1D] rounded-[20px] w-full h-full min-h-[220px] my-[3rem] flex flex-col items-center justify-center text-center cursor-pointer'
                onClick={() => router.push('/promotion')}
                id='ad'
            >
                <h1 className='text-[#D0916D] text-[32px] tracking-widest mb-0'>
                    A.d.v.e.r.t.i.s.m.e.n.t
                </h1>
                <h1 className='text-[#D0916D20] text-[32px] tracking-widest -mt-9 '>
                    A.d.v.e.r.t.i.s.m.e.n.t
                </h1>
            </div>
        );
    }
};

export default Ad;
