import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import * as Pages from './pages';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/cart" element={<Pages.CartPage />} />
      </Route>
    </Routes>
  );
};
