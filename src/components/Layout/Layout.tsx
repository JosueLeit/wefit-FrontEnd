import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import * as S from './styles';

export const Layout = () => {
  return (
    <S.Container>
      <Header />
      <S.ContentContainer>
        <Outlet />
      </S.ContentContainer>
    </S.Container>
  );
};
