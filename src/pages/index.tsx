import { useCallback, useEffect, useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';

import { FaClinicMedical } from 'react-icons/fa';
import { Heading, Box } from '@chakra-ui/react';
import { ClinicaViewButton } from '../components/ClinicaViewButton';

import { TableComponent } from '../components/Table';
import theme from '../styles/theme';

import { Container, Content, ContentBody } from '../styles/pages/home';
import { DashboardLayout } from '../components/DeashboardLayout.tsx';
import CreateClinical from '../components/CreateClinical';
import ContentHeaderDashboard from '../components/ContentHeaderDashboard';
import {
  createClinic,
  getAllClinics,
  getOneClinic,
} from '../Api/Services/Clinic';
import ModalCustom from '../components/ModalCustom';

interface oneClinicProps {
  clinicInfo: any;
  medicInfo: any;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  const [isTableOpen, setisTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModalDetailsClinic, setOpenModalDetailsClinic] = useState(false);
  const [oneClinic, setOneClinic] = useState<oneClinicProps>({});

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

  const handleOpenModal = async (object): Promise<void> => {
    const response = await getOneClinic(object.CodCli);

    setOneClinic({
      clinicInfo: object,
      medicInfo: response,
    });

    setOpenModalDetailsClinic(current => !current);
  };

  const handleOpenTable = (): void => {
    setisTableOpen(currentOpenTable => !currentOpenTable);
  };

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  const handleCreateClinical = useCallback(async (values, resetForm) => {
    const object = {
      nomeCli: values.clinicName,
      endereco: values.address,
      telefone: values.phone,
      email: values.email,
    };

    try {
      const response = await createClinic(object);
      getData();
      resetForm();
    } catch {
      console.log('error');
    }
  }, []);

  const headerTable = [
    'Código',
    'Email',
    'Endereço',
    'Nome da cliníca',
    'Telefone',
  ];
  const objectProps = ['CodCli', 'NomeCli', 'Endereco', 'Telefone', 'Email'];

  return (
    <>
      <DashboardLayout getData={getData} name="clinic" titlePage="Clínica">
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
                  <IoAddSharp
                    size={30}
                    color={`${theme.colors.darkGreenBlue}`}
                  />
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
      <ModalCustom
        isOpen={openModalDetailsClinic}
        onClose={() => setOpenModalDetailsClinic(false)}
        icon={FaClinicMedical}
        modalHeader={
          <Box>
            <Heading as="h1" fontSize="36px" color="white" mb="4.5px">
              {oneClinic.clinicInfo && oneClinic.clinicInfo.NomeCli}
            </Heading>
            <Heading as="h6" fontSize="20px" color="white" mb="9.5px">
              {oneClinic.clinicInfo && oneClinic.clinicInfo.Endereco}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {oneClinic.clinicInfo && oneClinic.clinicInfo.Email}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {oneClinic.clinicInfo && oneClinic.clinicInfo.Telefone}
            </Heading>
          </Box>
        }
        modalBody={<h1>dadasdasd</h1>}
      />
    </>
  );
};

export default Home;
