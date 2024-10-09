import { Box } from '@mui/system';
import NavLink from './NavLink';

export interface INavItem {
  href: string;
  label: string;
}

const navItems: INavItem[] = [{ href: '/', label: 'Marketplace' }];

const Nav = () => {
  return (
    <Box component='nav'>
      {navItems.map((item) => (
        <NavLink key={item.label} href={item.href} label={item.label} />
      ))}
    </Box>
  );
};

export default Nav;
