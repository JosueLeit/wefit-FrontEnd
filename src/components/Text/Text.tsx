import React from 'react';

import * as S from './styles';

export const Text = (props: React.PropsWithChildren<S.TextProps>) => {
  return <S.Text {...props} />;
};
