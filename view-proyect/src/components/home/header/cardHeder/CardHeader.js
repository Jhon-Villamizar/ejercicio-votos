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
									<small>This is some text within a card body.</small>
									<h1>Title Lorem?</h1>
									<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione dolorum tempora delectus labore praesentium quibusdam maiores, corporis necessitatibus et! Voluptas dolorem placeat reiciendis natus</p>
									<small><i className="fab fa-wikipedia-w"></i> This is some text within a card body.</small>
									<p><span>This is some text within a card body.</span></p>
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
