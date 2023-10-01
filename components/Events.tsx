import React from 'react'
import TabComponent from './TabComponent'

type Props = {}

const Events = (props: Props) => {
    return (
        <div className='container mx-auto flex px-32 py-20 bg-purple-50 items-center justify-center flex-col'>
            <TabComponent />
        </div>
    )
}

export default Events