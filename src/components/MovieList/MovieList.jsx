import { useLocation } from 'react-router-dom';

import {
  MovieImg,
  MovieItem,
  MovieLink,
  MovieListStyle,
  MovieName,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();
  return (
    <MovieListStyle>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg src={imgUrl.concat(poster_path)} />
            <MovieName>{title ?? original_name}</MovieName>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieListStyle>
  );
};
