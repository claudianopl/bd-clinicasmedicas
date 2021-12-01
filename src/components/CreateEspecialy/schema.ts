import * as yup from 'yup';

export const schema = yup.object().shape({
  specCode: yup.string().required('Código da especialidade obrigatório'),
  specName: yup.string().required('Nome da especialidade obrigatório'),
  specDescription: yup
    .string()
    .required('Descrição da especialidade obrigatório'),
});
