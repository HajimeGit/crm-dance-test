import { Box, Typography } from '@mui/material';
import TerminalCardButton from '../../components/TerminalCard/TerminalCardButton';

const NotFound = () => {
  return (
    <Box textAlign='center'>
      <Typography mb={2} variant='h4'>
        Page not found.
      </Typography>

      <Box mt={5}>
        <TerminalCardButton button='home' to='/' />
      </Box>
    </Box>
  );
};

export default NotFound;
