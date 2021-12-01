import { Grid, GridItem, Spacer, Flex, Box, Select } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FaClinicMedical, FaMicroscope } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { VscTriangleDown } from 'react-icons/vsc';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineHashtag } from 'react-icons/hi';
import { Collapse } from '@chakra-ui/react';
import InputText from '../InputText';
import { Container, ButtonSubmit, selectChildrenStyles } from './styles';

import { schema } from './schema';

interface CreateClinicalProps {
  handleSubmit: (values) => void;
  isOpen: boolean;
}

const CreateMedic: React.FC<CreateClinicalProps> = ({
  handleSubmit,
  isOpen,
}) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Container>
        <Formik
          initialValues={{
            medicName: '',
            specCode: '',
            phone: '',
            email: '',
            gender: 'masculino',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={values => {
            handleSubmit(values);
          }}
        >
          {formikProps => (
            <Form>
              <Grid w="100%" templateColumns="repeat(6, 1fr)" gap={6}>
                <GridItem colSpan={3}>
                  <InputText
                    name="medicName"
                    icon={HiOutlineHashtag}
                    placeholder="Nome do médico"
                  />
                </GridItem>
                <GridItem colSpan={2} mr={3}>
                  <InputText
                    name="specCode"
                    icon={FaMicroscope}
                    placeholder="Código da especialidade"
                  />
                </GridItem>

                <GridItem colSpan={1} className="gridItemClass">
                  <Select
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

                <GridItem colSpan={3}>
                  <InputText
                    name="phone"
                    icon={BsFillFileEarmarkTextFill}
                    placeholder="Telefone"
                  />
                </GridItem>
                <GridItem colSpan={3}>
                  <InputText
                    name="email"
                    icon={BsFillFileEarmarkTextFill}
                    placeholder="E-mail"
                  />
                </GridItem>

                <GridItem colSpan={6}>
                  <Flex>
                    <Spacer />
                    <Box>
                      <ButtonSubmit
                        type="submit"
                        disabled={
                          !(
                            formikProps.values.medicName !== '' &&
                            formikProps.values.specCode !== '' &&
                            formikProps.values.phone !== '' &&
                            formikProps.values.email !== '' &&
                            formikProps.values.gender !== ''
                          )
                        }
                      >
                        Inserir
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

export default CreateMedic;
