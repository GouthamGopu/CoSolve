import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image:{type:String},
    category: { type: String, enum: ['Transport', 'Rental', 'Skills'],required:true },
    location: { type: String }, 
    status: { type: String, enum: ['In Progress', 'Closed'], default: 'In Progress' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

export const Post = mongoose.model('Post', postSchema);