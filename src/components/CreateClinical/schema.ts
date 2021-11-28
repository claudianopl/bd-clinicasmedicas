import * as yup from 'yup';

export const schema = yup.object().shape({
  clinicName: yup.string().required('Nome da clinica obrigatório'),
  phone: yup
    .string()
    .min(11, 'O número deve conter 11 digitos.')
    .max(11, 'O número deve conter 11 digitos.')
    .required('Número de telefone da clinica obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail da clínica obrigatório'),
  address: yup.string().required('Endereço da clínica obrigatório'),
});
