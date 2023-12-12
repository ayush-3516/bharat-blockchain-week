import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface AdProps {
    showAd: boolean;
    image: string;
    link: string;
}

const Ad: React.FC<AdProps> = ({ showAd, image, link }) => {
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

        // Redirect to the provided link on ad click
        router.push(link);
    };

    if (showAd) {
        return (
            <div
                className='bg-[#1D1D1D] rounded-[20px] overflow-hidden w-full h-full min-h-[220px] max-h-[220px] my-[1rem] flex flex-col items-center justify-center text-center cursor-pointer'
                onClick={handleAdClick}
                id='ad'
            >
                <Image src={image} width={1220} height={220} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt='Ad Image' className='mb-2' />
            </div>
        );
    } else {
        // If no ads are shown, you can redirect to a promotion page directly
        return (
            <div
                className='bg-[#1D1D1D] rounded-[20px] w-full h-full min-h-[220px] my-[1rem] flex flex-col items-center justify-center text-center cursor-pointer'
                onClick={() => router.push('/promotion')}
                id='ad'
            >
                {/* <img src={image} alt='Ad Image' className='mb-2' /> */}
                <h1 className='text-[#D0916D] text-[32px] tracking-widest mb-0'>
                    Your Ad Here                </h1>
                <h1 className='text-[#D0916D20] text-[32px] tracking-widest -mt-9 '>
                    Your Ad Here
                </h1>
            </div>
        );
    }
};

export default Ad;
