import Layout from '../../components/layout'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'

import { getPeople } from '../../lib/api'

export async function getStaticProps() {

    const people = await getPeople()

    return {
        props: { people }
    }
}

export default function People({ people }) {
    return(
        <Layout>
            <h1>People</h1>
            <p>Here you can find our staff, their role at Starbucks, and which locations you can find them.</p>
            {people.edges.map(edge => {
                const { name } = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                        {people.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                                <Card node={node}/>
                            </Col>
                        })}
                    </Row>
                </Section>
            })}

        </Layout>
    )
}
