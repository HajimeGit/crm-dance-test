import { FC } from 'react';
import { IProduct } from '../../types/product.type';
import { Grid2 } from '@mui/material';
import TerminalImage from '../TerminalCard/TerminalCardImage';
import TerminalProductBody from './TerminalProductBody';

interface ITerminalProductProps {
  product: IProduct;
}

const TerminalProduct: FC<ITerminalProductProps> = ({ product }) => {
  return (
    <Grid2
      flexDirection={{ sm: 'row', xs: 'column' }}
      p={3}
      sx={{ display: 'flex', alignItems: 'center' }}
      size={{ xs: 12, sm: 6 }}
    >
      <TerminalImage image={product.image} alt={product.alt} />
      <TerminalProductBody {...product} button='buy' />
    </Grid2>
  );
};

export default TerminalProduct;
