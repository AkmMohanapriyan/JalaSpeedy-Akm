// import express from 'express';
// import {
//   createFeedback,
//   getFeedbackByUserOrAdmin,
//   getFeedbackByOrderId,
//   updateFeedback,
//   deleteFeedback
// } from '../controllers/feedbackController.js';
// import { protect } from '../middleware/authMiddleware.js';


// const router = express.Router();

// router.post('/', protect, createFeedback); // user
// router.get('/:id', protect, getFeedbackByUserOrAdmin); // user or admin
// router.get('/order/:orderId', protect, getFeedbackByOrderId); // user or admin
// router.put('/:id', protect, updateFeedback); // user
// router.delete('/:id', protect, deleteFeedback); // user or admin

// export default router;

import express from 'express';
import {
  createFeedback,
  getAllFeedback,
  getMyFeedbacks,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} from '../controllers/feedbackController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// User or Supplier
router.post('/', protect, authorizeRoles('user', 'supplier'), createFeedback);
router.get('/my', protect, authorizeRoles('user', 'supplier'), getMyFeedbacks);
router.get('/:id', protect, authorizeRoles('user', 'supplier', 'admin'), getFeedbackById);
router.put('/:id', protect, authorizeRoles('user', 'supplier', 'admin'), updateFeedback);
router.delete('/:id', protect, authorizeRoles('user', 'supplier', 'admin'), deleteFeedback);

// Admin only
router.get('/', protect, authorizeRoles('admin'), getAllFeedback);

export default router;
