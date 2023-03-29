import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import dbConnect from "@/db/connect";
import User from "@/db/models/User";

import { verifyPassword } from "@/db/models/utils";

export const authOptions = {
  session: {
    jwt: true,
  },

  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        return { name: user.name, email: user.email };
      },
    }),
    // ...add more providers here_____________________________
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
