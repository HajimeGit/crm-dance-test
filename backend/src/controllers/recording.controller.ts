import { Request, Response } from 'express';
import { CreateRecordingDto } from '../dto/recording.dto';
import { Recording } from '../models/recording';

export const createRecording = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { events, uuid }: CreateRecordingDto = req.body;

  try {
    const recording = await Recording.findOne({ uuid });

    if (!recording) {
      await Recording.create({ events, uuid });
      res
        .status(200)
        .json({ message: 'Recording created successfully', recording });
      return;
    }

    recording.events = [...recording.events, ...events];

    await recording.save();

    res.status(200).json({ message: 'Recording updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating recording' });
  }
};

export const fetchRecordings = async (req: Request, res: Response) => {
  try {
    const recordings = await Recording.find({}, 'uuid createdAt').sort({
      createdAt: -1,
    });
    res.status(200).json(recordings);
  } catch (error) {
    console.error('Error fetching recordings:', error);
    res.status(500).json({ message: 'Error fetching recordings', error });
  }
};

export const fetchRecordingEvents = async (req: Request, res: Response) => {
  const uuid = req.query?.uuid;

  if (!uuid) {
    res.status(400).json({ message: 'Uuid param is required.' });
    return;
  }

  try {
    const recordings = await Recording.find({ uuid }, 'events');
    if (!recordings) {
      res
        .status(400)
        .json({ message: 'Error fetching recording with this uuid' });
    }
    const [recording] = recordings;
    res.status(200).json(recording);
  } catch (error) {
    console.error('Error fetching recordings:', error);
    res.status(500).json({ message: 'Error fetching recordings', error });
  }
};
