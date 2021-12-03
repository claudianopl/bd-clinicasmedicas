import { api } from '../../api';

interface CreateSpecialtyProps {
  nomeMed: string;
  genero: string;
  telefone: string;
  email: string;
  codEspec: string;
}

export const getAllMedic = async (): Promise<any> => {
  const res = await api.get('/api/get/medicos');

  return res;
};

export const createMedic = async (
  values: CreateSpecialtyProps
): Promise<any> => {
  const res = await api.post('/api/insert/medico', values);

  return res;
};

export const updateMedic = async (
  values: CreateSpecialtyProps
): Promise<any> => {
  const res = await api.put('/api/update/medico', values);

  return res;
};

export const removeMedic = async (id: string): Promise<any> => {
  const res = await api.delete(`/api/delete/medico/${id}`);

  return res;
};

// export const getAllSpecialty = async (): Promise<any> => {
//   const res = await api.get('/api/get/especialidades');

//   return res;
// };

// export const createSpecialty = async (
//   values: CreateSpecialtyProps
// ): Promise<any> => {
//   const res = await api.post('/api/insert/especialidade', values);

//   return res;
// };
