import React, { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import "./Onefull.css";
import image from "../assets/homeg.jpg";
import validator from "validator";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function Onefull() {
    const normal = "data:image/png;base64,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";
    const params = useParams();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [review, setReview] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [cover, setCover] = useState("");
    const [num, setNum] = useState(0.0);
    const [p, setP] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
        autofill();
        imagechecker();
    })
    const validate = (value) => {

        if (validator.isURL(value)) {
            setP(1);
        } else {
            setP(0);
        }
    }

    const autofill = async () => {
        let index = params.id;
        let result = await fetch(`https://presonal-lib.herokuapp.com/book/${index}`);
        result = await result.json();
        setAuthor(result.author);
        setName(result.name);
        setReview(result.review);
        setGenre(result.genre);
        setRating(result.rating);
        setCover(result.coverimage);
        setNum(parseFloat(rating));
        console.log(cover);
    }
    const imagechecker = () => {
        validate(cover);
    }
    const id = params.id;
    return (
        <div className="Onefull-container">
            <div className="content-container">
                <div className="poster-image"><img src={p === 1 ? cover : normal} className="image-cover"></img></div>
                <div className="content">
                    <div className="name">
                        {name}
                    </div>
                    <div className="author">
                        by {author}
                    </div>
                    <div className="genre">
                        Genre : {genre}
                    </div>
                    <div className="rating">
                        {
                            num - 1 >= 0 ? <BsStarFill className="star" /> : num - 0.5 === 0 ? <BsStarHalf className="star" /> : <BsStar />
                        }
                        {
                            num - 2 >= 0 ? <BsStarFill className="star" /> : num - 1.5 === 0 ? <BsStarHalf className="star" /> : <BsStar />
                        }
                        {
                            num - 3 >= 0 ? <BsStarFill className="star" /> : num - 2.5 === 0 ? <BsStarHalf className="star" /> : <BsStar />
                        }
                        {
                            num - 4 >= 0 ? <BsStarFill className="star" /> : num - 3.5 === 0 ? <BsStarHalf className="star" /> : <BsStar />
                        }
                        {
                            num - 5 >= 0 ? <BsStarFill className="star" /> : <BsStar />
                        }


                    </div>
                    <div className="review">
                        {review}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Onefull;