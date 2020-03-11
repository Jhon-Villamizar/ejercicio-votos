import React from 'react';
import './home.scss';
import {data} from '../data.js';
import Header from './header/Header';

export default function Home() {
    console.log(data);
    
    return(
        <Header />
    )
}