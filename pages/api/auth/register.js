import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { hashPassword } from "@/db/models/utils";

export default async function handler(request, response) {

    await dbConnect();
    if (request.method !== 'POST') {
      return
    }
    const data = request.body;
    const {name, email, password } = data;
    if (!name ||!email || !email.includes('@') || !password ||password.trim().length < 7) {
      response.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
        name: name, 
        email: email,
        password: hashedPassword,
        
    });

    response.status(201).json(user);


} 