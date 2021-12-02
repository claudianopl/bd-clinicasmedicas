import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { IconBaseProps } from 'react-icons';
import { opacify, saturate } from 'polished';
import { CgClose } from 'react-icons/cg';
import { FaClinicMedical } from 'react-icons/fa';
import theme from '../../styles/theme';

interface ModalCustomProps {
  isOpen: boolean;
  onClose: () => void;
  modalBody?: JSX.Element;
  modalHeader: JSX.Element;
  icon?: React.ComponentType<IconBaseProps>;
}

const ModalCustom: React.FC<ModalCustomProps> = ({
  isOpen,
  onClose,
  modalBody,
  modalHeader,
  icon: Icon,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth="980px" borderRadius="15px">
        <ModalHeader bg={theme.colors.aquaMarine} borderTopRadius="15px">
          <Grid
            margin="51px 72px 31px 72px"
            templateColumns="repeat(12, 1fr)"
            gap={5}
          >
            <GridItem colSpan={2}>
              <Flex
                alignItems="center"
                justifyContent="center"
                width="115px"
                height="100%"
              >
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  height="115px"
                  width="114px"
                  borderRadius="57px"
                  bg="rgba(255, 255, 255, 0.3)"
                >
                  {Icon && <Icon size={62} color="white" />}
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={9}>{modalHeader}</GridItem>
            <GridItem colSpan={1}>
              <Box>
                <IconButton
                  variant="none"
                  aria-label="Close"
                  onClick={onClose}
                  outline="0"
                  icon={<CgClose color="white" size={27} />}
                />
              </Box>
            </GridItem>
          </Grid>
        </ModalHeader>

        <ModalBody mb="84px">{modalBody}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalCustom;
