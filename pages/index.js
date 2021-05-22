// next.js components
import Head from 'next/head'

// custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

export default function Home() {
	return(
		<Layout>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<section>
			<h1>Starbucks</h1>
			<Button 
				label="Menu"
				path="/menu"
				type="primary"
			/>
			<Button 
				label="Portfolio"
				path="/portfolio"
				type="primary"
			/>
			<Button 
				label="About"
				path="/about"
				type="primary"
			/>
			<Button 
				label="Locations"
				path="/locations"
				type="primary"
			/>
			<Button 
				label="Contact"
				path="/contact"
				type="primary"
			/>
			<Button 
				label="People"
				path="/people"
				type="primary"
			/>
		</section>
		</Layout>
	)
}