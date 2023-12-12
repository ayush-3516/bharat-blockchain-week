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
            <div className='bg-[#020204]'>
                {props.children}
            </div>
            <CTA feedback='' />
            <Footer />
        </div>
    )
}

export default Layout