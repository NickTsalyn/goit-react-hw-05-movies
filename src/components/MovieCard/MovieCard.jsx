import { ImageTemplate } from 'components/MovieList/MovieList.styled';
import {
  Container,
  Description,
  Img,
  Text,
  Title,
  Wrapper,
  Year,
} from './MovieCard.styled';

export const MovieCard = ({ movies }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movies;
  const genresList = genres.map(genre => genre.name).join(', ');
  const votePercentage = (vote_average * 10).toFixed(0);
  const releaseDate = release_date.slice(0, 4);
  const imgUrl = 'https://image.tmdb.org/t/p/w500/'.concat(poster_path);

  return (
    <Container>
      {poster_path ? <Img src={imgUrl} alt={title} /> : <ImageTemplate />}
      <Wrapper>
        <Title>
          {title} <Year>({releaseDate})</Year>
        </Title>
        <Text> User score: {votePercentage}%</Text>
        <Description>Overview</Description>
        <Text>{overview}</Text>
        <Description>Genres</Description>
        <Text>{genresList}</Text>
      </Wrapper>
    </Container>
  );
};
