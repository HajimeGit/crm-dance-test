export interface IRecording {
  events: string[];
  uuid: string;
}

export interface IRecordingResponse {
  uuid: string;
  createdAt: string;
}

export interface IRecordingEventsResponse {
  events: [];
}
