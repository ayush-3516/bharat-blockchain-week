import React, { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast';
import axios from 'axios';

interface CTAProps {
    feedback: string;
}

const CTA: React.FC<CTAProps> = () => {
    const [feedback, setFeedback] = useState<string>('');

    const handleSubmit = async () => {
        try {
            // Make sure to send the feedback in the request body
            await axios.post('https://blockchain-bharat-production.up.railway.app/api/feedback/', { feedback });
            console.log('Feedback submitted:', feedback);
            toast.success('Thanks for your feedback!');
            // Optionally, you can clear the feedback input after submission
            setFeedback('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            toast.error('Error submitting feedback. Please try again.');
        }
    };


    return (
        <section className="text-gray-600 bg-[#020204] body-font overflow-hidden" id="cta">
            <div className="container relative mx-auto">
                <div className="absolute bottom-[12%] left-[12%]" id='cta1'>
                    <Image src='/cta1.svg' alt='cta1' width={150} height={150} />
                </div>
                <div className="absolute top-[35%] right-[12%]" id='cta2'>
                    <Image src='/cta2.svg' alt='cta2' width={150} height={150} />
                </div>
                <div className='mx-auto rounded-3xl px-12' id='cta-inputs'>
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#fff]">Feedback</h1>
                        <p className="mx-auto leading-relaxed text-base font-light text-[#A5A8AB]">
                            Your feedback is important to us, it help us improve !
                            Please feel free to leave feedbacks, suggestions, critisism about any web3 event, this website and Bhart Blockchain Week !!
                        </p>
                    </div>
                    <div className="flex flex-col w-5/6 relative mx-auto px-8 space-y-3" id='input-feedback'>
                        <div className="relative w-full">
                            <textarea
                                id="feedback"
                                name="feedback"
                                placeholder='Your feedback'
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full bg-[#151414] bg-opacity-50 rounded-[15px] border-[1px] border-[#41464A] text-base font-light min-h-[100px] outline-none text-[#A5A8AB] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={handleSubmit} className="text-black w-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 hover:text-white text-lg rounded-[15px]">Submit</button>
                    </div>
                    <p className=' text-center text-sm my-2 text-gray-400'>We don't need your names, it's anonymous!</p>
                </div>
            </div>
        </section>
    )
}

export default CTA