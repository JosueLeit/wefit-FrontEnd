import React from 'react';
import { MdDelete } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { Box, Button, Image, Text } from '../../../../components';
import { useCartProduct } from '../../../../hooks';
import { displayFormattedPrice } from '../../../../utils';
import * as S from './styles';

import { QuantityInput } from '..';

import { ProductRowProps } from './typings';

export const DesktopProductRow = ({
  id,
  title,
  price,
  image_url,
}: ProductRowProps) => {
  const theme = useTheme();
  const { quantity, updateQuantity, remove } = useCartProduct(id);
  return (
    <S.Container>
      <Box alignItems="center" gap="32px">
        <Image className="cover" src={image_url} alt={title} />
        <Box flexDirection="column" gap="8px" className="movie-info">
          <Text variant="body1" color={theme.colors.mainBackground.main}>
            {title}
          </Text>
          <Text variant="subtitle2" color={theme.colors.mainBackground.main}>
            {displayFormattedPrice(price)}
          </Text>
        </Box>
      </Box>
      <QuantityInput qty={quantity} onChange={updateQuantity} />
      <Box justifyContent="space-between" alignItems="center">
        <Text variant="subtitle2" color="#2F2E41">
          {displayFormattedPrice(price * quantity)}
        </Text>
        <Button variant="unstyled" onClick={remove}>
          <MdDelete size={24} color={theme.colors.primary.main} />
        </Button>
      </Box>
    </S.Container>
  );
};
