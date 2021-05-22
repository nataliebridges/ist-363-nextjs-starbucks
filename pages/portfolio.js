// next.js components
import Head from 'next/head'

// custom components
import Layout from '../components/layout';

export default function Portfolio() {
    return(
        <Layout>   
            <Head>
                <title>
                    Portfolio | Natalie Bridges
                </title>
                <meta name="description" content="A robust portfolio of web design projects"/>
            </Head>
            <h1>Portfolio</h1>
            <p>Portfolio content goes here</p>
        </Layout>
    )
}