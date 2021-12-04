import { api } from '../../api';

interface getAllClinicsProps {
  CodCli: number;
  NomeCli: string;
  Endereco: string;
  Telefone: string;
  Email: string;
}

interface createCPatientProps {
  cpfPac: string;
  nomePac: string;
  dataNascimento: string;
  genero: string;
  telefone: string;
  email: string;
}

export const getAllPatients = async (): Promise<any> => {
  const res = await api.get('/api/get/pacientes');

  return res;
};

export const createPatients = async (
  value: createCPatientProps
): Promise<any> => {
  const res = await api.post('/api/insert/paciente', value);

  return res;
};

export const updatePatients = async (
  value: createCPatientProps
): Promise<any> => {
  const res = await api.put(`/api/update/paciente/`, value);

  return res;
};

export const removePatients = async (id: string): Promise<any> => {
  const res = await api.delete(`/api/delete/paciente/${id}`);

  return res;
};
