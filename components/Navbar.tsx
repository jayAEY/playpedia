"use client";
import Link from "next/link";
import { CircleUser, Gamepad2, Menu, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export function Navbar() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  let searchQuery = "";
  searchParams && (searchQuery = searchParams.get("query") as string);
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/?query=${searchValue}`);
  };

  return (
    <header className="sticky top-0 grid grid-cols-1 h-32 z-40 items-center gap-4 border-b-2 border-b-primary shadow-xl bg-background px-4 py-4 md:flex md:h-16 md:gap-6 md:justify-between">
      <nav
        id="desktop-nav"
        className="hidden gap-6 text-lg font-medium md:flex md:items-center md:gap-5 md:text-sm lg:gap-6 sm:w-[300px] md:w-[200px] lg:w-[300px]z"
      >
        <ModeToggle />
        {status === "authenticated" ? (
          <Link
            href="/dashboard"
            className="text-foreground transition-colors text-xs font-black hover:text-primary"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-foreground transition-colors text-xs font-black hover:text-primary"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-foreground transition-colors text-xs font-black hover:text-primary"
            >
              Register
            </Link>
          </>
        )}
      </nav>
      <div className="mx-auto">
        <Link
          href="/"
          className="flex gap-2 text-lg font-semibold md:text-base"
        >
          <Gamepad2 className="mt-0.5 h-6 w-6" />
          <h1 className="font-extrabold">playpedia</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav
              id="mobile-nav"
              className="grid gap-6 m-3 text-lg font-medium"
            >
              {status === "authenticated" ? (
                <>
                  <div className="flex justify-between">
                    <ModeToggle />
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    ></Link>
                  </div>
                  <Link
                    href="/dashboard"
                    className="text-xs font-black hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <ModeToggle />
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    ></Link>
                  </div>
                  <Link
                    href="/login"
                    className="text-xs font-black hover:text-foreground"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-xs font-black hover:text-foreground"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <form
          className="ml-auto flex-1 sm:flex-initial"
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search games..."
              className="pl-8 md:w-[200px] hover:bg-muted"
              onChange={(e) => setSearchValue(e.target.value)}
              defaultValue={searchQuery}
            />
          </div>
        </form>
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
              >
                <Avatar>
                  <AvatarImage src={session?.user?.avatar} />
                  <AvatarFallback>
                    <CircleUser className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="dashboard">Dashboard</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
