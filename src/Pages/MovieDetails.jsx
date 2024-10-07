import React, { useEffect, useState, } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FaStar, FaRegStar } from "react-icons/fa";
const MovieDetails = ({movies}) => {
  const [movie, setMovie]= useState({})
  const {id}= useParams()
  useEffect (()=>{
let foundMovie = movies.find((movie)=> movie.id === Number(id))
foundMovie? setMovie(foundMovie): console.log("Movie not found")

},[id])
 const renderStars = (rating) => {
   return [...Array(5)].map((index) => {
     return index < rating ? (
       <FaStar key={index} color="gold" />
     ) : (
       <FaRegStar key={index} />
     );
   });
 };
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
        }}
        className="movie-card"
      >
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Card.Body className="text-center">
          {" "}
          <Card.Title
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#333" }}
          >
            {movie.title}
          </Card.Title>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {renderStars(movie.rating)}
          </div>
          <Card.Text
            style={{ fontStyle: "italic", color: "#666", textAlign: "center" }}
          >
            {movie.description.length > 100
              ? movie.description.slice(0, 100) + "..."
              : movie.description}
          </Card.Text>
          <Link to={`/movies`} style={{ textDecoration: "none" }}>
            <div
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                borderRadius: "25px",
                display: "inline-block",
                marginTop: "10px",
              }}
            >
              Back to Movies
            </div>
          </Link>
        </Card.Body>
      </Card>
      <div>
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/hRBKvrsI_IY"
          title="مسلسل شوفلي حل الحلقة الثامنة عشر choufli hal"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails