// things to add
// user auth?
// pages or modal to see more on each game?
// add priorities to backlog?
// add notes to each?
// search in backlog/completed??
// add hltb
// add dates added/finished?
// add goal dates? / planning features?
// sorting based on goal dates
// add tags for each?
// filter based on tags?

//ADD ENV TO GIT IGNORE

import { ThemeProvider } from "./components/theme-provider";
import AlertComponent from "./components/alert-component";
import NavBar from "./components/navbar";
import GameCard from "./components/game-card";
import Backlog from "./components/backlog";
import Completed from "./components/completed";
import SearchFilters from "./components/search-filters";

import { useEffect, useState } from "react";

import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";

function App() {
  type game = {
    name: string;
    parent_platforms: string;
    released: string;
    metacritic: string;
    background_image: string;
    playtime: string;
    rating: string;
  };
  const [data, setData] = useState<game[]>([]);

  // const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState<string>("");
  const [searchFilter, setSearchFilter] = useState<string>("relevance");
  const [sortOrder, setSortOrder] = useState<string>("ascending");

  // const [searchFilter, setSearchFilter] = useState<
  //   "relevance" | "released" | "rating" | "metacritic"
  // >("relevance");
  // const [sortOrder, setSortOrder] = useState<"ascending" | "descending">(
  //   "ascending"
  // );

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [backlog, setBacklog] = useState<string[]>([]);
  const [backlogOpen, setBacklogOpen] = useState<boolean>(false);

  const [completed, setCompleted] = useState<string[]>([]);
  const [completedOpen, setCompletedOpen] = useState<boolean>(false);

  const [toastMsg, setToastMsg] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      // const initialData = await fetch(
      //   `https://api.rawg.io/api/games?key=${
      //     import.meta.env.VITE_RAWG
      //   }&ordering=-metacritic&page_size=21`
      const initialData = await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_RAWG
        }&ordering=-metacritic`
      );
      const searchData = await fetch(
        `https://rawg.io/api/games?key=${
          import.meta.env.VITE_RAWG
        }&search=${search}&search_precise&ordering=${
          sortOrder == "descending" ? "-" : ""
        }${searchFilter}`
      );
      let json: { results: [] };
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      if (search == "") {
        json = await initialData.json();
        setData(json.results);
      } else if (search != "") {
        json = await searchData.json();
        setData(json.results);
      }
      // setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, [search, searchFilter, sortOrder]);

  useEffect(() => {
    const currentBacklog = localStorage.getItem("backlog");
    const currentCompleted = localStorage.getItem("completed");
    currentBacklog && setBacklog(currentBacklog?.split(","));
    currentCompleted && setCompleted(currentCompleted?.split(","));
  }, [backlog]);

  useEffect(() => {
    toastMsg.length > 0 && toast({ title: toastMsg });
  }, [toastMsg]);

  return (
    <div className="font-inter">
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <Toaster />
        <NavBar
          setSearch={setSearch}
          backlogOpen={backlogOpen}
          setBacklogOpen={setBacklogOpen}
          setCompletedOpen={setCompletedOpen}
        />
        <main>
          <AlertComponent
            setAlertOpen={setAlertOpen}
            alertOpen={alertOpen}
            alertMessage={alertMessage}
          />
          <SearchFilters
            search={search}
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          {(backlogOpen === true || completedOpen === true) && (
            <section className="grid p-10 pb-0 grid-cols-4 gap-4 justify-around">
              {backlogOpen === true && (
                <Backlog
                  backlog={backlog}
                  setBacklog={setBacklog}
                  setBacklogOpen={setBacklogOpen}
                  setCompleted={setCompleted}
                  setAlertOpen={setAlertOpen}
                  setAlertMessage={setAlertMessage}
                  setToastMsg={setToastMsg}
                  setCompletedOpen={setCompletedOpen}
                />
              )}
              {completedOpen === true && (
                <Completed
                  backlog={backlog}
                  completed={completed}
                  setCompleted={setCompleted}
                  setCompletedOpen={setCompletedOpen}
                  setToastMsg={setToastMsg}
                />
              )}
            </section>
          )}
          <section className="grid p-10 min-h-screen min-w-screen grid-cols-4 gap-4">
            {data &&
              data.map((game: game, index: number) => {
                if (game.background_image && index < 17) {
                  return (
                    <GameCard
                      name={game.name}
                      platforms={game.parent_platforms}
                      released={game.released}
                      metacritic={game.metacritic}
                      background_image={game.background_image}
                      playtime={game.playtime}
                      rating={game.rating}
                      key={index}
                      backlog={backlog}
                      setBacklog={setBacklog}
                      setBacklogOpen={setBacklogOpen}
                      setAlertOpen={setAlertOpen}
                      setAlertMessage={setAlertMessage}
                      setToastMsg={setToastMsg}
                    />
                  );
                }
              })}
          </section>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
