import { useCallback, useRef, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaClinicMedical, FaMicroscope } from 'react-icons/fa';
import { MdMedicalServices, MdPeopleOutline } from 'react-icons/md';
import { ImCalendar } from 'react-icons/im';
import { IoMdArrowDropdown, IoMdExit } from 'react-icons/io';
import { FaHandPointLeft } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

import {
  Grid,
  GridItem,
  Flex,
  Box,
  IconButton,
  Button,
  Center,
  Heading,
  Spacer,
  useDisclosure,
  Menu as MenuChakra,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import {
  Header,
  FiMenuIcon,
  Logo,
  ContainerSearch,
  IconSearch,
  TextInput,
  ButtonComponents,
  P,
  Nav,
  ContentChildren,
  ContentMenu,
} from './styles';
import ModalCustom from '../ModalCustom';
import theme from '../../styles/theme';
import CreateClinical from '../CreateClinical';
import CreateEspecialy from '../CreateEspecialy';
import CreateMedic from '../CreateMedic';
import CreatePatient from '../CreatePatient';

interface DashboardLayoutProps {
  name: 'clinic' | 'specialty' | 'medical' | 'patients' | 'schedule';
  titlePage: string;
  children: React.ReactNode;
}

interface WhatFormProps {
  name: string;
  form: 0 | 1 | 2 | 3 | 4;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  name,
  titlePage,
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [whatForm, setWahtForm] = useState<WhatFormProps>({
    name: 'Selecione…',
    form: 0,
  });
  const userInput = useRef('');

  const handleChange = useCallback(event => {
    userInput.current = event.target.value;
  }, []);

  const handleSearch = useCallback(() => {
    console.log(userInput);
  }, []);

  const handleCreateClinical = useCallback(values => {
    console.log(values);
  }, []);

  const handleCreateEspecialy = useCallback(values => {
    console.log(values);
  }, []);

  const handleCreateMedic = useCallback(values => {
    console.log(values);
  }, []);

  const handleCreatePatient = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <>
      <Head>
        <title>{`<bd-clinicasmedicas /> | ${titlePage}`}</title>
      </Head>
      <Header>
        <Grid h="100%" templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={{ sm: 5, md: 5, lg: 4 }} marginRight="7vw">
            <Flex alignItems="center" w="100%" h="100%">
              <Flex
                height="100%"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                color="#1c1c1c"
                mr={{ sm: '0.5rem', md: '1rem', lg: '6.375rem' }}
              >
                <Heading fontSize="30px" mb="5px">
                  {'<bd-clinicasmedicas/>'}
                </Heading>
                <p style={{ fontFamily: 'WorkSans', fontSize: '16px' }}>
                  Gerenciador de clínicas médicas
                </p>
              </Flex>
              <Box>
                <FiMenuIcon
                  onClick={() =>
                    setIsOpenMenu(currentOpenMenu => !currentOpenMenu)
                  }
                  size={30}
                />
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            display={{ sm: 'none', md: 'none', lg: 'grid' }}
            colSpan={{ lg: 4 }}
            marginRight="4vw"
          >
            <ContainerSearch w="auto" alignItems="center">
              <IconButton
                onClick={() => handleSearch()}
                mr={{ sm: '16px', md: '20px', lg: '25px' }}
                variant="unstyled"
                justifyContent="left"
                alignItems="left"
                aria-label="Procurar"
                icon={<IconSearch size="100%" />}
              />
              <Box w="auto">
                <TextInput
                  onChange={handleChange}
                  variant="unstyled"
                  placeholder="Procurar"
                  size={['2xl', 'xl', 'lg', 'md', 'sm']}
                  w="100%"
                />
              </Box>
            </ContainerSearch>
          </GridItem>
          <GridItem colSpan={{ sm: 5, md: 5, lg: 3 }} marginRight="3vw">
            <Flex h="100%" w="100%" justifyContent="end" alignItems="center">
              <ButtonComponents
                maxW="294px"
                variant="none"
                borderRadius="38px"
                bg="#53ddbd"
                color="white"
                onClick={onOpen}
                rightIcon={
                  <BsFillLightningChargeFill color="white" size="18px" />
                }
              >
                <P fontSize={{ sm: '0.8rem', md: '0.8rem', lg: '1.4375rem' }}>
                  Inserção rápida
                </P>
              </ButtonComponents>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ sm: 2, md: 2, lg: 1 }}>
            <Flex w="100%" h="100%" justifyContent="end" alignItems="center">
              <Heading
                as="h3"
                fontSize="1.6875rem"
                fontFamily="Work Sans"
                color="#53ddbd"
                style={{
                  letterSpacing: '1.35px',
                }}
              >
                Olá, Nome!
              </Heading>
            </Flex>
          </GridItem>
        </Grid>
      </Header>
      <div id="outer-container" style={{ height: '100%' }}>
        <Menu
          pageWrapId="page-wrap"
          isOpen={isOpenMenu}
          disableCloseOnEsc
          noOverlay
          disableAutoFocus
          disableOverlayClick
          customBurgerIcon={false}
          outerContainerId="outer-container"
          width="25rem"
          styles={{
            bmMenuWrap: {
              boxShadow: '2px 3px 6px 0 rgba(39, 39, 39, 0.2)',
              background: 'white',
              height: 'calc(100% - 135.94px)',
              marginTop: '136px',
            },
          }}
        >
          <Box
            style={{
              width: '100%',
              height: '100%',
              paddingRight: '4.313rem',
            }}
          >
            <Flex direction="column">
              <Link href="/">
                <Nav isActive={name === 'clinic'} mt="3rem">
                  <FaClinicMedical size={30} />
                  <a>Clínicas</a>
                </Nav>
              </Link>

              <Link href="/especialidades">
                <Nav isActive={name === 'specialty'} mt="1rem">
                  <FaMicroscope size={30} />
                  <a>Especialidades</a>
                </Nav>
              </Link>

              <Link href="/medicos">
                <Nav isActive={name === 'medical'} mt="1rem">
                  <MdMedicalServices size={30} />
                  <a>Médicos</a>
                </Nav>
              </Link>

              <Link href="/pacientes">
                <Nav isActive={name === 'patients'} mt="1rem">
                  <MdPeopleOutline size={30} />
                  <a>Pacientes</a>
                </Nav>
              </Link>

              <Link href="/">
                <Nav isActive={name === 'schedule'} mt="1rem">
                  <ImCalendar size={30} />
                  <a>Agendas</a>
                </Nav>
              </Link>

              <Link href="/">
                <Nav mt="10rem">
                  <IoMdExit size={30} />
                  <a>Sair</a>
                </Nav>
              </Link>
            </Flex>
          </Box>
        </Menu>
        <ContentMenu id="page-wrap" isActive={isOpenMenu}>
          <ContentChildren style={{ marginTop: '135.94px' }}>
            {children}
          </ContentChildren>
        </ContentMenu>
      </div>
      <ModalCustom
        isOpen={isOpen}
        onClose={onClose}
        icon={BsFillLightningChargeFill}
        modalHeader={
          <Box>
            <Heading as="h1" mb="4.5px" fontSize="32px" color="white">
              Inserção rápida
            </Heading>
            <Heading color="white" as="h6" mb="14px" size="20px">
              Selecione abaixo o que deseja inserir no sistema para iniciar:
            </Heading>
            <Box>
              <MenuChakra>
                <MenuButton
                  width="300px"
                  height="64px"
                  borderRadius="38px"
                  bg="white"
                  fontFamily="Nunito"
                  fontSize="22px"
                  style={{ letterSpacing: '1.3px' }}
                  color={theme.colors.aquaMarine}
                  as={Button}
                  rightIcon={
                    <IoMdArrowDropdown
                      color={theme.colors.aquaMarine}
                      size={21}
                      style={{ marginLeft: '75px' }}
                    />
                  }
                >
                  {whatForm.name}
                </MenuButton>
                <MenuList mt="-8px" ml="21px">
                  {whatForm.form !== 0 && (
                    <MenuItem
                      onClick={() =>
                        setWahtForm({
                          name: 'Selecione…',
                          form: 0,
                        })
                      }
                    >
                      Selecione…
                    </MenuItem>
                  )}
                  {whatForm.form !== 1 && (
                    <MenuItem
                      onClick={() =>
                        setWahtForm({
                          name: 'Clínicas',
                          form: 1,
                        })
                      }
                    >
                      Clínicas
                    </MenuItem>
                  )}
                  {whatForm.form !== 2 && (
                    <MenuItem
                      onClick={() =>
                        setWahtForm({
                          name: 'Especialidades',
                          form: 2,
                        })
                      }
                    >
                      Especialidades
                    </MenuItem>
                  )}
                  {whatForm.form !== 3 && (
                    <MenuItem
                      onClick={() =>
                        setWahtForm({
                          name: 'Médicos',
                          form: 3,
                        })
                      }
                    >
                      Médicos
                    </MenuItem>
                  )}
                  {whatForm.form !== 4 && (
                    <MenuItem
                      onClick={() =>
                        setWahtForm({
                          name: 'Pacientes',
                          form: 4,
                        })
                      }
                    >
                      Pacientes
                    </MenuItem>
                  )}
                </MenuList>
              </MenuChakra>
            </Box>
          </Box>
        }
        modalBody={
          <Flex width="100%" alignItems="center" justifyContent="center">
            {whatForm.form === 0 && (
              <Flex alignItems="center" flexDirection="column">
                <FaHandPointLeft
                  style={{ transform: 'rotate(50deg)' }}
                  size={271}
                  color="rgba(39, 39, 39, 0.2)"
                />
                <Heading
                  mt="16px"
                  textAlign="center"
                  width="486px"
                  fontSize="36px"
                  color="rgba(39, 39, 39, 0.2)"
                >
                  Escolha uma opção acima para iniciar a inserção rápida
                </Heading>
              </Flex>
            )}
            {whatForm.form === 1 && (
              <Box width="100%">
                <CreateClinical
                  quickInsert
                  handleSubmit={handleCreateClinical}
                  isOpen
                />
              </Box>
            )}
            {whatForm.form === 2 && (
              <Box width="100%">
                <CreateEspecialy
                  quickInsert
                  handleSubmit={handleCreateEspecialy}
                  isOpen
                />
              </Box>
            )}
            {whatForm.form === 3 && (
              <Box width="100%">
                <CreateMedic
                  quickInsert
                  handleSubmit={handleCreateMedic}
                  isOpen
                />
              </Box>
            )}
            {whatForm.form === 4 && (
              <Box width="100%">
                <CreatePatient
                  quickInsert
                  handleSubmit={handleCreatePatient}
                  isOpen
                />
              </Box>
            )}
          </Flex>
        }
      />
    </>
  );
};

export default DashboardLayout;
