import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Compose = () => {
    let history = useHistory();
    const [name, setName] = useState<string>('')
    const [message, setMessage] = useState<string>('')

   const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, message: message })
        };
        fetch('/api/chirps', requestOptions)
            .then(response => response.json())

            goHome()
    }

    function goHome() {
      history.push("/");
    }
    return (
        <div className="col-12 justify-content-center">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={() => handleSubmit()}>Post chirp</button>
    </div>
    )
}

export default Compose
