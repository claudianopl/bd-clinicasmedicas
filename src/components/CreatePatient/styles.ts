import { Box } from '@chakra-ui/react';
import { saturate } from 'polished';
import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';
import { Select } from '@chakra-ui/react';

interface ContainerProps {
  quickInsert: boolean;
}

// eslint-disable-next-line prettier/prettier
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

export const MaskStyles = styled(InputMask)`
  border: 1px solid #d4d4d4;
  border-radius: 38px;
  width: 100%;
  height: 95%;
  padding: 24px;

  outline: none;
  padding-left: 25%;
  font: 400 19px 'Roboto', sans-serif;
  letter-spacing: 0.95px;
  ::placeholder {
    color: rgba(39, 39, 39, 0.5);
  }
`;

export const SelectStylesContainer = styled.div``;

export const SelectStyles = styled(Select)`
  height: 80px;
  border-radius: 38px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  outline: none;

  select {
    border-radius: 38px;
  }
`;
