import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  un: Yup.string().required('form.required'),
  pw: Yup.string().required('form.required'),
});

export default LoginSchema;
