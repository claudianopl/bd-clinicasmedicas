import { useCallback, useRef, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaClinicMedical, FaMicroscope } from 'react-icons/fa';
import { MdMedicalServices, MdPeopleOutline } from 'react-icons/md';
import { ImCalendar } from 'react-icons/im';
import { IoMdExit } from 'react-icons/io';
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

interface DashboardLayoutProps {
  name: 'clinic' | 'specialty' | 'medical' | 'patients' | 'schedule';
  titlePage: string;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  name,
  titlePage,
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const userInput = useRef('');

  const handleChange = useCallback(event => {
    userInput.current = event.target.value;
  }, []);

  const handleSearch = useCallback(() => {
    console.log(userInput);
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
              <Box mr={{ sm: '0.5rem', md: '1rem', lg: '6.375rem' }}>
                <Logo src="./logo.png" alt="<bd-clinicasmedicas/>" />
              </Box>
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
              marginTop: '135.94px',
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

              <div style={{ marginBottom: 400 }}>
                <Link href="/">
                  <Nav mt="10rem">
                    <IoMdExit size={30} />
                    <a>Sair</a>
                  </Nav>
                </Link>
              </div>
            </Flex>
          </Box>
        </Menu>
        <ContentMenu
          id="page-wrap"
          isActive={isOpenMenu}
          style={{ overflow: 'auto' }}
        >
          <ContentChildren style={{ marginTop: '135.94px' }}>
            {children}
          </ContentChildren>
        </ContentMenu>
      </div>
    </>
  );
};
