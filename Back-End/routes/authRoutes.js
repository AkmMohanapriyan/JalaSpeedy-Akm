import express from 'express';
import {
  register,
  login,
  userDashboard,
  supplierDashboard,
  adminDashboard,
  getAllUsersAndSuppliers,
  getUserOrSupplierById,
  updateUserOrSupplier,
  createUserByAdmin,
} from '../controllers/authController.js';

import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Public
router.post('/register', register);
router.post('/login', login);

// Dashboards
router.get('/dashboard/user', protect, authorizeRoles('user'), userDashboard);
router.get('/dashboard/supplier', protect, authorizeRoles('supplier'), supplierDashboard);
router.get('/dashboard/admin', protect, authorizeRoles('admin'), adminDashboard);

// Admin-only
router.get('/admin/users', protect, authorizeRoles('admin'), getAllUsersAndSuppliers);
router.get('/admin/users/:id', protect, authorizeRoles('admin'), getUserOrSupplierById);
router.put('/admin/users/:id', protect, authorizeRoles('admin'), updateUserOrSupplier);
router.post('/admin/users', protect, authorizeRoles('admin'), createUserByAdmin);

export default router;
