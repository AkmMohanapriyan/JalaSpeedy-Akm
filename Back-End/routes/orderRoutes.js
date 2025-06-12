import express from 'express';
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// User creates order
router.post('/', protect, authorizeRoles('user'), createOrder);

// User gets own orders
router.get('/myorders', protect, authorizeRoles('user'), getUserOrders);

// Admin gets all orders
router.get('/', protect, authorizeRoles('admin'), getAllOrders);

// Admin gets order by ID
router.get('/:id', protect, authorizeRoles('admin', 'user'), getOrderById);

// Admin or User can update/delete
router.put('/:id', protect, authorizeRoles('admin', 'user'), updateOrder);
router.delete('/:id', protect, authorizeRoles('admin', 'user'), deleteOrder);

export default router;
