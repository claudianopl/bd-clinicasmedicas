import { api } from '../../api';

interface CreateSpecialtyProps {
  codEspec: string;
  nomeEspec: string;
  descricao: string;
}

export const getAllSpecialty = async (): Promise<any> => {
  const res = await api.get('/api/get/especialidades');

  return res;
};

export const removeSpecialty = async (id: string): Promise<any> => {
  const res = await api.delete(`/api/delete/especialidade/${id}`);

  return res;
};

export const createSpecialty = async (
  values: CreateSpecialtyProps
): Promise<any> => {
  const res = await api.post('/api/insert/especialidade', values);

  return res;
};

export const updateSpecialty = async (
  values: CreateSpecialtyProps
): Promise<any> => {
  const res = await api.put('/api/update/especialidade', values);

  return res;
};
