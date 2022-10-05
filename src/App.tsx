import React from 'react';
import styles from './App.module.css';
import {useEffect, useState} from 'react';
import axios, { AxiosResponse } from 'axios';
import MovieItem from './components/MovieItem';
import { Movie, MovieResponse, MovieState } from './model/interfaces';

function App() {
  const [movies, setMovies] = useState({
    isLoading: true,
    data: []
  } as MovieState);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7c97d086dce04aa54100351aa745c9f9').then((response: AxiosResponse<MovieResponse>) => {
      const data: Movie[] = response?.data?.results;

      setMovies({
        isLoading: false,
        data
      })
    })
  }, []);

  return (
      <div className="App">
        <h1>Movie list</h1>
        {movies?.isLoading && `Loading...`}
        <div className={styles.container}>
          {movies?.data.length > 0 && movies.data.map((movie: Movie) => {
              return <MovieItem key={movie?.id} image={movie.poster_path} title={movie.title}></MovieItem>
          })
          }
        </div>
      </div>
  );
}

export default App;
