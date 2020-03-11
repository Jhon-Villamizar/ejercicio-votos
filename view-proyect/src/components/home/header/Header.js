import React from 'react';
import './header.scss';
import Nav from './nav/Nav';
import CardHeader from './cardHeder/CardHeader';
import CountDays from './countDays/CountDays';

export default function Header() {
	return (
		<div className="content-header">
			<Nav />
			<CardHeader />
			<CountDays />
		</div>
	)
}