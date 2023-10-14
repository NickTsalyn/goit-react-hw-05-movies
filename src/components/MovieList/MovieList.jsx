import { useLocation } from 'react-router-dom';

import {
  ImageTemplate,
  MovieImg,
  MovieItem,
  MovieLink,
  MovieListStyle,
  MovieName,
  Wrapper,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();
  return (
    <Wrapper>
    <MovieListStyle>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {poster_path ?  <MovieImg src={imgUrl.concat(poster_path)}/> : <ImageTemplate/>}
           
            <MovieName>{title ?? original_name}</MovieName>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieListStyle>
    </Wrapper>
  );
};
