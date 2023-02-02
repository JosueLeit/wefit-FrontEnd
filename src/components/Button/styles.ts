import styled, { css, DefaultTheme } from 'styled-components';

type ButtonProps = {
  color?: keyof DefaultTheme['colors'];
  variant?: string;
};

export const Button = styled.button<ButtonProps>`
  padding: 8px;
  border-radius: 4px;
  min-height: 40px;
  min-width: 180px;
  max-width: 100%;
  background-color: ${({ theme, color }) =>
    theme.colors[color || 'primary'].main};
  border: 0px;

  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;

  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 150ms ease-in-out;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme, color }) =>
      theme.colors[color || 'primary'].dark};
  }

  svg {
    font-size: 20px;
  }

  ${props =>
    props.variant === 'unstyled' &&
    css`
      padding: 0px;
      margin: 0px;
      display: unset;
      border-radius: unset;
      background-color: transparent;
      min-height: unset;
      min-width: unset;
      max-width: unset;
      text-transform: initial;
      gap: unset;
      align-items: unset;
      justify-content: unset;

      &:hover {
        background-color: transparent;
      }
    `}
`;
