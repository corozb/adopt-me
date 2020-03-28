import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchParams from '../components/SearchParams';
import Details from '../components/Details';

const App = () => (
	<BrowserRouter>
		<div className='search-params'>
			<header>
				<Link to='/'>Adopt Me!</Link>
			</header>
		</div>
		<Route exact path='/' component={SearchParams} />
		<Route exact path='/details/:id' component={Details} />
	</BrowserRouter>
);

export default App;
