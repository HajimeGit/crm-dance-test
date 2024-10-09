import { Box, Typography } from '@mui/material';
import TerminalCardButton from '../../components/TerminalCard/TerminalCardButton';

const Success = () => {
  return (
    <Box textAlign='center'>
      <Typography mb={2} variant='h4'>
        Thank You for Your Purchase!
      </Typography>
      <Typography variant='body2' color='textSecondary'>
        Your order has been processed successfully.
      </Typography>

      <Box mt={5}>
        <TerminalCardButton button='home' to='/' />
      </Box>
    </Box>
  );
};

export default Success;
