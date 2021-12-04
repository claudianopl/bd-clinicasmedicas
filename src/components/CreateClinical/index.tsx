import { Grid, GridItem, Spacer, Flex, Box } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FaClinicMedical } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { Collapse } from '@chakra-ui/react';
import InputText from '../InputText';
import InputMask from '../InputMask';
import { Container, ButtonSubmit } from './styles';

import { schema } from './schema';

interface CreateClinicalProps {
  handleSubmit: (values, any) => void;
  isOpen: boolean;
  quickInsert?: boolean;
}

const CreateClinical: React.FC<CreateClinicalProps> = ({
  handleSubmit,
  isOpen,
  quickInsert = false,
}) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      {quickInsert === false && (
        <p>Aqui você pode inserir novas clínicas ao banco!</p>
      )}
      <Container quickInsert={quickInsert}>
        <Formik
          initialValues={{
            clinicName: '',
            phone: '',
            email: '',
            address: '',
          }}
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
                <GridItem colSpan={6}>
                  <InputText
                    name="clinicName"
                    icon={FaClinicMedical}
                    placeholder="Nome da clínica"
                  />
                </GridItem>
                <GridItem colSpan={3} mr={3}>
                  <InputMask
                    mask="99999999999"
                    name="phone"
                    icon={FiPhone}
                    placeholder="Telefone"
                  />
                </GridItem>
                <GridItem colSpan={3} ml={3}>
                  <InputText name="email" icon={FiMail} placeholder="Email" />
                </GridItem>
                <GridItem colSpan={6}>
                  <InputText
                    name="address"
                    icon={IoLocationOutline}
                    placeholder="Rua Agostinho Morereira, 188, Boa Viagem"
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
                            formikProps.values.clinicName !== '' &&
                            formikProps.values.phone !== '' &&
                            formikProps.values.email !== '' &&
                            formikProps.values.address !== ''
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

export default CreateClinical;
