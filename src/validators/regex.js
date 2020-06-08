const loginUserName = /^[A-Za-z0-9]{5,15}$/;
const refferalUserId = /^9\d{7}/;
const registerUserName = /^(?![0-9])[A-Za-z0-9]{5,15}$/;
const mobile = /^(0[\s]?)9[0-39]\d[\s]?\d{3}[\s]?\d{4}$/;
const password = /^[A-Za-z0-9-.;_!#@]{4,15}$/;
const english = /^[a-zA-Z 0-9]+$/;
const persian = /^[\u0600-\u06FF\s]+$/;
const homePhone = /^[0-9]{7,10}/;
const postalCode = /^\d{10}$/;
const bankAccount = /^\d{1,4}\.\d{1,4}\.\d{4,9}\.\d{1,2}$/;
const email = /^(([^<>()\],;:\s@]+(\.[^<>()\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;

export {
  loginUserName,
  email,
  postalCode,
  homePhone,
  refferalUserId,
  registerUserName,
  bankAccount,
  mobile,
  english,
  persian,
  password
};
