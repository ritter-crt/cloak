import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: { type: String, required: true },
  pattern: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  price: { type: String, required: true },
});

// connecting through mongoose to cards collection in the database.
// is not case sensitive
// this needs to            same name as in db = places -> Places

const Item = mongoose.models.Items || mongoose.model("Items", itemSchema);
export default Item;
