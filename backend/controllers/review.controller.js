import Review from "../models/review.model.js";
export const createReview = async (req, res) => {
  const { lawyerId, senderId, review, rating } = req.body;
  const newReview = new Review({
    lawyerId,
    senderId,
    review,
    rating,
  });
  try {
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
