/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ContainerTextProps {
  isErrored: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const ContainerText = styled.div<ContainerTextProps>`
  background: white;
  border-radius: 38px;
  border: 1px solid #d4d4d4;
  padding: 24px;
  width: 100%;
  color: rgba(39, 39, 39, 0.5);
  display: flex;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  input {
    margin-top: 3px;
    flex: 1;
    background: transparent;
    border: 0;

    color: rgba(39, 39, 39, 0.5);
    ${props =>
    props.isErrored &&
    css`
        color: #c53030;
      `}
    letter-spacing: 0.95px;
    font-size: 19px;
    &::placeholder {
      color: rgba(39, 39, 39, 0.5);
    }
    &:focus {
      color: rgba(39, 39, 39, 0.5);
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  color: #c53030;
  margin-top: 8px;
  letter-spacing: 0.95px;
  font-size: 16px;
`;
