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
      className="header-search_input"
      name="searchQuery"
      defaultValue={searchQuery || ""}
    />
  );
};

const SearchInputWithParams = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");
  return <SearchInput searchQuery={searchQuery} />;
};

const SearchForm: FC<SearchFormProps> = ({ className }) => {
  return (
    <form action="/" className={"header-search_form " + className}>
      <Suspense fallback={<SearchInput />}>
        <SearchInputWithParams />
      </Suspense>
      <button type="submit" className="header-search_btn">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
