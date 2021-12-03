import { api } from '../../api';

interface getAllClinicsProps {
  CodCli: number;
  NomeCli: string;
  Endereco: string;
  Telefone: string;
  Email: string;
}

interface createClinicProps {
  nomeCli: string;
  endereco: string;
  telefone: string;
  email: string;
}

export const getAllClinics = async (): Promise<any> => {
  const res = await api.get('/api/get/clinicas');

  return res;
};

export const createClinic = async (value: createClinicProps): Promise<any> => {
  const res = await api.post('/api/insert/clinica', value);

  return res;
};

export const getOneClinic = async (id: string): Promise<any> => {
  const res = await api.get(`/api/get/medicosByClinica/${id}`);

  return res;
};
