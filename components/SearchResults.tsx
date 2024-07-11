"use client";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("query");
  return <h1>{searchQuery}</h1>;
};

export default SearchResults;
