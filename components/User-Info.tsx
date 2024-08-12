"use client";

import { useEffect, useState } from "react";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BacklogGame, BacklogTableColumns } from "./BacklogTableColumns";
import { BacklogTable } from "./BacklogTable";
import { CompletedGame, CompletedTableColumns } from "./CompletedTableColumns";
import { CompletedTable } from "./CompletedTable";

const UserInfo = () => {
  const { data: session, status } = useSession();
  const [backlogData, setBacklogData] = useState<BacklogGame[]>([]);
  const [completedData, setCompletedData] = useState<CompletedGame[]>([]);

  let email = session?.user.email;

  async function getBacklogData() {
    const res = await fetch(`api/backlog?email=${email}`, {
      method: "GET",
    });
    if (res.ok) {
      let response = await res.json();
      setBacklogData(response.backlog);
    }
  }

  async function getCompletedData() {
    const res = await fetch(`api/completed?email=${email}`, {
      method: "GET",
    });
    if (res.ok) {
      let response = await res.json();
      setCompletedData(response.completed);
    }
  }

  useEffect(() => {
    getBacklogData();
    getCompletedData();
    return;
  }, [session]);

  return (
    <main>
      {status === "authenticated" ? (
        <>
          <div className="flex flex-col items-center justify-center p-24">
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
              className="mt-6 text-xs font-black"
            >
              Logout
            </Button>
          </div>
          <div className="flex flex-col p-4 justify-center items-center">
            <BacklogTable
              columns={BacklogTableColumns}
              data={backlogData}
            />

            <CompletedTable
              columns={CompletedTableColumns}
              data={completedData}
            />
          </div>
        </>
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
