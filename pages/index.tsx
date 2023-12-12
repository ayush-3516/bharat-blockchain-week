import React from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import Hero from 'components/Hero'
import TabsComponent from 'components/TabsComponent'
import Feature from 'components/Feature'

const Home = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>BhartBlockchainWeek.xyz</title>
          <meta name="description" content="bharatblockchainweek.xyz" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero
          title='Bharat Blockchain Week'
          description='NETWORK, OPPORTUNITIES, AND CULTURE !!'
          image=''
          button1=''
          button2='submit your event'
        />
        <Feature />
        <TabsComponent />
      </Layout>
    </div>
  )
}

export default Home