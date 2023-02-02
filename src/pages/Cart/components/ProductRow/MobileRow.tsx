import React from 'react';
import { MdDelete } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { Box, Button, Image, Text } from '../../../../components';
import { useCartProduct } from '../../../../hooks';
import { displayFormattedPrice } from '../../../../utils';
import * as S from './styles';

import { QuantityInput } from '..';

import { ProductRowProps } from './typings';

export const MobileProductRow = ({
  id,
  title,
  price,
  image_url,
}: ProductRowProps) => {
  const theme = useTheme();
  const { quantity, updateQuantity, remove } = useCartProduct(id);
  return (
    <S.Container>
      <Box gap="12px">
        <Image className="cover" src={image_url} alt={title} />
        <Box flexDirection="column" flex={1} gap="12px">
          <Box alignItems="center" justifyContent="space-between">
            <Text variant="body1" color={theme.colors.mainBackground.main}>
              {title}
            </Text>
            <Text variant="subtitle2" color={theme.colors.mainBackground.main}>
              {displayFormattedPrice(price)}
            </Text>
            <Button variant="unstyled" onClick={remove}>
              <MdDelete size={24} color={theme.colors.primary.main} />
            </Button>
          </Box>
          <Box alignItems="center" justifyContent="space-between">
            <QuantityInput qty={quantity} onChange={updateQuantity} />
            <Box flexDirection="column">
              <Text
                variant="body1"
                transform="uppercase"
                color={theme.colors.gray1.main}
                align="center"
              >
                Subtotal
              </Text>
              <Text variant="subtitle2" color="#2F2E41" align="center">
                {displayFormattedPrice(price * quantity)}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </S.Container>
  );
};
