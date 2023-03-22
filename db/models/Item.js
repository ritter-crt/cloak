import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  image: { type: String, required: true },
  images: Array,
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  pattern: { type: String, required: true },
  instructions: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: String, required: true },
});

const Item = mongoose.models.Items || mongoose.model("Items", itemSchema);
export default Item;
