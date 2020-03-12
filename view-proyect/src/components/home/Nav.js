import React from 'react';
import './nav.scss';
import Home from './Home';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

export default function Nav() {
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
		  	<Home/>
          </Route>
		<Route path="/Home">
		  	<Home/>
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