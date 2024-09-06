"use client";
import { HomeCarousel } from "@/components/HomeCarousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex max-w-svw min-h-[90%] pt-20 flex-col items-center lg:items-start justify-between">
      <div>
        <HomeCarousel />
      </div>

      <div className="grid w-svw px-[10svw] gap-4 md:grid-cols-4">
        <Link
          href="/search"
          className="text-foreground transition-colors mb-5 hover:text-primary hover:opacity-85"
        >
          <span className="flex w-full items-center gap-1">
            <h2 className="mb-1 text-xl font-black">Search</h2>
            <ArrowRight className="h-4 w-4" />
          </span>
          <p className=" max-w-none md:max-w-52 text-sm text-muted-foreground">
            Find new games and info to help plan your next journey.
          </p>
        </Link>
        <Link
          href="/login"
          className="text-foreground transition-colors mb-5 hover:text-primary hover:opacity-85"
        >
          <span className="flex w-full items-center gap-1">
            <h2 className="mb-1 text-xl font-black">Login</h2>
            <ArrowRight className="h-4 w-4" />
          </span>
          <p className=" max-w-none md:max-w-52 text-sm text-muted-foreground">
            Already have an account? Login to keep tracking your progress.
          </p>
        </Link>{" "}
        <Link
          href="/register"
          className="text-foreground transition-colors mb-5 hover:text-primary hover:opacity-85"
        >
          <span className="flex w-full items-center gap-1">
            <h2 className="mb-1 text-xl font-black">Register</h2>
            <ArrowRight className="h-4 w-4" />
          </span>
          <p className=" max-w-none md:max-w-52 text-sm text-muted-foreground">
            Don&apos;t have an account? Sign up and save your info.
          </p>
        </Link>{" "}
        <Link
          href="/dashboard"
          className="text-foreground transition-colors mb-5 hover:text-primary hover:opacity-85"
        >
          <span className="flex w-full items-center gap-1">
            <h2 className="mb-1 text-xl font-black">Dashboard</h2>
            <ArrowRight className="h-4 w-4" />
          </span>
          <p className=" max-w-none md:max-w-52 text-sm text-muted-foreground">
            See stats and info for your goals and progress
          </p>
        </Link>
      </div>
    </main>
  );
}
