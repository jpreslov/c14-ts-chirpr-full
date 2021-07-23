import React from "react";
import { Link } from "react-router-dom";

//rafce

//destructuring the props
const ChirpCard = ({ chirp }) => {
  return (
    <div className="card col-lg-10 text-center shadow">
      <div className="card-body">
        <p className="text-muted">{chirp.name}</p>
        <h6 className="card-title mb-2">{chirp.message}</h6>
        <Link to={`/details/${chirp.id}`} className="card-link">
         Details
        </Link>
        <Link to={`/admin/${chirp.id}`} className="card-link">
         Admin
        </Link>
      </div>
    </div>
  );
};

export default ChirpCard;
