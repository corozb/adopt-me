import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SearchParams from './components/SearchParams/SearchParams'
import Details from './components/Details/Details'
import ThemeContext from './components/utils/ThemeContex'
import './App.css'

function App() {
	const themeHook = useState('darkblue')

	return (
		<div>
			<ThemeContext.Provider value={themeHook}>
				<Router>
					<header>
						<Link to='/'>
							<h1>Adopt Me!</h1>
						</Link>
					</header>
					<Route path='/' exact component={SearchParams} />
					<Route path='/details/:id' exact component={Details} />
				</Router>
			</ThemeContext.Provider>
		</div>
	)
}

export default App
