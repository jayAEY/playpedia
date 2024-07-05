"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserInfo = () => {
  const { data: session, status } = useSession();
  return (
    <main>
      {status === "authenticated" ? (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          {session.user.avatar && (
            <Avatar className="w-60 h-60 rounded-full">
              <AvatarImage src={session?.user?.avatar} />
              <AvatarFallback>IMG</AvatarFallback>
            </Avatar>
          )}
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <h1 className="text-3xl font-extrabold text-red-400 ">
            {session?.user?.email}
          </h1>
          <Button
            onClick={() => {
              signOut();
            }}
            type="submit"
            className="mt-6"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <h1 className="text-3xl font-extrabold text-red-400 ">
            Please login
          </h1>
        </div>
      )}
    </main>
  );
};

export default UserInfo;
