import React, { ButtonHTMLAttributes } from 'react';

import { DefaultTheme } from 'styled-components';

import * as S from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.ReactNode;
  color?: keyof DefaultTheme['colors'];
  variant?: 'default' | 'unstyled';
};

export const Button = ({
  children,
  startIcon,
  color,
  variant,
  ...originalProps
}: React.PropsWithChildren<Props>) => {
  return (
    <S.Button {...{ ...originalProps, color, variant }} type="button">
      {typeof startIcon !== 'undefined' && startIcon}
      {children}
    </S.Button>
  );
};
