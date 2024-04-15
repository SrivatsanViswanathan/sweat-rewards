import { Router } from 'express';
import rateLimiter from 'express-rate-limit';
import * as dotenv from 'dotenv';

dotenv.config();

// Controllers
import {
  // createReward,
  getRewards,
  // updateReward,
  // getReward,
  // deleteReward,
} from '../controllers/rewardsController.js';

const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 10 * 60 * 100, // 10 Minutes
  max: 10,
  message: { message: 'Too many requests. Try again in 10min' },
});

router.route('/').get(apiLimiter, getRewards);
// router.route('/').post(createReward);
// router
//   .route(`/${process.env.HIDDEN}/:id`)
//   .get(getReward)
//   .patch(updateReward)
//   .delete(deleteReward);

export default router;
