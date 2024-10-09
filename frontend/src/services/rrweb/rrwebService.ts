import {
  IRecording,
  IRecordingEventsResponse,
  IRecordingResponse,
} from '../../types/recording.type';
import { api } from '../api';

export const rrwebService = api.injectEndpoints({
  endpoints: (builder) => ({
    saveRecording: builder.mutation<void, IRecording>({
      query: (recording) => ({
        url: '/recording/create',
        method: 'POST',
        body: recording,
      }),
    }),
    fetchRecordings: builder.query<IRecordingResponse[], void>({
      query: () => ({
        url: '/recording/fetchAllUuids',
        method: 'GET',
      }),
    }),
    fetchRecordingEvents: builder.query<IRecordingEventsResponse, string>({
      query: (uuid) => ({
        url: '/recording/fetchEvents',
        method: 'GET',
        params: { uuid },
      }),
    }),
  }),
});

export const {
  useSaveRecordingMutation,
  useFetchRecordingsQuery,
  useFetchRecordingEventsQuery,
} = rrwebService;
