import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
	const [location, setLocation] = useState('Seatle, WA');
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
	const [pets, setPets] = useState([]);

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal
		});

		console.log('animals', animals);
		setPets(animals || []);
	}

	useEffect(() => {
		// pet.breeds('dog').then(console.log, console.error);

		setBreeds([]);
		setBreed('');

		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name);
			setBreeds(breedStrings);
		}, console.error);
	}, [animal, setBreed, setBreeds]);

	const handleSubmit = (e) => {
		e.preventDefault();
		requestPets();
	};

	return (
		<div className='search-params'>
			<h1>{location}</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='location'>
					Location
					<input
						type='text'
						id='location'
						value={location}
						placeholder='location'
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
