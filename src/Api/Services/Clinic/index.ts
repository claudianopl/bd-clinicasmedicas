import { api } from '../../api';

interface getAllClinicsProps {
  CodCli: number;
  NomeCli: string;
  Endereco: string;
  Telefone: string;
  Email: string;
}

export const getAllClinics = async (): Promise<any> => {
  const res = await api.get('/api/get/clinicas');

  return res;
};
