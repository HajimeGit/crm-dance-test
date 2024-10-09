import { Grid2 } from '@mui/material';
import { FC } from 'react';
import TerminalImage, { ITerminalImageProps } from './TerminalCardImage';
import TerminalBody, { ITerminalCardBodyProps } from './TerminalCardBody';

interface ITerminalCardProps extends ITerminalImageProps, ITerminalCardBodyProps {}

const TerminalCard: FC<ITerminalCardProps> = ({
  id,
  title,
  button,
  image,
  alt,
  description,
  price,
}) => {
  return (
    <Grid2 size={{ xs: 12, sm: 6 }}>
      <TerminalImage image={image} alt={alt} />
      <TerminalBody
        id={id}
        price={price}
        title={title}
        button={button}
        description={description}
      />
    </Grid2>
  );
};

export default TerminalCard;
