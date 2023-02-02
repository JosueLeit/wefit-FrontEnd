import React from 'react';

import { Logo } from '../Logo/Logo';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Logo />
      <ShoppingCart />
    </S.Container>
  );
};
