// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   name: z.string(),
//   backlogPlatform: z.string(),
//   goalTime: z.string(),
//   goalDate: z.string(),
//   backlogNotes: z.string(),
//   dateAdded: z.string(),
// });

// type BacklogFormProps = { name: string };

// export function BacklogForm({ name }: BacklogFormProps) {
//   // console.log(name);
//   // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name,
//       backlogPlatform: "",
//       goalTime: "",
//       goalDate: "",
//       backlogNotes: "",
//       dateAdded: "",
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-8"
//       >
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               {/* <FormLabel>Username</FormLabel> */}
//               <FormControl>
//                 <Input
//                   className="border-none text-2xl font-extrabold text-primary-foreground"
//                   defaultValue={name}
//                   {...field}
//                 />
//               </FormControl>
//               {/* <FormDescription>
//             This is your public display name.
//           </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="backlogPlatform"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Platform</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder={"platform"}
//                   {...field}
//                 />
//               </FormControl>
//               {/* <FormDescription>
//                 This is your public display name.
//               </FormDescription> */}
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

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

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

const formSchema = z.object({
  // username: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
  name: z.string(),
  backlogPlatform: z.string().optional(),
  goalTime: z.string().optional(),
  goalDate: z.string().optional(),
  backlogNotes: z.string().optional(),
  dateAdded: z.string().optional(),
});

export function BacklogForm({ name }: { name: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
                  // value={name}
                  // defaultValue={name}
                  // value={name}
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
                <FormLabel className="text-right">Platform</FormLabel>
                <FormControl>
                  <Input
                    // defaultValue={na
                    className="col-span-3"
                    placeholder="Enter platform"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription> */}
                {/* This is your public display name. */}
                {/* </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goalTime"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Goal Time:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    // defaultValue={na
                    placeholder="HHH:MM:SS"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription> */}
                {/* This is your public display name. */}
                {/* </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goalDate"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Goal Date:</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    // defaultValue={na
                    placeholder="YYYY-MM-DD"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription> */}
                {/* This is your public display name. */}
                {/* </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateAdded"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Date Added</FormLabel>

                <FormControl>
                  <Input
                    className="col-span-3"
                    defaultValue={new Date().toLocaleDateString()}
                    // placeholder="Notes ..."
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription> */}
                {/* This is your public display name. */}
                {/* </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backlogNotes"
            render={({ field }) => (
              <FormItem className="grid grid-cols-4 items-center gap-4">
                <FormLabel className="text-right">Notes</FormLabel>
                <FormControl>
                  <Input
                    className="col-span-3"
                    // defaultValue={na
                    placeholder="Notes ..."
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription> */}
                {/* This is your public display name. */}
                {/* </FormDescription> */}
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
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
