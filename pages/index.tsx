import React from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'

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
      </Layout>
    </div>
  )
}

export default Home