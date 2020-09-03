import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SearchParams from './SearchParams'
import Details from './Details'
import ThemeContext from './ThemeContext'
import './style.css'

function App() {
	const themeHook = useState('darkblue')

	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<Router>
					<header>
						<Link to='/'>
							<h1>Adopt Me!</h1>
						</Link>
					</header>
					<Route path='/' exact component={SearchParams} />
					<Route path='/details/:id' exact component={Details} />
				</Router>
			</div>
		</ThemeContext.Provider>
	)
}

export default App
