import styled from 'styled-components';

import { Box } from '../../../../components';

export const Container = styled(Box).attrs({
  flexDirection: 'column',
})`
  padding: 10px 12px;
  background-color: white;
  border-radius: 4px;
  gap: 8px;
  text-align: center;

  & .movie-cover {
    max-width: 145px;
    height: auto;
    margin: 0 auto;
  }
`;
