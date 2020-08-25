import React from 'react'

import Pet from '../Pet/Pet'

const Results = ({ pets }) => {
	console.log('pet', pets)

	return (
		<div className='search'>
			{!pets.length ? (
				<h1>No Pets Found</h1>
			) : (
				pets.map((pet) => (
					<Pet
						animal={pet.type}
						key={pet.id}
						name={pet.name}
						breed={pet.breeds.primary}
						location={`${pet.contact.address.city} - ${pet.contact.address.state}`}
					/>
				))
			)}
		</div>
	)
}

export default Results
