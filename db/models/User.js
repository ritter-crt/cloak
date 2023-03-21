import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // connect to item with reference
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;