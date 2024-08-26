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

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const created = new Date();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, avatar, username, created }),
      });
      if (res.ok) {
        setAlertOpen(true);
        setAlertMessage(`${email} is now registered!`);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        let responseObject = await res.json();
        setAlertOpen(true);
        setAlertMessage(`Error: ${responseObject.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // function googleSignIn() {
  //   const han
  // }

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
        id="register"
        className="flex flex-col items-center justify-center py-12"
        // onSubmit={handleSubmit}
      >
        <div className="mx-auto grid w-[350px] gap-3">
          <form
            id="register-form"
            className="mx-auto grid w-[350px] gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Register</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to create your account
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="Avatar">Avatar (optional):</Label>
                </div>
                <Input
                  id="avatar"
                  type="text"
                  placeholder="Enter Url"
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="
              w-full
              text-xs
              font-black"
              >
                Create Account
              </Button>
            </div>
          </form>
          <span className="pt-4 text-sm text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline"
            >
              Login
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
