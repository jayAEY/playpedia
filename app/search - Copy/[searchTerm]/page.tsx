// "use client";
// import SearchResults from "@/components/SearchResults";
// import { useParams } from "next/navigation";
// const Search = () => {
//   const params = useParams();
//   const query = params.searchTerm.toString().slice(8);
//   console.log(query);

//   return <SearchResults search={query} />;
// };

// export default Search;

"use client";
import SearchResults from "@/components/SearchResults";
import { useSearchParams } from "next/navigation";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("query");
  // const router = useRouter();
  // const { query } = router;
  // console.log(query);
  return <SearchResults search={"asd"} />;
};

export default Search;
