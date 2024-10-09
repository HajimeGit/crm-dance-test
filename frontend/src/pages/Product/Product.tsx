import { Box } from '@mui/system';
import TerminalProduct from '../../components/TerminalProduct/TerminalProduct';
import { useParams } from 'react-router-dom';
import { findProductById } from '../../services/productService';

const Product = () => {
  const { id } = useParams();
  const product = findProductById(Number(id));

  return (
    product && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <TerminalProduct product={product} />
      </Box>
    )
  );
};

export default Product;
