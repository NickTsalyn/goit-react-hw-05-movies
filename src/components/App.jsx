import { Link, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Home from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Layout } from './Layout/Layout';

// const Movies = lazy(() =>
//   import('../pages/Movies/Movies').then(module => ({
//     ...module,
//     default: module.Movies,
//   }))
// );

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/movies">MOVIES</Link>
          </li>
        </ul>
      </header>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" />
          <Route path="/movies/:movieId/reviews" />
        </Route>
        </Routes>
    </div>
  );
};
