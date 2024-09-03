"use client";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/search-screenshot.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      setAlertMessage("Login Successful");
      setAlertOpen(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } else {
      setAlertMessage(res?.error as string);
      setAlertOpen(true);
      console.log(res);
    }
  }

  return (
    <main className="w-full top-14 absolute min-h-screen flex justify-center lg:grid lg:grid-cols-2 md:top-0">
      <AlertDialog open={alertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogCancel
              onClick={() => setAlertOpen(false)}
              className="w-0.5"
            >
              x
            </AlertDialogCancel>
            <AlertDialogTitle className="text-center min-h-14 pb-8">
              {alertMessage}
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              {alertMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      <div
        id="login"
        className="flex flex-col items-center justify-center py-12"
      >
        <div className="mx-auto grid w-[350px] gap-3">
          <form
            id="login-form"
            className="mx-auto grid w-[350px] gap-6"
            onSubmit={handleSubmit}
          >
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
                  placeholder="email@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="
              w-full
              text-xs
              font-black"
              >
                Login
              </Button>
            </div>
          </form>
          <Button
            onClick={() => signIn("google")}
            variant="outline"
            className="
              w-full
              text-xs
              font-black"
          >
            Login with Google
          </Button>
          <span className="pt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>

      <div className="max-h-screen object-contain hidden bg-gray-400 dark:bg-neutral-900 lg:block">
        <Image
          priority
          src={heroImage}
          alt="Hero Image"
          className="min-h-screen w-full object-cover opacity-90"
        />
        <div className="bg-gradient-to-b from-black/100" />
      </div>
    </main>
  );
}
