const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const maxcaracters = /^.{0,35}$/;
const alMenosUnNumero = /^(?=.*\d).+$/;
const longitud = /^.{6,10}$/

export default function validation(inputs) {
    var errors = {};
  if (!inputs.email) {
    errors.name = "Se requiere un email";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "el nombre de usuario tiene que ser un email";
  }
  if (!maxcaracters.test(inputs.email)) {
    errors.email = "el nombre de usuario no puede tener mas de 35 caracteres";
  }
  if (!inputs.password) {
    errors.password = "Se requiere una contraseña";
  }
  if (!alMenosUnNumero.test(inputs.password)) {
    errors.password = "la contraseña debe tener al menos 1 numero";
  }
  if (!longitud.test(inputs.password)) {
    errors.password = "la contraseña debe tener una longitud entre 6 y 10";
  }
  return errors;

}
