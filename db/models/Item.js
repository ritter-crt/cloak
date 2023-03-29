import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  images: { type: Array },
  title: { type: String },
  category: { type: String },
  description: { type: String },
  difficulty: { type: String },
  instructions: { type: String },
  price: { type: Number },
  createdAt: { type: String },
  pattern: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Item = mongoose.models.Items || mongoose.model("Items", itemSchema);
export default Item;
