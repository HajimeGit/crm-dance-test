import { model, Schema } from 'mongoose';
import { IRecording } from './types';

const recordingSchema = new Schema<IRecording>(
  {
    uuid: { type: String, required: true, unique: true, index: true },
    events: { type: Object, required: true },
  },
  { timestamps: true }
);

export const Recording = model<IRecording>('Recording', recordingSchema);
