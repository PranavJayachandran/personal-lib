import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="Nav-container">
            <div className="size1 home">
                <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>Home</Link >
            </div>
            <div className="size1 add">
                <Link to="/add" style={{ textDecoration: 'none', color: "inherit" }}>Add</Link >
            </div>
            <div className="size2 ">
                <p className="profile"><Link to="/profile" style={{ textDecoration: 'none', color: "inherit" }}>Profile</Link ></p>
            </div>

        </div>
    )
}

export default Nav;