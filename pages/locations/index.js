import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'


import { getAllLocations } from '../../lib/api'

export async function getStaticProps() {

    const locations = await getAllLocations()

    return {
        props: { locations }
    }
}

export default function Location({ locations }) {
    return(
        <Layout>
            <h1>Locations</h1>
            <p>Here you can find all of our starbucks locations.</p>

            {locations.edges.map(edge => {
                const { name, items } = edge.node;
                const { node } = edge;
                return <Section title={name} >
                    <Row justifyContentCenter>
                        <Col>
                            Starbucks Location address info goes here.
                            
                                

                        </Col>


                    </Row>
                </Section>
            })}

        </Layout>
    )
}
