import { Grid, GridItem, Spacer, Flex, Box } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FaClinicMedical, FaMicroscope } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineHashtag } from 'react-icons/hi';
import { Collapse } from '@chakra-ui/react';
import InputText from '../InputText';
import { Container, ButtonSubmit } from './styles';

import { schema } from './schema';

interface CreateClinicalProps {
  handleSubmit: (values) => void;
  isOpen: boolean;
}

const CreateSpecialty: React.FC<CreateClinicalProps> = ({
  handleSubmit,
  isOpen,
}) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Container>
        <Formik
          initialValues={{
            specCode: '',
            specName: '',
            specDescription: '',
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
                    name="specCode"
                    icon={HiOutlineHashtag}
                    placeholder="Código da especialidade"
                  />
                </GridItem>
                <GridItem colSpan={3} mr={3}>
                  <InputText
                    name="specName"
                    icon={FaMicroscope}
                    placeholder="Nome da especialidade"
                  />
                </GridItem>

                <GridItem colSpan={6}>
                  <InputText
                    name="specDescription"
                    icon={BsFillFileEarmarkTextFill}
                    placeholder="Descrição da especialidade"
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
                            formikProps.values.specCode !== '' &&
                            formikProps.values.specName !== '' &&
                            formikProps.values.specDescription !== ''
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

export default CreateSpecialty;
