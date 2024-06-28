"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { useSearchParams } from "next/navigation";
import { FC, Suspense } from "react";

interface SearchFormSuspenseProps {
  className?: string;
}

interface SearchFormProps {
  searchQuery?: string | null;
}

const SearchForm: FC<SearchFormSuspenseProps & SearchFormProps> = ({
  className,
  searchQuery,
}) => {
  return (
    <form
      action="/results"
      className={"max-w-xl flex-grow justify-center items-center " + className}
    >
      <input
        className="h-10 w-full bg-zinc-900 rounded-l-full focus-visible:border-sky-700 focus-visible:outline-0 pl-5 pr-2"
        name="search_query"
        defaultValue={searchQuery || ""}
      />
      <button
        type="submit"
        className="flex justify-center items-center px-3 bg-zinc-900 rounded-r-full w-16 h-10 hover:bg-zinc-800"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

const SearchFormWithParams = <T,>(props: T) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  return <SearchForm {...props} searchQuery={searchQuery} />;
};

const SearchFormSuspense: FC<SearchFormSuspenseProps> = ({ className }) => {
  return (
    <Suspense fallback={<SearchForm className={className} />}>
      <SearchFormWithParams className={className} />
    </Suspense>
  );
};

export default SearchFormSuspense;
