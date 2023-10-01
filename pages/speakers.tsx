import Layout from 'components/Layout'
import React from 'react'
import Hero from 'components/Hero'
import Team from 'components/Speakers'

type Props = {}

const Speakers = (props: Props) => {
    return (
        <Layout>
            <Hero
                title="Our Speakers"
                description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep. Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep."
                image=""
                button1=""
                button2=""
            />
            <Team />
            <section className="text-gray-600 body-font" id="speaker-register">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 px-16 rounded-3xl py-16 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-gradient-to-b from-yellow-400 to-yellow-600 shadow border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 shadow py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Speakers