import React from 'react';
import './votes.scss';

export default function Votes() {
	return (
		<div className="content-votes">
			<div className="container">
				<div className="row">
				<div className="col-12">
					<h5 className="principalTitle">Votes</h5>
				</div>
					<div className="col-6">
						<div className="card-vote">
							<div className="voteInfo">
								<div className="status">
									<h1 className="like">amet consectetur</h1>
									<small>dolor sit amet consectetur adipisicing elit</small>
								</div>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione dolorum tempora delectus labore praesentium quibusdam maiores, corporis necessitatibus et!</p>
								<div className="buttons">
									<div className="buttonLike"><i class="fas fa-thumbs-up"></i></div>
									<div className="buttonDislike"><i class="fas fa-thumbs-up"></i></div>
									<div className="buttonVote"><p>Vote now</p></div>
								</div>
							</div>
							<div className="progressBar">
								<div className="progresLike"><i class="fas fa-thumbs-up"></i><p>50%</p></div>
								<div className="progresDislike"><p>50%</p><i class="fas fa-thumbs-up"></i></div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="card-vote">
							<div className="voteInfo">
								<div className="status">
									<div className="statusLogo"></div>
									<h1 className="dislike">amet consectetur</h1>
									<small>dolor sit amet consectetur adipisicing elit</small>
								</div>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione dolorum tempora delectus labore praesentium quibusdam maiores, corporis necessitatibus et!</p>
								<div className="buttons">
									<div className="buttonLike"><i class="fas fa-thumbs-up"></i></div>
									<div className="buttonDislike"><i class="fas fa-thumbs-up"></i></div>
									<div className="buttonVote"><p>Vote now</p></div>
								</div>
							</div>
							<div className="progressBar">
								<div className="progresLike"><i class="fas fa-thumbs-up"></i><p>50%</p></div>
								<div className="progresDislike"><p>50%</p><i class="fas fa-thumbs-up"></i></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}