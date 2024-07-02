"use client";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useState } from "react";

export function Navbar() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    // <div className="flex min-h-screen w-full flex-col">
    // <header className="sticky top-0 flex h-16 z-50 items-center gap-4 border-b-2 shadow-xl bg-background px-4 md:px-6">

    <header className="sticky top-0  grid grid-cols-3  h-16 z-50 items-center gap-4 border-b-2 shadow-xl bg-background px-4 md:px-6">
      <nav
        id="desktop-nav"
        className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <ModeToggle />
        {loggedIn ? (
          <Link
            href="/dashboard"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Register
            </Link>
          </>
        )}
      </nav>
      <div className="">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-8 w-8" />
          <h1 className="font-extrabold">playpedia</h1>
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>

      {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"> */}
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
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
              className="grid gap-6 text-lg font-medium"
            >
              {loggedIn ? (
                <>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search games..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        {loggedIn && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
              >
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="dashboard">Dashboard</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
    // </div>
  );
}
