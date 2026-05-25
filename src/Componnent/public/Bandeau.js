import React from "react";


function Bandeau(){
  return(
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100" alt="photo"/>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1677691820099-a6e8040aa077?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxjciVDMyVBOWF0aW9uJTIwZGUlMjBzaXRlcyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D" className="img-fluid" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2l0ZSUyMGludGVybmV0fGVufDB8fDB8fHww" className="d-block w-100" alt="..."/>
        </div>
      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
  );
}
export default Bandeau;