import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import { Container } from './styles';

interface user {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

export function TableComponent(): JSX.Element {
  const tableColumnValues = [
    'Código',
    'Nome',
    'Endereço',
    'Telefone',
    'E-mail',
  ];

  const userProps = ['id', 'name', 'address', 'phone', 'email'];

  const usersData = [
    {
      id: '123213',
      name: 'marcos',
      address: 'da puta quiu pariu',
      phone: '12313313213',
      email: 'marcosninja@gmail.com',
    },
    {
      id: '321798321',
      name: 'craudio',
      address: 'CU rado',
      phone: '32423213',
      email: 'Craudioninja@gmail.com',
    },
    {
      id: '23131213',
      name: 'jessy',
      address: 'jão carlos',
      phone: '23213421',
      email: 'jessycarla@gmail.com',
    },
    {
      id: '7687876',
      name: 'carla',
      address: 'rua dos loucos',
      phone: '66342344',
      email: 'carlacruz@gmail.com',
    },
  ];

  const [users, setUsers] = useState<user[]>([]);
  const [tableColumn, setTableColumn] = useState<string[]>([]);

  useEffect(() => {
    setUsers(usersData);
    setTableColumn(tableColumnValues);
    console.log(users);
  }, []);

  return (
    <Container>
      <Box w="100%" borderRadius="36px">
        <Table
          background={`${theme.colors.aquaMarine}`}
          variant="simple"
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
          borderRadius="8px"
          paddingTop="1rem"
        >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead height="80px">
            <Tr>
              {tableColumn.map(TableItem => (
                <Th
                  textTransform="capitalize"
                  fontSize="20px"
                  fontWeight="bold"
                  fontFamily="Nunito"
                  color={`${theme.colors.white}`}
                >
                  <span>{TableItem}</span>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {users.map((item, index) => (
              <Tr key={item.id}>
                {userProps.map(props => (
                  <Th
                    textTransform="none"
                    background="white"
                    fontFamily="Nunito"
                    fontWeight="bold"
                    fontSize="20px"
                    color={`${theme.colors.black}`}
                  >
                    {users[index][props]}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
        ;
      </Box>
    </Container>
  );
}
