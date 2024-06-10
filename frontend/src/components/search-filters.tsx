// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  PiSortAscendingDuotone,
  PiSortDescendingDuotone,
} from "react-icons/pi";

interface Props {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilters = (props: Props) => {
  return (
    props.search.length > 0 && (
      <section
        id="search-filters"
        className="flex items-center flex-wrap px-10 py-4 shadow-lg border-b"
      >
        <ToggleGroup
          type="single"
          variant={"outline"}
          defaultValue="relevance"
          value={props.searchFilter}
          className="flex flex-wrap justify-normal gap-1"
        >
          <ToggleGroupItem
            onClick={() => props.setSearchFilter("relevance")}
            value="relevance"
            aria-label="relevance"
            size="sm"
          >
            Relevance
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => props.setSearchFilter("released")}
            value="released"
            aria-label="released"
            size="sm"
          >
            Released
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => props.setSearchFilter("rating")}
            value="rating"
            aria-label="rating"
            size="sm"
          >
            User Rating
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => props.setSearchFilter("metacritic")}
            value="metacritic"
            aria-label="metacritic"
            size="sm"
          >
            Metacritic
          </ToggleGroupItem>
          {props.sortOrder == "ascending" ? (
            <PiSortAscendingDuotone
              className="h-5 w-5 cursor-pointer fill-primary hover:fill-secondary-foreground"
              onClick={() => props.setSortOrder("descending")}
            />
          ) : (
            <PiSortDescendingDuotone
              className="h-5 w-5 cursor-pointer fill-primary hover:fill-secondary-foreground"
              onClick={() => props.setSortOrder("ascending")}
            />
          )}
        </ToggleGroup>
      </section>
    )
  );
};

export default SearchFilters;
