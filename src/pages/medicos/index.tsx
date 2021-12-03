import { useEffect, useState, useCallback } from 'react';
import { ImEye } from 'react-icons/im';
import { Heading, Box } from '@chakra-ui/react';

import { IoMdRefresh } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { Container, Content, ContentBody } from '../../styles/pages/home';
import { DashboardLayout } from '../../components/DeashboardLayout.tsx';
import { ClinicaViewButton } from '../../components/ClinicaViewButton';
import theme from '../../styles/theme';
import { server } from '../../mocks/clinic';
import ContentHeaderDashboard from '../../components/ContentHeaderDashboard';
import { TableComponent } from '../../components/Table';
import CreatePatient from '../../components/CreatePatient';
import CreateMedic from '../../components/CreateMedic';
import CreateClinical from '../../components/CreateClinical';
import {
  createMedic,
  getAllMedic,
  removeMedic,
  updateMedic,
} from '../../Api/Services/Medic';
import ModalCustom from '../../components/ModalCustom';

const Patients: React.FC = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [medics, setMedics] = useState([]);
  const [initialValues, setInitialValues] = useState({
    medicName: '',
    specCode: '',
    phone: '',
    email: '',
    gender: '',
  });
  const [codMed, setCodMed] = useState(null);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenTable = (): void => {
    setIsTableOpen(currentOpenTable => !currentOpenTable);
  };

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await getAllMedic();

      setMedics(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleCreateMedic = useCallback(async (values, resetForm) => {
    const object = {
      nomeMed: values.medicName,
      genero: values.gender === 'Masculino' ? 'M' : 'F',
      telefone: values.phone,
      email: values.email,
      codEspec: values.specCode,
    };

    try {
      const response = await createMedic(object);
      resetForm();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleModalEdit = useCallback(object => {
    setCodMed(object.CodMed);
    setInitialValues({
      medicName: object.NomeMed,
      specCode: object.CodEspec,
      phone: object.Telefone,
      email: object.Email,
      gender: object.Genero === 'M' ? 'Masculino' : 'Feminino',
    });
    setOpenModalUpdate(true);
  }, []);

  const handleUpdateMedic = useCallback(
    async (values, resetForm) => {
      const object = {
        nomeMed: values.medicName,
        genero: values.gender === 'Masculino' ? 'M' : 'F',
        telefone: values.phone,
        email: values.email,
        codEspec: values.specCode,
        codMed,
      };

      try {
        await updateMedic(object);
        resetForm();
        setOpenModalUpdate(false);
        getData();
      } catch (error) {
        console.log(error);
      }
    },
    [codMed]
  );

  const handleRemoveMedic = useCallback(async object => {
    try {
      await removeMedic(object.CodMed);
      getData();
    } catch {
      console.log('error');
    }
  }, []);

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  const headerTable = [
    'Código',
    'Nome',
    'Sexo',
    'Telefone',
    'E-mail',
    'Código Especialidade',
  ];
  const objectProps = [
    'CodMed',
    'NomeMed',
    'Genero',
    'Telefone',
    'Email',
    'CodEspec',
  ];

  return (
    <>
      <DashboardLayout name="medical" titlePage="Médicos">
        <Container>
          <Content>
            <ContentHeaderDashboard
              title="Médicos"
              getData={getData}
              handleOpenTable={handleOpenTable}
            />
            <ContentBody>
              <TableComponent
                isClinic={false}
                isOpen={isTableOpen}
                isLoading={isLoading}
                data={medics}
                objectProps={objectProps}
                headerTable={headerTable}
                handleModalEdic={handleModalEdit}
                handleDelete={handleRemoveMedic}
              />

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
                <CreateMedic
                  initialValue={{
                    medicName: '',
                    specCode: '',
                    phone: '',
                    email: '',
                    gender: 'masculino',
                  }}
                  handleSubmit={handleCreateMedic}
                  isOpen={isInsertionOpen}
                />
              </>
            </ContentBody>
          </Content>
        </Container>
      </DashboardLayout>
      <ModalCustom
        isOpen={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        icon={FaBriefcaseMedical}
        modalHeader={
          <Box>
            <Heading as="h1" fontSize="36px" color="white" mb="4.5px">
              Atualizar médicos
            </Heading>
            <Heading as="h6" fontSize="20px" color="white" mb="9.5px">
              {initialValues.medicName && initialValues.medicName}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {`${initialValues.email && initialValues.email} - ${initialValues.phone && initialValues.phone
                }`}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {initialValues.specCode && initialValues.specCode}
            </Heading>
          </Box>
        }
        modalBody={
          <CreateMedic
            initialValue={initialValues}
            quickInsert
            isUpdate
            handleSubmit={handleUpdateMedic}
            isOpen
          />
        }
      />
    </>
  );
};

export default Patients;
