import React from 'react';
import './home.scss';
import { data } from '../data.js';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

export default function Home() {

	return (
		<div>
			<Header />
			<Body />
			<Footer />
		</div>
	)
}

