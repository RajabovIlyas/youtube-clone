"use client";

import SearchIcon from "@/components/icons/SearchIcon";
import { useSearchParams } from "next/navigation";
import { FC, Suspense } from "react";
import Link from "next/link";
import { useSearchForm } from "@/components/Header/SearchForm/search-form.hook";

interface SearchFormProps {
  className?: string;
}

interface SearchInputProps {
  searchQuery?: string | null;
}

const SearchInput: FC<SearchInputProps> = (props) => {
  const {
    searchVariations,
    onFocus,
    focused,
    searchRef,
    redirectByVariation,
    searchValue,
    changeSearchValue,
  } = useSearchForm(props);

  return (
    <div ref={searchRef} className="w-full">
      <input
        className="header-search_input"
        name="searchQuery"
        placeholder="Search"
        onChange={changeSearchValue}
        defaultValue={searchValue}
        onFocus={onFocus}
      />
      {searchVariations.length !== 0 && (
        <ul
          className="absolute left-0 top-10 mt-3 w-full bg-slate-50 rounded-xl border border-zinc-200 shadow-lg dark:bg-zinc-900 dark:border-0 focus-visible:outline-0"
          hidden={!focused}
        >
          {searchVariations.map((variation) => (
            <li
              key={variation}
              className="hover:bg-slate-100 dark:hover:bg-zinc-800 px-4 py-1 last:hover:rounded-b-xl first:hover:rounded-t-xl hover:cursor-pointer"
            >
              <Link
                href={`/?searchQuery=${variation}`}
                onClick={redirectByVariation(variation)}
              >
                {variation}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
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
