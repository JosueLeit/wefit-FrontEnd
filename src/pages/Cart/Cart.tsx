import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTheme } from 'styled-components';

import { Box, PageWrapper, Text, TextProps } from '../../components';
import { useCartProducts } from '../../hooks';
import { CartCheckoutSuccessState } from './CheckoutSuccessState';
import { Tabelize, ProductRow, CartFooter } from './components';
import { CartEmptyState } from './EmptyState';
import * as S from './styles';

export const CartPage: React.FC = () => {
  const theme = useTheme();
  const products = useCartProducts();
  const [searchParams] = useSearchParams();
  const headerProps: TextProps = {
    variant: 'body1',
    color: theme.colors.gray1.main,
    transform: 'uppercase',
  };

  if (searchParams.get('success') === '1')
    return (
      <PageWrapper>
        <CartCheckoutSuccessState />
      </PageWrapper>
    );

  if (products.length === 0)
    return (
      <PageWrapper>
        <CartEmptyState />
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <S.Container>
        <Tabelize style={{ marginBottom: 20 }} className="table-head">
          <Text {...headerProps}>Produto</Text>
          <Text {...headerProps}>Qtd</Text>
          <Text {...headerProps}>Subtotal</Text>
        </Tabelize>
        <Box flexDirection="column" gap="24px">
          {products.map(product => (
            <ProductRow key={`${product.id}`} {...product} />
          ))}
        </Box>
        <CartFooter />
      </S.Container>
    </PageWrapper>
  );
};
