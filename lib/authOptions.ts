import nextAuth from "next-auth";
import { connectToDb } from "./mongodb";
import UsersModel from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { Date } from "mongoose";
import { NextResponse } from "next/server";
import { signIn } from "next-auth/react";

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
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      allowDangerousEmailAccountLinking: true,

      // profile(profile) {
      // return {};
      // },
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const sessionUser = await UsersModel.findOne({
        email: token.email,
      });
      token.user = {
        email: sessionUser.email,
        username: sessionUser.username,
        avatar: sessionUser.avatar,
        createdAt: sessionUser.createdAt,
        backlog: sessionUser.backlog,
        completed: sessionUser.completed,
      };
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        email: string;
        username: string;
        avatar: string;
        backlog: [];
        completed: [];
        createdAt: Date;
      };
      return session;
    },

    async signIn({ user, account, profile }) {
      if (account?.provider == "google") {
        // if (profile?.email_verified) {
        await connectToDb();
        const { email, name, image } = user;
        const u = await UsersModel.findOne({ email: user.email });
        if (!u) {
          const newUser = new UsersModel({
            email,
            username: name,
            avatar: image,
          });
          await newUser.save();
        }
        // } else {
        // false;
        // ????
        // }
      }
      return true;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};

export default authOptions;
