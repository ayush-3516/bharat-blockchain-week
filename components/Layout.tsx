import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CTA from './CTA'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="min-h-screen mx-auto bg-white text-black">
                {props.children}
            </div>
            <CTA />
            <Footer />
        </div>
    )
}

export default Layout