import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Add() {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState();
    const [coverimage, setCover] = useState("");
    const [review, setReview] = useState("");
    async function handle() {
        if (!name || !author || !genre || !rating || !coverimage || !review)
            return false;
        let result = await fetch("https://presonal-lib.herokuapp.com/add", {
            method: "post",
            body: JSON.stringify({ name, author, genre, rating, review, coverimage }),
            headers: {
                "Content-type": "application/json",
            },
        })
        result = await result.json();
        setName("");
        setAuthor("");
        setGenre("");
        setRating("");
        setCover("");
        setReview("");
        navigate("/");
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="add-container">
            <div className="container">
                <h1 className="heading">ADD NEW BOOK</h1>
                <input className="input" placeholder="Enter the book-name" value={name} onChange={(e) => (
                    setName(e.target.value)
                )}></input>
                <input className="input" placeholder="Enter the author-name" value={author} onChange={(e) => (
                    setAuthor(e.target.value)
                )}></input>
                <input className="input" placeholder="Enter the genre" value={genre} onChange={(e) => (
                    setGenre(e.target.value)
                )}></input>
                <input className="input" placeholder="Enter the rating" value={rating} onChange={(e) => (
                    setRating(e.target.value)
                )}></input>
                <input className="input" placeholder="Enter the note" value={review} onChange={(e) => (
                    setReview(e.target.value)
                )}></input>
                <input className="input" placeholder="Link to the cover image" value={coverimage} onChange={(e) => (
                    setCover(e.target.value)
                )}></input>
                <div className="button" onClick={handle}>Submit</div>
            </div>
        </div >
    )
}
export default Add;