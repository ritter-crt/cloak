import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(id);
  if (request.method === "GET") {
    try {
      const item = await Item.findById(id);
      console.log("ITEMS: ", item);
      return response.status(200).json(item);
    } catch (error) {
      return response.status(404).json("Error", error);
    }
  }
  if (request.method === "DELETE") {
    const item = await Item.findByIdAndDelete(id);
    return response.status(200).json(item);
  }

  // if (request.method === "PUT") {
  //   const item = await Item.findByIdAndUpdate(id);
  //   console.log(item);
  //   return response.status(200).json(item);
  // }
}