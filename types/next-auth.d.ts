import { Date } from "mongoose";
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email: string;
      username: string;
      avatar: string;
      backlog: [];
      completed: [];
      createdAt: Date;
    };
  }
}
