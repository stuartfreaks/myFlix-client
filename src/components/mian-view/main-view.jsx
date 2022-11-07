import React from 'react';

import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";

import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "../movie-card/movie-card";

export class MovieView extends React.Component {

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
      </div>
    );
  }
}
