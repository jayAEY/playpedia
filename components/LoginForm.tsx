"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/eberhard-grossgasteiger-LmqySFs3TQQ-unsplash.jpg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <main className="w-full top-0 absolute min-h-screen flex justify-center lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full"
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="max-h-screen object-contain hidden bg-muted lg:block">
        <Image
          priority
          src={heroImage}
          alt="Hero Image"
          className="h-screen w-full object-cover"
        />
      </div>
    </main>
  );
}
