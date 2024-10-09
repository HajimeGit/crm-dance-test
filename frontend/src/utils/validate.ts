import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone_number: Yup.string()
    .min(5, 'Phone number should be valid')
    .required('Phone number is required'),
  address_line: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postal_code: Yup.string().required('Postal code is required'),
  country: Yup.string().required('Country is required'),
});
