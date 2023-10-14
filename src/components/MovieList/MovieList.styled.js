import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { BsFileImage } from 'react-icons/bs';

export const MovieListStyle = styled.ul`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  height: 420px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  /* @media only screen and (min-width: 768px) {
    min-height: 390px;
  } */
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  height: 100%;

  &:hover img {
    filter: grayscale(0);
  }

  &:hover p {
    color: var(--accent);
  }
`;

export const MovieImg = styled.img`
  display: block;
  height: 330px;
  max-width: 100%;
  margin-bottom: 5px;
  filter: grayscale(0.4);

  transition: all 200ms ease-in-out;
`;

export const MovieName = styled.p`
  display: block;
  height: auto;
  padding: 10px 8px;
  font-weight: 500;
  margin: auto;
  font-size: 8px;
  text-align: center;
  transition: all 200ms ease-in-out;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ImageTemplate = styled(BsFileImage)`
  width: 200px;
  height: 330px;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
