import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign.css";

function Sign() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");
    let navigate = useNavigate();
    function handle() {
        localStorage.setItem("user", JSON.stringify({ name, password, genre, image }));

        navigate("/");
    }

    return (
        <div className="sign-container">
            <div className="input-data">
                <div className="signup">SIGN UP</div>
                <input className="user-name field" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className="user-password field" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input className="user-genre field" placeholder="Enter your genre preference" value={genre} onChange={(e) => setGenre(e.target.value)}></input>
                <input className="user-image field" placeholder="Enter your profile image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <div className="button-container"><button className="submit" onClick={handle}>Submit</button></div>
            </div>
        </div>
    )
}
export default Sign;