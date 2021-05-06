import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import data from './data';
import Product from './components/Product';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
	return (
		<div className='grid-container'>
			<header className='row'>
				<div>
					<a className='brand' href='/'>
						Dolphin Flamingo
					</a>
				</div>
				<div>
					<a href='/cart'>Cart</a>
					<a href='/signin'>Sign In</a>
				</div>
			</header>
			<main>
				<div>
					<div className='row center'>
						{data.products.map((product) => (
							<Product key={product._id} product={product}></Product>
						))}
					</div>
				</div>
			</main>
			<footer className='row center'>All right reserved</footer>
		</div>
	);
}

export default App;
