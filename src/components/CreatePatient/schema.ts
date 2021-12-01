import * as yup from 'yup';

export const schema = yup.object().shape({
  patientName: yup.string().required('Código da especialidade obrigatório'),
  birthDate: yup.string().required('Nome da especialidade obrigatório'),
  phone: yup
    .string()
    .min(11, 'O número deve conter 11 digitos.')
    .max(11, 'O número deve conter 11 digitos.')
    .required('Número de telefone da clinica obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('E-mail da clínica obrigatório'),
  gender: yup.string().required('selecione o sexo'),
  cpf: yup
    .string()
    .required('Preencha o CPF')
    .transform(value => value.replace(/[^\d]/g, ''))
    .min(11, 'Name must contain at least 6 characters')
    .max(11, 'Name must contain at least 6 characters'),
});
