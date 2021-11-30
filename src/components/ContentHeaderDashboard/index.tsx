import { ImEye } from 'react-icons/im';
import { useState } from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { string } from 'yup';
import {
  Container,
  Content,
  ContentHeader,
  ContentBody,
  ButtonFlexWrapper,
} from '../../styles/pages/home';
import { DashboardLayout } from '../DeashboardLayout.tsx';
import { ClinicaViewButton } from '../ClinicaViewButton';
import theme from '../../styles/theme';
import { server } from '../../mocks/clinic';

interface ContentHeaderDashboardProps {
  handleOpenTable: () => void;
  getData: () => Promise<void>;
  title: string;
}

const ContentHeaderDashboard: React.FC<ContentHeaderDashboardProps> = ({
  getData,
  handleOpenTable,
  title,
}) => {
  return (
    <ContentHeader>
      <h1>{title}</h1>
      <ButtonFlexWrapper>
        <ClinicaViewButton
          icon={<ImEye size={30} color={`${theme.colors.darkGreenBlue}`} />}
          text="Visualização"
          onClickFunction={handleOpenTable}
        />
        <button id="Icon_open-reload" type="button" onClick={getData}>
          <IoMdRefresh size={30} color={`${theme.colors.white}`} />
        </button>
      </ButtonFlexWrapper>
    </ContentHeader>
  );
};

export default ContentHeaderDashboard;
