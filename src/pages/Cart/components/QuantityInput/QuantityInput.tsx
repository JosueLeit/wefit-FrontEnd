import React, { useEffect, useRef, useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import { useTheme } from 'styled-components';

import { Box } from '../../../../components';
import { Input, IconButton } from './styles';

type Props = {
  qty?: number;
  onChange?: (qty: number) => void;
};

export const QuantityInput = ({ onChange, qty: qtyProp = 1 }: Props) => {
  const theme = useTheme();
  const [qty, setQty] = useState(qtyProp);
  const isFirstRender = useRef(true);
  const iconProps = { size: 24, color: theme.colors.primary.main };

  useEffect(() => {
    if (isFirstRender.current === true) isFirstRender.current = false;
    else if (typeof onChange === 'function') onChange(qty);
  }, [qty]); // eslint-disable-line

  return (
    <Box gap="12px">
      <IconButton onClick={() => setQty(n => (n > 1 ? n - 1 : 1))}>
        <FiMinusCircle {...iconProps} />
      </IconButton>
      <Input
        value={qty}
        onChange={event => {
          const value = event.target.value;
          if (/[0-9]+/.test(value) && Number(value) >= 0) {
            setQty(Number(value));
          }
        }}
      />
      <IconButton onClick={() => setQty(n => n + 1)}>
        <FiPlusCircle {...iconProps} />
      </IconButton>
    </Box>
  );
};
