import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { useCartTotalItems } from '../../hooks';
import { Box } from '../Box/Box';
import { Button } from '../Button';
import { Text } from '../Text/Text';
import * as S from './styles';

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const totalItems = useCartTotalItems();
  return (
    <S.Container>
      <Button variant="unstyled" onClick={() => navigate('/cart')}>
        <Box alignItems="center" gap="8px">
          <Box flexDirection="column">
            <Text
              color="#ffffff"
              align="right"
              variant="body1"
              weight={600}
              className="cart-label"
            >
              Meu Carrinho
            </Text>
            <Text color="#999999" align="right" variant="body2">
              {`${totalItems} itens`}
            </Text>
          </Box>
          <MdShoppingBasket size="32px" color="#ffffff" />
        </Box>
      </Button>
    </S.Container>
  );
};
