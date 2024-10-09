import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRecordingDto {
  @IsNotEmpty()
  @IsArray()
  events: [];

  @IsUUID()
  uuid: string;
}

export class FetchRecordingEventsDto {
  @IsUUID()
  uuid: string;
}
