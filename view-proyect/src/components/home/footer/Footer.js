import React from 'react';
import './footer.scss';

export default function Footer() {
	return (
		<div className="content-footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
						<div className="footerMenu">
							<ul>
								<a><li>Terms and Conditions</li></a>
								<a><li>Privaci Policy</li></a>
								<a><li>Contact Us</li></a>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<div className="footerSocial">
							<ul>
								<li>Follow Us</li>
								<a><li><i className="fab fa-facebook-square"></i></li></a>
								<a><li><i className="fab fa-twitter"></i></li></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}