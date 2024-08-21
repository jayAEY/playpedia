import nextAuth from "next-auth";
import { connectToDb } from "./mongodb";
import UsersModel from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectToDb();
        const user = await UsersModel.findOne({ email });
        if (!user) throw new Error("User does not exist");
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt(params: any) {
      let token = params.token;
      let user = params.user;
      user &&
        (token.user = {
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          created: user.created,
          backlog: user.backlog,
          completed: user.completed,
        });
      return token;
    },
    async session(params) {
      let session = params.session;
      let token = params.token;
      session.user = token.user as {
        email: string;
        username: string;
        avatar: string;
        created: string;
        backlog: [];
        completed: [];
      };
      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};

export default authOptions;
