import styled from 'styled-components';

export const Container = styled.div``;
export const TableFooter = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 79px;
  width: 100%;
  margin-bottom: 15rem;

  border-radius: 0px 0px 0.65rem 0.65rem;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`;

export const ButtonFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  button {
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.56px;
    margin: 8px;

    font-family: Rajdhani;
    font-weight: 700;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 38px;
    height: 38px;

    margin: 8px;
  }
  .paginationItemActive {
    color: ${props => props.theme.colors.white};
    width: 38px;
    height: 38px;

    margin: 8px;
    background-color: ${props => props.theme.colors.aquaMarine};
    border-radius: 999px;
  }

  .rightPaginationEmpty {
    color: ${props => props.theme.colors.paleGrey};
  }
`;
