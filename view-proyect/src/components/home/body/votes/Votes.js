import React, { useState, useEffect } from "react";
import "./votes.scss";
import data from "../../../data";

export default function Votes() {
	const [listPeople, setListPeople] = useState([]);  
  var porclike
  var porcdislike

  useEffect(() => {
    // console.log(typeof(data));
    // console.log(data.data);
	}, []);

  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    element.porclike = Math.floor(element.like *100)/element.totalVotes;
    element.porcdislike = Math.floor(element.dislike *100)/element.totalVotes;
    console.log( element);
  };

  var cards = data.data.map(element => 
    <div className="col-6">
      <div className="card-vote">
        <div className="voteInfo">
          <div className="status">
            <h1 className="like">{element.name}</h1>
            <small>1 month ago <span>in {element.type}</span></small>
          </div>
          <p>
            Vestibulum diam ante, porttitor a odio aget, rhoncus neque. Aenean eu velit libero.
          </p>
          <div className="buttons">
            <div className="buttonLike">
              <i class="fas fa-thumbs-up"></i>
            </div>
            <div className="buttonDislike">
              <i class="fas fa-thumbs-up"></i>
            </div>
            <div className="buttonVote">
              <p>Vote now</p>
            </div>
          </div>
        </div>
        <div className="progressBar">
          <div className="progresLike" style={{width: Math.ceil(element.porclike)+'%'}}>
            <i class="fas fa-thumbs-up"></i>
            <p>{Math.ceil(element.porclike)}%</p>
          </div>
          <div className="progresDislike" style={{width: Math.floor(element.porcdislike)+'%'}}>
            <p>{Math.floor(element.porcdislike)}%</p>
            <i class="fas fa-thumbs-up"></i>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="content-votes">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="principalTitle">Votes</h5>
          </div>
					{cards}
				</div>
      </div>
    </div>
  );
}
