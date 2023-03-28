import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      console.log(request.body);
      const itemData = request.body;
      const item = new Item(itemData);
      // console.log(itemData)
      await item.save();

      response.status(201).json({ status: "Item created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
