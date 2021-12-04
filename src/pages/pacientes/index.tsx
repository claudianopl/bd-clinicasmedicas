import { useEffect, useState, useCallback } from 'react';
import { ImEye } from 'react-icons/im';
import { Heading, Box } from '@chakra-ui/react';
import { IoMdRefresh } from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { Container, Content, ContentBody } from '../../styles/pages/home';
import { DashboardLayout } from '../../components/DeashboardLayout.tsx';
import { ClinicaViewButton } from '../../components/ClinicaViewButton';
import theme from '../../styles/theme';
import { server } from '../../mocks/clinic';
import ContentHeaderDashboard from '../../components/ContentHeaderDashboard';
import { TableComponent } from '../../components/Table';
import CreatePatient from '../../components/CreatePatient';
import CreateClinical from '../../components/CreateClinical';
import {
  createPatients,
  getAllPatients,
  removePatients,
  updatePatients,
} from '../../Api/Services/Patient';
import ModalCustom from '../../components/ModalCustom';

const Patients: React.FC = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [initialValues, setInitialValues] = useState({
    patientName: '',
    birthDate: '',
    phone: '',
    email: '',
    gender: 'masculino',
    cpf: '',
  });
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenTable = (): void => {
    setIsTableOpen(currentOpenTable => !currentOpenTable);
  };

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await getAllPatients();

      setPatients(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleModalPatient = useCallback(object => {
    console.log(object);
    const [dateSting] = object.DataNascimento.split('T');
    const [year, month, date] = dateSting.split('-');

    setInitialValues({
      patientName: object.NomePac,
      birthDate: `${date}/${month}/${year}`,
      phone: object.Telefone,
      email: object.Email,
      gender: object.Genero === 'M' ? 'Masculino' : 'Feminino',
      cpf: object.CpfPaciente,
    });
    setOpenModalUpdate(true);
  }, []);

  const handleUpdatePatient = useCallback(async (values, resetForm) => {
    const [day, month, year] = values.birthDate.split('/');
    const object = {
      cpfPac: values.cpf,
      nomePac: values.patientName,
      dataNascimento: `${year}-${month}-${day}`,
      genero: values.gender === 'Masculino' ? 'M' : 'F',
      telefone: values.phone,
      email: values.email,
    };

    try {
      const response = await updatePatients(object);
      console.log(response);
      // resetForm();
      setOpenModalUpdate(false);
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemovePatient = useCallback(async object => {
    try {
      await removePatients(object.CpfPaciente);
      getData();
    } catch {
      console.log('error');
    }
  }, []);

  const handleCreateClinical = useCallback(async (values, resetForm) => {
    const [day, month, year] = values.birthDate.split('/');
    const object = {
      cpfPac: values.cpf,
      nomePac: values.patientName,
      dataNascimento: `${year}-${month}-${day}`,
      genero: values.gender === 'Masculino' ? 'M' : 'F',
      telefone: values.phone,
      email: values.email,
    };

    try {
      await createPatients(object);
      resetForm();
      getData();
    } catch (error) {
      console.log(error);
    }
    console.log(object);
  }, []);

  const handleOpenInsertionForm = (): void => {
    setIsInsertionOpen(currentInsertionOpen => !currentInsertionOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  const headerTable = [
    'CPF',
    'Nome',
    'Sexo',
    'Data de nascimento',
    'Telefone',
    'E-mail',
  ];
  const objectProps = [
    'CpfPaciente',
    'NomePac',
    'Genero',
    'DataNascimento',
    'Telefone',
    'Email',
  ];

  return (
    <>
      <DashboardLayout getData={getData} name="patients" titlePage="Pacientes">
        <Container>
          <Content>
            <ContentHeaderDashboard
              title="Pacientes"
              getData={getData}
              handleOpenTable={handleOpenTable}
            />
            <ContentBody>
              <TableComponent
                isClinic={false}
                isOpen={isTableOpen}
                isLoading={isLoading}
                data={patients}
                objectProps={objectProps}
                headerTable={headerTable}
                handleModalEdic={handleModalPatient}
                handleDelete={handleRemovePatient}
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
                <CreatePatient
                  initialValue={{
                    patientName: '',
                    birthDate: '',
                    phone: '',
                    email: '',
                    gender: 'masculino',
                    cpf: '',
                  }}
                  handleSubmit={handleCreateClinical}
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
        icon={MdPeopleOutline}
        modalHeader={
          <Box>
            <Heading as="h1" fontSize="36px" color="white" mb="4.5px">
              Atualizar pacientes
            </Heading>
            <Heading as="h6" fontSize="20px" color="white" mb="9.5px">
              {initialValues.patientName && initialValues.patientName}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {`${initialValues.email && initialValues.email} - ${initialValues.phone && initialValues.phone
                }`}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {`${initialValues.birthDate && initialValues.birthDate} - ${initialValues.gender && initialValues.gender
                }`}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {initialValues.cpf && initialValues.cpf}
            </Heading>
          </Box>
        }
        modalBody={
          <CreatePatient
            initialValue={initialValues}
            quickInsert
            isUpdate
            handleSubmit={handleUpdatePatient}
            isOpen
          />
        }
      />
    </>
  );
};

export default Patients;
