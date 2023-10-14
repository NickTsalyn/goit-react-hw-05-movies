import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api';
import { Character, ImageTemplate, Img, Item, List, Name } from './MovieCast.styled';
import { NoCast } from 'components/Error/NoCast';


export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <List>
      {movieCast.length === 0 && <NoCast />}
      {movieCast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          {profile_path ? (
            <Img src={imgBaseUrl.concat(profile_path)} alt="" />
          ) : (
            <ImageTemplate />
          )}

          <div>
            <Name>{name}</Name>
            <Character>Character: {character}</Character>
          </div>
        </Item>
      ))}
    </List>
  );
};

export default MovieCast;
