import React from "react";
import { useEffect } from "react";
import bg from "../assets/homeg.jpg";
import "./Home.css";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="home-container">
            <div className="bg-container">
                <img src={bg} className="home-bg"></img>
                <div className="line1">
                    Create, Update and Manipulate your own Personal Online Library
                </div>
            </div>
        </div>
    )
}
export default Home;