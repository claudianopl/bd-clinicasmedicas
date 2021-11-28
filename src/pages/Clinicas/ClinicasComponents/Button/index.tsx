import { ReactNode } from 'react';
import { ImEye } from 'react-icons/im';
import theme from '../../../../styles/theme';
import { Container } from './styles';

interface ButtonProps {
  icon: ReactNode;
  onClickFunction: () => void;
  text: string;
}
export const Button = ({ icon, onClickFunction, text }: ButtonProps): any => {
  return (
    <Container>
      <button type="button">
        {icon}
        <span>Visualização</span>
      </button>
    </Container>
  );
};
