import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from 'api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { AddInfo, BackLink, Container } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLink}>← Go back</BackLink>
      <MovieCard movies={movieDetails} />
      <Container>
        <AddInfo to={'cast'} state={{ from: backLink }}>
          Cast
        </AddInfo>
        <AddInfo to={'reviews'} state={{ from: backLink }}>
          Review
        </AddInfo>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
