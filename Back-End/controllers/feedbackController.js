import Feedback from '../models/Feedback.js';
import { generateUniqueId } from '../utils/generateId.js';

export const createFeedback = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const feedbackId = generateUniqueId('fb_');
    const orderId = generateUniqueId('order_');

    const feedback = new Feedback({
      feedbackId,
      orderId,
      user: req.user._id,
      rating,
      comment
    });

    await feedback.save();
    res.status(201).json({
      feedbackId: feedback.feedbackId,
      orderId: feedback.orderId,
      rating,
      comment,
      createdAt: feedback.createdAt
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getFeedbackByUserOrAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.user.role === 'admin') {
      const feedbacks = await Feedback.find({ user: id });
      return res.json(feedbacks);
    }

    if (req.user._id.toString() === id) {
      const feedbacks = await Feedback.find({ user: id });
      return res.json(feedbacks);
    }

    return res.status(403).json({ message: 'Access denied' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFeedbackByOrderId = async (req, res) => {
  try {
    const { orderId } = req.params;
    const feedbacks = await Feedback.find({ orderId }).select('feedbackId rating comment');
    if (!feedbacks.length) return res.status(404).json({ message: 'Feedback not found' });

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findOne({ feedbackId: id });

    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
    if (req.user._id.toString() !== feedback.user.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { rating, comment } = req.body;
    if (rating) feedback.rating = rating;
    if (comment) feedback.comment = comment;

    await feedback.save();

    res.json({
      feedbackId: feedback.feedbackId,
      rating: feedback.rating,
      comment: feedback.comment,
      message: 'Feedback updated successfully'
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findOne({ feedbackId: id });

    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });

    if (req.user.role !== 'admin' && req.user._id.toString() !== feedback.user.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await feedback.deleteOne();
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
