import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { IChirp } from "../utils/types";
const Admin = () => {
    let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [chirp, setChirp] = useState<IChirp>({ id: id, name: "", message: "" });
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${id}`);
      let chirp = await res.json();
      setChirp(chirp);
    })();
  }, []);

  const handlePut = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, message: message }),
    };
    fetch(`/api/chirps/${id}`, requestOptions).then((response) => response.json());
    goHome()
  };

  const handleDelete = () => {
    const requestOptions = {
      method: "DELETE"
    };
    fetch(`/api/chirps/${id}`, requestOptions).then((response) => response.json());
    goHome()
  };
  
  function goHome() {
    history.push("/");
  }

  return (
    <>
      <div className="col-12 d-flex text-center justify-content-center">
        <div className="row-12">
          <input type="text" placeholder={chirp.name} value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder={chirp.message} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="row-12">
          <button onClick={() => handlePut()}>Update chirp</button>
          <button onClick={() => handleDelete()}>Delete chirp</button>
        </div>
      </div>
    </>
  );
};

export default Admin;
