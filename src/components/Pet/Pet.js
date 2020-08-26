import React from 'react'

import './Pet.css'

const Pet = ({ id, animal, name, breed, media, location }) => {
	console.log('id', id)

	let hero

	!media.length
		? (hero = 'http://placecorgi.com/300/300')
		: (hero = media[0].small)

	return (
		<a href={`/details/${id}`} className='pet'>
			<div className='image-container'>
				<img src={hero} alt={name} />
			</div>
			<div className='info'>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	)
}

export default Pet
