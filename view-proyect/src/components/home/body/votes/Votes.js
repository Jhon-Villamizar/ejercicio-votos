import React, { useState, useEffect } from "react";
import "./votes.scss";
import data from "../../../data";

export default function Votes() {
	const [like, setLike] = useState([]);  
	const [dislike, setDislike] = useState([]);  
  const likes = document.getElementsByClassName('buttonLike');
  const dislikes = document.getElementsByClassName('buttonDislike');
  var arraylikes =[];
  var arraydislikes=[];
  useEffect(() => {
  }, []);
  
  const eraserDislike = () => {
    for (let i = 0; i < dislikes.length; i++) {
      const element = dislikes[i];
      element.className ='buttonDislike'
    }
  }
  const eraserLike = () => {
    for (let i = 0; i < likes.length; i++) {
      const element = likes[i];
      element.className ='buttonLike'
    }
  }
  

  const handlerSend = () => {

  }

  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    console.log(element);
    arraylikes.push(element.like);
    arraydislikes.push(element.dislike);
    element.porclike = Math.floor(element.like *100)/element.totalVotes;
    element.porcdislike = Math.floor(element.dislike *100)/element.totalVotes;
  };

  
  
  const handlerActive = (e) => {
    eraserDislike();
    eraserLike();
    e.preventDefault();
    if (e.target.className == 'fas fa-thumbs-up') {
      if (e.target.parentNode.className == 'buttonLike') {
        e.target.parentNode.className = 'buttonLike buttonLike-active';
        console.log(like);
        eraserDislike();
      } else if (e.target.parentNode.className == 'buttonDislike') {
        e.target.parentNode.className = 'buttonDislike buttonDislike-active';
        console.log(dislike);
        eraserLike();
      }
    } else if (e.target.className == 'buttonLike') {
      e.target.className = 'buttonLike buttonLike-active';
      console.log(like);
      eraserDislike();
    } else if (e.target.className == 'buttonDislike'){
      e.target.className = 'buttonDislike buttonDislike-active';
      console.log(dislike);
      eraserLike();
    }    
  }

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
            <div className="buttonLike" onClick={handlerActive}>
              <i class="fas fa-thumbs-up"></i>
            </div>
            <div className="buttonDislike" onClick={handlerActive}>
              <i class="fas fa-thumbs-up"></i>
            </div>
            <div className="buttonVote" onClick={handlerSend}>
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
