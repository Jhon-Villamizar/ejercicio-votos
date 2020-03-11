import React from 'react';
import './body.scss';
import Info from './info/Info';
import Votes from './votes/Votes';
import Postulate from './postulate/Postulate';

export default function Body() {
	return (
		<div className="content-body">
			<Info />
			<Votes />
			<Postulate />
		</div>
	)
}