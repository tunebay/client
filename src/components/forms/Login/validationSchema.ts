import Yup from 'yup';

export default Yup.object().shape({
  emailOrUsername: Yup.string().required('Email or username is required'),
  password: Yup.string()
    .min(8, 'Password must be atlrast 8 characters')
    .required('Password is required'),
});
