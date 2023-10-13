import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Home from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReview } from './MovieReview/MovieReview';
import { NavBar } from './NavBar/NavBar';
import { PageNotFound } from 'Error/PageNotFound';

// const Movies = lazy(() =>
//   import('../pages/Movies/Movies')
// );

// const MovieCast = lazy(() =>
//   import('./MovieCast/MovieCast')
// );

// const MovieReview = lazy(() =>
//   import('./MovieReview/MovieReview')
// );

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="*" element={<PageNotFound />}></Route>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/reviews" element={<MovieReview />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
