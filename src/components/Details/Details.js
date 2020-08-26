import React, { useState, useEffect } from 'react'

import './Details.css'

const Details = ({ match }) => {
	const [animal, setAanimal] = useState([])
	const [loading, setLoading] = useState(true)

	const animalId = match.params.id
	const API_URL = 'http://pets.dev-apis.com/animals/'

	const fetchData = async () => {
		const response = await fetch(`${API_URL}${animalId}`)
		const data = await response.json()
		setAanimal(data.animal)
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<div className='details'>
					<div>
						<h1>{animal.name}</h1>
						<h2>{`${animal.gender} - ${animal.breeds.primary} - ${animal.contact.address.city}, ${animal.contact.address.state} `}</h2>
						<button>Adopt {animal.name}</button>
						<p>{animal.description}</p>
					</div>
				</div>
			)}
		</>
	)
}

export default Details
