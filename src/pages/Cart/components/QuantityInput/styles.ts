import styled from 'styled-components';

export const Input = styled.input`
  text-align: center;
  border: 1px solid #d9d9d9;
  padding: 4px;
  border-radius: 4px;
  line-height: ${({ theme }) => theme.typography.body2.lineHeight}px;
  font-size: ${({ theme }) => theme.typography.body2.fontSize}px;
  font-weight: 400;
  width: 60px;
`;

export const IconButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
`;
