import styled from 'styled-components';

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 19.188rem;
    height: 4.063rem;
    border-radius: 999rem;
    border: 1px;
    background-color: rgba(83, 221, 189, 0.3);
    color: ${props => props.theme.colors.darkGreenBlue};

    font-family: Nunito;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.56px;

    margin-bottom: 1rem;

    transition: 0.7s;

    outline: none;

    span {
      padding-left: 1rem;
      color: ${props => props.theme.colors.darkGreenBlue};
    }

    &:hover {
      background-color: rgba(83, 221, 189, 0.8);
      filter: brightness(0.99);
    }
  }
`;
