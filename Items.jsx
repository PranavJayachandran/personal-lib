import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Items.css";

function Items() {
    const [book, setBooks] = useState([]);
    useEffect(() => {
        getbooks();
    }, [])
    async function getbooks() {
        let result = await fetch("https://presonal-lib.herokuapp.com/books");
        result = await result.json();
        setBooks(result);
    }
    return (
        <div className="items-container">
            <div className="all-items">
                <h2 className="items-header">
                    All the Books
                </h2>
                {book.map((item, index) => (
                    <Link to={`/book/${item._id}`} style={{ textDecoration: "none", color: "inherit" }}>                    <Item notes={item.review}
                        name={item.name}
                        author={item.author}
                        genre={item.genre}
                        rating={item.rating}
                        cover={item.coverimage} />
                    </Link>
                ))}

            </div>

        </div >
    )
}
export default Items;