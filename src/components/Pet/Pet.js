import React from 'react'
import { Link } from 'react-router-dom'

import './Pet.css'

const Pet = ({ id, animal, name, breed, media, location }) => {
	let hero

	!media.length
		? (hero = 'http://placecorgi.com/300/300')
		: (hero = media[0].small)

	return (
		<Link to={`/details/${id}`} className='pet'>
			<div className='image-container'>
				<img src={hero} alt={name} />
			</div>
			<div className='info'>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</Link>
	)
}

export default Pet
