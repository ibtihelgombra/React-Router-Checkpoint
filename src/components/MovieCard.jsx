import React from 'react';
import { Link } from 'react-router-dom';

// Ensure your image paths are correct
import titanic from '../images/titanic.jpg';
import game from '../images/game.jpg';

const imageMap = {
  titanic,
  game
  // Add other mappings as needed
};

const MovieCard = ({ movie }) => {
  const imageSrc = imageMap[movie.posterUrl] || ''; // Default to empty string if no match

  return (
    <div className="movie-card">
      <img src={imageSrc} alt={movie.title} />
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
