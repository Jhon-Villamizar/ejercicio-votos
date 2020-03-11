import React from 'react';
import './nav.scss';

export default function Nav() {
	return (
		<div className="content-nav">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav className="navbar">
							<a className="navbar-brand">Rule of Thumb.</a>
							<div className="content-list">
								<ul>
									<a>
										<li>
											Past Trials
										</li>
									</a>
									<a>
										<li>How It Works</li>
									</a>
									<a>
										<li>Log In / Sign Up</li>
									</a>
									<a>
										<li><i className="fas fa-search"></i></li>
									</a>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}