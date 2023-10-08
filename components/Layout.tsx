import React from 'react'
import Footer from './Footer'
import CTA from './CTA'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <CTA />
            <Footer />
        </div>
    )
}

export default Layout