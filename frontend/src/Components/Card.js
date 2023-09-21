import React from "react";

function Card({title,author,rating}){

    return (
        <>
        <div class="card" style={{width: "25rem"}}>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{author}</h6>
              <p class="card-text">{rating}</p>
              <a href="#" class="card-link" className="btn btn-warning">ADD</a>
              <a href="#" class="card-link" className="btn btn-danger">DELETE</a>
            </div>
        </div>
        </>
    )
} 

export default Card;