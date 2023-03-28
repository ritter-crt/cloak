import dbConnect from "@/db/connect";
import Pattern from "@/db/models/Pattern";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const patternData = request.body;
      const pattern = new Pattern(patternData);
      // console.log(patternData)
      await pattern.save();

      response.status(201).json({ status: "Pattern created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
