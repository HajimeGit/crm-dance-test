import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-black.svg';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <AppBar elevation={0} position='static' color='transparent'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          to='/'
          component={NavLink}
          color='inherit'
          sx={{
            ':hover': { background: 'none' },
          }}
        >
          <Box component='img' alt='site-logo' src={logo} />
        </Button>
        <Nav />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
