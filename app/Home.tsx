"use client";
import { HomeCarousel } from "@/components/HomeCarousel";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  // console.log(status);
  return (
    <main className="flex min-h-[90%] flex-col items-center lg:items-start justify-between p-[3svh]">
      <div>
        <HomeCarousel />
      </div>
      {/* <Link
                    href="/login"
                    className="text-foreground transition-colors mb-5 text-xs font-black hover:text-primary"
                  > */}

      <div className="grid w-svw px-[10svw] md:grid-cols-4">
        <Link
          href="/login"
          className="text-foreground transition-colors mb-5 hover:text-primary"
        >
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <h2 className="mb-1 text-xl font-black">
            Search <ArrowRight className="h-4 w-4" />
          </h2>
          <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
            Find new games and info to help plan your next journey.
          </p>
        </Link>
        <Link
          href="/login"
          className="text-foreground transition-colors mb-5 hover:text-primary"
        >
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <h2 className="mb-1 text-xl font-black">Search </h2>
          <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
            Find new games and info to help plan your next journey.
          </p>
        </Link>{" "}
        <Link
          href="/login"
          className="text-foreground transition-colors mb-5 hover:text-primary"
        >
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <h2 className="mb-1 text-xl font-black">Search </h2>
          <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
            Find new games and info to help plan your next journey.
          </p>
        </Link>{" "}
        <Link
          href="/login"
          className="text-foreground transition-colors mb-5 hover:text-primary"
        >
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          > */}
          <h2 className="mb-1 text-xl font-black">Search </h2>
          <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
            Find new games and info to help plan your next journey.
          </p>
        </Link>
        {/*
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">Register </h2>
              <p className=" max-w-none md:max-w-[30ch] text-sm opacity-50">
                Create an account to start your plans and organize your gaming
                journey
              </p>
            </a>
    
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">Login </h2>
              <p className=" max-w-none md:max-w-[30ch] text-sm opacity-50">
                Already have an account? Login to keep tracking your progress.
              </p>
            </a> */}
        {/*
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-2xl font-semibold">Deploy </h2>
              <p className=" max-w-none md:max-w-[30ch] text-balance text-sm opacity-50">
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a> */}
      </div>
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-center p-24">
    //   <div className="relative flex-col text-center place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <h1 className="text-6xl font-bold mb-4">Welcome to playpedia!</h1>
    //     <p>
    //       Your ultimate companion for managing and exploring your video game
    //       journey! Whether you're a casual gamer or a hardcore enthusiast,
    //       GameTracker offers a seamless experience for discovering new games,
    //       organizing your gaming backlog, and tracking your progress.
    //     </p>
    //     <HomeCarousel />
    //     {!session && (
    //       <div className="w-full flex justify-center gap-2 mt-4">
    //         <a
    //           href="/login"
    //           className="z-10"
    //         >
    //           <Button
    //             className="
    //           w-full
    //           text-xs
    //           font-black"
    //           >
    //             Login
    //           </Button>
    //         </a>
    //         <a
    //           href="/register"
    //           className="z-10"
    //         >
    //           <Button
    //             className="
    //           w-full
    //           text-xs
    //           font-black"
    //           >
    //             Register
    //           </Button>
    //         </a>
    //       </div>
    //     )}
    //   </div>
    // </main>
  );
}
