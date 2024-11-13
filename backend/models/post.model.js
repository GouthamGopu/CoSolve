import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image:{type:String, required:true},//requirement can be changed according to future
    category: { type: String, enum: ['Transport', 'Financial Help', 'Rental', 'Skills', 'Other'] },
    location: { type: String },  // Could be a string [latitude/longitude]
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

export const Post = mongoose.model('Post', postSchema);