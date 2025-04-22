import React from 'react';

function Jumbotron() {
  return (
<div className="p-5 mb-4 bg-light rounded-3" 
  style={{
    backgroundImage: 'url(https://dummyimage.com/1920x1080/d6d6d6/ffffff.jpg)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '400px' 
  }}
>
  <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">Jumbotron</h1>
    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button className="btn btn-info text-light btn-lg" type="button">Call To Action!</button>
  </div>
</div>
  );
}

export default Jumbotron;
