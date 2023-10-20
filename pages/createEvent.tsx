import Layout from 'components/Layout'
import React from 'react'

type Props = {}

const CreateEvent = (props: Props) => {
    return (
        <Layout>
            <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/apphBFYesxq4qk0Cc/shrO63MKlzdU1hOfX?backgroundColor=gray" width="100%" height="2271" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
        </Layout>
    )
}

export default CreateEvent