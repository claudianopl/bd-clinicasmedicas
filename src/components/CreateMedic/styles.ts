/* eslint-disable prettier/prettier */
import { Box } from '@chakra-ui/react';
import { saturate } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  quickInsert: boolean;
}

export const Container = styled(Box) <ContainerProps>`
  background: white;

  ${props =>
    props.quickInsert === false &&
    css`
      padding: 33.1px 47.9px 29.2px 48px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      border-top: 19px solid ${props.theme.colors.aquaMarine};
      border-radius: 0.65rem;
    `}
`;

export const ButtonSubmit = styled.button`
  border: 0;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.23);
  background: ${props => props.theme.colors.aquaMarine};
  color: white;
  padding: 19px 105px 19px 104px;
  font-size: 23px;
  border-radius: 40px;
  letter-spacing: 1.15px;
  transition: background-color 0.4s;
  &:focus {
    border: 0 none;
    outline: 0;
  }
  &:disabled {
    background: rgba(62, 62, 62, 0.21);
  }
  &:not([disabled]):hover {
    background: ${props => saturate(0.1, props.theme.colors.aquaMarine)};
    text-transform: none;
  }
`;

export const selectChildrenStyles = styled.div`
  select {
    border-radius: 38px;
  }
`;
