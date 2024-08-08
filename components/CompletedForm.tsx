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
  completedPlatform: z.string().optional(),
  completedDate: z.string().optional(),
  completedTime: z.string().optional(),
  rating: z.string().optional(),
  completedNotes: z.string().optional(),
});

export function CompletedForm({ name }: { name: string }) {
  const { data: session, status } = useSession();
  const currentDate = new Date().toLocaleDateString();
  const timeId = new Date().getTime();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: timeId,
      name: name,
      completedPlatform: "",
      completedTime: "",
      completedDate: currentDate,
      rating: "",
      completedNotes: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(newGame: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const res = await fetch("/api/completed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session?.user.email, newGame }),
      });
      if (res.ok) {
        toast({
          title: `${newGame.name} added to completed`,
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
            name="completedPlatform"
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
            name="completedTime"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">
                  Completed Time:
                </FormLabel>
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
            name="completedDate"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1">
                  Completed Date:
                </FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    // defaultValue={na
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
            name="rating"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right pt-1"> Rating:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    {...field}
                    placeholder="?/?"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="completedNotes"
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
            Add to Completed
          </Button>
        </div>
      </form>
    </Form>
  );
}
