import styled from '@emotion/styled';
import { BsFileImage } from 'react-icons/bs';


export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
`;

export const Item = styled.li`
  flex-basis: 150px;
`;

export const Img = styled.img`
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Character = styled.p`
  color: var(--accent);
`;

export const ImageTemplate = styled(BsFileImage)`
  width: 150px;
  height: 230px;
  background-color: #e3c0dd85;
  ;
`;