import React from 'react';
import './home.scss';
import { data } from '../data.js';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

export default function Home() {

	return (
		<Router>
		<div className="content-nav">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav className="navbar">
							<Link to="/" className="navbar-brand">Rule of Thumb.</Link>
							<div className="content-list">
								<ul>
									<Link to="/PastTrials">
										<li>
											Past Trials
										</li>
									</Link>
									<Link to="/HowItWorks">
										<li>How It Works</li>
									</Link>
									<Link to="/LogIn">
										<li>Log In / Sign Up</li>
									</Link>
									<Link to="/serach">
										<li><i className="fas fa-search"></i></li>
									</Link>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<Switch>
		<Route path="/">
		  	<Base/>
          </Route>
          <Route path="/PastTrials">
		  	<PastTrials/>
          </Route>
          <Route path="/HowItWorks">
			<HowItWorks/>
          </Route>
          <Route path="/LogIn">
		  	<LogIn/>
          </Route>
          <Route path="/Serach">
		  <Serach/>
          </Route>
        </Switch>
		</Router>

	)
}

function Base() {
	return <div><Header />
	<Body />
	<Footer /></div>;
  }

function PastTrials() {
	return <h2>PastTrials</h2>;
  }
  
  function HowItWorks() {
	return <h2>HowItWorks</h2>;
  }
  
  function LogIn() {
	return <h2>LogIn</h2>;
  }
  function Serach() {
	return <h2>Serach</h2>;
  }