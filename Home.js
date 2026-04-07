import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {

  // State (React Dataflow concept)
  const [movies] = useState([
    { id: 1, name: "Avengers" },
    { id: 2, name: "Inception" }
  ]);

  return (
    <div className="container">
      <h1>Movies</h1>

      {/* JSX rendering list */}
      {movies.map(movie => (
        <div key={movie.id} className="card">

          <h3>{movie.name}</h3>

          {/* Routing + Props-like dataflow */}
          <Link to={`/book/${movie.id}`}>
            <button>Select Seats</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;