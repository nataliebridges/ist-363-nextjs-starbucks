
import Link from 'next/link'

import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllLocationSlugs, getLocationBySlug } from '../../lib/api'

export async function getStaticPaths() {

    const allSlugs = await getAllLocationSlugs()

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

    const locationData = await getLocationBySlug(params.id)
    return {
        props : {
            locationData
        }
    }
}

export default function Location({ locationData }) {

    const { title, content } = locationData;
    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>Locations</a>
                    </Link>
                </Col>
            </Row>
            
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
        </Layout>
    )
}