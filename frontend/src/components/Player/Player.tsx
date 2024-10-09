import { useFetchRecordingEventsQuery } from '../../services/rrweb/rrwebService';
import PendingIcon from '@mui/icons-material/Pending';
import { useEffect } from 'react';
import rrwebPlayer from 'rrweb-player';
import { unpack } from '@rrweb/packer';

import 'rrweb-player/dist/style.css';

const Player = ({ uuid }: { uuid: string }) => {
  const { data: recording, isLoading } = useFetchRecordingEventsQuery(uuid);

  useEffect(() => {
    let player = null;

    if (recording?.events) {
      player = new rrwebPlayer({
        target: document.getElementById('player-spot') as HTMLElement,
        props: {
          events: recording.events,
          unpackFn: unpack,
        },
      });

      // Just to get rid of the warning above.
      player.play();
    }

    return () => {
      if (player) {
        // Try to destroy the player.
        player.getReplayer().destroy();
      }
    };
  }, [recording]);

  if (isLoading) {
    return <PendingIcon fontSize={'large'} />;
  }

  return <div id='player-spot' />;
};

export default Player;
