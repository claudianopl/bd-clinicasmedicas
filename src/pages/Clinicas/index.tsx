import { ImEye } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';

import { ClinicaViewButton } from './ClinicasComponents/ClinicaViewButton';

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

  const [isTableOpen, setisTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);

  async function getData(): Promise<void> {
    const response = await fetch('http://localhost:3000/api/pacients');
    const responseJson = await response.json();
    setUsers(responseJson);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClickedUser = (clickedUserIndex: string): void =>
    console.log(
      `id recebido na pagina clinicas (pai) do componente table: ${clickedUserIndex}`
    );

  const handleOpenTable = (): void => {
    setisTableOpen(currentOpenTable => !currentOpenTable);
  };

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  const tableColumnValues = [
    'Código',
    'Nome',
    'Endereço',
    'Telefone',
    'E-mail',
  ];
  const userProps = ['id', 'name', 'address', 'phone', 'email'];

  return (
    // colocar o outro componente de botao na linha 56;

    <Container>
      <Content>
        <ContentHeader>
          <h1>Clínicas</h1>
          <ButtonFlexWrapper>
            <ClinicaViewButton
              icon={<ImEye size={30} color={`${theme.colors.darkGreenBlue}`} />}
              text="Visualização"
              onClickFunction={handleOpenTable}
            />
            <button id="Icon_open-reload" type="button" onClick={getData}>
              <IoMdRefresh size={30} color={`${theme.colors.white}`} />
            </button>
          </ButtonFlexWrapper>
        </ContentHeader>
        <ContentBody>
          {isTableOpen ? (
            <>
              <p>
                Aqui você pode visualizar as clínicas existentes neste banco de
                dados, bem como, atualizar ou exluir-las!
              </p>
              <TableComponent
                receivedUserData={users}
                userProps={userProps}
                userColumnValues={tableColumnValues}
                handleClickedUser={handleClickedUser}
              />
            </>
          ) : null}

          <ClinicaViewButton
            icon={
              <IoAddSharp size={30} color={`${theme.colors.darkGreenBlue}`} />
            }
            text="Inserção"
            onClickFunction={handleOpenInsertionForm}
          />

          {isInsertionOpen ? (
            <>
              <p>Aqui você pode inserir novas clínicas ao banco!</p>
              <TableComponent // novo componente aqui
                receivedUserData={users}
                userProps={userProps}
                userColumnValues={tableColumnValues}
                handleClickedUser={handleClickedUser}
              />
            </>
          ) : null}
        </ContentBody>
      </Content>
    </Container>
  );
};

export default Clinicas;
