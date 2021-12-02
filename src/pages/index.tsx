import { useCallback, useEffect, useState } from 'react';
import { ImEye } from 'react-icons/im';
import { IoMdRefresh } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';

import { ClinicaViewButton } from '../components/ClinicaViewButton';
import { server } from '../mocks/clinic';

import { TableComponent } from '../components/Table';
import theme from '../styles/theme';

import { Container, Content, ContentBody } from '../styles/pages/home';
import { DashboardLayout } from '../components/DeashboardLayout.tsx';
import CreateClinical from '../components/CreateClinical';
import ContentHeaderDashboard from '../components/ContentHeaderDashboard';
import CreateSpecialty from '../components/CreateEspecialy';
import CreateMedic from '../components/CreateMedic';
import CreatePatient from '../components/CreatePatient';
import { getAllClinics } from '../Api/Services/Clinic';

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  const [isTableOpen, setisTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await getAllClinics();

      setUsers(response.data);
    } catch {
      console.log('erro');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpenModal = (clickedUserIndex: string): void => {
    console.log(
      `id recebido na pagina clinicas (pai) do componente table: ${clickedUserIndex}`
    );
  };
  const isClinic = false;
  const handleOpenTable = (): void => {
    setisTableOpen(currentOpenTable => !currentOpenTable);
  };

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  const handleCreateClinical = useCallback(values => {
    console.log('values abaixo');
    console.log(values);
  }, []);

  const headerTable = ['Código', 'Nome', 'Endereço', 'Telefone', 'E-mail'];
  const objectProps = ['id', 'name', 'address', 'phone', 'email'];

  return (
    <DashboardLayout name="clinic" titlePage="Clínica">
      <Container>
        <Content>
          <ContentHeaderDashboard
            title="Clínicas"
            getData={getData}
            handleOpenTable={handleOpenTable}
          />
          <ContentBody>
            <>
              <TableComponent
                isOpen={isTableOpen}
                isLoading={isLoading}
                data={users}
                objectProps={objectProps}
                headerTable={headerTable}
                handleOpenModal={handleOpenModal}
              />
            </>

            <ClinicaViewButton
              icon={
                <IoAddSharp size={30} color={`${theme.colors.darkGreenBlue}`} />
              }
              text="Inserção"
              onClickFunction={handleOpenInsertionForm}
            />

            <>
              <CreateClinical
                handleSubmit={handleCreateClinical}
                isOpen={isInsertionOpen}
              />
            </>
          </ContentBody>
        </Content>
      </Container>
    </DashboardLayout>
  );
};

export default Home;
