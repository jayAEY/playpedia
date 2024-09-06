"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Gamepad2 } from "lucide-react";

export function HomeCarousel() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      layout={true}
    />
  ));

  return (
    <div className="w-svw px-[10svw]">
      <h2 className="flex flex-col md:flex-row pb-4 text-5xl font-extrabold ">
        Welcome to
        <span className="flex mx-0 md:mx-4 gap-2">
          <Gamepad2 className="mt-2 h-12 w-12" />
          playpedia
        </span>
      </h2>
      <p className=" md:py-0 text-md max-w-xl">
        Your ultimate companion for managing and exploring your video game
        journey! We offer a seamless experience for discovering new games,
        organizing your gaming backlog, and tracking your gaming progress.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-none mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Comprehensive Database",
    title: "Find Info on thousands of games",
    src: "/search-screenshot.png",
    content: <DummyContent />,
  },
  {
    category: "Personalized Backlog",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Completed Games List",
    title: "Keep track of played games",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Progress Tracking",
    title: "Track various goals and achievements to keep yourself motivated",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
