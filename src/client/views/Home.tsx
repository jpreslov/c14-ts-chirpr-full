import React, { useState, useEffect } from "react";
import ChirpCard from "./ChirpCard";
import Compose from "./Compose";
import { Link } from 'react-router-dom'
const Home: React.FC<IHome> = () => {
  const [chirps, setChirps] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/chirps");
      let chirps = await res.json();
      setChirps(chirps);
    })();
  }, []);

  return (
    <>
    <div className="row m-5 justify-content-center">
        <h3 className="mx-2">Chirper</h3>
        <Link to="/compose">
    <button className="btn btn-primary">Write chirp</button>
        </Link>
    </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {chirps.map((chirp) => (
            <ChirpCard key={chirp.id} chirp={chirp} />
          ))}
        </div>
      </div>
    </>
  );
};

interface IHome {}

export default Home;
