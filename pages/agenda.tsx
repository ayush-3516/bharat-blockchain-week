import Hero from 'components/Hero'
import Layout from 'components/Layout'
import Timeline from 'components/Timeline'
import React from 'react'

const Agenda = () => {
    return (
        <Layout>
            <Hero
                title='Mainstage Agenda'
                description='TOKEN2049 is the premier event for decision-makers in the global Web3 ecosystem.
                Be the first to know about market-moving news, company partnerships and product launches from the industry’s most influential players. '
                image=''
                button1=''
                button2=''
            />
            <Timeline />
        </Layout>
    )
}

export default Agenda