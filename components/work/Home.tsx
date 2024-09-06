// "use client";
// import { HomeCarousel } from "@/components/HomeCarousel";
// import { ArrowRight } from "lucide-react";
// import { useSession } from "next-auth/react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex min-h-[90%] flex-col items-center lg:items-start justify-between p-[3svh]">
//       <div>
//         <HomeCarousel />
//       </div>

//       <div className="grid w-svw px-[10svw] md:grid-cols-4">
//         <Link
//           href="/login"
//           className="text-foreground transition-colors mb-5 hover:text-primary"
//         >
//           <h2 className="mb-1 text-xl font-black">
//             Search <ArrowRight className="h-4 w-4" />
//           </h2>
//           <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
//             Find new games and info to help plan your next journey.
//           </p>
//         </Link>
//         <Link
//           href="/login"
//           className="text-foreground transition-colors mb-5 hover:text-primary"
//         >
//           <h2 className="mb-1 text-xl font-black">Search </h2>
//           <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
//             Find new games and info to help plan your next journey.
//           </p>
//         </Link>{" "}
//         <Link
//           href="/login"
//           className="text-foreground transition-colors mb-5 hover:text-primary"
//         >
//           <h2 className="mb-1 text-xl font-black">Search </h2>
//           <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
//             Find new games and info to help plan your next journey.
//           </p>
//         </Link>{" "}
//         <Link
//           href="/login"
//           className="text-foreground transition-colors mb-5 hover:text-primary"
//         >
//           <h2 className="mb-1 text-xl font-black">Search </h2>
//           <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
//             Find new games and info to help plan your next journey.
//           </p>
//         </Link>
//       </div>
//     </main>
//   );
// }
