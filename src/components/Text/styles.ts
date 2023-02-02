import styled, { CSSProperties, DefaultTheme } from 'styled-components';

export type TextProps = {
  variant?: keyof DefaultTheme['typography'];
  align?: CSSProperties['textAlign'];
  color?: string;
  weight?: number;
  transform?: CSSProperties['textTransform'];
  className?: string;
};

export const Text = styled.span<TextProps>`
  font-size: ${({ theme, variant }) =>
    theme.typography[variant || 'body1'].fontSize}px;
  font-family: ${({ theme, variant }) =>
    theme.typography[variant || 'body1'].fontFamily};
  line-height: ${({ theme, variant }) =>
    theme.typography[variant || 'body1'].lineHeight}px;
  font-weight: ${({ theme, variant, weight }) =>
    weight || theme.typography[variant || 'body1'].fontWeight};
  text-transform: ${props => props.transform};
  color: ${props => props.color};
  text-align: ${props => props.align};
`;
