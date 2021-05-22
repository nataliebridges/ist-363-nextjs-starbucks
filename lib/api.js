const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllPosts() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						title
					}
				}
			}
		}
	`)
	return data?.posts
}




export async function getAllMenuItems() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						title
						slug
						featuredImage {
							node {
								altText
								mediaDetails {
									height
									width
								}
								sourceUrl
							}
						}
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getAllMenuItemSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getMenuItemBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
			id
			title
			content
			featuredImage {
				node {
					altText
					mediaDetails {
						height
						width
					}
					sourceUrl
				}
			}
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.item
}

export async function getMenuTypesAndMenuItems() {
	const data = await fetchAPI(`
	query MyQuery {
		menuTypes {
		  edges {
			node {
			  id
			  name
			  items {
				edges {
				  node {
					id
					title
					slug
					featuredImage {
					  node {
						altText
						sourceUrl
						mediaDetails {
						  height
						  width
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }  
	`)
	return data?.menuTypes
}



export async function getAllLocations() {
	const data = await fetchAPI(`
		query MyQuery {
			locations {
				edges {
					node {
						id
						slug
						title
						locationId
					}
				}
			}
		}
	`)
	return data?.locations
}

export async function getAllLocationSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getLocationBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
			id
			title
			content
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.item
}

export async function getLocations() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.items
}



export async function getAllPeople() {
	const data = await fetchAPI(`
		query MyQuery {
			people {
				edges {
					node {
						title
						slug
						personId
						excerpt
						featuredImage {
							node {
							mediaDetails {
								height
								width
							}
							sourceUrl
							slug
							title
							}
						}
					}
				}
			}
		}
	  
	`)
	return data?.people
}

export async function getAllPersonSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			people {
				edges {
					node {
						title
						slug
						personId
						excerpt
						featuredImage {
							node {
							mediaDetails {
								height
								width
							}
							sourceUrl
							slug
							title
							}
						}
					}
				}
			}
		}	  
	`)
	return data?.people
}

export async function getPersonBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
			id
			title
			content
			featuredImage {
				node {
					altText
					mediaDetails {
						height
						width
					}
					sourceUrl
				}
			}
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.item
}

export async function getPeople() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		  edges {
			node {
			  title
			  slug
			  personId
			  excerpt
			  featuredImage {
				node {
				  mediaDetails {
					height
					width
				  }
				  sourceUrl
				  slug
				  title
				}
			  }
			}
		  }
		}
	  }	  
	`)
	return data?.people
}