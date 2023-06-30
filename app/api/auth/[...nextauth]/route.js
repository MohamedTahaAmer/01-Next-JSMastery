import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import User from "@models/user";
import { connectToDB } from "@utils/database";

// - https://next-auth.js.org/
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // - https://next-auth.js.org/v3/configuration/callbacks
    async session({ session }) {
      // - hence next.js is a serverless, we need to connect to the db each time we need to access our atlas
      await connectToDB();

      // adding the user's mongodb id to his session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ user }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: user.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: user.email,
            username: user.name.trim(),
            image: user.image,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
