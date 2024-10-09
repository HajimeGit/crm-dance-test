import { useEffect } from 'react';
import { record } from 'rrweb';
import { useSaveRecordingMutation } from './rrwebService';
import { pack } from '@rrweb/packer';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

const Recording = () => {
  const [saveRecording] = useSaveRecordingMutation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith('/rrweb')) {
      return;
    }

    let events: string[] = [];
    const uuid = uuidv4();

    const stopRecording = record<string>({
      emit(event) {
        events.push(event);
      },
      packFn: pack,
    });

    const interval = setInterval(async () => {
      if (events.length > 0) {
        await saveRecording({ events: events, uuid });
        events = [];
      }
    }, import.meta.env.VITE_RRWEB_INTERVAL);

    return () => {
      if (stopRecording) {
        stopRecording();
      }

      clearInterval(interval);
    };
  }, []);
  return <></>;
};

export default Recording;
