"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(status);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex-col text-center place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="text-6xl font-bold">Welcome!</h1>
        <h2>We hope you have a good time</h2>
        {!session && (
          <div className="w-full flex justify-center gap-2 mt-4">
            <a
              href="/login"
              className="z-10"
            >
              <Button
                className="
              w-full
              text-xs
              font-black"
              >
                Login
              </Button>
            </a>
            <a
              href="/register"
              className="z-10"
            >
              <Button
                className="
              w-full
              text-xs
              font-black"
              >
                Register
              </Button>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
