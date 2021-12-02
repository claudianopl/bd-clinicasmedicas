/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { Flex, Input, Button, Text, Box } from '@chakra-ui/react';
import { saturate } from 'polished';

interface ContainerProps {
  isActive: boolean;
}

interface ContentMenuProps {
  isActive: boolean;
}

export const Header = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 9.0625rem;
  padding: 2.1875rem 3.375rem 2.125rem 4.75rem;
  box-shadow: 0 1px 6px 0 rgba(39, 39, 39, 0.2);
  position: fixed;
  z-index: 1101;
`;

export const FiMenuIcon = styled(FiMenu)`
  cursor: pointer;
  color: ${props => props.theme.colors.greyishBrown};
`;

export const Logo = styled.img`
  width: 306px;
  height: 42px;
`;

export const ContainerSearch = styled(Flex)`
  background: ${props => props.theme.colors.background};
  border-radius: 41px;
  border: 2px solid #232129;
  padding: 0px 48px 0px 40px;
  border-radius: 41px;
  border: solid 2px #d1d1d1;
  color: ${props => props.theme.colors.greyish};
`;

export const IconSearch = styled(FiSearch)`
  color: ${props => props.theme.colors.greyish};
`;

export const TextInput = styled(Input)`
  flex: 1;
  background: transparent;
  border: 0;
  width: auto;
  color: ${props => props.theme.colors.greyish};
  font-weight: bold;
  text-align: left;
  font-size: 22px;
  &::placeholder {
    color: ${props => props.theme.colors.greyish};
  }
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const ButtonComponents = styled(Button)`
  width: auto;
  border: 0;
  padding: 2.1875rem 3.375rem 2.125rem 4.75rem;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.23);
  background: ${props => props.theme.colors.aquaMarine};
  &:focus {
    border: 0 none;
    outline: 0;
  }
  &:hover {
    background: ${props => saturate(0.1, props.theme.colors.aquaMarine)};
    text-transform: none;
  }
  > p {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.4375rem;
    font-weight: 500;
    letter-spacing: 0.071rem;
  }
`;

export const P = styled(Text)`
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 0.071rem;
`;

export const Nav = styled(Box) <ContainerProps>`
  cursor: pointer;
  padding: 1.625rem 0rem 1.625rem 3.875rem;
  ${props =>
    props.isActive &&
    css`
      background: ${props.theme.colors.aquaMarine};
    `}
  border-radius: 0px 42px 42px 0px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => saturate(0.1, props.theme.colors.aquaMarine)};
    color: white;
  }
  > svg {
    ${props =>
    props.isActive &&
    css`
      color: white;
    `}
  }
  > a {
    margin-top: 1px;
    margin-left: 1.8rem;
    font-size: 24px;
    font-weight: bold;
    ${props =>
    props.isActive &&
    css`
      color: white;
    `}
  }
`;

export const ContentChildren = styled(Box)`
  padding-top: 67px;
  padding-left: 35px;
  padding-right: 53px;
  margin-bottom: 197px;
`;

export const ContentMenu = styled.div<ContentMenuProps>`
  overflow: auto;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  overflow: 'auto'
  ${props => props.isActive && css`
    transform: translate3d(25rem, 0px, 0px);
    width: calc(100% - 25rem)
  `}
`;
