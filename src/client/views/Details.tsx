import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IChirp } from "../utils/types";
const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [chirp, setChirp] = useState<IChirp>({ id: id, name: "", message: "" });
const history = useHistory()
  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${id}`);
      let chirp = await res.json();
      setChirp(chirp);
    })();
  }, []);

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card col-lg-10 text-center">
        <div className="card-body">
          <p className="text-muted">{chirp.name}</p>
          <h6 className="card-title mb-2">{chirp.message}</h6>
        </div>
        <button className="btn btn-primary" onClick={() => handleClick()}>Home</button>

      </div>
    </div>
  );
};

export default Details;
