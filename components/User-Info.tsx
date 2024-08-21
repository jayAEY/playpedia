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

  const [memberSince, setMemberSince] = useState<string>("");
  const [totalBacklog, setTotalBacklog] = useState<number>(0);
  const [totalCompleted, setTotalCompleted] = useState<number>(0);

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
          {/* <div className="flex flex-col text-center items-center justify-center p-24"> */}
          <div className="grid grid-cols-4 items-center gap-4 grid-rows-1 text-center p-10">
            <div className="flex col-span-4 justify-center">
              {session.user.avatar && (
                <Card className="w-80 flex-col border-none rounded-none">
                  <CardHeader>
                    <CardTitle className="text-3xl font-black">
                      Username
                    </CardTitle>
                    <CardDescription> {session?.user?.email}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-6">
                    <Avatar className="w-32 h-32 rounded-full">
                      <AvatarImage src={session?.user?.avatar} />
                      <AvatarFallback>IMG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-md font-extrabold">Member since:</h2>
                      <p className="text-sm text-muted-foreground">
                        member since
                      </p>
                    </div>
                    <div>
                      <h2 className="text-md font-extrabold">
                        Total Backlogged:
                      </h2>
                      <p className="text-sm text-muted-foreground">--</p>
                    </div>
                    <div>
                      <h2 className="text-md font-extrabold">
                        Total Completed:
                      </h2>
                      <p className="text-sm text-muted-foreground">--</p>
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
              )}
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
          <h1 className="text-3xl font-extrabold text-red-400 ">
            Please login
          </h1>
        </div>
      )}
    </main>
  );
};
export default UserInfo;
