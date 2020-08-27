import React, { useState, useEffect, useContext } from 'react'

import Carousel from '../Carousel/Carousel'
import ErrorBoundary from '../utils/ErrorBoundary'
import ThemeContext from '../utils/ThemeContex'

import './Details.css'

const Details = ({ match }) => {
	const [animal, setAnimal] = useState([])
	const [loading, setLoading] = useState(true)
	const [dataError, setDataError] = useState(true)
	const [theme] = useContext(ThemeContext)

	const animalId = match.params.id
	const API_URL = 'http://pets.dev-apis.com/animals/'

	const fetchData = async () => {
		const response = await fetch(`${API_URL}${animalId}`)
		const data = await response.json()
		setAnimal(data.animal)
		setLoading(false)
		if (!data.error) {
			setDataError(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
			{!dataError ? (
				<div className='details'>
					<Carousel media={animal.photos} />
					<div>
						<h1>{animal.name}</h1>
						<h2>{`${animal.gender} - ${animal.breeds.primary} - ${animal.contact.address.city}, ${animal.contact.address.state} `}</h2>

						<button style={{ backgroundColor: theme }}>
							Adopt {animal.name}
						</button>
						<p>{animal.description}</p>
					</div>
				</div>
			) : (
				<ErrorBoundary />
			)}
		</>
	)
}

export default Details
