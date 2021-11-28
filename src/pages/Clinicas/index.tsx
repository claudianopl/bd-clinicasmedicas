import { ImEye } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Button } from './ClinicasComponents/Button';

import { TableComponent } from '../../components/Table';
import theme from '../../styles/theme';

import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ButtonFlexWrapper,
} from './styles';

interface user {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export const Clinicas: React.FC = () => {
  const [users, setUsers] = useState([]);

  const tableColumnValues = [
    'Código',
    'Nome',
    'Endereço',
    'Telefone',
    'E-mail',
  ];
  const userProps = ['id', 'name', 'address', 'phone', 'email'];

  useEffect(() => {
    async function getData(): Promise<void> {
      const response = await fetch('http://localhost:3000/api/pacients');
      const responseJson = await response.json();
      setUsers(responseJson);
    }
    getData();
  }, []);

  const handleClickOnButton = (): void => {
    console.log('abc');
  };
  return (
    // colocar o outro componente de botao na linha 56;
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
          <TableComponent
            receivedUserData={users}
            userProps={userProps}
            userColumnValues={tableColumnValues}
          />
        </ContentBody>
        <Button
          icon={<IoMdRefresh size={30} color={`${theme.colors.white}`} />}
          text="Visualização"
          onClickFunction={handleClickOnButton}
        />
      </Content>
    </Container>
  );
};

export default Clinicas;
