import { Box, Grid2, Typography } from '@mui/material';
import { FC } from 'react';
import TerminalButton from '../TerminalCard/TerminalCardButton';
import { ITerminalCardBodyProps } from '../TerminalCard/TerminalCardBody';

export interface ITerminalProductBody
  extends Omit<ITerminalCardBodyProps, 'description'> {
  info: string;
}

const TerminalProductBody: FC<ITerminalProductBody> = ({
  id,
  title,
  price,
  info,
  button,
}) => {
  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: '480px',
      }}
    >
      <Typography mb={4} variant='h6' sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>

      {info.split('.').map((paragraph) => (
        <Typography
          key={paragraph.slice(10)}
          variant='body2'
          color='textSecondary'
          mb={3}
        >
          {paragraph}
        </Typography>
      ))}

      <Grid2
        container
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        <Grid2>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Grid2>
        <Grid2>
          <TerminalButton to={`/order/${id}`} button={button} />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TerminalProductBody;
