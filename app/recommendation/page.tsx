import { RecommendForm } from "@/components/RecommendForm";
import { ArrowRight, Gamepad2 } from "lucide-react";
import React from "react";

const Recommendation = () => {
  return (
    // <div className="w-svw px-[10svw]">
    <div className="w-svw p-[10svw] flex flex-col">
      <h2 className="flex flex-col md:flex-row pb-4 text-5xl font-extrabold ">
        Need a recommendation?
        {/* <span className="flex mx-0 md:mx-4 gap-2"> */}
        {/* <Gamepad2 className="mt-2 h-12 w-12" /> */}
        {/* </span> */}
      </h2>
      <p className=" md:py-0 text-md max-w-xl">
        Receive personalized game recommendations based on your interests and
        gaming history. Discover hidden gems and popular titles you might have
        missed.
      </p>
      <RecommendForm />
    </div>
    // <div className="grid w-svw px-[10svw] md:grid-cols-4">
    //   <Link
    //     href="/login"
    //     className="text-foreground transition-colors mb-5 hover:text-primary"
    //   >
    //     <h2 className="mb-1 text-xl font-black">
    //       Search <ArrowRight className="h-4 w-4" />
    //     </h2>
    //     <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
    //       Find new games and info to help plan your next journey.
    //     </p>
    //   </Link>
    //   <Link
    //     href="/login"
    //     className="text-foreground transition-colors mb-5 hover:text-primary"
    //   >
    //     <h2 className="mb-1 text-xl font-black">Search </h2>
    //     <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
    //       Find new games and info to help plan your next journey.
    //     </p>
    //   </Link>{" "}
    //   <Link
    //     href="/login"
    //     className="text-foreground transition-colors mb-5 hover:text-primary"
    //   >
    //     <h2 className="mb-1 text-xl font-black">Search </h2>
    //     <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
    //       Find new games and info to help plan your next journey.
    //     </p>
    //   </Link>{" "}
    //   <Link
    //     href="/login"
    //     className="text-foreground transition-colors mb-5 hover:text-primary"
    //   >
    //     <h2 className="mb-1 text-xl font-black">Search </h2>
    //     <p className=" max-w-none md:max-w-[30ch] text-sm text-muted-foreground">
    //       Find new games and info to help plan your next journey.
    //     </p>
    //   </Link>
    // </div>
  );
};

export default Recommendation;
