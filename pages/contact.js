// next.js components
import Head from 'next/head'

// custom components
import Layout from "../components/layout";

export default function Contact() {
    return(
        <Layout>   
            <Head>
                <title>
                    Contact Info
                </title>
                <meta name="description" content="Contact page"/>
            </Head>
            <h1>contact heading</h1>
            <p>contact information goes here</p>
        </Layout>
    )
}