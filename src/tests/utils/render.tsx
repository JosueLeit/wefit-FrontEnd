import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../themes/default';

export const render = (children: React.ReactNode) => {
  return rtlRender(
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>,
  );
};
