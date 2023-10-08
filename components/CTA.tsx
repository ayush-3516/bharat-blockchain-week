import React from 'react'

const CTA = () => {
    return (
        <section className="text-gray-600 bg-orange-500 relative body-font" id="cta">
            <div className="container mx-auto">
                <div className='w-[85%] mx-auto border-[4px] border-black rounded-3xl px-12 py-20 bg-white'>
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Feedback</h1>
                        <p className="mx-auto leading-relaxed text-base">
                            Your feedback is important to us, it help us improve !
                            Please feel free to leave feedbacks, suggestions, critisism about any web3 event, this website and Bhart Blockchain Week !!
                        </p>
                    </div>
                    <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div className="relative flex-grow w-full">
                            <input type="text" id="feedback" name="feedback" className="w-full bg-white bg-opacity-50 rounded-lg border-[3px] border-black focus:bg-transparent focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 text-lg rounded-lg">Submit</button>
                    </div>
                    <p className=' text-center text-sm my-2 text-gray-400'>We don't need your names, it's anonymous!</p>
                </div>
            </div>
        </section>
    )
}

export default CTA