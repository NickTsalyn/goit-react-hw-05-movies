import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';


const Movies = lazy(() => import('../pages/Movies/Movies'));

const MovieCast = lazy(() => import('./MovieCast/MovieCast'));

const MovieReview = lazy(() => import('./MovieReview/MovieReview'));

const Home = lazy(() => import('../pages/Home/Home'))

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
        </Route>
          <Route path="*" element={<Navigate to={"/"}/>}/>
      </Routes>
    </>

  );
};
