import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  feedbackId: { type: String, unique: true, required: true },
  orderId: { type: String, unique: true, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);
