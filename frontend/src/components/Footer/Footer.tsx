import { Box, Button, Paper } from '@mui/material';
import logo from '../../images/logo-white.svg';
import { NavLink } from 'react-router-dom';
import { INavItem } from '../Nav/Nav';

const links: INavItem[] = [
  {
    href: '/',
    label: 'Terms & Conditions',
  },
  {
    href: '/',
    label: 'Privacy Policy',
  },
];

const Footer = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        padding: '20px 24px',
        backgroundColor: 'rgba(17, 17, 17, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 3,
      }}
      component='footer'
      square
      variant='outlined'
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

      <Box gap={10}>
        {links.map((item) => (
          <Button
            key={item.label}
            to={item.href}
            component={NavLink}
            color='secondary'
            sx={{
              textTransform: 'capitalize',
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Paper>
  );
};

export default Footer;
