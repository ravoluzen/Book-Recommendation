import React from "react";
import { useState } from "react";
import "./styles.css";

const books = {
  technical: [
    { name: "Cracking the coding interview", rating: "4/5" },
    { name: "Data Structures and Algorithms in Java", rating: "3.5/5" }
  ],

  horror: [
    {
      name: "Goosebumps!",
      rating: "5/5"
    },
    {
      name: "IT",
      rating: "4.5/5"
    }
  ],
  philosophy: [
    {
      name: "Inner Engineering",
      rating: "4.5/5"
    },
    {
      name: "Meditations",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [genreSelect, setGenre] = useState("philosophy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> RecommendBooks </h1>
      <p> My book recommendations from various genres. </p>

      <div>
        {Object.keys(books).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#c4e0f9",
              padding: "0.5rem  1rem",
              margin: "1rem 0.3rem",
              border: "none",
              fontWeight: "bold"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[genreSelect].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "none",
                width: "70%",
                margin: "1rem 0rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
