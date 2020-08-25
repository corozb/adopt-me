import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import SearchParams from './components/SearchParams/SearchParams'
import Details from './components/Details/Details'
import './App.css'

function App() {
	return (
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
	)
}

export default App
