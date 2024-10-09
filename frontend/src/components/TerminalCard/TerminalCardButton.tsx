import { Button, SvgIcon } from '@mui/material';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface ITerminalCardButtonProps {
  button: string;
  to: string;
}

const TerminalButton: FC<ITerminalCardButtonProps> = ({ button, to }) => {
  return (
    <Button
      disableElevation={true}
      component={NavLink}
      to={to}
      variant='contained'
      color='primary'
      sx={{
        borderRadius: '8px',
        textTransform: 'lowercase',
        padding: '8px 24px',
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        margin: '0 auto',
        fontWeight: 300,
        color: 'white',
        width: 'fit-content',
        fontSize: '16px',
        '&:hover': {
          background:
            'linear-gradient(90deg, #CFFF93 -14.23%, #B9FFCC 19.51%, #B9FFED 72.15%, #93FF9E 120.73%)',
          color: 'black',
        },
      }}
    >
      {button}
      <SvgIcon sx={{ color: 'currentColor' }}>
        <svg
          width='19'
          height='16'
          viewBox='0 0 19 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.5 1L18.5 8M18.5 8L11.5 15M18.5 8H0.5'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </SvgIcon>
    </Button>
  );
};

export default TerminalButton;
