import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Text, SvgImages, Button, Box } from '../../components';

export const CartCheckoutSuccessState: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box style={{ flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <Text variant="heading4" align="center">
        Compra realizada com sucesso!
      </Text>
      <SvgImages.CheckoutSuccessSvg />
      <Button onClick={() => navigate('/', { replace: true })}>Voltar</Button>
    </Box>
  );
};
