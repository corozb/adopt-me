import React, { useState, useEffect, useContext } from 'react'

import Carousel from '../Carousel/Carousel'
import ErrorBoundary from '../utils/ErrorBoundary'
import ThemeContext from '../utils/ThemeContex'
import Modal from '../Modal/Modal'
import './Details.css'

const Details = ({ match }) => {
	const [animal, setAnimal] = useState([])
	const [loading, setLoading] = useState(true)
	const [dataError, setDataError] = useState(true)
	const [theme] = useContext(ThemeContext)
	const [showModal, setShowModal] = useState(false)

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

	const toogleModal = () => setShowModal(!showModal)
	const adopt = () => (window.location.href = animal.url)

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
			{!dataError ? (
				<div className='details'>
					<Carousel media={animal.photos} />
					<div onClick={console.log}>
						<h1>{animal.name}</h1>
						<h2>{`${animal.gender} - ${animal.breeds.primary} - ${animal.contact.address.city}, ${animal.contact.address.state} `}</h2>
						<button style={{ backgroundColor: theme }} onClick={toogleModal}>
							Adopt {animal.name}
						</button>
						<p>{animal.description}</p>
						{showModal ? (
							<Modal>
								<h1>Would you like to adopt {animal.name}</h1>
								<div className='buttons'>
									<button onClick={adopt}>Yes</button>
									<button onClick={toogleModal}>No, I'm a monster</button>
								</div>
							</Modal>
						) : null}
					</div>
				</div>
			) : (
				<ErrorBoundary />
			)}
		</>
	)
}

export default Details
