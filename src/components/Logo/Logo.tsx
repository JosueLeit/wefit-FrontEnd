import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Text } from '../Text/Text';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Button variant="unstyled" onClick={() => navigate('/')}>
      <Text variant="heading4" color="white">
        WeMovies
      </Text>
    </Button>
  );
};
