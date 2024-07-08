import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/components/Header/SearchForm/debounce.hook";
import { fetcher } from "@/services/fetcher.service";
import { getSearchVariation } from "@/constants/endpoints.constant";
import { useClickOutside } from "@/components/Header/SearchForm/click-outside.hook";

const getSearchVariationBySearchQuery = async (searchQuery: string) => {
  return fetcher<string[]>(getSearchVariation(searchQuery));
};

interface SearchFormHookProps {
  searchQuery?: string | null;
}

export const useSearchForm = ({ searchQuery }: SearchFormHookProps) => {
  const [searchVariations, setSearchVariations] = useState<string[]>([]);
  const [debouncedSearchValue, searchValue, setSearchValue] = useDebounce(
    searchQuery || "",
    500,
  );
  const [focused, setFocused] = useState(false);
  const searchRef = useClickOutside(() => setFocused(false));

  const redirectByVariation = useCallback(
    (variation: string) => () => {
      window.location.replace(`/?searchQuery=${variation}`);
    },
    [],
  );

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const getSearchVariation = async () => {
    const params = await getSearchVariationBySearchQuery(searchValue);
    setSearchVariations(params);
  };

  const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue !== searchValue) {
      return;
    }
    getSearchVariation();
  }, [debouncedSearchValue, searchValue]);

  return {
    searchVariations,
    onBlur,
    onFocus,
    redirectByVariation,
    focused,
    changeSearchValue,
    searchValue,
    setFocused,
    searchRef,
  };
};
