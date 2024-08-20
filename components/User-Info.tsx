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
          <div className="flex flex-col text-center items-center justify-center p-24">
            {session.user.avatar && (
              <Card className="flex flex-col items-center border-none rounded-none ">
                <CardHeader>
                  <CardTitle className="text-3xl font-black">
                    Username
                  </CardTitle>
                  <CardDescription> {session?.user?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Avatar className="w-32 h-32 rounded-full">
                    <AvatarImage src={session?.user?.avatar} />
                    <AvatarFallback>IMG</AvatarFallback>
                  </Avatar>
                  <h2 className="text-md font-extrabold">Member since:</h2>
                  <p className="text-sm text-muted-foreground">member since</p>
                  <h2 className="text-md font-extrabold">Total Backlogged:</h2>
                  <p className="text-sm text-muted-foreground">-- </p>
                  <h2 className="text-md font-extrabold">Total Completed:</h2>
                  <p className="text-sm text-muted-foreground">--</p>
                </CardContent>
              </Card>
            )}
            {/* <h1 className="text-3xl font-bold">Welcome!</h1> */}
            {/* <h1 className="text-3xl font-extrabold text-red-400 "> */}
            {/* {session?.user?.email} */}
            {/* </h1> */}
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
