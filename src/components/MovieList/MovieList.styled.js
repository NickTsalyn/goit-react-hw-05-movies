import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieListStyle = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  min-height: auto;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  @media only screen and (min-width: 768px) {
     min-height: 390px;
  }
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: var(--accent);
  }
`;

export const MovieImg = styled.img`
  margin-bottom: 5px;
  filter: grayscale(0.4);

  transition: all 200ms ease-in-out;
`;

export const MovieName = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  margin: 0;
  font-size: 8px;
  text-align: center;
  transition: all 200ms ease-in-out;
  @media only screen and (min-width: 768px) {
     font-size: 18px
  }
`;