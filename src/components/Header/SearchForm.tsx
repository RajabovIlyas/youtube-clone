"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { useSearchParams } from "next/navigation";
import { FC, Suspense } from "react";

interface SearchFormProps {
  className?: string;
}

interface SearchInputProps {
  searchQuery?: string | null;
}

const SearchInput: FC<SearchInputProps> = ({ searchQuery }) => {
  return (
    <input
      className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
      name="search_query"
      defaultValue={searchQuery || ""}
    />
  );
};

const SearchInputWithParams = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  return <SearchInput searchQuery={searchQuery} />;
};

const SearchForm: FC<SearchFormProps> = ({ className }) => {
  return (
    <form
      action="/"
      className={"max-w-xl flex-grow justify-center items-center " + className}
    >
      <Suspense fallback={<SearchInput />}>
        <SearchInputWithParams />
      </Suspense>
      <button
        type="submit"
        className="flex justify-center items-center px-3 bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
