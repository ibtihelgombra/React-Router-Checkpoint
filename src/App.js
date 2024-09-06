import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { movies } from './data/movies';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="movie-list">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
