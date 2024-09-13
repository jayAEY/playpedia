import { RecommendForm } from "@/components/RecommendForm";
import { ArrowRight, Gamepad2 } from "lucide-react";
import React from "react";

const Recommendation = () => {
  return (
    // <div className="w-svw px-[10svw]">
    <div className="w-svw p-[10svw] flex flex-col">
      <h1 className="flex flex-col pb-4 md:flex-row text-[2.8rem] font-extrabold ">
        Need a recommendation?
        {/* <span className="flex mx-0 md:mx-4 gap-2"> */}
        {/* <Gamepad2 className="mt-2 h-12 w-12" /> */}
        {/* </span> */}
      </h1>
      <p className="pb-6 text-md max-w-xl">
        Receive personalized game recommendations based on your interests and
        gaming history. Discover hidden gems and popular titles you might have
        missed. Search for a game that's similar to another that you liked or
        find recommendations based on genre and platform!
      </p>
      <RecommendForm />
    </div>
  );
};

export default Recommendation;
