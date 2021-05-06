import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

export default function HomeScreen(props) {
	return (
		<div>
			<div className='row center'>
				{data.products.map((product) => (
					<Product key={product._id} product={product}></Product>
				))}
			</div>
		</div>
	);
}
