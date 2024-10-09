import { Box, Grid2, Typography } from '@mui/material';
import { FC } from 'react';
import TerminalButton, { ITerminalCardButtonProps } from './TerminalCardButton';

export interface ITerminalCardBodyProps
  extends Omit<ITerminalCardButtonProps, 'to'> {
  title: string;
  price: string;
  description: string;
  id: number;
}

const TerminalBody: FC<ITerminalCardBodyProps> = ({
  id,
  title,
  price,
  description,
  button,
}) => {
  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: '480px',
      }}
    >
      <Grid2
        container
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <Grid2>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Grid2>
      </Grid2>

      <Typography variant='body2' color='textSecondary' mb={3}>
        {description}
      </Typography>

      <TerminalButton to={`/product/${id}`} button={button} />
    </Box>
  );
};

export default TerminalBody;
