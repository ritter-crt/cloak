import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  item: { type: Schema.Types.ObjectId, ref: "Item" },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
