import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: auto;
  background-color: black;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 5px;
`;

export const ContentHeader = styled.div`
  h1 {
    margin: 0;
    height: 3.938rem;
    font-family: Nunito;
    font-size: 2.875rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.theme.colors.greyishBrown};
    margin-bottom: 2rem;
  }
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

    span {
      padding-left: 1rem;
    }

    &:hover {
      /* color: var(--shape); */
      background-color: rgba(83, 221, 189, 0.8);
      filter: brightness(0.99);
    }
  }

  button[id='Icon_open-reload'] {
    width: 4rem;
    border-radius: 999rem;
    background-color: ${props => props.theme.colors.aquaMarine};
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.23);
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    color: ${props => props.theme.colors.greyish};
    font-size: 1.375rem;

    font-family: Nunito;
    font-weight: 600;
    padding-bottom: 1rem;
  }
`;

export const ButtonFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
