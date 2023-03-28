import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  images: Array,
  title: String,
  category: String,
  description: String,
  difficulty: String,
  instructions: String,
  price: Number,
  createdAt: String,
  pattern: String,
  // pattern: { type: Schema.Types.ObjectId, ref: "Pattern" },
});

const Item = mongoose.models.Items || mongoose.model("Items", itemSchema);
export default Item;
