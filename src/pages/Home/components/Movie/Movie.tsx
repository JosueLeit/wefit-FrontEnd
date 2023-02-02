import React, { memo } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { Box, Button, Image, Text } from '../../../../components';
import { useCartAddProduct, useCartProduct } from '../../../../hooks';
import { displayFormattedPrice } from '../../../../utils';
import * as S from './styles';

type Props = {
  id: string | number;
  title: string;
  price: number;
  image_url: string;
};

const MovieComponent = ({ id, title, price, image_url }: Props) => {
  const { hasInCart, quantity } = useCartProduct(id);
  const addToCart = useCartAddProduct();
  const buttonText = hasInCart ? 'Item Adicionado' : 'Adicionar ao Carrinho';
  const newProductData = { id, title, price, image_url, quantity: 1 };
  return (
    <S.Container>
      <Image src={image_url} alt={title} className="movie-cover" />
      <Box flexDirection="column" gap="4px">
        <Text variant="body2" weight={700} color="#333">
          {title}
        </Text>
        <Text variant="subtitle2" color="#2F2E41">
          {displayFormattedPrice(price)}
        </Text>
      </Box>
      <Button
        color={hasInCart ? 'success' : 'primary'}
        onClick={() => addToCart(newProductData)}
        startIcon={
          <Box alignItems="center" gap="4px">
            <MdAddShoppingCart />
            <Text weight={400}>{quantity}</Text>
          </Box>
        }
      >
        {buttonText}
      </Button>
    </S.Container>
  );
};

export const Movie = memo(MovieComponent);
