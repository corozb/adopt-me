import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchParams from '../components/SearchParams';
import Details from '../components/Details';
import ThemeContext from '../context/ThemeContext';

const App = () => {
	const themeHook = useState('darkblue');

	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<BrowserRouter>
					<div className='search-params'>
						<header>
							<Link to='/'>Adopt Me!</Link>
						</header>
					</div>
					<Route exact path='/' component={SearchParams} />
					<Route exact path='/details/:id' component={Details} />
				</BrowserRouter>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};
export default App;
