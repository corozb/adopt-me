import React, { useState, useEffect } from 'react'

const Carousel = ({ media }) => {
	const [photos, setPhotos] = useState([])
	const [active, setActive] = useState(0)
	/* eslint-disable-next-line */
	let photo

	useEffect(() => {
		media.length
			? setPhotos(media.map(({ large }) => large))
			: (photo = 'http://placecorgi.com/600/600')
	}, [])

	const handleIndexClick = (e) => {
		setActive(+e.target.dataset.index)
	}

	return (
		<div className='carousel'>
			<img src={photos[active]} alt='animal' />
			<div className='carousel-smaller'>
				{photos.map((photo, index) => (
					<img
						key={photo}
						onClick={handleIndexClick}
						data-index={index}
						src={photo}
						className={index === active ? 'active' : ''}
						alt='animal thumbnail'
					/>
				))}
			</div>
		</div>
	)
}

export default Carousel
