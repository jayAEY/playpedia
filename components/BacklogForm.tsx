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
  backlogPlatform: z.string(),
  goalTime: z.string(),
  goalDate: z.string(),
  backlogNotes: z.string(),
  dateAdded: z.string(),
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
        className="space-y-8"
      >
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  defaultValue={name}
                  // placeholder={name}
                  {...field}
                  disabled
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="backlogPlatform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Platform</FormLabel>
              <FormControl>
                <Input
                  // defaultValue={na
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
            <FormItem>
              <FormLabel>Goal Time:</FormLabel>
              <FormControl>
                <Input
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
            <FormItem>
              <FormLabel>Goal Date:</FormLabel>
              <FormControl>
                <Input
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
            <FormItem className="hidden">
              <FormLabel>Date Added</FormLabel>

              <FormControl>
                <Input
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
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Input
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
