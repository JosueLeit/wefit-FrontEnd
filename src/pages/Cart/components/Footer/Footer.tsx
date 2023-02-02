import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled, { useTheme } from 'styled-components';

import { Box, Button, Text } from '../../../../components';
import { useCartEmptyCart, useCartTotals } from '../../../../hooks';
import { displayFormattedPrice } from '../../../../utils';

const Container = styled(Box)`
  border-top: 1px solid #999;
  margin-top: 20px;
  padding-top: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 16px;

    button {
      width: 100%;
    }

    div:nth-child(2) {
      text-align: right;
      align-self: flex-end;
    }
  }
`;

export const CartFooter = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const cartTotals = useCartTotals();
  const emptyCart = useCartEmptyCart();
  return (
    <Container>
      <Box flex={1}>
        <Button
          onClick={() => {
            emptyCart();
            navigate('/cart?success=1', {
              replace: true,
            });
          }}
        >
          Finalizar Pedido
        </Button>
      </Box>
      <Box alignItems="center" gap="20px">
        <Text
          variant="body1"
          transform="uppercase"
          color={theme.colors.gray1.main}
        >
          Total
        </Text>
        <Text variant="heading3" color={theme.colors.mainBackground.main}>
          {displayFormattedPrice(cartTotals)}
        </Text>
      </Box>
    </Container>
  );
};
