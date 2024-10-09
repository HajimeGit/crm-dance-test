import { CreateRecordingDto } from '../dto/recording.dto';
import { validateDto } from '../middleware/validate';
import { Router } from 'express';
import {
  createRecording,
  fetchRecordingEvents,
  fetchRecordings,
} from '../controllers/recording.controller';

const router = Router();

router.post('/create', validateDto(CreateRecordingDto), createRecording);
router.get('/fetchAllUuids', fetchRecordings);
router.get('/fetchEvents', fetchRecordingEvents);

export default router;
