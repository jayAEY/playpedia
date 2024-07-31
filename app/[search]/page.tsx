"use client";
import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";

const Search = () => {
  return (
    <Suspense>
      <SearchResults />;
    </Suspense>
  );
};

export default Search;
