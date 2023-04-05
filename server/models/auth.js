import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  about: {
    type: String,
  },
  tags: {
    type: [String],
  },
  joinedON: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model('Users', userSchema)