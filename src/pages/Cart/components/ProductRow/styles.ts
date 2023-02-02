import styled from 'styled-components';

import { Tabelize } from '../Tabelize';

export const Container = styled(Tabelize)`
  img.cover {
    width: 90px;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    img.cover {
      width: 60px;
    }
  }
`;
