import { INavItem } from './Nav';
import { Button } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const NavLink = ({ label, href }: INavItem) => {
  return (
    <Button
      to={href}
      component={RouterLink}
      color='inherit'
      sx={{ textTransform: 'capitalize' }}
    >
      {label}
    </Button>
  );
};

export default NavLink;
