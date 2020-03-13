import React from 'react';
import './cardHeader.scss'

export default function CardHeader() {
	return (
		<div className="content-cardh" >
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="principalcard">
							<div className="card">
								<div className="card-body">
									<small>What's your opinion on</small>
									<h1>Pope Francis?</h1>
									<p>He's talking  tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff (thumbs up)</p>
									<small><i className="fab fa-wikipedia-w"></i> More information</small>
									<p><span>What's Your Verdict?</span></p>
								</div>
							</div>
							<div className="card-votes">
								<div className="card-like">
									<p><i className="fas fa-thumbs-up"></i></p>
								</div>
								<div className="card-dislike">
									<p><i className="fas fa-thumbs-up"></i></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
