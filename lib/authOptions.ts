import nextAuth from "next-auth";
import { connectToDb } from "./mongodb";
import UsersModel from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
    async signIn({ user }) {
      console.log("inside callback");
      await connectToDb();
      const u = await UsersModel.findOne({ user });
      const { email, name, image } = user;
      const created = new Date();

      if (!user) {
        const newUser = new UsersModel({
          email,
          username: name,
          created,
          avatar: image,
        });
        await newUser.save();
      }

      return true;

      // export async function POST(req: NextRequest) {
      //   const { email, username, password, avatar, created } = await req.json();

      //   console.log(email, username, created);
      //   try {
      //     connectToDb();
      //     const user = await UsersModel.findOne({ email });
      //     if (user) {
      //       return NextResponse.json(
      //         { message: "User already exists" },
      //         { status: 500 }
      //       );
      //     }
      //     const hashedPassword = await bcrypt.hash(password, 10);
      //     const newUser = new UsersModel({
      //       email,
      //       username,
      //       password: hashedPassword,
      //       created,
      //       avatar,
      //     });
      //     await newUser.save();
      //     return NextResponse.json(
      //       { message: `${email} is now registered!` },
      //       { status: 201 }
      //     );
      //   } catch (err) {
      //     return NextResponse.json(
      //       { message: "An error has occurred" },
      //       { status: 500 }
      //     );
      //   }
      // }
      // const { email, password } = credentials as {
      //   email: string;
      //   password: string;
      // };
      // await connectToDb();
      // const user = await UsersModel.findOne({ email });
      // if (!user) throw new Error("User does not exist");
      // const passwordMatch = await bcrypt.compare(password, user.password);
      // if (!passwordMatch) throw new Error("Wrong Password");
      // return user;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  // pages: { signIn: "/login" },
};

export default authOptions;
