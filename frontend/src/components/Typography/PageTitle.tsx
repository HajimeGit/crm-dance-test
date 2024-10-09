import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

export interface IPageTitle {
  text: string;
}

const PageTitle: FC<IPageTitle> = ({ text }) => {
  return (
    <Box>
      <Typography
        textAlign='center'
        variant='h1'
        mt={1}
        mb={6}
        fontWeight={500}
        fontSize={'42px'}
        textTransform='uppercase'
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PageTitle;
