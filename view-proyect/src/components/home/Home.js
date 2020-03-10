import React from 'react';
import './home.scss';
import Nav from '../nav/Nav';
import {data} from '../data.js';
import CardHeader from '../cardHeder/CardHeader';

export default function Home() {
    console.log(data);
    
    return(
        <div className="content-header">
            <Nav />
            <CardHeader />
        </div>
    )
}