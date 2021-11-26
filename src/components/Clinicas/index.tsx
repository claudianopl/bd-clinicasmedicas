import { ImEye } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';

import { TableComponent } from '../Table';
import theme from '../../styles/theme';

import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ButtonFlexWrapper,
} from './styles';

export const Clinicas: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h1>Clínicas</h1>
          <ButtonFlexWrapper>
            <button type="button">
              <ImEye size={25} color={`${theme.colors.darkGreenBlue}`} />{' '}
              <span>Visualização</span>
            </button>
            <button id="Icon_open-reload" type="button">
              <IoMdRefresh size={30} color={`${theme.colors.white}`} />
            </button>
          </ButtonFlexWrapper>
          <p>
            Aqui você pode visualizar as clínicas existentes neste banco de
            dados, bem como, atualizar ou exluir-las!
          </p>
        </ContentHeader>
        <ContentBody>
          <TableComponent />
        </ContentBody>
      </Content>
    </Container>
  );
};

export default Clinicas;
