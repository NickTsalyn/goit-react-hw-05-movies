import { useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieName } from 'api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/MovieList/MovieList';

export const  Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchBox onChange={handleChange} onSubmit={handleSubmit}/>
      <MovieList movies={movies}/>
    </>
  );
};
