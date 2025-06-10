import express from 'express';
import {
  createFeedback,
  getFeedbackByUserOrAdmin,
  getFeedbackByOrderId,
  updateFeedback,
  deleteFeedback
} from '../controllers/feedbackController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/', protect, createFeedback); // user
router.get('/:id', protect, getFeedbackByUserOrAdmin); // user or admin
router.get('/order/:orderId', protect, getFeedbackByOrderId); // user or admin
router.put('/:id', protect, updateFeedback); // user
router.delete('/:id', protect, deleteFeedback); // user or admin

export default router;