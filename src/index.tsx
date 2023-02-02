import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './globalStyles';
import reportWebVitals from './reportWebVitals';
import { AppRouter } from './routes';
import defaultTheme from './themes/default';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
