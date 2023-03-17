import dbConnect from '@/db/connect';
import Item from '@/db/models/Item';



export default async function handler(request, response) {
	await dbConnect();

	if (request.method === 'GET') {
		const items = await Item.find();
		response.status(200).json(items);
	}
	if (request.method === 'POST') {
		try {
			const itemData = request.body;
			const items = new Announcement(itemData);
			const createdItem = await items.save();
			return response.status(201).json(createdItem);
		} catch (error) {
			console.error(error);
			return response.status(400).json({error: error.message});
		}
	}
}