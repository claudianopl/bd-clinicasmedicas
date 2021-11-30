import { useEffect, useState } from 'react';
import { ImEye } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { Container, Content, ContentBody } from '../../styles/pages/home';
import { DashboardLayout } from '../../components/DeashboardLayout.tsx';
import { ClinicaViewButton } from '../../components/ClinicaViewButton';
import theme from '../../styles/theme';
import { server } from '../../mocks/clinic';
import ContentHeaderDashboard from '../../components/ContentHeaderDashboard';
import { TableComponent } from '../../components/Table';

const Specialty: React.FC = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleOpenTable = (): void => {
    setIsTableOpen(currentOpenTable => !currentOpenTable);
  };

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    setUsers(server);
    setIsLoading(false);
  };

  const handleOpenModal = (clickedUserIndex: string): void => {
    console.log(
      `id recebido na pagina clinicas (pai) do componente table: ${clickedUserIndex}`
    );
  };

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  const headerTable = ['Código', 'Nome', 'Endereço', 'Telefone', 'E-mail'];
  const objectProps = ['id', 'name', 'address', 'phone', 'email'];

  return (
    <DashboardLayout name="specialty" titlePage="Especialidades">
      <Container>
        <Content>
          <ContentHeaderDashboard
            title="Especialidades"
            getData={getData}
            handleOpenTable={handleOpenTable}
          />
          <ContentBody>
            {isTableOpen && (
              <>
                <p>
                  Aqui você pode visualizar as especialidades existentes neste
                  banco de dados, bem como, atualizar existentes ou excluí-las!
                </p>
                <TableComponent
                  isLoading={isLoading}
                  data={users}
                  objectProps={objectProps}
                  headerTable={headerTable}
                  handleOpenModal={handleOpenModal}
                />
              </>
            )}

            <ClinicaViewButton
              icon={
                <IoAddSharp size={30} color={`${theme.colors.darkGreenBlue}`} />
              }
              text="Inserção"
              onClickFunction={handleOpenInsertionForm}
            />
          </ContentBody>
        </Content>
      </Container>
    </DashboardLayout>
  );
};

export default Specialty;
