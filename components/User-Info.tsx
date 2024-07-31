"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Backlog from "./work/Backlog";
import Completed from "./work/Completed";

type UserInfoProps = {};

const UserInfo = ({ columns, DataTable }) => {
  const { data: session, status } = useSession();

  //   async function getData(): Promise<Payment[]> {
  function getData() {
    // Fetch data from your API here.
    return [
      {
        name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
        backlogPlatform: "p",
        goalTime: "",
        goalDate: "",
        backlogNotes: "",
        dateAdded: "2024-07-31",
      },
      {
        name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
        backlogPlatform: "lkasjhdflkjashf",
        goalTime: "",
        goalDate: "",
        backlogNotes: "",
        dateAdded: "2024-07-31",
      },
      {
        name: "Atelier Meruru: The Apprentice of Arland DX",
        backlogPlatform: "ps3",
        goalTime: "1",
        goalDate: "1",
        backlogNotes: "kljvhskjhf",
        dateAdded: "2024-07-31",
      },
      {
        name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
        backlogPlatform: "pp",
        goalTime: "p",
        goalDate: "p",
        backlogNotes: "",
        dateAdded: "p",
      },
      {
        name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
        backlogPlatform: "pc",
        goalTime: "tomorrow",
        goalDate: "today",
        backlogNotes: "wow",
        dateAdded: "2024-07-31",
      },
    ];
    // return [
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "a@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "b@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "c@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "d@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "e@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "f@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "g@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "h@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728esd2f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "asd8ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   {
    //     id: "728ed52f",
    //     amount: 100,
    //     status: "pending",
    //     email: "m@example.com",
    //   },
    //   // ...
    // ];
  }

  const data = getData();

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
              className="mt-6 text-xs  font-black"
            >
              Logout
            </Button>
          </div>
          <div className="p-4">
            <DataTable
              columns={columns}
              data={data}
            />
            <DataTable
              columns={columns}
              data={data}
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
