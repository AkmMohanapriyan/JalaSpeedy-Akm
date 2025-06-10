import Supplier from '../models/Supplier.js'

// Add supplier - Admin only
export const addSupplier = async (req, res) => {
  try {
    const { name, contact, address } = req.body
    if (!name || !contact || !address) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const supplier = await Supplier.create({ name, contact, address })
    res.status(201).json({
      id: supplier._id,
      name: supplier.name,
      contact: supplier.contact,
      address: supplier.address,
      message: 'Supplier added successfully'
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// Get supplier by ID - Admin, User
export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id)
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' })
    }
    res.status(200).json({
      id: supplier._id,
      name: supplier.name,
      contact: supplier.contact,
      address: supplier.address
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}