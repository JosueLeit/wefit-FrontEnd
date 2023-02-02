import styled, { CSSProperties } from 'styled-components';

type Props = Partial<
  Pick<
    CSSProperties,
    'alignItems' | 'flexDirection' | 'justifyContent' | 'gap' | 'flex'
  >
>;

export const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  gap: ${props => props.gap};
  flex: ${props => props.flex};
`;
