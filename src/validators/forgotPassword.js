import * as Yup from 'yup';
import { loginUserName, mobile } from './regex';

export default Yup.object().shape({
  username: Yup.string()
    .min(5, 'form.notValid.username.min')
    .max(15, 'form.notValid.username.max')
    .matches(loginUserName, 'form.notValid.username.regex')
    .required('form.required'),
  ncode: Yup.string()
    .test('national-code', 'form.notValid.nationalCode.regex',
      (value) => isValidIranianNationalCode(value)
    )
    .required('form.required'),
  mobile: Yup.string()
    .matches(mobile, 'form.notValid.mobile.regex')
    .required('form.required')
});


function isValidIranianNationalCode(input) {
  if (!/^\d{10}$/.test(input))
    return false;

  const check = +input[9];
  const sum = Array(9).fill().map((_, i) => +input[i] * (10 - i)).reduce((x, y) => x + y) % 11;
  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}



