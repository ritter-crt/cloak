import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
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
          throw new Error("Incorrect password");
        }

        return { name: user.name, email: user.email };
      },
    }),
    // ...add more providers here_____________________________
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(NextAuthOptions);
