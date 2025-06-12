// import mongoose from 'mongoose';

// const feedbackSchema = new mongoose.Schema({
//   feedbackId: { type: String, unique: true, required: true },
//   orderId: { type: String, unique: true, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   rating: { type: Number, min: 1, max: 5, required: true },
//   comment: { type: String, required: true }
// }, { timestamps: true });

// export default mongoose.model('Feedback', feedbackSchema);


import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const feedbackSchema = new mongoose.Schema(
  {
    feedbackId: {
      type: String,
      default: () => `fb-${uuidv4()}`,
      unique: true,
    },
    orderId: {
      type: String,
      default: () => `order-${uuidv4()}`,
      unique: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    quality: {
      type: String,
      enum: ['Excellent', 'Good', 'Average', 'Poor'],
      required: true,
    },
    deliveryTime: {
      type: String,
      enum: ['On time', 'Late'],
      required: true,
    },
    recommendation: {
      type: String,
      enum: ['Yes', 'No'],
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
