import * as yup from "yup";
export const loginInitialValues ={
    username:"",
    password:""
}
export const userValidationSchema = yup.object().shape({
 username: yup.string().required("username is required"),
 password: yup.string().required("password is required")
})
export const signupInitialValues ={
    number:""
  
}
export const signupValidationSchema = yup.object().shape({
  number: yup
    .string()
    .required("Number is required")
    .matches(/^03[0-9]{9}$/, "Enter a valid  mobile number"),
});
