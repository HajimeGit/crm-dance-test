import { Box } from '@mui/system';
import { FC } from 'react';

export interface ITerminalImageProps {
  image: string;
  alt: string;
  height?: string;
  width?: string;
}

const TerminalImage: FC<ITerminalImageProps> = ({
  image,
  alt,
  height = '444px',
  width = '450px',
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: 2,
        textAlign: 'center',
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '83px',
          left: '3px',
          width: '92%',
          height: '60%',
          backgroundColor: 'rgba(238, 238, 238, 1)',
          zIndex: 1,
          borderRadius: '24px',
        }}
      />

      <Box
        component='img'
        src={image}
        alt={alt}
        sx={{
          width: { width },
          height: { height },
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default TerminalImage;
