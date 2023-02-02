import React from 'react';
import { useMedia } from 'react-use';

import { DesktopProductRow } from './DesktopRow';
import { MobileProductRow } from './MobileRow';
import { ProductRowProps } from './typings';

export const ProductRow = (props: ProductRowProps) => {
  const isMobile = useMedia('(max-width: 767px)');
  console.log({ isMobile });
  if (isMobile) return <MobileProductRow {...props} />;
  return <DesktopProductRow {...props} />;
};
