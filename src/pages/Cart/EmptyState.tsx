import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, SvgImages, Button, Box } from '../../components';

export const CartEmptyState: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <Text variant="heading4" align="center">
        Parece que não há nada por aqui :(
      </Text>
      <SvgImages.EmptyCartSvg />
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </Box>
  );
};
