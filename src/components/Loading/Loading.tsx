import React from 'react';

import styled from 'styled-components';

import SpinnerImage from '../../assets/images/load-spinner.png';

const Container = styled.div`
  width: 100%;
  text-align: center;

  img {
    animation: rotation 1s linear infinite;
    width: 60px;
    height: 60px;
    pointer-events: none;
    user-drag: none;
    user-select: none;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loading: React.FC = () => {
  return (
    <Container>
      <img src={SpinnerImage} alt="loading..." />
    </Container>
  );
};
