import { useEffect, useState, useCallback } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { Heading, Box } from '@chakra-ui/react';

import { FaMicroscope } from 'react-icons/fa';
import { Container, Content, ContentBody } from '../../styles/pages/home';
import { DashboardLayout } from '../../components/DeashboardLayout.tsx';
import { ClinicaViewButton } from '../../components/ClinicaViewButton';
import theme from '../../styles/theme';
import ContentHeaderDashboard from '../../components/ContentHeaderDashboard';
import { TableComponent } from '../../components/Table';
import CreateSpecialty from '../../components/CreateEspecialy';
import ModalCustom from '../../components/ModalCustom';
import {
  createSpecialty,
  getAllSpecialty,
  removeSpecialty,
  updateSpecialty,
} from '../../Api/Services/Specialty';

const Specialty: React.FC = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [isInsertionOpen, setIsInsertionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [specialty, setSpecialty] = useState([]);
  const [initialValues, setInitialValues] = useState({
    specCode: '',
    specName: '',
    specDescription: '',
  });
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenTable = (): void => {
    setIsTableOpen(currentOpenTable => !currentOpenTable);
  };

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await getAllSpecialty();

      setSpecialty(response.data);
    } catch {
      console.log('error');
    }
    setIsLoading(false);
  };

  const handleModalEdic = useCallback(object => {
    setInitialValues({
      specCode: object.CodEspec,
      specName: object.NomeEspec,
      specDescription: object.Descricao,
    });
    setOpenModalUpdate(true);
  }, []);

  const handleCreateClinical = useCallback(async (values, resetForm) => {
    try {
      const object = {
        codEspec: values.specCode,
        nomeEspec: values.specName,
        descricao: values.specDescription,
      };

      await createSpecialty(object);
      resetForm();
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleUpdateSpecialty = useCallback(async (values, resetForm) => {
    try {
      const object = {
        codEspec: values.specCode,
        nomeEspec: values.specName,
        descricao: values.specDescription,
      };

      await updateSpecialty(object);
      resetForm();
      setOpenModalUpdate(false);
      getData();
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  }, []);

  const handleDeleteSpeciality = useCallback(async object => {
    try {
      await removeSpecialty(object.CodEspec);
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

  const headerTable = ['Código', 'Nome', 'Descrição'];
  const objectProps = ['CodEspec', 'NomeEspec', 'Descricao'];

  return (
    <>
      <DashboardLayout name="specialty" titlePage="Especialidade">
        <Container>
          <Content>
            <ContentHeaderDashboard
              title="Especialidades"
              getData={getData}
              handleOpenTable={handleOpenTable}
            />
            <ContentBody>
              <TableComponent
                isClinic={false}
                isOpen={isTableOpen}
                isLoading={isLoading}
                data={specialty}
                objectProps={objectProps}
                headerTable={headerTable}
                handleModalEdic={handleModalEdic}
                handleDelete={handleDeleteSpeciality}
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
                <CreateSpecialty
                  initialValue={{
                    specCode: '',
                    specName: '',
                    specDescription: '',
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
        icon={FaMicroscope}
        modalHeader={
          <Box>
            <Heading as="h1" fontSize="36px" color="white" mb="4.5px">
              Atualizar especialidade
            </Heading>
            <Heading as="h6" fontSize="20px" color="white" mb="9.5px">
              {initialValues.specName && initialValues.specName}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {initialValues.specDescription && initialValues.specDescription}
            </Heading>
            <Heading as="h6" fontSize="19px" color="white" mb="9.5px">
              {initialValues.specCode && initialValues.specCode}
            </Heading>
          </Box>
        }
        modalBody={
          <CreateSpecialty
            initialValue={initialValues}
            quickInsert
            isUpdate
            handleSubmit={handleUpdateSpecialty}
            isOpen
          />
        }
      />
    </>
  );
};

export default Specialty;
