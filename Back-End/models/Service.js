import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true }, // e.g. 'Monthly', 'Weekly'
  location: { type: String, required: true },
  available: { type: Boolean, default: true },
  category: { type: String },                 // e.g. 'Residential', 'Commercial'
  includedItems: [{ type: String }],          // e.g. ['Tank', 'Pipeline', 'Filter']
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
