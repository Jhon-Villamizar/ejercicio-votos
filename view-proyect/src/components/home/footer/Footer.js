import React from 'react';
import './footer.scss';

export default function Footer() {
	return (
		<div className="content-footer">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="footerMenu text-left">
							<ul>
								<a><li>Terms and Conditions</li></a>
								<a><li>Privaci Policy</li></a>
								<a><li>Contact Us</li></a>
							</ul>
						</div>
					</div>
					<div className="col-4">
					<div className="footerSocial text-right">
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