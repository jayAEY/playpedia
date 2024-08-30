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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UserInfo = () => {
  const { data: session, status } = useSession();
  const [backlogData, setBacklogData] = useState<BacklogGame[]>([]);
  const [completedData, setCompletedData] = useState<CompletedGame[]>([]);

  let email = session?.user.email || "";
  let created =
    session?.user &&
    new Date(session.user.createdAt.toString()).toLocaleDateString();
  console.log(created);
  // console.log(session?.user);
  // new Date(session?.user.created as string).toLocaleDateString() || "--";

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
          <div className="grid grid-cols-4 items-center gap-4 grid-rows-1 text-center p-10">
            <div className="flex col-span-4 justify-center">
              <Card className="w-80 flex-col border-none rounded-none shadow-2xl">
                <CardHeader className="flex items-center">
                  <Avatar className="w-48 h-48 rounded-full">
                    <AvatarImage src={session?.user?.avatar} />
                    <AvatarFallback>IMG</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <div>
                    <CardTitle className="text-3xl text-primary font-black">
                      {session?.user.username}
                    </CardTitle>
                    <CardDescription> {session?.user?.email}</CardDescription>
                  </div>
                  <div>
                    <h2 className="text-md font-black">Member since:</h2>
                    <p className="text-sm text-muted-foreground">{created}</p>
                  </div>
                  <div>
                    <h2 className="text-md font-black">Backlogged:</h2>
                    <p className="text-sm text-muted-foreground">
                      {backlogData.length}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-md font-black">Completed:</h2>
                    <p className="text-sm text-muted-foreground">
                      {completedData.length}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => {
                      signOut();
                    }}
                    type="submit"
                    className="text-xs font-black m-auto"
                  >
                    Logout
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* <div className="flex flex-col p-4 justify-center items-center"> */}
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
          <h1 className="text-3xl font-black text-red-400 ">Please login</h1>
        </div>
      )}
    </main>
  );
};
export default UserInfo;
