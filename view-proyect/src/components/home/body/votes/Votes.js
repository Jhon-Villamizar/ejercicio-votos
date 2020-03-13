import React, { useState, useEffect } from "react";
import "./votes.scss";
import data from "../../../data";

export default function Votes() {
  const [bandera, setBandera] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    for (let i = 0; i < data.data.length; i++) {
      const element = data.data[i];
      localStorage.setItem('like'+i, element.like);
      localStorage.setItem('dislike'+i, element.dislike);
      var total= parseInt(localStorage.getItem('like'+i))+parseInt(localStorage.getItem('dislike'+i));
      localStorage.setItem('totalvotes'+i, total);    

      element.totalVotes = localStorage.getItem('totalvotes'+i) 
      element.porclike = Math.floor(localStorage.getItem('like'+i)*100)/(localStorage.getItem('totalvotes'+i));
      element.porcdislike = Math.floor(localStorage.getItem('dislike'+i) *100)/(localStorage.getItem('totalvotes'+i));
    };
    setError(false);
  },[]);
  
  const eraserDislike = element => {
    element.className ='buttonDislike';
  }
  const eraserLike = element => {
    element.className ='buttonLike'
  }

  for (let i = 0; i < data.data.length; i++) {
    const element = data.data[i];
    element.totalVotes = localStorage.getItem('totalvotes'+i) 
    element.porclike = Math.floor(localStorage.getItem('like'+i)*100)/(localStorage.getItem('totalvotes'+i));
    element.porcdislike = Math.floor(localStorage.getItem('dislike'+i) *100)/(localStorage.getItem('totalvotes'+i));
  };
  
  const handlerActive = (e,i,element) => {
    e.preventDefault();
    if (e.target.className == 'fas fa-thumbs-up') {
      if (e.target.parentNode.className == 'buttonLike') {
        e.target.parentNode.className = 'buttonLike buttonLike-active';
        var select = 'buttonLike'
        newValues(e,select, i, element)
        eraserDislike(e.target.parentNode.parentNode.children[1]);
      } else if (e.target.parentNode.className == 'buttonDislike') {
        e.target.parentNode.className = 'buttonDislike buttonDislike-active';
        var select = 'buttonDislike'
        newValues(e,select, i, element)
        eraserLike(e.target.parentNode.parentNode.children[0]);
      }
    } else if (e.target.className == 'buttonLike') {
      e.target.className = 'buttonLike buttonLike-active';
      var select = 'buttonLike'
      newValues(e,select, i, element)
      eraserDislike(e.target.parentNode.children[1]);
    } else if (e.target.className == 'buttonDislike'){
      e.target.className = 'buttonDislike buttonDislike-active';
      var select = 'buttonDislike'
      newValues(e,select, i, element)
      eraserLike(e.target.parentNode.children[0]);
    }    
  }

  const newValues = (e,select, i, element) => {
    e.preventDefault();
    if (select == 'buttonLike') {
      var suma = parseInt(localStorage.getItem(`like${i}`))+1;
      localStorage.setItem(`like${i}`, suma);
      var total= parseInt(localStorage.getItem('like'+i))+parseInt(localStorage.getItem('dislike'+i));
      localStorage.setItem('totalvotes'+i, total);

      element.totalVotes = localStorage.getItem('totalvotes'+i) 
      element.porclike = Math.floor(localStorage.getItem('like'+i)*100)/(localStorage.getItem('totalvotes'+i));
      element.porcdislike = Math.floor(localStorage.getItem('dislike'+i) *100)/(localStorage.getItem('totalvotes'+i));
      setBandera(!bandera);

    } else {
      var suma = parseInt(localStorage.getItem(`dislike${i}`))+1;
      localStorage.setItem(`dislike${i}`, suma);
      var total= parseInt(localStorage.getItem('like'+i))+parseInt(localStorage.getItem('dislike'+i));
      localStorage.setItem('totalvotes'+i, total);

      element.totalVotes = localStorage.getItem('totalvotes'+i) 
      element.porclike = Math.floor(localStorage.getItem('like'+i)*100)/(localStorage.getItem('totalvotes'+i));
      element.porcdislike = Math.floor(localStorage.getItem('dislike'+i) *100)/(localStorage.getItem('totalvotes'+i));
      setBandera(!bandera);

    }
  }

  const showVoteAgainButton = element => {
    const parent = element.parentElement;

    parent.children[0].className = 'show';
    element.className = 'hide';  
  };

  const voteAgain = event => {
    const parent = event.target.parentElement.parentElement.parentElement;

    parent.children[1].className = 'show';
    parent.children[0].className = 'hide'; 
  }

  const handlerSend = event => {
    const buttonsParent = event.target.parentElement.parentElement;
    const likeButton = buttonsParent.children[0];
    const dislikeButton = buttonsParent.children[1];

    eraserLike(likeButton);
    eraserDislike(dislikeButton);
    alert('Thanks for your vote!')
    showVoteAgainButton(buttonsParent);
  }

  var cards = data.data.map((element,i) => 
    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" key={i+1}>
      <div className="card-vote" style={{
          backgroundImage: "url("+element.img+")",
          }}>
        <div className="voteInfo" >
          <div className="status">
            <h1 className="like">{element.name}</h1>
            <small>1 month ago <span>in {element.type}</span></small>
          </div>
            <p>
              Vestibulum diam ante, porttitor a odio aget, rhoncus neque. Aenean eu velit libero.
            </p>
          <div className="buttons">
            <div className="hide">
              <div className="buttonVote"  onClick={e => voteAgain(e)}>
                <p>Vote again</p>
              </div>
            </div>
            <div className="show">
              <div className="buttonLike" onClick={e=>handlerActive(e,i,element)}>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="buttonDislike" onClick={e=>handlerActive(e,i,element)}>
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="buttonVote" onClick={e=>handlerSend(e)}>
                <p>Vote now</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="progressBar">
          <div className="progresLike" style={{width: Math.ceil(element.porclike)+'%'}}>
            <i className="fas fa-thumbs-up"></i>
            <p>{Math.ceil(element.porclike)}%</p>
          </div>
          <div className="progresDislike" style={{width: Math.floor(element.porcdislike)+'%'}}>
            <p>{Math.floor(element.porcdislike)}%</p>
            <i className="fas fa-thumbs-up"></i>
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
