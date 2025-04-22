import React from 'react';

function Card({ title, text, image }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-info text-light">Find out more</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
