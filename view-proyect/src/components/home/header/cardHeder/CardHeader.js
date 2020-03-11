import React from 'react';
import './cardHeader.scss'

export default function CardHeader() {
	return (
		<div className="content-cardh" >
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="principalcard">
						<div class="card">
							<div class="card-body">
								<small>This is some text within a card body.</small>
								<h1>Title Lorem?</h1>
								<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ratione dolorum tempora delectus labore praesentium quibusdam maiores, corporis necessitatibus et! Voluptas dolorem placeat reiciendis natus</p>
								<small><i class="fab fa-wikipedia-w"></i> This is some text within a card body.</small>
								<p><span>This is some text within a card body.</span></p>
							</div>
						</div>
						<div class="card-votes">
							<div class="card-like">
									<p><i class="fas fa-thumbs-up"></i></p>
							</div>
							<div class="card-dislike">
									<p><i class="fas fa-thumbs-up"></i></p>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
