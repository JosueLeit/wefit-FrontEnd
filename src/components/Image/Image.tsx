import React, { ImgHTMLAttributes, memo, useEffect, useState } from 'react';

import env from '../../env';
import { Loading } from '../Loading';

type Props = ImgHTMLAttributes<HTMLImageElement>;

const ImageComponent = ({ src, ...props }: Props) => {
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
    function preloadImage() {
      if (!src) return;
      const img = document.createElement('img');
      img.onload = () => setImageSrc(src);
      img.onerror = () => setImageSrc(env.NO_IMAGE_PLACEHOLDER);
      img.src = src;
    }
    preloadImage();
  }, [src]);
  if (!imageSrc) return <Loading />;
  return <img {...{ src: imageSrc, alt: props.alt || imageSrc, ...props }} />;
};

export const Image = memo(ImageComponent);
