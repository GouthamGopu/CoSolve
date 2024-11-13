import mongoose from "mongoose";
//we can have two portion in profile posts and review on the previous usage of the app
//if not now we can add this feature in future 
const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewedUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String }
},{ timestamps: true });

export const Review = mongoose.model('Review', reviewSchema);