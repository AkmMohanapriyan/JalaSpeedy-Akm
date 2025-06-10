import express from 'express'
import {
  addSupplier,
  getSupplierById,
  getAllSuppliers,
  updateSupplier,
  deleteSupplier
} from '../controllers/supplierController.js'
import { protect } from '../middlewares/authMiddleware.js'
import { authorizeRoles } from '../middlewares/roleMiddleware.js'

const router = express.Router()

router.route('/')
  .post(protect, authorizeRoles('admin'), addSupplier)
  .get(protect, authorizeRoles('admin', 'user'), getAllSuppliers)

router.route('/:id')
  .get(protect, authorizeRoles('admin', 'user'), getSupplierById)
  .put(protect, authorizeRoles('admin'), updateSupplier)
  .delete(protect, authorizeRoles('admin'), deleteSupplier)

export default router
