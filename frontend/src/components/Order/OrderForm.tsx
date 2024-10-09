import { Box, Button, Grid2, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { usePlaceOrderMutation } from '../../services/orderService';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderSchema } from '../../utils/validate';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const initialValues = {
  name: '',
  email: '',
  phone_number: '',
  address_line: '',
  city: '',
  postal_code: '',
  country: '',
};

export const OrderForm = () => {
  const [placeOrder, { isLoading, isError, isSuccess }] =
    usePlaceOrderMutation();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast('Something went wrong. Try again later.', {
        type: 'error',
      });
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/order/success', { replace: true });
    }
  }, [isSuccess]);

  const formik = useFormik({
    initialValues,
    validationSchema: OrderSchema,
    onSubmit: async (values) => {
      try {
        await placeOrder({
          ...values,
          product_id: Number(productId as string),
        });
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={{ sm: 3, xs: 0 }}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* Name */}
            <Box mb={2}>
              <TextField
                fullWidth
                variant='standard'
                id='name'
                name='name'
                label='Full Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* Email */}
            <Box mb={2}>
              <TextField
                variant='standard'
                fullWidth
                id='email'
                name='email'
                label='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={{ sm: 3, xs: 0 }}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* Phone Number */}
            <Box mb={2}>
              <TextField
                fullWidth
                variant='standard'
                id='phone_number'
                name='phone_number'
                label='Phone Number'
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phone_number &&
                  Boolean(formik.errors.phone_number)
                }
                helperText={
                  formik.touched.phone_number && formik.errors.phone_number
                }
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* Country */}
            <Box mb={2}>
              <TextField
                variant='standard'
                fullWidth
                id='country'
                name='country'
                label='Country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={{ sm: 3, xs: 0 }}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* City */}
            <Box mb={2}>
              <TextField
                variant='standard'
                fullWidth
                id='city'
                name='city'
                label='City'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            {/* Postal Code */}
            <Box mb={2}>
              <TextField
                fullWidth
                variant='standard'
                id='postal_code'
                name='postal_code'
                label='Postal Code'
                value={formik.values.postal_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.postal_code &&
                  Boolean(formik.errors.postal_code)
                }
                helperText={
                  formik.touched.postal_code && formik.errors.postal_code
                }
              />
            </Box>
          </Grid2>
        </Grid2>
        {/* Address Line */}
        <Box mb={2}>
          <TextField
            fullWidth
            variant='standard'
            id='address_line'
            name='address_line'
            label='Address Line'
            value={formik.values.address_line}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address_line && Boolean(formik.errors.address_line)
            }
            helperText={
              formik.touched.address_line && formik.errors.address_line
            }
          />
        </Box>

        <Button
          color='primary'
          variant='contained'
          fullWidth
          type='submit'
          disabled={isLoading}
          disableElevation={true}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};

export default OrderForm;
