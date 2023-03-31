import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const items = await Item.find({ userId: id });
    // console.log("items____________", items);
    return response.status(200).json(items);
  }
}
