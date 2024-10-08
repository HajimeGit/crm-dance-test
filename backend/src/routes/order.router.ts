import { createOrder } from '../controllers/order.controller';
import { CreateOrderDto } from '../dto/order.dto';
import { validateDto } from '../middleware/validate';
import { Router } from 'express';

const router = Router();

router.post('/create', validateDto(CreateOrderDto), createOrder);

export default router;
