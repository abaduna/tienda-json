
import * as  Yup from "yup"


export const loginSchema = Yup.object({
    email: Yup.string().email('Correo electrónico no válido').required('Campo requerido'),
    password: Yup.string()
      .min(6, "El campo password debe tener al menos 5 caracteres")
      .required("El campo password es obligatorio"),
  });