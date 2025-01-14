import mongoose from 'mongoose';

const mailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Mail', mailSchema);