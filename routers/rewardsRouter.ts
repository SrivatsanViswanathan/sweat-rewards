import { Router } from 'express';
import rateLimiter from 'express-rate-limit';

// Controllers
import { createReward, getRewards } from '../controllers/rewardsController.js';

const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 10 * 60 * 100, // 10 Minutes
  max: 10,
  message: { message: 'Too many requests. Try again in 15min' },
});

router.route('/:walletAddress').get(apiLimiter, getRewards);
router.route('/').post(createReward);

export default router;
