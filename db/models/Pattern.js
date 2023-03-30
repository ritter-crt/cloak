import mongoose from "mongoose";
const { Schema } = mongoose;

const patternSchema = new Schema({
  pattern: String,
  item: { type: Schema.Types.ObjectId, ref: "Item" },
});

const Pattern =
  mongoose.models.Pattern || mongoose.model("Pattern", patternSchema);
export default Pattern;
