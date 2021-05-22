
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllPersonSlugs, getPersonBySlug } from '../../lib/api'

export async function getStaticPaths() {

    const allSlugs = await getAllPersonSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id : slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {

    const personData = await getPersonBySlug(params.id)

    return {
        props : {
            personData
        }
    }
}

export default function Person({ personData }) {

    const { title, featuredImage, content } = personData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node;
    const { width, height } = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/people">
                        <a>Back to people</a>
                    </Link>
                </Col>
            </Row>
            
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
        </Layout>
    )
}