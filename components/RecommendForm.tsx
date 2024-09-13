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
  name: z.string().optional(),
  genre: z.string().optional(),
  platform: z.string().optional(),

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
  async function onSubmit(selection: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(selection);
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
            name="genre"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-4">
                <FormLabel className="text-left pt-1">Genre:</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    name="genre"
                    id="genre"
                    className="bg-transparent col-span-7 flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors text-muted-foreground focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option className="font-sans">Select a genre</option>
                    <option
                      className="font-sans"
                      value="Action"
                    >
                      Action
                    </option>
                    <option
                      className="font-sans"
                      value="Shooter"
                    >
                      Shooter
                    </option>
                    <option
                      className="font-sans"
                      value="Platformer"
                    >
                      Platformer
                    </option>
                    <option
                      className="font-sans"
                      value="Family"
                    >
                      Family
                    </option>
                    <option
                      className="font-sans"
                      value="Indie"
                    >
                      Indie
                    </option>
                    <option
                      className="font-sans"
                      value="Casual"
                    >
                      Casual
                    </option>
                    <option
                      className="font-sans"
                      value="Racing"
                    >
                      Racing
                    </option>
                    <option
                      className="font-sans"
                      value="Board Games"
                    >
                      Board Games
                    </option>
                    <option
                      className="font-sans"
                      value="Adventure"
                    >
                      Adventure
                    </option>
                    <option
                      className="font-sans"
                      value="Simulation"
                    >
                      Simulation
                    </option>
                    <option
                      className="font-sans"
                      value="Massively Multiplayer"
                    >
                      Massively Multiplayer
                    </option>
                    <option
                      className="font-sans"
                      value="Educational"
                    >
                      Educational
                    </option>
                    <option
                      className="font-sans"
                      value="Puzzle"
                    >
                      Puzzle
                    </option>
                    <option
                      className="font-sans"
                      value="Sports"
                    >
                      Sports
                    </option>
                    <option
                      className="font-sans"
                      value="Card"
                    >
                      Card
                    </option>
                    {/* all genres: */}
                    {/* Action Shooter Platformer Family Indie Casual Racing Board
                    Games Adventure Simulation Massively Multiplayer Educational
                    RPG Puzzle Sports Card
                     */}
                  </select>
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
            name="platform"
            render={({ field }) => (
              <FormItem className="grid grid-cols-8 items-center gap-4">
                <FormLabel className="text-left pt-1">Platform:</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    name="genre"
                    id="genre"
                    className="bg-transparent col-span-7 flex h-9 w-full rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors text-muted-foreground focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option className="font-sans">Select a platform</option>
                    <option
                      className="font-sans"
                      value="PlayStation"
                    >
                      PlayStation
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation 2"
                    >
                      PlayStation 2
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation 3"
                    >
                      PlayStation 3
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation 4"
                    >
                      PlayStation 4
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation 5"
                    >
                      PlayStation 5
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation Vita"
                    >
                      PlayStation Vita
                    </option>
                    <option
                      className="font-sans"
                      value="PlayStation Portable"
                    >
                      PlayStation Portable
                    </option>
                    <option
                      className="font-sans"
                      value="PSP"
                    >
                      PSP
                    </option>
                    <option
                      className="font-sans"
                      value="Xbox"
                    >
                      Xbox
                    </option>
                    <option
                      className="font-sans"
                      value="Xbox 360"
                    >
                      Xbox 360
                    </option>
                    <option
                      className="font-sans"
                      value="Xbox One"
                    >
                      Xbox One
                    </option>
                    <option
                      className="font-sans"
                      value="Xbox Series X/S"
                    >
                      Xbox Series X/S
                    </option>
                    <option
                      className="font-sans"
                      value="Xbox Series S/X"
                    >
                      Xbox Series S/X
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="NES"
                    >
                      NES
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Super Nintendo"
                    >
                      Super Nintendo
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Nintendo Switch"
                    >
                      Nintendo Switch
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Switch"
                    >
                      Switch
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Wii"
                    >
                      Wii
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Nintendo Gamecube"
                    >
                      Nintendo Gamecube
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Nintendo 64"
                    >
                      Nintendo 64
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Game Boy Color"
                    >
                      Game Boy Color
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Nintendo DS"
                    >
                      Nintendo DS
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Game Boy"
                    >
                      Game Boy
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Game Boy Advance"
                    >
                      Game Boy Advance
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="iOS"
                    >
                      iOS
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Apple Macintosh"
                    >
                      Apple Macintosh
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Android"
                    >
                      Android
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Mobile"
                    >
                      Mobile
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="PC"
                    >
                      PC
                    </option>{" "}
                    <option
                      className="font-sans"
                      value="Linux"
                    >
                      Linux
                    </option>
                  </select>
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
      </form>
    </Form>
  );
}
