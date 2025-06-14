import mongoose from 'mongoose'

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  }
}, { timestamps: true })

const Supplier = mongoose.model('Supplier', supplierSchema)

export default Supplier