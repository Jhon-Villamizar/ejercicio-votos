import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import './nav.scss';

export default function Nav() {
  return (
    <Router>
      <div className="content-nav">
	  	<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar">
					<Link to="/" className="navbar-brand">Rule of Thumb.</Link>
					<a className="movil"><i class="fas fa-bars"></i></a>
					<ul className= 'items-menu' id="menu">
						<li>
							<Link to="/PastTrials">Past Trials</Link>
						</li>
						<li>
							<Link to="/HowItWorks">How It Works</Link>
						</li>
						<li>
							<Link to="/LogIn">Log In / Sign Up</Link>
						</li>
						<li>
							<a><i className="fas fa-search"></i></a>
						</li>
					</ul>
					</nav>
				</div>
			</div>
		</div>

        <Switch>
          <Route path="/PastTrials">
            <PastTrials />
          </Route>
          <Route path="/HowItWorks">
            <HowItWorks />
          </Route>
		  <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function PastTrials() {
  return <h2>Past Trials</h2>;
}

function HowItWorks() {
  return <h2>How It Works</h2>;
}
function LogIn() {
	return <h2>Log In / Sign Up</h2>;
  }