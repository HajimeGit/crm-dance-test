import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import Player from './Player';
import { FC } from 'react';

export interface IPlayerModalProps {
  open: boolean;
  setOpen: (status: boolean) => void;
  uuid: string;
}

const PlayerModal: FC<IPlayerModalProps> = ({ open, setOpen, uuid }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: '4px',
          boxShadow: 24,
        }}
      >
        <Player uuid={uuid} />
      </Box>
    </Modal>
  );
};

export default PlayerModal;
