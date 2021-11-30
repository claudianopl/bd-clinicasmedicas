import { ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps {
  icon: ReactNode;
  onClickFunction: () => void;
  text: string;
}
export const ClinicaViewButton = ({
  icon,
  onClickFunction,
  text,
}: ButtonProps): any => {
  return (
    <Container>
      <button type="button" onClick={onClickFunction}>
        {icon}
        <span>{text}</span>
      </button>
    </Container>
  );
};
