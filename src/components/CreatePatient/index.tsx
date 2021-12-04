import { Grid, GridItem, Spacer, Flex, Box, Select } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FaClinicMedical, FaMicroscope } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { VscTriangleDown } from 'react-icons/vsc';
import { BsFillFileEarmarkTextFill, BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import { MdMedicalServices } from 'react-icons/md';
import { AiFillIdcard } from 'react-icons/ai';
import { Collapse } from '@chakra-ui/react';
import InputText from '../InputText';
import { Container, ButtonSubmit, MaskStyles } from './styles';

import { schema } from './schema';
import TextMask from '../InputMask';

interface CreateClinicalProps {
  handleSubmit: (values, any) => void;
  isOpen: boolean;
  quickInsert?: boolean;
  initialValue: {
    patientName: string;
    birthDate: string;
    phone: string;
    email: string;
    gender: string;
    cpf: string;
  };
  isUpdate?: boolean;
}

const CreatePatient: React.FC<CreateClinicalProps> = ({
  handleSubmit,
  isOpen,
  quickInsert = false,
  initialValue,
  isUpdate = false,
}) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      {quickInsert === false && (
        <p>Aqui você pode inserir novas clínicas ao banco!</p>
      )}
      <Container quickInsert={quickInsert}>
        <Formik
          enableReinitialize
          initialValues={initialValue}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {formikProps => (
            <Form>
              <Grid w="100%" templateColumns="repeat(6, 1fr)" gap={6}>
                <GridItem colSpan={3}>
                  <InputText
                    name="patientName"
                    icon={BsPersonCircle}
                    placeholder="Nome do paciente"
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <TextMask
                    icon={FiMail}
                    mask="99/99/9999"
                    name="birthDate"
                    placeholder="Data de nascimento"
                  />
                </GridItem>

                <GridItem colSpan={1} className="gridItemClass">
                  <Select
                    paddingBottom="5px"
                    color="rgba(39, 39, 39, 0.5)"
                    borderColor="rgba(39, 39, 39, 0.2)"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.gender}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    icon={<VscTriangleDown />}
                    name="gender"
                    size="lg"
                    height="80px"
                    borderRadius="38px"
                    placeholder="Sexo"
                  >
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </Select>
                </GridItem>

                <GridItem colSpan={2}>
                  <InputText
                    name="phone"
                    icon={FiPhone}
                    placeholder="Telefone"
                  />
                </GridItem>

                <GridItem colSpan={2}>
                  <TextMask
                    disabled={isUpdate}
                    icon={FiMail}
                    mask="99999999999"
                    name="cpf"
                    placeholder="Insira o seu CPF"
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <InputText name="email" icon={FiMail} placeholder="E-mail" />
                </GridItem>

                <GridItem colSpan={6}>
                  <Flex>
                    <Spacer />
                    <Box>
                      <ButtonSubmit
                        type="submit"
                        disabled={
                          !(
                            formikProps.values.patientName !== '' &&
                            formikProps.values.birthDate !== '' &&
                            formikProps.values.phone !== '' &&
                            formikProps.values.email !== '' &&
                            formikProps.values.gender !== '' &&
                            formikProps.values.cpf !== ''
                          )
                        }
                      >
                        {isUpdate ? 'Atualizar' : 'Inserir'}
                      </ButtonSubmit>
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Collapse>
  );
};

export default CreatePatient;
