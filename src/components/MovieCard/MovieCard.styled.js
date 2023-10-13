import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 4px;
  box-shadow: var(--main-shadow);
  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const Title = styled.h2`
  /* margin-bottom: 45px; */
  font-weight: 700;
  font-size: 20px;
  color: var(--accent);
  text-shadow: var(--main-shadow);

  @media only screen and (min-width: 768px) {
     font-size: 36px;
  }
`;

export const Year = styled.span`
  font-weight: 700;
  color: var(--secondary);
`;

export const Description = styled.p`
  /* margin-bottom: 15px; */
  font-size: 16px;
  font-weight: 500;
  color: var(--accent);
  @media only screen and (min-width: 768px) {
     font-size: 22px;
  }
`;

export const Text = styled.span`
  /* margin-bottom: 30px; */
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: var(--secondary);
  @media only screen and (min-width: 768px) {
     font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
