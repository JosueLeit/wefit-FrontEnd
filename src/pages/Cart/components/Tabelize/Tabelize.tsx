import React, { Children, CSSProperties } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  & > div:nth-child(1) {
    flex: 2;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    flex: 1;
  }
`;

type Props = {
  style?: CSSProperties;
  className?: string;
};

export const Tabelize = ({
  children,
  style,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <Container {...{ style, className }}>
      {Children.map(children, child => (
        <div>{child}</div>
      ))}
    </Container>
  );
};
