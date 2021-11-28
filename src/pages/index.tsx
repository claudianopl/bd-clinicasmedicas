import { Form, Formik } from 'formik';
import { useCallback } from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import CreateClinical from '../components/CreateClinical';
import { DashboardLayout } from '../components/DeashboardLayout.tsx';
import InputText from '../components/InputText';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
const Home: React.FC = () => {
  const handleCreateClinical = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <DashboardLayout name="clinic" titlePage="Clínica">
      <CreateClinical handleSubmit={handleCreateClinical} />
    </DashboardLayout>
  );
};

export default Home;
