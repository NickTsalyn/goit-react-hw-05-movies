import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 50px 40px;
  max-width: 375px;  
  
  @media only screen and (min-width: 375px) {
     max-width: 767px;
  }

  @media only screen and (min-width: 768px) {
     max-width: 1200px;
  }
`;