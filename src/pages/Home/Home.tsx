import React from 'react';

import { Button, Loading } from '../../components';
import { useProducts } from '../../hooks';
import { Movie } from './components';
import * as S from './styles';

export const HomePage = () => {
  const { products, loading, loadMore, hasMoreProducts } = useProducts();
  return (
    <S.Container>
      <S.MoviesContainer>
        {products.map((movie, idx) => (
          <Movie key={`${idx + 1}`} {...movie} />
        ))}
      </S.MoviesContainer>
      {loading && (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      )}
      {hasMoreProducts && (
        <Button className="load-more" onClick={loadMore} disabled={loading}>
          {loading ? 'Carregando...' : 'Carregar mais'}
        </Button>
      )}
    </S.Container>
  );
};
