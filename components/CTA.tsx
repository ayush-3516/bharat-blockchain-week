import React from 'react'
import Image from 'next/image'

const CTA = () => {
    return (
        <section className="text-gray-600 bg-[#020204] body-font" id="cta">
            <div className="container relative mx-auto">
                <div className="absolute bottom-[12%] left-[12%]">
                    <Image src='/cta1.svg' alt='cta1' width={150} height={150} />
                </div>
                <div className="absolute top-[35%] right-[12%]">
                    <Image src='/cta2.svg' alt='cta2' width={150} height={150} />
                </div>
                <div className='mx-auto rounded-3xl px-12'>
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#fff]">Feedback</h1>
                        <p className="mx-auto leading-relaxed text-base font-light text-[#A5A8AB]">
                            Your feedback is important to us, it help us improve !
                            Please feel free to leave feedbacks, suggestions, critisism about any web3 event, this website and Bhart Blockchain Week !!
                        </p>
                    </div>
                    <div className="flex flex-col w-5/6 relative mx-auto px-8 space-y-3">
                        <div className="relative w-full">
                            <textarea id="feedback" name="feedback" placeholder='Your feedback' className="w-full bg-[#151414] bg-opacity-50 rounded-[15px] border-[1px] border-[#41464A] text-base font-light min-h-[100px] outline-none text-[#A5A8AB] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-black w-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 text-lg rounded-[15px]">Submit</button>
                    </div>
                    <p className=' text-center text-sm my-2 text-gray-400'>We don't need your names, it's anonymous!</p>
                </div>
            </div>
        </section>
    )
}

export default CTA