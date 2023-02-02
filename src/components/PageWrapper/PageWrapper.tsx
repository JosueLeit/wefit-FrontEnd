import React from 'react';

import * as S from './styles';

export const PageWrapper = ({ children }: React.PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};
