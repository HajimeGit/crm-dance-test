import { Grid2 } from '@mui/material';
import { Box } from '@mui/system';
import TerminalCard from '../../components/TerminalCard/TerminalCard';
import { products } from '../../constants/products';
import PageTitle from '../../components/Typography/PageTitle';

const Marketplace = () => {
  return (
    <Box
      p={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '100px',
      }}
    >
      <PageTitle text='Equipment Marketplace' />

      <Grid2 justifyContent='center' container spacing={{ lg: 25 }}>
        {products.map((product) => (
          <TerminalCard {...product} key={product.title} button='View' />
        ))}
      </Grid2>
    </Box>
  );
};

export default Marketplace;
