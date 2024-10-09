import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import OrderForm from '../../components/Order/OrderForm';
import { Grid2, Typography } from '@mui/material';
import PageTitle from '../../components/Typography/PageTitle';
import { findProductById } from '../../services/productService';
import TerminalImage from '../../components/TerminalCard/TerminalCardImage';

const Order = () => {
  const { productId } = useParams();
  const product = findProductById(Number(productId));
  return (
    <Box p={{ md: 15, xs: 2 }}>
      <PageTitle text='Order Page' />
      <Grid2
        display='flex'
        justifyContent='center'
        alignItems='center'
        container
        flexDirection='row'
        spacing={10}
      >
        {product && (
          <Grid2 display='flex' flexDirection='column' size={{ sm: 4 }}>
            <TerminalImage
              height={'250px'}
              image={product.image}
              alt={product.alt}
            />
            <Typography
              textAlign='center'
              variant='h6'
              sx={{ fontWeight: 'bold' }}
            >
              {product.title}
            </Typography>
          </Grid2>
        )}
        <Grid2 size={{ sm: 8 }}>
          <OrderForm />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Order;
