import Supplier from '../models/Supplier.js'

// Add supplier - Admin only
export const addSupplier = async (req, res) => {
  try {
    const { name, contact, address } = req.body
    if (!name || !contact || !address) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Check if supplier already exists
    const existingSupplier = await Supplier.findOne({ contact });
    if (existingSupplier) {
      return res.status(400).json({ message: 'Email already exists' });
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


// List all suppliers - Admin, User
export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({})
    const formatted = suppliers.map(s => ({
      id: s._id,
      name: s.name
    }))
    res.status(200).json(formatted)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// Update supplier - Admin only
export const updateSupplier = async (req, res) => {
  try {
    const { name, contact, address } = req.body
    const supplier = await Supplier.findById(req.params.id)

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' })
    }

    supplier.name = name || supplier.name
    supplier.contact = contact || supplier.contact
    supplier.address = address || supplier.address

    const updated = await supplier.save()

    res.status(200).json({
      id: updated._id,
      name: updated.name,
      message: 'Supplier updated successfully'
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}


// Delete supplier - Admin only
export const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id)
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' })
    }

    await supplier.deleteOne()
    res.status(200).json({ message: 'Supplier deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}