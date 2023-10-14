import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieRatings } from 'api';
import { Author, Item, List, Text } from './MovieReview.styled';
import { NoReview } from 'components/Error/NoReview';

export const MovieReview = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieRatings(movieId).then(setReview);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <List>
      {review.length === 0 && <NoReview />}
      {review.map(({ author, content, id }) => (
        <Item key={id}>
          <Author>{author}</Author>
          <Text>{content}</Text>
        </Item>
      ))}
    </List>
  );
};


export default MovieReview
