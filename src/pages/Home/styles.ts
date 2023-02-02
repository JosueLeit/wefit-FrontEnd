import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  button.load-more {
    width: 100%;
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  max-width: 100%;
  text-align: center;
  margin-bottom: 32px;
`;
