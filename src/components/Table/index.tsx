import { Collapse } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Td,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import theme from '../../styles/theme';

import {
  TableFooter,
  Container,
  ButtonFlexWrapper,
  FooterButtonsWrapper,
} from './styles';

type userTypeProps = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
};

interface tableComponentProps {
  objectProps: string[];
  headerTable: string[];
  data: userTypeProps[];
  handleOpenModal: (args: string) => void;
  isLoading?: boolean;
  isOpen: boolean;
}

export function TableComponent({
  data,
  objectProps,
  headerTable,
  handleOpenModal,
  isLoading,
  isOpen,
}: tableComponentProps): JSX.Element {
  const [itemOffset, setItemOffset] = useState(null);
  const [currentUsersInPage, setCurrentUsersInPage] = useState<userTypeProps[]>(
    []
  );

  const usersPerPage = 4;
  const maxNumberOfPages = Math.ceil(data.length / usersPerPage);
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
  );

  const threeDotsAtEnd = '...';

  async function setData(): Promise<void> {
    const endOffset = itemOffset + usersPerPage;
    setCurrentUsersInPage(data.slice(itemOffset, endOffset));
  }

  function handleOnPageChange(page): void {
    setItemOffset((page - 1) * usersPerPage);
  }

  function handlePageSkipChange(page): void {
    const smallerThanMaxNumberOfPages = page - 1 < maxNumberOfPages;
    const greaterThanOne = page >= 1;

    if (smallerThanMaxNumberOfPages && greaterThanOne) {
      setItemOffset((page - 1) * usersPerPage);
    }
  }

  function refinedValue(userObject: string): string {
    if (userObject.length > 26) {
      return userObject.substring(0, 26) + threeDotsAtEnd;
    }

    return userObject;
  }
  useEffect(() => {
    setData();
  }, [itemOffset, data]);
  return (
    <Collapse in={isOpen} animateOpacity>
      <Container>
        <Box width="100%">
          <Table
            borderTopRadius="1rem"
            width="100%"
            variant="simple"
            boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
            paddingTop="1rem"
          >
            <Thead height="80px">
              <Tr background={`${theme.colors.aquaMarine}`}>
                {headerTable.map(TableItem => (
                  <Th
                    id="thRow"
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
              {isLoading ? (
                <Tr>
                  <Td bg="white" colspan={headerTable.length}>
                    <Flex
                      width="100%"
                      alignContent="center"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom="16px"
                    >
                      <Spinner
                        size="xl"
                        alignItems="center"
                        color={theme.colors.aquaMarine}
                      />
                    </Flex>
                  </Td>
                </Tr>
              ) : (
                <>
                  {Array.from({ length: usersPerPage }).map((_, index) => (
                    <Tr id="thHoverFather">
                      {objectProps.map(props => (
                        <Td
                          id="thHoverChild"
                          cursor="pointer"
                          onClick={() =>
                            handleOpenModal(currentUsersInPage[index].id)
                          }
                          height="81px"
                          paddingTop="32px"
                          paddingBottom="32px"
                          textTransform="none"
                          fontFamily="Nunito"
                          fontWeight="bold"
                          fontSize="20px"
                        >
                          {currentUsersInPage[index] ? (
                            <div>
                              {refinedValue(currentUsersInPage[index][props])}
                            </div>
                          ) : null}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </>
              )}
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
                <FooterButtonsWrapper>
                  <button
                    key={page}
                    type="button"
                    onClick={e => handleOnPageChange(page)}
                    className={
                      page === currentPage ? 'paginationItemActive' : null
                    } // a tratar
                  >
                    {page}
                  </button>
                </FooterButtonsWrapper>
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
    </Collapse>
  );
}
