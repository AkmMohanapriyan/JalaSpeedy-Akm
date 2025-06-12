// import Feedback from '../models/Feedback.js';
// import { generateUniqueId } from '../utils/generateId.js';

// export const createFeedback = async (req, res) => {
//   try {
//     const { rating, comment } = req.body;
//     const feedbackId = generateUniqueId('fb_');
//     const orderId = generateUniqueId('order_');

//     const feedback = new Feedback({
//       feedbackId,
//       orderId,
//       user: req.user._id,
//       rating,
//       comment
//     });

//     await feedback.save();
//     res.status(201).json({
//       feedbackId: feedback.feedbackId,
//       orderId: feedback.orderId,
//       rating,
//       comment,
//       createdAt: feedback.createdAt
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// export const getFeedbackByUserOrAdmin = async (req, res) => {
//   try {
//     const { id } = req.params;

//     if (req.user.role === 'admin') {
//       const feedbacks = await Feedback.find({ user: id });
//       return res.json(feedbacks);
//     }

//     if (req.user._id.toString() === id) {
//       const feedbacks = await Feedback.find({ user: id });
//       return res.json(feedbacks);
//     }

//     return res.status(403).json({ message: 'Access denied' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getFeedbackByOrderId = async (req, res) => {
//   try {
//     const { orderId } = req.params;
//     const feedbacks = await Feedback.find({ orderId }).select('feedbackId rating comment');
//     if (!feedbacks.length) return res.status(404).json({ message: 'Feedback not found' });

//     res.json(feedbacks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const updateFeedback = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const feedback = await Feedback.findOne({ feedbackId: id });

//     if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
//     if (req.user._id.toString() !== feedback.user.toString()) {
//       return res.status(403).json({ message: 'Not authorized' });
//     }

//     const { rating, comment } = req.body;
//     if (rating) feedback.rating = rating;
//     if (comment) feedback.comment = comment;

//     await feedback.save();

//     res.json({
//       feedbackId: feedback.feedbackId,
//       rating: feedback.rating,
//       comment: feedback.comment,
//       message: 'Feedback updated successfully'
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const deleteFeedback = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const feedback = await Feedback.findOne({ feedbackId: id });

//     if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

//     if (req.user.role !== 'admin' && req.user._id.toString() !== feedback.user.toString()) {
//       return res.status(403).json({ message: 'Not authorized' });
//     }

//     await feedback.deleteOne();
//     res.json({ message: 'Feedback deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


import Feedback from '../models/Feedback.js';
import { v4 as uuidv4 } from 'uuid';

// Create Feedback (User or Supplier)
export const createFeedback = async (req, res) => {
  try {
    const { orderId, serviceId, rating, comment, quality, deliveryTime, recommendation } = req.body;

    const feedback = await Feedback.create({
      feedbackId: `fb-${uuidv4()}`,
      orderId,
      serviceId,
      user: req.user._id,
      rating,
      comment,
      quality,
      deliveryTime,
      recommendation,
    });

    res.status(201).json({
      message: 'Feedback submitted successfully',
      feedback,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating feedback', error: error.message });
  }
};

// Get All Feedback (Admin only)
export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user', 'name email');
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedbacks', error: error.message });
  }
};

// Get My Feedbacks (User or Supplier)
export const getMyFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user._id });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching your feedbacks', error: error.message });
  }
};

// Get Feedback by ID (Admin, User, Supplier - only own for non-admin)
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findOne({ feedbackId: req.params.id });

    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    if (req.user.role !== 'admin' && feedback.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
  }
};

// Update Feedback (Admin or Owner)
export const updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findOne({ feedbackId: req.params.id });

    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    if (req.user.role !== 'admin' && feedback.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    Object.assign(feedback, req.body);
    const updated = await feedback.save();

    res.status(200).json({ message: 'Feedback updated successfully', feedback: updated });
  } catch (error) {
    res.status(500).json({ message: 'Error updating feedback', error: error.message });
  }
};

// Delete Feedback (Admin or Owner)
export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findOne({ feedbackId: req.params.id });

    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    if (req.user.role !== 'admin' && feedback.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await feedback.deleteOne();
    res.status(200).json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting feedback', error: error.message });
  }
};
