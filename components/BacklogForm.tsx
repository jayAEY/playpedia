"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "./ui/use-toast";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  id: z.number(),
  name: z.string(),
  backlogPlatform: z.string().optional(),
  goalTime: z.string().optional(),
  goalDate: z.string().optional(),
  backlogNotes: z.string().optional(),
  dateAdded: z.string().optional(),
});

export function BacklogForm({
  name,
  addOrEdit,
  id,
}: {
  name: string;
  addOrEdit: string;
  id?: number;
}) {
  const { data: session, status } = useSession();
  let currentDate = new Date().toLocaleDateString();
  const timeId = new Date().getTime();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id || timeId,
      name: name,
      backlogPlatform: "",
      goalTime: "",
      goalDate: "",
      backlogNotes: "",
      dateAdded: currentDate,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(newGame: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (addOrEdit == "add") {
      try {
        const res = await fetch("/api/backlog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session?.user.email, newGame }),
        });
        if (res.ok) {
          toast({
            title: `${newGame.name} added to backlog`,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          return;
        } else {
          let responseObject = await res.json();
          toast({
            title: `$Error ${responseObject}`,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await fetch("/api/backlog", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session?.user.email, newGame, id }),
        });
        if (res.ok) {
          toast({
            title: `${newGame.name} has been edited`,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          return;
        } else {
          let responseObject = await res.json();
          toast({
            title: `$Error ${responseObject}`,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sm:max-w-[425px]"
      >
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden">Name</FormLabel>
              <FormControl>
                <Input
                  className="hidden"
                  {...field}
                  disabled
                />
              </FormControl>
              <FormDescription className="text-sm font-extrabold text-foreground">
                Enter additional info (optional)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="backlogPlatform"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">Platform:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    placeholder="Enter platform"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goalTime"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">Goal Time:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    placeholder="HHH:MM:SS"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goalDate"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">Goal Date:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    placeholder="YYYY-MM-DD"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateAdded"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">Date Added:</FormLabel>

                <FormControl>
                  <Input
                    className="col-span-3"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backlogNotes"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">Notes:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    placeholder="Notes ..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="
                    bg-primary
                    text-foreground
                    max-h-6
                    mt-4
                    px-3
                    pr-4
                    text-xs
                    font-black
                    hover:bg-secondary-foreground
                    hover:text-secondary"
          >
            Add to Backlog
          </Button>
        </div>
      </form>
    </Form>
  );
}
