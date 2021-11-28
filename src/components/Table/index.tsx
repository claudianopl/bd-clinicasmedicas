import { Table, Thead, Tbody, Tr, Th, Box } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import theme from '../../styles/theme';
import {
  TableFooter,
  Container,
  ButtonFlexWrapper,
  ButtonWrapper,
} from './styles';

interface userTypeProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface tableComponentProps {
  userProps: string[];
  userColumnValues: string[];
  receivedUserData: userTypeProps[];
}

export function TableComponent({
  receivedUserData,
  userProps,
  userColumnValues,
}: tableComponentProps): JSX.Element {
  const [itemOffset, setItemOffset] = useState(null);
  const [currentItemsInPage, setCurrentItemsInPage] = useState([]);

  const usersPerPage = 4;
  const maxNumberOfPages = Math.ceil(receivedUserData.length / usersPerPage);
  const firstPage = 1;
  const howManyDisplayedButtons = 5;
  const maxFirst = Math.max(
    maxNumberOfPages - (howManyDisplayedButtons - 1),
    1
  );
  const currentPage = itemOffset ? itemOffset / usersPerPage + 1 : 1;
  const pressedButtonDisplayedAtMiddle = (howManyDisplayedButtons - 1) / 2;
  const first = Math.min(
    Math.max(currentPage - pressedButtonDisplayedAtMiddle, 1),
    maxFirst
  ); // garante que a paginação da esquerda nunca será negativa

  useEffect(() => {
    async function setData(): Promise<void> {
      const endOffset = itemOffset + usersPerPage;
      setCurrentItemsInPage(receivedUserData.slice(itemOffset, endOffset));
    }
    setData();
  }, [itemOffset, receivedUserData]);

  function handleOnPageChange(page): void {
    setItemOffset((page - 1) * usersPerPage);
  }

  function handlePageSkipChange(page): void {
    const smallerThanMaxNumberOfPages = page - 1 < maxNumberOfPages;
    const greaterThanOne = page >= 1;

    console.log(greaterThanOne);
    console.log(page);
    if (smallerThanMaxNumberOfPages && greaterThanOne) {
      setItemOffset((page - 1) * usersPerPage);
    }
  }

  return (
    <Container>
      <Box width="1380px" borderRadius="36px">
        <Table
          width="100%"
          background={`${theme.colors.aquaMarine}`}
          variant="simple"
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
          borderRadius="8px"
          paddingTop="1rem"
        >
          <Thead height="80px">
            <Tr>
              {userColumnValues.map(TableItem => (
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
            {Array.from({ length: usersPerPage }).map((_, index) => (
              <Tr key={userProps[index]}>
                {userProps.map(props => (
                  <Th
                    height="81px"
                    paddingTop="32px"
                    paddingBottom="32px"
                    textTransform="none"
                    background="white"
                    fontFamily="Nunito"
                    fontWeight="bold"
                    fontSize="20px"
                    color={`${theme.colors.black}`}
                  >
                    {currentItemsInPage[index]
                      ? currentItemsInPage[index][props]
                      : null}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <TableFooter>
        <ButtonFlexWrapper>
          <button
            type="button"
            onClick={() => handlePageSkipChange(currentPage - 1)}
          >
            <HiChevronLeft
              size={30}
              color={
                currentPage === firstPage
                  ? `${theme.colors.paleGrey}`
                  : `${theme.colors.steelGrey}`
              }
            />
          </button>
          {Array.from({
            length: Math.min(howManyDisplayedButtons, maxNumberOfPages),
          })
            .map((_, index) => index + first)
            .map(page => (
              <ButtonWrapper>
                <button
                  type="button"
                  onClick={e => handleOnPageChange(page)}
                  className={
                    page === currentPage ? 'paginationItemActive' : null
                  } // a tratar
                >
                  {page}
                </button>
              </ButtonWrapper>
            ))}
          <button
            type="button"
            onClick={() => handlePageSkipChange(currentPage + 1)}
          >
            <HiChevronRight
              size={30}
              color={
                currentPage === maxNumberOfPages
                  ? `${theme.colors.paleGrey}`
                  : `${theme.colors.steelGrey}`
              }
            />
          </button>
        </ButtonFlexWrapper>
      </TableFooter>
    </Container>
  );
}
