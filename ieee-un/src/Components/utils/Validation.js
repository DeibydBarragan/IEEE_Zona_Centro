const validateEmail = ({ mail, setMailError }) => {
  const mailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mail && !mail.match(mailRegular) ? setMailError('Correo no valido') : setMailError('');
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5 ? setFullNameError('El nombre ingresado es muy corto') : fullName && fullName.length > 50 ? setFullNameError('El nombre ingresado es muy largo') : setFullNameError('');
};
  
const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5 ? setMessageError('El mensaje es muy corto') : message && message.length > 500 ? setMessageError('El mensaje es largo, trate de se mas corto y concreto') : setMessageError('');
}; 

  export { validateEmail, validateFullName, validateMessage };