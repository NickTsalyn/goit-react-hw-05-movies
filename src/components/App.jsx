import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Home from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReview } from './MovieReview/MovieReview';

// const Movies = lazy(() => import('../pages/Movies/Movies'));

// const MovieCast = lazy(() => import('./MovieCast/MovieCast'));

// const MovieReview = lazy(() => import('./MovieReview/MovieReview'));

export const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReview />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
};
