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
  name: z.string(),

  //   id: z.number(),
  //   name: z.string(),
  //   completedPlatform: z.string().optional(),
  //   completedDate: z.string().optional(),
  //   completedTime: z.string().optional(),
  //   rating: z.string().optional(),
  //   completedNotes: z.string().optional(),
});
export function RecommendForm() {
  // export function RecommendForm({
  //   name,
  //   addOrEdit,
  //   backlogRemove,
  //   id,
  // }: {
  //   name: string;
  //   addOrEdit: string;
  //   backlogRemove?: (id: number) => Promise<void>;
  //   id?: number;
  // }) {
  const { data: session, status } = useSession();
  const currentDate = new Date().toLocaleDateString();
  const timeId = new Date().getTime();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //   id: id || timeId,
    },
    // defaultValues: {
    //   id: id || timeId,
    //   name: name,
    //   completedPlatform: "",
    //   completedTime: "",
    //   completedDate: currentDate,
    //   rating: "",
    //   completedNotes: "",
    // },
  });

  // 2. Define a submit handler.
  async function onSubmit(newGame: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // className="sm:max-w-[425px]"
        className="max-w-xl"
      >
        {/* <h1 className="text-2xl font-extrabold">Search by name</h1> */}
        <div className="grid gap-4">
          <FormField
            control={form.control}
            // name="completedPlatform"
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-4">
                <FormLabel className="text-left pt-1">Name:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-7"
                    placeholder="Enter game name"
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
            Search by name
          </Button>
        </div>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            // name="completedPlatform"
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-4">
                <FormLabel className="text-left pt-1">Genre:</FormLabel>
                <FormControl>
                  <select
                    name="genre"
                    id="genre"
                    className="bg-transparent col-span-7 flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors text-muted-foreground focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option
                      // className="text-input"
                      className="font-sans"
                    >
                      Select a genre
                    </option>
                    <option value="Action">Action</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Family">Family</option>
                    <option value="Indie">Indie</option>
                    <option value="Casual">Casual</option>
                    <option value="Racing">Racing</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Massively Multiplayer">
                      Massively Multiplayer
                    </option>
                    <option value="Educational">Educational</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Sports">Sports</option>
                    <option value="Card">Card</option>
                    {/* all genres: */}
                    {/* Action Shooter Platformer Family Indie Casual Racing Board
                    Games Adventure Simulation Massively Multiplayer Educational
                    RPG Puzzle Sports Card
                     */}
                  </select>
                  {/* <Input
                    className="col-span-7"
                    placeholder="Enter game name"
                    type="select"
                    {...field}
                  /> */}
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
            Search by genre
          </Button>
        </div>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            // name="completedPlatform"
            name="name"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-4">
                <FormLabel className="text-left pt-1">Platform:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-7"
                    placeholder="Select Platform"
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
            Search by platform
          </Button>
        </div>
        {/* <h1 className="text-2xl font-extrabold">{name}</h1>
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
        </div> */}
      </form>
    </Form>
  );
}
