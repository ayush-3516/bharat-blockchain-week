import React from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import Hero from 'components/Hero'
import Events from 'components/Events'
import Tags from 'components/Tags'
import CTA from 'components/CTA'

const Home = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>BhartBlockchainWeek.xyz</title>
          <meta name="description" content="bharatblockchainweek.xyz" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        </Head>
        <Hero
          title='Bharat Blockchain Week'
          description='lorem ipsum dolor sit amet, consectetur adipiscing'
          image=''
          button1='side event sheet'
          button2='submit your event'
        />
        <Events />
      </Layout>
    </div>
  )
}

export default Home