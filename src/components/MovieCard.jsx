import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map(( index) => {
      return index < rating ? (
        <FaStar key={index} color="gold" />
      ) : (
        <FaRegStar key={index} />
      );
    });
  };

  return (
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
        {/* Centering the content */}
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
        <Link
          to={`/movie-details/${movie.id}`} 
          style={{ textDecoration: "none" }} 
        >
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
            View Details
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
